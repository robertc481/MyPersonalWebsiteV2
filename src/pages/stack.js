import React from 'react';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { colors } from '../assets/styles/globalStyles';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const StyledWrapper = styled.main`
   height: 87vh;
   width:95%;
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   grid-template-rows: repeat(5, 1fr);
   margin:0 auto;

   @media (max-width: 599px) {
         
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      
   }
`;

const StyledContent = styled.section`
   height: 100%;
   width:100%;
   grid-area: 1 / 4 / 6 / 7;
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:center;
   @media (max-width: 599px) {
         
      height:35%;
      }

   header{
      width:100%;
      display:flex;
      flex-direction:column;
      align-items:center;
      div{
         width:100%;
         display:flex;
         flex-direction:column;
         align-items:center;
         h2{
         width:70%;
         font-size:2.1rem;
         margin:50px 0 20px 0;
         font-weight:700;
         background: linear-gradient(#666, #222);
         box-shadow:0 3px 2px -1px gray;
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         text-align:center;
         @media (max-width: 599px) {
            margin:0;
            font-size:1.3rem;
            width:90%;
            }
            @media (max-width: 850px ) and (orientation: landscape){
            font-size:1rem;
         }
         }
         p{
            width:70%;
            font-weight:300;
            font-size:.9rem;
            @media (max-width: 599px) {
            font-size:.8rem;
            width:90%;
            padding:5px;
            }
            @media (max-width: 850px ) and (orientation: landscape){
               font-size:.75rem;
            }

         }
      }
   }

   aside{
      width:100%;
      height:30%;
      display:flex;
      justify-content:center;
      align-items:center;
      padding:2rem;
      :hover a>button {
         color:white;
      }
      a>button{
         width:3rem;
         height:3rem;
         margin: 0 15px;
         outline:none;
         bordeR:none;
         background:none;
         cursor:pointer;
         font-size:3rem;
         color:black;
         text-shadow:0px 0  1px white;
         transition:.25s linear;
         @media (max-width: 599px) {
         width:1rem;
         height:1rem;
         margin-bottom:50px;
      }
      
      }
      a>span{
         display:inline-block;
         color:hsl(240,0%, 3%);
         font-size:2rem;
         font-weight:700;
         box-shadow:0 3px 2px -1.5px white;
         text-shadow: 0 0 1.5px white;
         width:70%;
         @media (max-width: 599px) {
         font-size:.8rem;

      }
      @media (max-width: 850px ) and (orientation: landscape){
            font-size:.8rem;
         }
         
      }
   }
`;
const StyledLink = styled(AniLink)`
   width:100%;
   height:100%;
   text-decoration:none;
   display:flex;
   justify-content:center;
   align-items:center;
  
  
`;

const StyledGallery = styled.section`
   height: 100%;
   width:100%;
   grid-area: 1 / 1 / 6 / 4;
   display: grid;
   grid-template-columns: repeat(22, 1fr);
   grid-template-rows: repeat(17, 1fr);
   @media (max-width: 599px) {
         height:65%

      }
   >*{



   :nth-child(1){
      grid-area:9/2/12/10;
      
     
      }
   :nth-child(2){
      
      grid-area:12/15/14/18;
     
   }
   :nth-child(3){
      
      grid-area: 9/11/11/17;
   }
   
   :nth-child(5) img{
      transform:rotate(90deg) scale(2.5);
      object-fit:cover;
   }
   :nth-child(4){
      grid-area: 2/12/4/16;
      
   }
   :nth-child(5){
     
      grid-area:2/18/11/22;
      
   }
   
   :nth-child(6){
      grid-area:12/19/14/22;
   }
   
   :nth-child(7){
   grid-area: 2/2/8/10;
   
   }
   :nth-child(8){
      grid-area:5/12/8/16;
   }
   :nth-child(9){
      grid-area:15/11/17/22;
   }
   :nth-child(10){
      grid-area:12/11/14/14;
   }
   :nth-child(11){
      grid-area:13/2/17/8;
   }
   }
`;

const Stack = ({ data: { allFile: { edges } } }) => (
   <>
      <StyledWrapper>
         <StyledGallery>
            {edges.map((item, index) => <Img imgStyle={{ objectFit: 'contain' }} fluid={item.node.childImageSharp.fluid} key={index} />)}
         </StyledGallery>
         <StyledContent>

            <header>
               <div>
                  <h2>Technologies I've known</h2>
                  <p>My knowledge of presented technologies is diverse, some are very solid and another are at least good enough to use them freely. </p>
               </div>

            </header>


            <aside>

               <StyledLink
                  cover
                  to='/contact'
                  top='entry'
                  duration={.8}
                  direction='up'
                  bg={colors.black}><span>Feel free to contact me!</span>
                  <button> &uarr;</button></StyledLink>

            </aside>

         </StyledContent>
      </StyledWrapper>
   </>

)

export const query = graphql`
{
   allFile(filter: {name: {regex: "/logo/"}}) {
     edges {
       node {
         childImageSharp {
           fluid {
             ...GatsbyImageSharpFluid_tracedSVG
           }
         }
       }
     }
   }
 }
`;


export default Stack;