import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import GlobalHeader from "../../Components/GlobalHeader";
import GenericContainer from "../../Components/GenericContainer";
import AccessibilityLabel from "../../Components/AccessibilityLabel";
import "./index.scss";

function About() {
  const Age = "25";

  return (
    <Fragment>
      <Helmet>
        <title>About — Antonia Figueroa</title>
      </Helmet>

      <GlobalHeader sticky />
      <GenericContainer className="about-page">
        <h2>
          <AccessibilityLabel>
            About — Antonia Figueroa
          </AccessibilityLabel>
        </h2>
        <div className="about-photo-container">
  <img src="/img/yowebp.webp" alt="Antonia Figueroa" className="about-photo" />
</div>
        <h3 className="big-statement">
        Turning ideas into stunning visuals.
        </h3>
        <p className="big-statement-subtitle"></p>
        <div className="about-me-paragraphs">
          <p>
          Freelance designer from Chile. I turn concepts into clean, intentional designs that connect, perform, and inspire.         
           </p>
          <p>
          For more, check out my {" "}
            <a target="_blank"
              href="/resume/Antonia Figueroa_CV.pdf"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            {<AccessibilityLabel>.</AccessibilityLabel>} or {" "}
            <a target="_blank"
              href="https://www.linkedin.com/in/antonia-figueroa-sánchez/"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            {<AccessibilityLabel>.</AccessibilityLabel>} :-)
          </p>
          <p>
          Got an idea? Let’s make it real: antoniaf525@gmail.com
          </p>
          <AccessibilityLabel>
            <a target="_blank"
              href="/resume/Antonia Figueroa_CV.pdf"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </AccessibilityLabel>
        </div>
      </GenericContainer>
    </Fragment>
  );
}

export default About;
