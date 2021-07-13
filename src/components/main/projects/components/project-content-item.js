import React from "react";
import ContentFooterIcon from "../../../shared/content-footer-icon";

const ProjectContentItem = ({ projectDataItem = {} }) => {
  return (
    <>
      <div className={"page-subsection-item project-content-item"}>
        <div className={"page-subsection-item-title"}>
          <div className="title-subtitle-box">
            <h2>{projectDataItem.name}</h2>
            <div className={"project-buttons"}>
              {projectDataItem.url && (
                <a href={projectDataItem.url} target="_blank">
                  <div className="launch-button subtitle-button">
                    <div className="subtitle-button-icon launch-icon"></div>
                    <span>Launch</span>
                  </div>
                </a>
              )}
              {projectDataItem.githubUrl && (
                <a href={projectDataItem.githubUrl} target="_blank">
                  <div className="github-button subtitle-button">
                    <div className="subtitle-button-icon github-icon"></div>
                    <span>Github</span>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={"page-subsection-item-content"}>
          <p>{projectDataItem.description}</p>
        </div>
        <div className={"page-subsection-item-footer"}>
          {projectDataItem.skillsUsed.map((skill, index) => (
            <ContentFooterIcon key={index} iconName={skill} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectContentItem;
