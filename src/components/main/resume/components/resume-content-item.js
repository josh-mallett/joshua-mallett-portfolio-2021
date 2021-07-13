import React from "react";
import ResumeContentFooterIcon from "../../../shared/content-footer-icon";

const ResumeContentItem = ({ resumeDataItem = {} }) => {
  const determineSubtitle = () => {
    const type =
      resumeDataItem && resumeDataItem.type
        ? resumeDataItem.type.toLowerCase()
        : "";
    if (type === "experience") return resumeDataItem.company;
    if (type === "education") return resumeDataItem.college;
  };

  return (
    <>
      <div className={"page-subsection-item resume-content-item"}>
        <div className={"page-subsection-item-title"}>
          <div className="title-subtitle-box">
            <h2>{resumeDataItem.title}</h2>
            <span>
              {determineSubtitle() +
                " | " +
                resumeDataItem.from +
                " - " +
                resumeDataItem.to}
            </span>
          </div>
          <div className="title-subject-box">
            <div
              className={
                "title-subject-badge " +
                resumeDataItem.type.toLowerCase() +
                "-badge"
              }
            >
              {resumeDataItem.type}
            </div>
          </div>
        </div>
        <div className={"page-subsection-item-content"}>
          <p>{resumeDataItem.description}</p>
        </div>
        <div className={"page-subsection-item-footer"}>
          {resumeDataItem.skillsUsed.map((skill, index) => (
            <ResumeContentFooterIcon key={index} iconName={skill} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResumeContentItem;
