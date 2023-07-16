import { useEffect, useState } from 'react';

export const usePicture = (): string => {
  const [picture, setPicture] = useState<string>('');

  useEffect(() => {
    // const requestUserGithub = async (): Promise<void> => {
    //   try {
    //     const endpoint = 'https://api.github.com/user';
    //     const auth = process.env.TOKEN_GITHUB ?? '';
    //     console.log(auth, 'meu token');
    //     const { data } = await axios.get(endpoint);
    //     console.log(data, 'resposta');
    //     if (data) {
    //       setPicture(data.avatar_url);
    //     }
    //   } catch (error) {
    //     console.log(error, 'deu ruim');
    //     setPicture('/images/my-perfil.png');
    //   }
    // };
    // void requestUserGithub();
    setPicture('https://github.com/ANDREHORMAN1994.png');
  }, []);

  return picture;
};
