import { darken, lighten } from 'polished';
import styled from 'styled-components';

interface InputProps {
  status: boolean;
  contact: string;
}

export const Container = styled.section``;

export const FormContainer = styled.form`
  margin-top: 8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  > div.contact-container {
    grid-column: 1/3;
    width: 100%;
    display: flex;

    justify-content: center;
    gap: 1rem;
    font-size: 1.2rem;

    > p {
      color: ${({ theme }) => theme.primary};
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 450px) {
      font-size: 1rem;
    }

    > div {
      display: flex;
      /* background-color: red; */
      width: 30%;
      justify-content: space-evenly;

      @media (max-width: 1000px) {
        width: 100%;
        margin: auto;
        gap: 0;
      }
    }

    > div label {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.secondary};
      cursor: pointer;

      > input {
        height: 1rem;
        width: 1rem;
        cursor: pointer;

        outline: none;
        transition: 0.5s;
      }

      &:hover {
        color: ${({ theme }) => lighten(0.1, theme.secondary)};
      }

      &:focus {
        border-color: ${({ theme }) => theme.primary};
      }
    }
  }

  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.primary};
    transition: 0.5s;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    grid-column: 1/3;
    margin: auto;

    @media (max-width: 700px) {
      width: 100%;
      grid-column: 1/3;
    }

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => darken(0.1, theme.primary)};
    }
  }

  @media (max-width: 700px) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 3rem;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  grid-column: ${({ contact }) => (contact === 'email' ? 0 : '1/3')};

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition-delay: 0.5s;
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.inputBackground}
      inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.primary} !important;
    animation: none !important;
  }

  @media (max-width: 700px) {
    width: 100%;
    grid-column: 1/3;
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;

  grid-column: 1/3;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition-delay: 0.5s;
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.inputBackground}
      inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.primary} !important;
    animation: none !important;
  }

  @media (max-width: 700px) {
    width: 100%;
    grid-column: 1/3;
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;
