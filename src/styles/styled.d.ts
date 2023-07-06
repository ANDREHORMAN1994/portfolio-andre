import 'styled-components';
import { type themeDark } from './theme';

// Define o tipo para os temas
export type Theme = typeof themeDark;

// Sobrescreve a interface DefaultTheme do styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
