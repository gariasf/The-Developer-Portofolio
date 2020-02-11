import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { Container, Row } from "react-bootstrap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Head from "./components/Head";
import Home from "./components/Home";
import { ReactComponent as Sun } from "./assets/icons/sun-regular.svg";
import { ReactComponent as Moon } from "./assets/icons/moon-regular.svg";

function App() {
  const [theme, setTheme] = useState("lightTheme");
  const [themeName, setThemeName] = useState(<Moon />);

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "lightTheme") {
      setTheme("darkTheme");
      setThemeName(<Sun />);
      // otherwise, it should be light
    } else {
      setTheme("lightTheme");
      setThemeName(<Moon />);
    }
  };

  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <Container fluid={true} className="App">
        <GlobalStyles />
        <Row className="header d-flex flex-column ">
          <Head toggleTheme={toggleTheme} themeName={themeName} />
          <Home />
        </Row>
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;