import React, { Suspense } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import AccessibilityLabel from "../AccessibilityLabel";
import Time from "../Time";

class ProjectThumbnail extends React.PureComponent {
  constructor(props) {
    super(props);

    this._renderThumbnail = this._renderThumbnail.bind(this);
  }

  _renderThumbnail(thumbnail, src, title, autoplay) {
    const imageFormats = ["png", "jpg", "jpeg", "svg", "gif"];
    const videoFormatsMP4 = ["mp4"];
    const videoFormatsWebm = ["webm"];
    const HtmlThumbnail = React.lazy(() =>
      import(`../../Work/${src}/thumbnails/${thumbnail}`)
    );
    const splittedThumbnail=thumbnail.split(".");
    
    if (imageFormats.includes(splittedThumbnail[splittedThumbnail.length-1])){
      return (
        <img
          src={require(`../../Work/${src}/thumbnails/${thumbnail}`)}
          alt={title}
        ></img>
      );
    } else if (videoFormatsWebm.includes(splittedThumbnail[splittedThumbnail.length-1])){
      console.log(thumbnail)
      return (
        <video playsInline muted autoPlay={autoplay} loop>
          <source
            src={require(`../../Work/${src}/thumbnails/${thumbnail}`)}
            type="video/webm"
          />
        </video>
      );
    } else if (videoFormatsMP4.includes(splittedThumbnail[splittedThumbnail.length-1])){
      console.log(thumbnail)
      return (
        <video playsInline muted autoPlay={autoplay} loop>
          <source
            src={require(`../../Work/${src}/thumbnails/${thumbnail}`)}
            type="video/mp4"
          />
        </video>
      );
    }
     else {
      return (
        <div className="html-thumbnail-container">
          <Suspense fallback={<span></span>}>
            <HtmlThumbnail />
          </Suspense>
        </div>
      );
    }
  }

  render() {
    const {
      as,
      title,
      release_year,
      release_month,
      src,
      thumbnail,
      thumbnails,
      hover,
      img_only,
      autoplay,
      portrait,
      fadeIn,
    } = this.props;

    const Tag = as ? as : "div";
    const thumbnailToRender = thumbnail
      ? thumbnail
      : thumbnails.slice().sort(() => Math.random() - Math.random())[0];

    return (
      <Tag
        className="project-thumbnail"
        data-name={title}
        data-hover={hover}
        data-img-only={img_only}
        data-portrait={portrait}
        data-fade-in={fadeIn}
      >
        {hover && (
          <Link to={`/${src}`} className="project-access">
            <AccessibilityLabel role="text" as="span">
              {title}. Released <Time as="span" year={release_year} month={release_month} />
            </AccessibilityLabel>
          </Link>
        )}
        <figure className="project-artwork" aria-hidden="true">
          {this._renderThumbnail(thumbnailToRender, src, title, autoplay)}
        </figure>
        {!img_only && (
          <div className="project-info" aria-hidden={hover}>
            <h3 className="title">{title}</h3>
            <Time year={release_year} month={release_month} />
          </div>
        )}
      </Tag>
    );
  }
}

export default ProjectThumbnail;
