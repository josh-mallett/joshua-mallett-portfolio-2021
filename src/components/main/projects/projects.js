import React, { useState, useEffect, useCallback } from "react";
import { doHorizontalScroll } from "../../../shared/util/util-functions";
import ProjectsContentItem from './components/project-content-item';
import projectsData from './data.json';

import './projects.scss';

const Projects = ({ closeTransition, inTheMiddleOfTransition }) => {
  const horizontalScrollListener = useCallback((e) => {
    const projectsHorizScroll = document.getElementById("projects-horiz-scroll");
    if (!inTheMiddleOfTransition) doHorizontalScroll(projectsHorizScroll, e);
  }, [inTheMiddleOfTransition]);

  useEffect(() => {
    window.addEventListener("wheel", horizontalScrollListener);
    return () => window.removeEventListener("wheel", horizontalScrollListener);
  }, [inTheMiddleOfTransition]);

  return (
    <>
      <div
        id="projects"
        className="content-section"
        style={{
          animation: closeTransition
            ? "fly-out-left-like-a-ship .5s ease-in-out forwards"
            : "fly-up-like-a-ship 1s ease-in-out forwards",
        }}
      >
        <div className="content-title-section">
          <h1>PROJECTS</h1>
        </div>
        <div
          id="projects-horiz-scroll"
          className={"content-section-horizontal-scroll"}
        >
          {
            projectsData.map((projectDataItem, index) => {
              return (
                <ProjectsContentItem key={index} projectDataItem={projectDataItem}/> 
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export { Projects };
