import { type RefObject, useCallback, useEffect, useState } from 'react';

interface CarouselControls {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  handleScroll: (direction: number) => void;
}

const SCROLL_THRESHOLD = 2;
const SCROLL_UPDATE_DELAY_MS = 350;

export const useCarouselControls = <T extends HTMLElement>(
  viewportRef: RefObject<T | null>
): CarouselControls => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const viewport = viewportRef.current;

    if (viewport == null) {
      return;
    }

    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    const viewportStyle = window.getComputedStyle(viewport);
    const startOffset =
      Number.parseFloat(viewportStyle.paddingLeft) || SCROLL_THRESHOLD;
    const endOffset =
      Number.parseFloat(viewportStyle.paddingRight) || SCROLL_THRESHOLD;

    if (maxScrollLeft <= startOffset + endOffset) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    setCanScrollLeft(viewport.scrollLeft > startOffset + SCROLL_THRESHOLD);
    setCanScrollRight(
      viewport.scrollLeft < maxScrollLeft - endOffset - SCROLL_THRESHOLD
    );
  }, [viewportRef]);

  const handleScroll = useCallback(
    (direction: number): void => {
      const viewport = viewportRef.current;

      if (viewport == null) {
        return;
      }

      viewport.scrollBy({
        behavior: 'smooth',
        left: direction * viewport.clientWidth
      });

      window.setTimeout(updateScrollState, SCROLL_UPDATE_DELAY_MS);
    },
    [updateScrollState, viewportRef]
  );

  useEffect(() => {
    const viewport = viewportRef.current;

    if (viewport == null) {
      return undefined;
    }

    const track = viewport.firstElementChild;
    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(updateScrollState);

    updateScrollState();
    viewport.addEventListener('scroll', updateScrollState, {
      passive: true
    });
    window.addEventListener('resize', updateScrollState);
    resizeObserver?.observe(viewport);

    if (track != null) {
      resizeObserver?.observe(track);
    }

    const timeoutId = window.setTimeout(updateScrollState, 0);

    return () => {
      window.clearTimeout(timeoutId);
      viewport.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
      resizeObserver?.disconnect();
    };
  }, [updateScrollState, viewportRef]);

  return {
    canScrollLeft,
    canScrollRight,
    handleScroll
  };
};
