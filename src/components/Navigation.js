import React, { useState } from 'react';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { colors } from '../assets/styles/globalStyles';

const StyledNav = styled.nav`
  width:90vw;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 10px;
  ul{
     display:flex;
     list-style:none;
     width: 100%;
     height:100%;
     justify-content:space-evenly;
      align-items:center;
     li{
      min-width: 12%;
      height:80%;
      display:flex;
      justify-content:center;
      align-items:center;
      margin:0 2px;
      background-color: ${colors.black};
      transition-delay: .05s;
      transition:transform .4s ease-in-out;
      transform: ${({ isActive }) => isActive ? 'null' : 'translateY(-200%)'};
      @media (max-width: 599px) {
       span{ margin:5px 10px;}

      }
     }
     
     li:nth-of-type(2){ transition-delay: .1s;}
     li:nth-of-type(3){ transition-delay: .15s;}
     li:nth-of-type(4){ transition-delay: .2s;}
     li:nth-of-type(5){ transition-delay: .25s;}

  }
  
`;
const StyledLink = styled(AniLink)`
   width:100%;
   height:100%;
   text-decoration:none;
   font-size:.8rem;
   font-weight:500;
   color: ${colors.one};
   border:2px solid ${colors.one};
   display:flex;
   justify-content:center;
   align-items:center;
   transform: translate(5px,-5px);
   transition: transform .25s ease-in;

   :hover{
   transform: translate(0px,0px);
   text-shadow:5px 5px 5px 5px black;
  }

  
`;

const StyledButton = styled.button`
   position:absolute;
   right:2%;
  top: 2%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
 
  

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color:${colors.one};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isActive }) => isActive ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ isActive }) => isActive ? '0' : '1'};
      transform: ${({ isActive }) => isActive ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isActive }) => isActive ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
const HamburgerButton = ({ isActive, setIsActive }) => {
   return (
      <StyledButton isActive={isActive} onClick={setIsActive}>
         <div />
         <div />
         <div />
      </StyledButton>
   )
}


const Navigation = () => {
   const [isActive, setIsActive] = useState(false);
   const toggleActive = () => {
      setIsActive(!isActive)
   }
   return (
      <>
         <HamburgerButton isActive={isActive} setIsActive={toggleActive} />
         <StyledNav isActive={isActive}>
            <ul>
               <li>
                  <StyledLink paintDrip to='/' duration={.6} color='#3c3c3c'><span>Home</span></StyledLink>
               </li>
               <li>
                  <StyledLink paintDrip to='/about' duration={.6} color='#3c3c3c'><span>About</span></StyledLink>
               </li>
               <li>
                  <StyledLink paintDrip to='/stack' duration={.6} color='#3c3c3c'><span>Stack</span></StyledLink>
               </li>

               <li>
                  <StyledLink paintDrip to='/contact' duration={.6} color='#3c3c3c'><span>Contact</span></StyledLink>
               </li>
            </ul>

         </StyledNav>
      </>)
}
export default Navigation;