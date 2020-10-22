import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    height: auto;
  }

  .head {
    background: ${({ theme }) => theme.body};
  }

  .title {
    color: ${({ theme }) => theme.text};
  }

  .label {
    color: ${({ theme }) => theme.text};
  }

  .columns:last-child {
      margin-bottom: 0
  }

  .table {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.backgroundTable};
  }
  .table thead td, .table thead th {
    color: ${({ theme }) => theme.text};
    font-weight: bold
  }

  .button {
    background: ${({ theme }) => theme.button};
  }

  `;