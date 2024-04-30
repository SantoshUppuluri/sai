import React from 'react'
import './project.css'
import { FaGithub } from "react-icons/fa";
import {HiExternalLink} from "react-icons/hi"

const Project = () => {
  const projectData = [
    {
      id: 1,
      title: "TO-DO-LIST ",
      image: "./todolist.jpeg",

      projectDescription:
        "A simple responsive website developed using javascript and css.",
      stack: [
        { id: 1, tech: "Javascript" },
        { id: 2, tech: "CSS" },
      ],
      liveUrl: "https://santosh-todolist.netlify.app",
      githubUrl:
        "https://github.com/SantoshUppuluri/To-do-list",
    },
  ];
  return (
    <section id="project">
      <div className="project-container">
        <h2 className="Heading">PROJECTS</h2>
        {projectData.map((eachObj) => {
          return (
            <div className="innerContainer" key={eachObj.id}>
              <div className="project-image">
                <img src={eachObj.image} alt={eachObj.title} />
              </div>
              <div className="project-details ">
                <div className="project-title">
                  <h4> {eachObj.title} </h4>
                </div>
                <div className="project-description">
                  <p> {eachObj.projectDescription} </p>
                </div>
                <div className="stack ">
                  {eachObj.stack.map((eachItem) => {
                    return <div key={eachItem.id}>{eachItem.tech}</div>;
                  })}
                </div>
                <div className=" project-buttons">
                  <div className="githubButton">
                    <button className='buttonimg'>
                      {" "}
                      <a href={eachObj.githubUrl} target="_blank" rel='noreferrer'>
                        <div className="buttons-inside">
                          Github
                          <FaGithub />
                        </div>
                      </a>
                    </button>
                  </div>
                  <div className="liveButton">
                    <button className='buttonimg'>
                      {" "}
                      <a href={eachObj.liveUrl} target="_blank" rel='noreferrer'>
                        <div className="buttons-inside">
                          Preview
                          <HiExternalLink />
                        </div>
                      </a>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project