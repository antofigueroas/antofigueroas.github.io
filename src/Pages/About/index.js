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
        I love designing and looking for new projects and ideas.
        </h3>
        <p className="big-statement-subtitle"></p>
        <div className="about-me-paragraphs">
          <p>
          Chilean designer ({Age}) with a degree in Integral Design from Pontificia Universidad Católica de Chile.
          </p>
          <p>
          I strive to create beautiful, purposeful designs that stay true to their function — always with the user's needs in mind. Currently I'm learning to code and use AI tools in order to keep on designing everything that pops up in my head.
          </p>
          <p>
          Find out more in my {" "}
            <a
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
