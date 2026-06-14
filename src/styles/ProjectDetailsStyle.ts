import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const ProjectDetailsContainer = styled.div`
  align-items: center;
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.backgroundLight}22 0%, ${theme.background} 22rem, ${theme.background} 100%)`};
  color: ${({ theme }) => theme.textPure};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;

  > main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: -3.25rem auto 6rem;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 0;
    flex: 1;
    z-index: 3;

    .back-link {
      align-items: center;
      align-self: flex-start;
      background: ${({ theme }) => `${theme.inputBackground}f2`};
      border: 1px solid ${({ theme }) => theme.border};
      border-radius: 0.5rem;
      color: ${({ theme }) => theme.secondary};
      display: inline-flex;
      font-size: 0.95rem;
      font-weight: 600;
      gap: 0.5rem;
      min-height: 2.8rem;
      padding: 0.65rem 1rem;
      transition: 0.35s ease;

      svg {
        height: 1.1rem;
        width: 1.1rem;
      }

      &:hover,
      &:focus-visible {
        border-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.primary};
        transform: translateY(-2px);
      }
    }

    .details-grid {
      align-items: stretch;
      display: grid;
      gap: 1.5rem;
      grid-template-columns: minmax(0, 1.5fr) minmax(20rem, 0.75fr);
      width: 100%;
      height: 100%;
      min-height: 0;
      flex: 1;
      margin-top: 3rem;
    }

    .project-summary,
    .project-aside {
      background: ${({ theme }) => `${theme.inputBackground}f2`};
      border: 1px solid ${({ theme }) => theme.border};
      border-radius: 0.5rem;
      box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 18%);
    }

    .project-summary {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 24rem;
      padding: 2.25rem;
    }

    .section-kicker {
      color: ${({ theme }) => theme.primary};
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 0;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    .project-summary h2 {
      color: ${({ theme }) => theme.textPure};
      font-size: 2.35rem;
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: 1.25rem;
    }

    .project-summary p {
      color: ${({ theme }) => theme.textPure};
      font-size: 1.12rem;
      font-weight: 300;
      line-height: 1.85;
      max-width: 58rem;
      text-align: left;
    }

    .actions {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      gap: 0.8rem;
      margin-top: 2.5rem;

      > span {
        display: inline-flex;
      }
    }

    .primary-action,
    .secondary-action {
      align-items: center;
      border-radius: 0.5rem;
      display: inline-flex;
      font-size: 1rem;
      font-weight: 700;
      gap: 0.55rem;
      justify-content: center;
      min-height: 3.2rem;
      padding: 0.9rem 1.25rem;
      transition: 0.35s ease;

      svg {
        height: 1.25rem;
        width: 1.25rem;
      }
    }

    .primary-action {
      background: ${({ theme }) => theme.primary};
      color: #fff;

      &:hover,
      &:focus-visible {
        background: ${({ theme }) => darken(0.08, theme.primary)};
        transform: translateY(-2px);
      }
    }

    .secondary-action {
      background: ${({ theme }) => `${theme.primary}14`};
      border: 1px solid ${({ theme }) => `${theme.primary}66`};
      color: ${({ theme }) => theme.primary};

      &:hover,
      &:focus-visible {
        background: ${({ theme }) => `${theme.primary}24`};
        border-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => lighten(0.12, theme.primary)};
        transform: translateY(-2px);
      }
    }

    .project-aside {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      padding: 2rem;
    }

    .info-list {
      display: grid;
      gap: 1.2rem;
    }

    .info-item {
      border-bottom: 1px solid ${({ theme }) => theme.border};
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
      padding-bottom: 1.2rem;

      span {
        align-items: center;
        color: ${({ theme }) => theme.text};
        display: inline-flex;
        font-size: 0.85rem;
        font-weight: 700;
        gap: 0.45rem;
        letter-spacing: 0;
        text-transform: uppercase;

        svg {
          color: ${({ theme }) => theme.primary};
          height: 1rem;
          width: 1rem;
        }
      }

      strong {
        color: ${({ theme }) => theme.textPure};
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 1.3;
      }
    }

    .tech-panel h2 {
      color: ${({ theme }) => theme.textPure};
      font-size: 1.35rem;
      font-weight: 700;
      line-height: 1.25;
      margin-bottom: 1rem;
    }

    .tech-panel ul {
      display: flex;
      flex-flow: row wrap;
      gap: 0.65rem;
      width: 100%;

      li {
        background: ${({ theme }) => `${theme.secondary}1f`};
        border: 1px solid ${({ theme }) => `${theme.secondary}66`};
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.textPure};
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 1.2;
        padding: 0.7rem 0.9rem;
        transition: 0.35s ease;
        white-space: nowrap;

        &:hover {
          background: ${({ theme }) => theme.secondary};
          color: #fff;
          transform: translateY(-2px);
        }
      }
    }

    @media (max-width: 1000px) {
      margin-top: -2rem;

      .details-grid {
        grid-template-columns: 1fr;
      }

      .project-summary {
        min-height: auto;
      }
    }

    @media (max-width: 700px) {
      gap: 1rem;
      margin-bottom: 4rem;

      .back-link {
        font-size: 0.9rem;
        min-height: 2.6rem;
        padding: 0.6rem 0.85rem;
      }

      .project-summary,
      .project-aside {
        padding: 1.25rem;
      }

      .project-summary h2 {
        font-size: 1.65rem;
      }

      .project-summary p {
        font-size: 1rem;
        line-height: 1.7;
      }

      .actions {
        flex-direction: column;
        margin-top: 1.75rem;
        width: 100%;
      }

      .actions > span,
      .primary-action,
      .secondary-action {
        width: 100%;
      }

      .tech-panel ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .tech-panel li {
        text-align: center;
        white-space: normal;
      }
    }

    @media (max-width: 430px) {
      .tech-panel ul {
        grid-template-columns: 1fr;
      }
    }
  }
`;
