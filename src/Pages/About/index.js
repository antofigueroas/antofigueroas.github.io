import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import GlobalHeader from "../../Components/GlobalHeader";
import GenericContainer from "../../Components/GenericContainer";
import AccessibilityLabel from "../../Components/AccessibilityLabel";
import "./index.scss";

function About() {
  const Age = "24";

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
        <figure className="hearts-animation" role="img">
          <span
            className="heart"
            aria-hidden="true"
            role="img"
            aria-label="Floating Heart"
          >
            🤍
          </span>
          <span
            className="heart"
            aria-hidden="true"
            role="img"
            aria-label="Floating Heart"
          >
            🤍
          </span>
          <span
            className="heart"
            aria-hidden="true"
            role="img"
            aria-label="Floating Heart"
          >
            🤍
          </span>
          <AccessibilityLabel as="figcaption">
            Animation of floating yellow hearts.
          </AccessibilityLabel>
        </figure>
        <h3 className="big-statement">
        I love designing and looking for new projects and ideas.
        </h3>
        <p className="big-statement-subtitle"></p>
        <div className="about-me-paragraphs">
          <p>
          Born in Santiago, Chile, {Age} years ago, where I studied Integral Design at Pontificia Universidad Católica de Chile.
          </p>
          <p>
          I strive to create beautiful designs that remain truthful to their intended function—with the user's needs in mind. Currently I'm learning to code and illustrate in order to keep on designing everything that pops up in my head.
          </p>
          <p>
          Find out more information in my {" "}
            <a
              href="/resume/ResumeMay2023.pdf"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            {<AccessibilityLabel>.</AccessibilityLabel>} or {" "}
            <a
              href="https://www.linkedin.com/in/antonia-figueroa-sánchez/"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            {<AccessibilityLabel>.</AccessibilityLabel>} :-)
          </p>
          <AccessibilityLabel>
            <a
              href="/resume/ResumeMay2023.pdf"
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
