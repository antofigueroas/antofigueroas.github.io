import React from "react";
import { NavLink } from "react-router-dom";
import { throttle } from "lodash";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import "./index.scss";
import AccessibilityLabel from "../AccessibilityLabel";
import DesignWork from "../../Assets/design-work.json";
import ProjectThumbnail from "../ProjectThumbnail";
import logo from "./tgs.png";

class GlobalHeader extends React.PureComponent {
  constructor(props) {
    super(props);

    this._updateSearchQuery = this._updateSearchQuery.bind(this);
    this._openSearch = this._openSearch.bind(this);
    this._escapeKeyPress = this._escapeKeyPress.bind(this);
    this._closeSearch = this._closeSearch.bind(this);
    this._toggleNav = this._toggleNav.bind(this);
    this._showHeaderBorder = this._showHeaderBorder.bind(this);
    this._hideHeaderBorder = this._hideHeaderBorder.bind(this);
    this.state = {
      navOpen: false,
      searchOpen: false,
      showHeaderBorder: false,
      searchQuery: "",
      headerMarginBottom: undefined,
    };
    this.searchField = React.createRef();
    this.searchResults = React.createRef();
  }

  componentDidMount() {
    const headerMarginBottom = window
      .getComputedStyle(this.headerElement)
      .getPropertyValue("margin-bottom")
      .replace("px", "");
    this.setState({ headerMarginBottom });
    window.addEventListener("scroll", this._throttledScrollCheck);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._throttledScrollCheck);
    clearAllBodyScrollLocks();
  }

  _throttledScrollCheck = throttle(() => {
    window.scrollY > this.state.headerMarginBottom
      ? this._showHeaderBorder()
      : this._hideHeaderBorder();
  }, 250);

  _showHeaderBorder() {
    this.setState({
      showHeaderBorder: true,
    });
  }

  _hideHeaderBorder() {
    this.setState({
      showHeaderBorder: false,
    });
  }

  _updateSearchQuery(event) {
    this.setState({
      searchQuery: event.target.value.substr(0, 100).toLowerCase(),
    });
  }

  _openSearch() {
    this.setState({
      searchOpen: true,
    });

    disableBodyScroll(this.searchResults.current);
    this.searchField.current.focus();
    document.body.addEventListener("keydown", this._escapeKeyPress);
  }

  _escapeKeyPress(e) {
    if (e.key === "Escape" || e.key === "Esc") {
      this.searchField && this.searchField.current.blur();
      this._closeSearch();
      document.body.removeEventListener("keydown", this._escapeKeyPress);
    }
  }

  _closeSearch() {
    setTimeout(() => {
      this.setState({
        searchOpen: false,
        searchQuery: "",
      });

      enableBodyScroll(this.searchResults.current);
    }, 200);
  }

  _toggleNav() {
    if (this.state.navOpen === false && this.state.showHeaderBorder === false) {
      this.setState({
        showHeaderBorder: true,
      });

      setTimeout(() => {
        this.setState({
          navOpen: true,
        });
      }, 300);
    } else {
      this.setState((prevState) => ({
        navOpen: !prevState.navOpen,
      }));

      setTimeout(() => {
        this._throttledScrollCheck();
      }, 2000);
    }
  }

  render() {
    const {
      sticky,
      backgroundColor,
    } = this.props;
    let searchResults = DesignWork.DesignWork.filter((project) => {
      return this.state.searchQuery.length
        ? project.title.toLowerCase().indexOf(this.state.searchQuery) !== -1
        : null;
    });

    return (
      <header
        className="global-header"
        data-sticky={sticky}
        data-search-open={this.state.searchOpen}
        data-show-border={
          this.state.showHeaderBorder === true
            ? sticky
              ? "true"
              : "false"
            : this.state.searchOpen
            ? "true"
            : "false"
        }
        style={{
          "--background-color": backgroundColor
        }}
        ref={(headerElement) => {
          this.headerElement = headerElement;
        }}
      >
        <div className="header-content">
          <div className="top-bar">
            <div className="sopaipilla-menu" data-open={this.state.navOpen}>
              <button
                className="toggle"
                onClick={this._toggleNav}
                aria-hidden="true"
              >
                <AccessibilityLabel>
                  {this.navOpen === true ? "Close" : "Open"} menu
                </AccessibilityLabel>
              </button>
              <span className="sopaipilla top">
                <span className="inner-sopaipilla"></span>
              </span>
              <span className="sopaipilla bottom">
                <span className="inner-sopaipilla"></span>
              </span>
            </div>
            <h1 aria-hidden={this.state.navOpen}>
              <NavLink className="nav-item" exact to="/" aria-hidden="true">
                <img src={logo} alt="Logo" style={{ height: "28px", marginTop: "10px" }} />
              </NavLink>
            </h1>
          </div>
          <nav data-open={this.state.navOpen}>
            <ul>
              <li>
                <NavLink
                  className="nav-item"
                  activeClassName="active"
                  exact
                  to="/"
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-item"
                  activeClassName="active"
                  exact
                  to="/about"
                >
                  About Me
                </NavLink>
              </li>
              {/* Resume y Search eliminados */}
            </ul>
          </nav>
        </div>
        <div className="translucent-overlay" />
      </header>
    );
  }
}

export default GlobalHeader;
