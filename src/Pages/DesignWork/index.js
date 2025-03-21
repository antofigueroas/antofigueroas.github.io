import React, { Fragment } from "react";
import Data from "../../Assets/design-work.json";
import Grid from "../../Components/Grid";
import ProjectThumbnail from "../../Components/ProjectThumbnail";
import AccessibilityLabel from "../../Components/AccessibilityLabel";
import GlobalHeader from "../../Components/GlobalHeader";
import { Helmet } from "react-helmet";
import RemainingItems from "./RemainingItems";
import Callout from "../../Components/Callout";

class DesignWork extends React.PureComponent {
  constructor(props) {
    super(props);

    this._renderThumbnail = this._renderThumbnail.bind(this);
    this._randomGenerator = this._randomGenerator.bind(this);
    this._sessionNumber = this._sessionNumber.bind(this);
  }

  _randomGenerator(seed) {
    var m = 25;
    var a = 11;
    var c = 17;

    var z = seed;
    return function () {
      z = (a * z + c) % m;
      return z / m;
    };
  }

  _renderThumbnail(project, index, featured) {
    return (
      <ProjectThumbnail
        {...project}
        as="article"
        hover
        autoplay
        key={index}
        portrait={featured}
        fadeIn
      />
    );
  }

  _sessionNumber() {
    if (sessionStorage.getItem("sessionSeed") === null) {
      sessionStorage.setItem(
        "sessionSeed",
        Math.floor(Math.random() * 1000) + 1
      );
    }

    const sessionSeed = sessionStorage.getItem("sessionSeed");
    return this._randomGenerator(sessionSeed);
  }

  render() {
    const maxFeaturedCount = 6;
    const maxRemainingCount = 8;
    const generator = this._sessionNumber();

    const randomizedDesignWork = Data.DesignWork.slice().sort(() => generator() - generator());
    const featuredProjects = randomizedDesignWork.filter((item) => item.featured === true);
    const featuredProjectsLimited = featuredProjects.slice(0, maxFeaturedCount);
    const remainingFeaturedProjects = featuredProjects.slice(maxFeaturedCount,featuredProjects.lenght);
    const nonFeaturedProjects = randomizedDesignWork.filter((item) => item.featured === false);
    const remainingProjects = remainingFeaturedProjects.concat(nonFeaturedProjects);
    const remainingProjectsLimited = remainingProjects.slice(0,maxRemainingCount);

    return (
      <Fragment>
        <Helmet>
          <title>Antonia Figueroa — Work</title>
        </Helmet>

        <GlobalHeader sticky />
        <AccessibilityLabel as="h2">Selected Works</AccessibilityLabel>
        <Grid featured>
          {featuredProjectsLimited.map((project, index) => {
            return this._renderThumbnail(project, index, true);
          })}
        </Grid>
        <Grid>
          {remainingProjectsLimited.map((project, index) => {
            return this._renderThumbnail(project, index);
          })}
          <RemainingItems
            itemsToShow={remainingProjects.slice(
              maxRemainingCount,
              remainingProjects.length
            )}
            as="article"
            remainingCount={
              remainingProjects.slice(
                maxRemainingCount,
                remainingProjects.length
              ).length
            }
          />
        </Grid>
        <Callout>
          <p>This portfolio makes use of the code from laurasandoval's <a href="https://github.com/laurasandoval/" rel="noopener noreferrer">GitHub</a></p> repository, a big thank you for sharing your work. 
        </Callout>
      </Fragment>
    );
  }
}

export default DesignWork;
