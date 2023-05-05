import axios from 'axios';
import { useEffect, useState } from 'react';

export const usePicture = () => {
  const [picture, setPicture] = useState<string>('');

  const requestUserGithub = async () => {
    const endpoint = 'https://api.github.com/user';
    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_GITHUB}`
      }
    });
    if (data) {
      setPicture(data.avatar_url);
    }
  };

  useEffect(() => {
    requestUserGithub();
  }, []);

  return picture;
};
