import axios from 'axios';
import { useEffect, useState } from 'react';

export const usePicture = (): string => {
  const [picture, setPicture] = useState<string>('');

  const requestUserGithub = async (): Promise<void> => {
    try {
      const endpoint = 'https://api.github.com/user';
      const auth = process.env.TOKEN_GITHUB ?? '';
      const { data } = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      });
      if (data) {
        setPicture(data.avatar_url);
      }
    } catch (error) {
      setPicture('/images/myPerfil.png');
    }
  };

  useEffect(() => {
    void requestUserGithub();
  }, [picture]);

  return picture;
};
