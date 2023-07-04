import styled from 'styled-components';

interface CodeItemProps {
  size: string;
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
      width: 20rem;
      height: 20rem;

      > img.picture {
        top: 0;
      }
    }

    > div {
      width: 100%;
    }
  }
`;

export const DynamicContainer = styled.div`
  display: inline-flex;

  .static {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.textPure};
    margin-right: 15px;
  }

  .dynamic {
    /* line-height: 90px; */
    height: 60px;
    overflow: hidden;
  }

  .dynamic li {
    margin-bottom: 5px;
    position: relative;
    left: 0;
    top: 0;
    animation: slide 7.5s steps(3) infinite;
  }

  @keyframes slide {
    100% {
      top: -190px;
    }
  }

  .dynamic li span {
    position: relative;
    font-size: 3rem;
    font-weight: 500;
    color: ${({ theme }) => theme.secondary};
  }

  .dynamic li span::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    border-left: 2px solid ${({ theme }) => theme.primary};
    animation: typing 2.5s steps(13) infinite;
    background: ${({ theme }) => theme.background};
  }

  @keyframes typing {
    100% {
      left: 100%;
      margin: 0 -35px 0 35px;
    }
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

    .dynamic li span {
      font-size: 2.5rem;
    }

    .dynamic {
      height: 50px;
    }

    @keyframes slide {
      100% {
        top: -160px;
      }
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

    .dynamic li span {
      font-size: 1.6rem;
    }

    .dynamic {
      height: 30px;
    }

    @keyframes slide {
      100% {
        top: -105px;
      }
    }
  }
`;

export const InfoContainer = styled.section`
  color: ${({ theme }) => theme.secondary};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.section<CodeItemProps>`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: ${props => `${props?.size}rem` || '24rem'};
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

    &:last-child {
      margin-right: 0px !important;
    }
  }

  &:last-child {
    align-self: flex-end;
    margin-right: 50px;
  }

  &:hover {
    filter: brightness(1.3);
    padding: 2.5rem;
  }

  > div {
    margin: 0.2rem;
    margin-left: 1rem;
  }

  span.purple {
    color: ${({ theme }) => theme.codeKey};
  }

  span.blue {
    color: ${({ theme }) => theme.codeValue};
  }

  span.comments {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
