import axios from 'axios';
import { useEffect, useState } from 'react';
import myPerfil from '../assets/myPerfil.png';

export const usePicture = () => {
  const [picture, setPicture] = useState<string>('');

  const requestUserGithub = async () => {
    try {
      const endpoint = 'https://api.github.com/user';
      const { data } = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN_GITHUB}`
        }
      });
      if (data) {
        setPicture(data.avatar_url);
      }
    } catch (error) {
      setPicture(myPerfil);
    }
  };

  useEffect(() => {
    requestUserGithub();
  }, [picture]);

  return picture;
};
