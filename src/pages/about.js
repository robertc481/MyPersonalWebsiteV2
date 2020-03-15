import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image'
import { graphql } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { colors } from '../assets/styles/globalStyles';
const StyledPhoto = styled(Img)`
border-radius:50px;
`;
const StyledImg = styled(Img)`
border-radius:10px;

`;
const StyledWrapper = styled.main`
   height: 87vh;
   width:95%;
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   grid-template-rows: repeat(5, 1fr);
   margin:0 auto;
   >*{
      padding-left:5PX;
   }
   
  @media (max-width: 599px) { 
  display:flex;
  flex-direction:column;
  width:100%;
  height:87vh;
  >*{
     height:50%;
     width:100%;
     
     }


  }
`;
const StyledIntroduction = styled.div`
   grid-area:1/1/6/4;
   display:grid;
   grid-template-columns: repeat(8, 1fr);
   grid-template-rows: repeat(6, 1fr);

   h1{
      grid-area:1/5/2/9;
      font-weight:600;
      font-size:1.7rem;
      display:flex;
      justify-content:center;
      align-items:center;
      padding:0;
      margin:0;
      @media (max-width: 599px) {
         font-size:.7rem;

      }
      @media (max-width: 850px ) and (orientation: landscape){
    font-size:1rem;
  }
   }
   .img-wrapper{
      grid-area:1/1/5/5;
      padding:0;
      >*{
         height:100%;
         width:100%;
      }
   }
   div:last-of-type{
      grid-area:2/5/4/9;
      padding:10px 10px;
      p{
         margin-bottom:10px;
         
      }
      
      @media (max-width: 599px) {
         font-size:.6rem;
         padding:0px 20px;

      }
      @media (max-width: 850px ) and (orientation: landscape){
    font-size:.55rem;
  }
   }
   div+p{
      @media (max-width: 599px) {
         font-size:.6rem;
        margin-top:35px;
      }
      @media (max-width: 850px ) and (orientation: landscape){
    font-size:.6rem;
  }
      grid-area:5/1/7/9;
   }
`;

const hobbyEnter = keyframes`
   from{
      transform:translateY(15px);
      opacity:0;
   }
   to{
      transform:translateY(0%);
      opacity:1;
   }
`;
const StyledHobbies = styled.div`
   grid-area:1/4/6/7;
   display:grid;
   grid-template-columns: repeat(8, 1fr);
   grid-template-rows: repeat(6, 1fr);
   /* box-shadow:-20px 0 2px -15px white; */
   z-index:100;
   h2{
      grid-area:1/1/2/9;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      font-size:1.3rem;
      font-weight:500;
      @media (max-width: 599px) {
         font-size:.8rem;

      }
      @media (max-width: 850px ) and (orientation: landscape){
    font-size:.9rem;
  }
   }
   >div{
      grid-area:2/1/7/9;      
      display:grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(6, 1fr);
      .hobby{
         overflow:hidden;
         grid-area:1/2/5/8;
         animation:${hobbyEnter} .5s ease-in-out;
      }
      button:first-of-type{
         grid-area :5/2/6/3;
         
      }
      button:last-of-type{
         grid-area :5/7/6/8;
      }
      button{
         background:none;
         border:none;
         color:white;
         cursor:pointer;
         outline:none;
         font-size:3rem;
         font-weight:500;
      }
   }
   section{
      grid-area:6/1/7/9;
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:1.4rem;
   }
`;
const StyledLink = styled(AniLink)`
color:white;
@media (max-width: 599px) {
         font-size:.6rem;

      }
      @media (max-width: 850px ) and (orientation: landscape){
    font-size:1rem;
  }
`;
const About = ({ data: { file, allFile: { nodes } } }) => {

   const [counter, setCounter] = useState(0)

   const hobbies = nodes.map((item, key) => <StyledImg className='hobby' key={key} fadeIn={true} imgStyle={{ objectFit: 'contain' }} fluid={item.childImageSharp.fluid} />)

   return (
      <StyledWrapper>

         <StyledIntroduction>
            <h1>Few words about me</h1>
            <div className="img-wrapper"><StyledPhoto imgStyle={{ objectFit: 'contain' }} fluid={file.childImageSharp.fluid} /></div>
            <div>
               <p>My name is <b>Robert Chojnacki</b>  and I can say coding became my <b>Passion</b>.</p>
               <p>I'm following path of <b>Front-End</b> since 2018 and I've found it to be a long &amp; exciting journey.</p>
               <p>I'm always doing my best to provide code of <b>highest quality</b> .</p>
            </div>

            <p>I come from Poland and there I live, work &amp; study. Currently I'm a student of <b><i>Data Science</i></b> at CDV Poznań. <br />I consider myself as <b><i>solid, ambitious, smart</i></b> and <b><i>communicative</i></b> person. Also I am <b><i>analytically</i></b> and <b><i>inter-personal</i></b> skilled. </p>
         </StyledIntroduction>
         <StyledHobbies>
            <h2>And privatly - what keeps me in shape and makes me alive : </h2>
            <div>

               <button onClick={() => counter <= 0 ? setCounter(4) : setCounter(counter - 1)}>&larr;</button>

               {hobbies[counter]}

               <button onClick={() => counter >= 4 ? setCounter(0) : setCounter(counter + 1)}>&rarr;</button>
            </div>
            <section>
               <StyledLink
                  cover
                  to='/stack'
                  left='entry'

                  duration={.8}
                  direction='right'
                  bg={colors.black}>Here You can check my skillset. &rarr;</StyledLink>
            </section>
         </StyledHobbies>
      </StyledWrapper>
   )
}

export const query = graphql`
{
   file(name:{regex:"/imgMobile/"}){
     childImageSharp{
       fluid{
         ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
   allFile(filter: {name: {regex: "/hobby/"}}) {
     nodes{
       childImageSharp{
         fluid{
           ...GatsbyImageSharpFluid_tracedSVG
         }
       }
     }
   }
 }

`;

export default About;