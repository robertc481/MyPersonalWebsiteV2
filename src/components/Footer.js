import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/styles/globalStyles';
const StyledFooter = styled.footer`
   width:100%;
   height:3vh;
   display:flex;
   font-weight:500;
   justify-content:center;
   align-items:center;
   position:fixed;
   bottom:0;
   left:0;
   right:0;
   box-shadow:inset 0 1px 1px  ${colors.one};
   background-color: ${colors.black};
   div{
      color: ${colors.one};
      margin: 0 10px;
      font-size:.8rem;
   }
`;

const Footer = () => (
   <StyledFooter>
      <div>2020</div>
      <div>©</div>
      <div>Robert Chojnacki</div>
   </StyledFooter>
)

export default Footer;