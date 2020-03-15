import React from "react";
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { colors } from '../assets/styles/globalStyles';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const StyledImage = styled(Image)`
  width:50%;
  height:87vh;
  position:absolute;
  top:0;
  left:0;
  z-index:1;
  @media (max-width: 850px){
    width:100%
  }
  
`;
const StyledWrapper = styled.div`
display:flex;
padding:0;
margin:0;
overflow:hidden;
width:100%;
height:87vh;

`;
const StyledMain = styled.main`
display:grid;
grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(4, 1fr);

color:${colors.one};
width:100%;
height:87vh;
overflow:hidden;
z-index:2;
@media (max-width: 599px){
  position:absolute;
  width:100%;
  left:0;
  top:10vh;
}

&::first-letter{
  font-size:3.8rem;
  
}
h2{
  grid-area:1/1/2/4;
  color:hsl(240,0%, 3%);
  text-shadow: 0px 0px 4px ${colors.three};
  display:flex;
  justify-content:center;
  align-items:center;
  transform-origin:100% 0;
  transform:rotate(-90deg)translate(70%,55%) scaleX(2.2)scaleY(1.5);
  @media (max-width: 599px) { 
  font-size:1.3rem;
  transform:rotate(-90deg)translate(-65%,0%) scaleX(1.2);
}
@media (max-width: 850px) and (orientation: landscape) { 
  font-size:1.4rem;
  transform:rotate(-90deg)translate(-20%,20%) ;
}
}
h1{
  grid-area:1/2/2/5;
  min-width:200px;
  font-size:3rem;
  display:flex;
  background: radial-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 599px) { 
  font-size:1.2rem;
  grid-area:1/2/2/5;
}
@media (max-width: 850px ) and (orientation: landscape) { 
  font-size:1.5rem;
  grid-area:1/1/2/5;
  justify-content:center;
  align-items:center;
}
}
p{
  grid-area:2/2/3/4;
  font-size:1.1rem;
  display:flex;
  justify-content:center;
  align-items:center;
  
  @media (max-width: 850px ) and (orientation: landscape){
    font-size:.6rem;
    grid-area:1/1/3/4;
  }
  background: radial-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 599px) {
    grid-area:2/1/3/3;
    flex-direction:column;
    span{
      font-size:.75rem;
      margin:0;
      font-weight:600;
      
    }
   
  }
  span{
    margin-left:5px;
  }
}
`;

const StyledSwitch = styled.div`

grid-area:3/2/4/4;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
@media (max-width: 599px) {
  margin-top:80px;
  transform:translateY(75%);
}

p{
  font-size:1.8rem;
  text-transform:capitalize;
  @media (max-width: 599px) {
    font-size:1.2rem;
    width:100%
  }
  @media (max-width: 850px ) and (orientation: landscape){
    font-size:1.35rem;
  }
}

  


`;
const StyledLink = styled(AniLink)`
  text-decoration:none;
  color:${colors.two};
  div{
  display:flex;
  justify-content:center;
  align-items:center;
  border:2px solid ${colors.two};
  width: 200px;
  height:30px;
  border-radius:50px;
  font-size:1.3rem;
  cursor:pointer;
  font-weight:700;
  transition:.25s linear;
  text-shadow: 0px 0px 1px white;
  background-color: #000;
  :hover{
    color:${colors.black};
    background-color:white;
  }
  @media (max-width: 599px) {
  transform:translateY(200%);
}
  }
`;

const IndexPage = ({ data: { file } }) => (
  <StyledWrapper>

    <StyledImage fluid={file.childImageSharp.fluid} />
    <StyledMain>

      <h1>Software Development</h1>
      <p>
        <span
        >Optimalized<span style={{ marginRight: '5px' }}>&amp;</span> Friendly.</span>
        <span>Created with<span><b><i>passion</i></b>.</span></span>
      </p>

      <h2>IN CODE WE TRUST</h2>
      <StyledSwitch>
        <p>Explore page! </p>

        <StyledLink paintDrip to='/about' duration={.6} color='#3c3c3c'><div>Let's go&nbsp;&rarr;</div></StyledLink>
      </StyledSwitch>

    </StyledMain>

  </StyledWrapper >
)
export const query = graphql`
{
        file(name:{regex:"/lines/"}){
        childImageSharp{
        fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
      }
    }
  }
  
  
  `;

export default IndexPage;
