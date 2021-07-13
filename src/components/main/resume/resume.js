import React, { useState, useEffect, useCallback } from "react";
import ResumeContentItem from "./components/resume-content-item";
import { doHorizontalScroll } from "../../../shared/util/util-functions";
import resumeData from "./data.json";

const Resume = ({ closeTransition, inTheMiddleOfTransition }) => {
  const horizontalScrollListener = useCallback(
    (e) => {
      const resumeHorizScroll = document.getElementById("resume-horiz-scroll");
      if (!inTheMiddleOfTransition) {
        doHorizontalScroll(resumeHorizScroll, e);
      }
    },
    [inTheMiddleOfTransition]
  );

  useEffect(() => {
    window.addEventListener("wheel", horizontalScrollListener);
    return () => window.removeEventListener("wheel", horizontalScrollListener);
  }, [inTheMiddleOfTransition]);

  return (
    <>
      <div
        id="resume"
        className="content-section"
        style={{
          animation: closeTransition
            ? "fly-out-left-like-a-ship .5s ease-in-out forwards"
            : "fly-up-like-a-ship 1s ease-in-out forwards",
        }}
      >
        <div className="content-title-section">
          <h1>RESUME</h1>
        </div>
        <div
          id="resume-horiz-scroll"
          className={"content-section-horizontal-scroll"}
        >
          {resumeData.map((resumeDataItem, index) => (
            <ResumeContentItem key={index} resumeDataItem={resumeDataItem} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Resume };
