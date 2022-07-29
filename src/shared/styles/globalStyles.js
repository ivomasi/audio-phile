import { createGlobalStyle } from 'styled-components';
import colors from '../../styled-system/colors';


 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: ${colors.lightGrey};

  }
`;
 
export default GlobalStyle;