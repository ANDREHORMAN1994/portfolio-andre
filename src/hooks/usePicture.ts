import { useEffect, useState } from 'react';

export const usePicture = (): string => {
  const [picture, setPicture] = useState<string>('');

  useEffect(() => {
    setPicture('https://github.com/ANDREHORMAN1994.png');
  }, []);

  return picture;
};
