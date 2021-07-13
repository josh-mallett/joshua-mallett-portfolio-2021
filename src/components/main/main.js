import React, { useState, useEffect } from "react";
import "./main.scss";

// components
import { Resume } from "./resume";
import { Projects } from "./projects";

const Main = () => {
  const [styles, setStyles] = useState({
    me: {},
    titleContainer: { opacity: "0" },
    ballMenu: { zIndex: "-1" },
    mainContainer: { zIndex: "-1" },
    linkedinIcon: { right: "0px", top: "0px", opacity: "0" },
    githubIcon: { left: "0px", top: "0px", opacity: "0" },
    resumeIcon: { right: "0px", top: "0px", opacity: "0" },
    projectsIcon: { left: "0px", top: "0px", opacity: "0" },
    contactIcon: { right: "0px", top: "0px", opacity: "0" },
  });
  const [showComponents, setShowComponents] = useState({
    resume: {
      show: false,
      closeTransition: false,
    },
    projects: {
      show: false,
      closeTransition: false,
    },
    openComponent: "none",
    inTheMiddleOfTransition: false,
  });

  useEffect(() => pageInitAnimations(), []);

  const pageInitAnimations = () => {
    setTimeout(() => meShrinkPop(), 900);
    setTimeout(() => smallBallsFlyOut(), 1150);
    setTimeout(() => titleAppear(), 1500);
    setTimeout(() => {
      setSmallBallsInPlace();
      smallBallsFloatAround();
      makeMenuClickable();
    }, 2000);
  };

  const titleAppear = () => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      titleContainer: { opacity: "1" },
    }));
  };

  const makeMenuClickable = () => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      ballMenu: { zIndex: "100" },
      mainContainer: { zIndex: "1" },
    }));
  };

  const meShrinkPop = () => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      me: { animation: "shrink-pop .5s forwards" },
    }));
  };

  const smallBallsFlyOut = () => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      linkedinIcon: {
        ...prevStyles.linkedinIcon,
        animation: "ball-fly-right-up .3s forwards",
        opacity: "1",
      },
      githubIcon: {
        ...prevStyles.githubIcon,
        animation: "ball-fly-left-up .3s forwards",
        opacity: "1",
      },
      resumeIcon: {
        ...prevStyles.resumeIcon,
        animation: "ball-fly-up .3s forwards",
        opacity: "1",
      },
      projectsIcon: {
        ...prevStyles.projectsIcon,
        animation: "ball-fly-left .3s forwards",
        opacity: "1",
      },
      contactIcon: {
        ...prevStyles.contactIcon,
        animation: "ball-fly-right .3s forwards",
        opacity: "1",
      },
    }));
  };

  const smallBallsFloatAround = () => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      linkedinIcon: {
        ...prevStyles.linkedinIcon,
        animation: "particle-float-loop 6s ease-in-out infinite",
      },
      githubIcon: {
        ...prevStyles.githubIcon,
        animation: "particle-float-loop 7s ease-in-out infinite",
      },
      resumeIcon: {
        ...prevStyles.resumeIcon,
        animation: "particle-float-loop 6.5s ease-in-out infinite",
      },
      projectsIcon: {
        ...prevStyles.projectsIcon,
        animation: "particle-float-loop 7.3s ease-in-out infinite",
      },
      contactIcon: {
        ...prevStyles.contactIcon,
        animation: "particle-float-loop 6.3s ease-in-out infinite",
      },
    }));
  };

  const setSmallBallsInPlace = () => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      linkedinIcon: {
        ...prevStyles.linkedinIcon,
        right: "-100px",
        top: "-140px",
      },
      githubIcon: { ...prevStyles.githubIcon, left: "-100px", top: "-140px" },
      resumeIcon: { ...prevStyles.resumeIcon, right: "25px", top: "-175px" },
      projectsIcon: { ...prevStyles.pojectsIcon, left: "-170px", top: "-60px" },
      contactIcon: { ...prevStyles.contactIcon, right: "-170px", top: "-60px" },
    }));
  };

  const toggleShowPage = (pageName) => {
    if (!showComponents.inTheMiddleOfTransition) {
      setShowComponents((prevShow) => ({
        ...prevShow,
        inTheMiddleOfTransition: true,
      }));
      // capture current page component that is open
      const currentOpenComponent = showComponents.openComponent;
      // start firing transition animations (if any)
      setShowComponents((prevShow) => ({
        ...prevShow,
        [pageName]: {
          ...prevShow[pageName],
          // if the pages menu icon was clicked again while page is open, start closing page
          closeTransition: currentOpenComponent !== "none",
        },
        openComponent: pageName,
      }));
      if (currentOpenComponent === "none") {
        // if no page is currently open, immediately show page
        setShowComponents((prevShow) => ({
          ...prevShow,
          [pageName]: {
            ...prevShow[pageName],
            show: true,
          },
        }));
      } else if (currentOpenComponent === pageName) {
        // if current page's icon is cicked again, close current page
        setTimeout(
          () =>
            setShowComponents((prevShow) => ({
              ...prevShow,
              [pageName]: {
                ...prevShow[pageName],
                show: false,
                closeTransition: false,
              },
              openComponent: "none",
            })),
          550
        );
      } else {
        setShowComponents((prevShow) => ({
          ...prevShow,
          [currentOpenComponent]: {
            ...prevShow[currentOpenComponent],
            closeTransition: true,
          },
        }));
        // if another page's icon was clicked, swap pages
        setTimeout(
          () =>
            setShowComponents((prevShow) => ({
              ...prevShow,
              [pageName]: {
                ...prevShow[pageName],
                show: true,
                closeTransition: false,
              },
              [currentOpenComponent]: {
                ...prevShow[currentOpenComponent],
                show: false,
                closeTransition: false,
              },
            })),
          550
        );
      }
      setTimeout(() => {
        setShowComponents((prevShow) => ({
          ...prevShow,
          inTheMiddleOfTransition: false,
        }));
      }, 1000);
    }
  };

  return (
    <>
      <div
        id="main"
        className="main-content-header"
        style={styles.mainContainer}
      >
        <div id="ball-container" className="ball-container content-centered">
          <div id="me" className="ball-large" style={styles.me}></div>
          <div
            id="menu"
            className="expanding-ball-menu"
            style={styles.ballMenu}
          >
            <a
              href="https://www.linkedin.com/in/joshua-mallett-1b5163125"
              target="_blank"
            >
              <div
                id="linkedin-icon"
                className="ball-small ball-absolute"
                style={styles.linkedinIcon}
              ></div>
            </a>
            <a href="https://github.com/josh-mallett" target="_blank">
              <div
                id="github-icon"
                className="ball-small ball-absolute"
                style={styles.githubIcon}
              ></div>
            </a>
            <div
              id="resume-icon"
              className="ball-small ball-absolute"
              style={styles.resumeIcon}
              onClick={() => toggleShowPage("resume")}
            >
              <div>resume</div>
            </div>
            <div
              id="projects-icon"
              className="ball-small ball-absolute"
              style={styles.projectsIcon}
              onClick={() => toggleShowPage("projects")}
            >
              <div>projects</div>
            </div>
            <a href="mailto:josh-mallett@outlook.com" target="_blank">
              <div
                id="contact-icon"
                className="ball-small ball-absolute"
                style={styles.contactIcon}
              >
                <div>contact</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="title" className="title-container" style={styles.titleContainer}>
        <h1 className="title-large">JOSHUA MALLETT</h1>
        <h3 className="title-medium header-spaced">SOFTWARE ENGINEER</h3>
      </div>
      {showComponents.resume.show && (
        <Resume closeTransition={showComponents.resume.closeTransition} inTheMiddleOfTransition={showComponents.inTheMiddleOfTransition}/>
      )}
      {showComponents.projects.show && (
        <Projects closeTransition={showComponents.projects.closeTransition} inTheMiddleOfTransition={showComponents.inTheMiddleOfTransition}/>
      )}
    </>
  );
};

export { Main };
