import React, { Fragment } from "react";
import Data from "../../Assets/photography-work.json";
import Grid from "../../Components/Grid";
import ProjectThumbnail from "../../Components/ProjectThumbnail";
import AccessibilityLabel from "../../Components/AccessibilityLabel";
import GlobalHeader from "../../Components/GlobalHeader";
import { Helmet } from "react-helmet";

class PhotographyWork extends React.PureComponent {
  constructor(props) {
    super(props);

    this._renderThumbnail = this._renderThumbnail.bind(this);
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
        photography
      />
    );
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Laura Sandoval — Photography Work</title>
        </Helmet>

        <GlobalHeader sticky />
        <AccessibilityLabel as="h2">Selected Photography Work</AccessibilityLabel>
        <Grid featured>
          {Data.PhotographyWork.map((project, index) => {
            return this._renderThumbnail(project, index, true);
          })}
        </Grid>
      </Fragment>
    );
  }
}

export default PhotographyWork;
