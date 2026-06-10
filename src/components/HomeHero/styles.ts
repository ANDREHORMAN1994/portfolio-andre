import styled from 'styled-components';

interface CodeItemProps {
  $size: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  > div.pictures-container {
    /* background-color: red; */
    position: relative;
    width: 25rem;
    height: 25rem;

    > img.picture {
      position: absolute;
      top: 0;
      left: 0;

      opacity: 0;
      /* width: 25rem !important;
      flex: 1;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.primary};
      box-shadow: 5px 10px 10px black; */
      /* transform: translateY(100%); */

      &:first-child {
        z-index: 1;
        animation: slide-up 1s ease-in-out forwards;
      }

      &:last-child {
        animation: opacity 1s ease-in forwards, rotation 10s linear infinite;
        animation-delay: 1s;
      }
    }
  }

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes slide-up {
    0% {
      transform: translateY(40%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  .appear {
    opacity: 1;
    transition: 1s;
  }

  > div {
    /* flex: 3; */
    width: 40rem;
    margin-left: 30px;
  }

  @media (max-width: 1450px) {
    > div {
      /* flex: 2; */
      margin-left: 10px;
    }
  }

  @media (max-width: 1000px) {
    > div.pictures-container {
      margin: 0;
      padding: 0;
      width: 40rem;
      height: 30rem;
      /* background-color: red; */

      > img.picture {
        /* background-color: blue; */
        top: 5rem;
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;

    > div.pictures-container {
      width: 16rem;
      height: 16rem;

      > img.picture {
        top: 0;
      }
    }

    > div {
      margin-left: 0;
      width: 100%;
    }
  }
`;

export const DynamicContainer = styled.div`
  --typing-gap: 0.65em;

  align-items: center;
  display: inline-flex;
  flex-wrap: nowrap;
  gap: 0.9rem;
  max-width: 100%;
  white-space: nowrap;

  .static {
    font-size: 3rem;
    font-weight: 400;
    line-height: 1;
    color: ${({ theme }) => theme.textPure};
    white-space: nowrap;
  }

  .dynamic {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    font-size: 3rem;
    height: 3.6rem;
    overflow: hidden;
    padding: 0 calc(var(--typing-gap) + 0.25em) 0 0;
    position: relative;
    white-space: nowrap;
  }

  .dynamic span {
    display: inline-block;
    position: relative;
    font-size: inherit;
    font-weight: 500;
    line-height: 1;
    top: 0.08em;
    color: ${({ theme }) => theme.secondary};
    white-space: nowrap;
  }

  .dynamic span::after {
    background: ${({ theme }) => theme.background};
    border-left: 2px solid ${({ theme }) => theme.primary};
    content: '';
    height: 1.45em;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: calc(100% + var(--typing-gap));
    animation: typing 4s forwards;
  }

  @keyframes typing {
    0% {
      left: 0;
      margin-left: 0;
      border-left-color: ${({ theme }) => theme.primary};
      animation-timing-function: steps(14, end);
    }

    64% {
      left: 100%;
      margin-left: var(--typing-gap);
      border-left-color: ${({ theme }) => theme.primary};
      animation-timing-function: step-end;
    }

    70% {
      left: 100%;
      margin-left: var(--typing-gap);
      border-left-color: transparent;
      animation-timing-function: step-end;
    }

    76% {
      left: 100%;
      margin-left: var(--typing-gap);
      border-left-color: ${({ theme }) => theme.primary};
      animation-timing-function: step-end;
    }

    82% {
      left: 100%;
      margin-left: var(--typing-gap);
      border-left-color: transparent;
      animation-timing-function: step-end;
    }

    88% {
      left: 100%;
      margin-left: var(--typing-gap);
      border-left-color: ${({ theme }) => theme.primary};
      animation-timing-function: step-end;
    }

    94% {
      left: 100%;
      margin-left: var(--typing-gap);
      border-left-color: transparent;
      animation-timing-function: step-end;
    }

    100% {
      left: 100%;
      margin-left: var(--typing-gap);
      border-left-color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-width: 1000px) {
    --typing-gap: 0.55em;

    gap: 0.4rem;
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 6.5rem;
    }

    h2 {
      font-size: 3rem;
    }

    .static {
      font-size: 2.5rem;
    }

    .dynamic span {
      font-size: 2.5rem;
    }

    .dynamic {
      font-size: 2.5rem;
      height: 3.1rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2rem;
    }

    .static {
      font-size: 1.6rem;
    }

    .dynamic span {
      font-size: 1.6rem;
    }

    .dynamic {
      font-size: 1.6rem;
      height: 2.2rem;
    }
  }
`;

export const InfoContainer = styled.section`
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  gap: 0.6rem;
  max-width: 100%;
  min-width: 0;
  width: 100%;

  &:hover,
  &:has(button:focus-visible) {
    section {
      filter: brightness(1.3);
      padding: 2.5rem;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const InfoCarouselViewport = styled.div.attrs({
  id: 'hero-info-carousel'
})`
  flex: 1 1 auto;
  max-width: 31.5rem;
  min-width: 0;
  overflow: hidden;
  width: 100%;

  @media (max-width: 1450px) {
    max-width: 20rem;
  }

  @media (max-width: 1000px) {
    max-width: none;
  }
`;

interface InfoCarouselTrackProps {
  $showContacts: boolean;
}

export const InfoCarouselTrack = styled.div<InfoCarouselTrackProps>`
  display: flex;
  min-width: 0;
  transform: ${({ $showContacts }) =>
    $showContacts ? 'translateX(-100%)' : 'translateX(0)'};
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

interface InfoCarouselSlideProps {
  $active: boolean;
}

export const InfoCarouselSlide = styled.div<InfoCarouselSlideProps>`
  flex: 0 0 100%;
  min-width: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0.2)};
  overflow: hidden;
  transition: opacity 0.5s ease-in-out;
  width: 100%;
`;

interface InfoCarouselControlProps {
  $showContacts: boolean;
}

export const InfoCarouselControl = styled.div<InfoCarouselControlProps>`
  order: ${({ $showContacts }) => ($showContacts ? -1 : 0)};
`;

export const InfoCarouselButton = styled.button`
  animation: pulse-arrow 1.2s ease-in-out infinite;
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  display: flex;
  flex: 0 0 auto;

  > svg {
    height: 2.5rem;
    width: 2.5rem;
  }

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.secondary};
  }

  @keyframes pulse-arrow {
    0%,
    100% {
      opacity: 0.65;
      transform: scale(1);
    }

    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;

export const CodeItem = styled.section<CodeItemProps>`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: ${props => `${props.$size}rem`};
  align-self: flex-start;
  transition: 0.5s;
  transform: translateX(100%);
  animation: slide-left 1s ease-in forwards;

  @keyframes slide-left {
    0% {
      transform: translateX(30%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @media (max-width: 1450px) {
    width: 20rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    animation: none;
    font-size: 0.72rem;
    opacity: 1;
    padding: 1.25rem;
    transform: translateX(0%);
  }

  > div {
    margin: 0.2rem;
    margin-left: 1rem;
    overflow-wrap: anywhere;
  }

  span.purple {
    color: ${({ theme }) => theme.codeKey};
  }

  span.blue {
    color: ${({ theme }) => theme.codeValue};
    overflow-wrap: anywhere;
  }

  span.comments {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
