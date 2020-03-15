import React from "react"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GlobalStyle from "../assets/styles/globalStyles";

const MainLayout = ({ children }) => (
   <>
      <GlobalStyle />
      <Navigation />
      {children}
      <Footer />
   </>
)

export default MainLayout;