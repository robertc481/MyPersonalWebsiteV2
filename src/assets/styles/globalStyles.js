import { createGlobalStyle } from 'styled-components';
export const colors = {
   one: '#f5f9f8',
   two: '#d4d6d5',
   three: '#a4a5a7',
   four: '#707271',
   five: '#3c3c3c',
   six: 'rgb(25,25,25)',
   black: 'black',
}
const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
   margin:0;
   padding:0;
   box-sizing:border-box;
}
body{
   background-color: ${colors.black};
   font-family:'Montserrat';
   color:white;
   height:100vh;
   overflow:hidden;

   /* 

   solution until i will figure out a better one or what is going on

    */
   >div{
      height:100vh;
      >div{
      height:100vh;
      >div{
      height:100vh;
      >div{
      height:100vh;
   }
   }
   }
   }
   
}

`;

export default GlobalStyle;