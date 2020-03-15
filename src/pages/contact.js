import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from 'styled-components';
import { Formik } from 'formik';
import axios from 'axios';
import { colors } from '../assets/styles/globalStyles';


const StyledInput = styled.input`
   display:block;
   color:white;
   border:2px solid white;
   background:none;
   font-family: 'Montserrat';
   font-size:20px;
   height:${({ as }) => as ? '200px' : 'auto'};
   width:${({ as }) => as ? '500px' : '300px'};
   margin-bottom:${({ as }) => as && '40px'};
   @media (max-width: 499px) {
      width:${({ as }) => as ? '300px' : '300px'};
      height:${({ as }) => as ? '150px' : 'auto'};
      margin-bottom:${({ as }) => as && '5px'};
      font-size:1rem;
      }
   @media (max-width: 850px ) and (orientation: landscape){
    font-size:1.0rem;
     width:${({ as }) => as ? '300px' : '300px'};
      height:${({ as }) => as ? '100px' : 'auto'};
      margin-bottom:${({ as }) => as && '5px'};
  }   
`;
const StyledLabel = styled.label`
   margin: 30px 0 10px ;
   display:block;
   font-size:14px;
   font-weight:bold;
   font-family:'Montserrat';
   @media (max-width: 499px){
      margin:10px 0 5px;
   }
   @media (max-width: 850px ) and (orientation: landscape){
    margin:5px 0 10px;
    
  }  
`;
const StyledLink = styled(AniLink)`
   width:60%;
   text-decoration:none;
   display:flex;
   justify-content:center;
   align-items:center;
   color:hsl(240,0%, 3%);
   text-shadow:0 0 2px white;
   font-weight:bold;
   font-size:1.6rem;
   transition:.3s ease-in-out;
   box-shadow:0 3px 1px -1px white;
   :hover{
      color:white;
   }
   
   @media (max-width: 499px){
      font-size:.85rem;
      width:65%;
      position:absolute;
      right:2%;
      bottom:3vh;
   }
   @media (max-width: 850px ) and (orientation: landscape){
    font-size:.8rem;
    width:75%;
    
  }  
  
`;
const StyledButton = styled.button`
   background:none;
   color:${({ msgSend }) => msgSend ? 'black' : 'white'};
   border: 2px solid white;
   width: 6rem;
   height: 30px;
   border-radius:20px;
   font-weight:bold;
   cursor:pointer;
   transition:.25s linear;
   background-color:${({ msgSend }) => msgSend ? 'white' : 'none'};
`;
const StyledWrapper = styled.div`
   width:80%;
   height:87vh;
   display:flex;
   justify-content:center;
   align-items:center;
   position:relative;
   margin: 0 auto;
   @media (max-width: 499px) {
      width:100%;
      margin:0 5px;
      flex-direction:column;
   }
   @media (max-width: 850px ) and (orientation: landscape){
    width:95%;
    
  }  
   
`;
const StyledFormSection = styled.div`
height:100%;
width:50%;
display:flex;
flex-direction:column;
justify-content:center;

z-index:5;
@media (max-width: 499px) {
         height:60%;
         width:100%;
         margin-bottom:30px;
}

`;
const StyledContentSection = styled.div`
@media (max-width: 499px) {
         height:40%;
         width:100%;
         font-size:.8rem;
}
@media (max-width: 850px ) and (orientation: landscape){
   font-size:.75rem;
   width:100%;
   
}  
height:100%;
width:50%;
display:flex;
flex-direction:column;

justify-content:space-evenly;
ul{
   list-style-type:none;
   li{
      margin: 10px 0 ;
      
   }
}
`;
const Contact = () => {
   const [msgSend, setMsgSend] = useState(false);

   return (
      <>
         <StyledWrapper>

            <StyledContentSection>
               <h2>
                  How to contact me ?
               </h2>
               <p> You can use form on this page to send me an message, </p>
               <p>
                  or :

               </p>
               <ul>
                  <li>Find me on Facebook: <b>Robert Chojnacki</b> </li>
                  <li>Use my e-mail: <b>robertc481@gmail.com</b> </li>
                  <li>Check my github: <b>github.com/robertc481</b> </li>
               </ul>




               <StyledLink
                  cover
                  to='/'
                  right='entry'
                  duration={.8}
                  direction='left'
                  bg={colors.black}>&larr;Go back to the homepage</StyledLink>
            </StyledContentSection>
            <StyledFormSection>

               <Formik
                  initialValues={{ name: '', email: '', message: '' }}
                  onSubmit={(values, { setSubmitting }) => {
                     axios.post('https://us-central1-gatsbycourse.cloudfunctions.net/sendMessage', values)
                        .then((res) => {
                           console.log(res);
                           setSubmitting(false);
                        })
                        .catch((err) => {
                           console.log(err);
                           setSubmitting(false);
                        })
                  }}
               >
                  {({
                     values,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                  }) => (
                        <form onSubmit={handleSubmit}>
                           <StyledLabel htmlFor='name'>Name</StyledLabel>
                           <StyledInput
                              type="text"
                              name="name"
                              id='name'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                           />
                           <StyledLabel htmlFor='e-mail'>E-mail</StyledLabel>
                           <StyledInput
                              type="e-mail"
                              name="email"
                              id='email'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                           />
                           <StyledLabel>Message</StyledLabel>
                           <StyledInput
                              as='textarea'
                              type="text"
                              name="message"
                              id='message'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                           />
                           <StyledButton
                              disabled={isSubmitting}
                              type='submit'
                              onClick={() => setMsgSend(true)}
                              msgSend={msgSend}
                           >{msgSend ? 'Sent!' : 'Send'}</StyledButton>
                        </form>
                     )}
               </Formik>
            </StyledFormSection>

         </StyledWrapper>





      </>
   )
}

export default Contact;