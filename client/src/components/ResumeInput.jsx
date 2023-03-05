import "./ResumeInput.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Resume from "./Resume";
function ResumeInput() {
  const [nameinput, setNameinput] = useState("");
  const [mobileinput, setMobileinput] = useState("");
  const [githubinput, setGithubinput] = useState("");
  const [emailinput, setEmailinput] = useState("");
  const [linkedininput, setLinkedininput] = useState("");
  const [skillsinput, setSkillsinput] = useState("");
  const [collegeinput, setCollegeinput] = useState([]);
  const [disciplineinput, setDisciplineinput] = useState("");
  const [frominput, setFrominput] = useState("");
  const [degreeinput, setDegreeinput] = useState("");
  const [marksinput, setMarksinput] = useState("");
  const [toinput, setToinput] = useState("");
  const [titleinput, setTitleinput] = useState("");
  const [descriptioninput, setDescriptioninput] = useState("");
  const [linkinput, setLinkinput] = useState("");
  const [hobbiesinput, setHobbiesinput] = useState("");
  const [projectIndex, setProjectIndex] = useState(0);
  const [educationIndex, setEducationIndex] = useState(0);
  const [hobbiesIndex, setHobbiesIndex] = useState(0);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [resume, setResume] = useState(0);
  const [organisation, setOrganisation] = useState("");
  const [positon, setPosition] = useState("");
  const [toexp, setToexp] = useState("");
  const [fromexp, setFromexp] = useState("");
  const [descriptionexp, setDescriptionexp] = useState("");
  const [experience, setExperience] = useState([]);

  const handleName = (e) => {
    setNameinput(e.target.value);
  };
  const handleMobile = (e) => {
    setMobileinput(e.target.value);
  };
  const handleGithub = (e) => {
    setGithubinput(e.target.value);
  };
  const handleEmail = (e) => {
    setEmailinput(e.target.value);
  };
  const handleLinkedin = (e) => {
    setLinkedininput(e.target.value);
  };
  const handleSkills = (e) => {
    setSkillsinput(e.target.value);
  };
  const handleCollege = (e) => {
    setCollegeinput(e.target.value);
  };
  const handleDiscipline = (e) => {
    setDisciplineinput(e.target.value);
  };
  const handleFrom = (e) => {
    setFrominput(e.target.value);
  };
  const handleDegree = (e) => {
    setDegreeinput(e.target.value);
  };
  const handleMarks = (e) => {
    setMarksinput(e.target.value);
  };
  const handleTo = (e) => {
    setToinput(e.target.value);
  };
  const handleTitle = (e) => {
    setTitleinput(e.target.value);
  };
  const handleDescription = (e) => {
    setDescriptioninput(e.target.value);
  };
  const handleHobbies = (e) => {
    setHobbiesinput(e.target.value);
  };

  const handleLinkinput = (e) => {
    setLinkinput(e.target.value);
  };
  const handleOrganisation = (e) => {
    setOrganisation(e.target.value);
  };
  const handlePosition = (e) => {
    setPosition(e.target.value);
  };
  const handleFromexp = (e) => {
    setFromexp(e.target.value);
  };
  const handleToexp = (e) => {
    setToexp(e.target.value);
  };
  const handleDescriptionexp = (e) => {
    setDescriptionexp(e.target.value);
  };

  const addEducation = () => {
    const item = {
      college: collegeinput,
      degree: degreeinput,
      discipline: disciplineinput,
      marks: marksinput,
      from: frominput,
      to: toinput,
    };
    setEducation((previous) => [...previous, item]);
    setCollegeinput("");
    setDegreeinput("");
    setDisciplineinput("");
    setMarksinput("");
    setFrominput("");
    setToinput("");
  };
  const addProject = () => {
    const item = {
      title: titleinput,
      description: descriptioninput,
      link: linkinput,
    };
    setProjects((previous) => [...previous, item]);
    setTitleinput("");
    setDescriptioninput("");
    setLinkinput("");
  };

  const addHobbies = () => {
    const item = {
      description: hobbiesinput,
    };
    setHobbies((previous) => [...previous, item]);
    setHobbiesinput("");
  };
  const addExperience = () => {
    const item = {
      organisation: organisation,
      positon: positon,
      from: fromexp,
      to: toexp,
      description: descriptionexp,
    };
    setExperience((previous) => [...previous, item]);
    setOrganisation("");
    setPosition("");
    setFromexp("");
    setToexp("");
    setDescriptionexp("");
  };

  const donehobbies = () => {};

  const resumesendhandler = () => {
    setResume(1);
  };

  return (
    <div className="mb-10 ">
      <div className="bg ">
        <div className="sidebar">
          <h2 className="heading">CAREER TRACK</h2>
          <h3 className="username">User Name</h3>
          <h3 className="resume">CREATE RESUME</h3>
        </div>
        <div className="main">
          <h1 className="hdres">Let's create your resume</h1>
          <h2 className="hdres1">Fill in the details to get started</h2>
          <div className="personal">
            <div className="personal1">
              <div className="fullpersonal">
                <div className="leftpart">
                  <h3 className="personalhd">PERSONAL DETAILS</h3>
                  <div className="name">
                    <h4 className="namehd">Name</h4>
                    <input
                      className="nameinput"
                      onChange={handleName}
                      type="text"
                      value={nameinput}
                    />
                  </div>
                  <div className="mobile">
                    <h4 className="mobilehd">Mobile</h4>
                    <input
                      className="mobileinput"
                      onChange={handleMobile}
                      type="text"
                    />
                  </div>
                  <div className="github">
                    <h4 className="githubhd">GitHub</h4>
                    <input
                      className="githubinput"
                      onChange={handleGithub}
                      type="text"
                    />
                  </div>
                </div>
                <div className="rightpart">
                  <div className="email">
                    <h4 className="emailhd pl-32">Email</h4>
                    <input
                      className="emailinput"
                      onChange={handleEmail}
                      type="text"
                    />
                  </div>
                  <div className="linkedin">
                    <h4 className="linkedinhd">LinkedIn</h4>
                    <input
                      className="linkedininput"
                      onChange={handleLinkedin}
                      type="text"
                    />
                  </div>
                  <div className="skills">
                    <h4 className="skillshd">Skills</h4>
                    <input
                      className="skillsinput"
                      onChange={handleSkills}
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* */}

          <div className="personal">
            <div className="personal1">
              <div className="fullpersonal">
                <div className="leftpart">
                  <h3 className="personalhd">EDUCATION</h3>
                  <div className="name">
                    <h4 className="namehd">College</h4>
                    <input
                      className="collegeinput"
                      onChange={handleCollege}
                      value={collegeinput}
                      type="text"
                    />
                  </div>
                  <div className="mobile">
                    <h4 className="mobilehd">Discipline</h4>
                    <input
                      className="disciplineinput"
                      onChange={handleDiscipline}
                      value={disciplineinput}
                      type="text"
                    />
                  </div>
                  <div className="github">
                    <h4 className="githubhd">From</h4>
                    <input
                      className="frominput"
                      onChange={handleFrom}
                      value={frominput}
                      type="text"
                    />
                  </div>
                </div>
                <div className="rightpart" style={{}}>
                  <div className="email">
                    <h4 className="emailhd pl-32">Degree</h4>
                    <input
                      className="degreeinput"
                      onChange={handleDegree}
                      value={degreeinput}
                      type="text"
                    />
                  </div>
                  <div className="linkedin">
                    <h4 className="linkedinhd">Marks/CGPA</h4>
                    <input
                      className="marksinput"
                      onChange={handleMarks}
                      value={marksinput}
                      type="text"
                    />
                  </div>
                  <div className="skills totalto">
                    <h4 className="skillshd">To</h4>
                    <input
                      className="toinput"
                      onChange={handleTo}
                      value={toinput}
                      type="text"
                    />

                    <div className="add">
                      {" "}
                      <button className="addbtn" onClick={addEducation}>
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {education.map((item, index) => (
                <div className="fullpersonal border-t mt-20 pt-10">
                  <div className="leftpart">
                    <div className="name">
                      <h4 className="namehd">College</h4>
                      <input
                        className="collegeinput"
                        value={item.college}
                        type="text"
                      />
                    </div>
                    <div className="mobile">
                      <h4 className="mobilehd">Discipline</h4>
                      <input
                        className="disciplineinput"
                        value={item.discipline}
                        type="text"
                      />
                    </div>
                    <div className="github">
                      <h4 className="githubhd">From</h4>
                      <input
                        className="frominput"
                        value={item.from}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="rightpart" style={{}}>
                    <div className="email">
                      <h4 className="emailhd pl-32">Degree</h4>
                      <input
                        className="degreeinput"
                        value={item.degree}
                        type="text"
                      />
                    </div>
                    <div className="linkedin">
                      <h4 className="linkedinhd">Marks/CGPA</h4>
                      <input
                        className="marksinput"
                        value={item.marks}
                        type="text"
                      />
                    </div>
                    <div className="skills totalto">
                      <h4 className="skillshd">To</h4>
                      <input className="toinput" value={item.to} type="text" />

                      <div className="add">
                        {" "}
                        <button className="addbtn" onClick={addEducation}>
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg1  mt-10 w-[900px] p-[2px] rounded-xl">
            <div className="px-8 py-4 bg-black rounded-xl">
              <div className="mt-4 mb-4 ">
                <h3 className=" personalhd ">Experience</h3>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex gap-10">
                  <div className="flex justify-center items-cer  gap-4">
                    <div>Organisation</div>
                    <div>
                      <input
                        className="w-72 bg-black border h-10 rounded-xl"
                        value={organisation}
                        onChange={handleOrganisation}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-cer  gap-4">
                    <div>Positon</div>
                    <div>
                      <input
                        className="w-72 bg-black border h-10 rounded-xl"
                        value={positon}
                        onChange={handlePosition}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="flex justify-center items-cer  gap-4">
                    <div className="mr-14 ">From</div>
                    <div>
                      <input
                        className="w-72 bg-black border h-10 rounded-xl"
                        value={fromexp}
                        onChange={handleFromexp}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-cer  gap-4">
                    <div>To</div>
                    <div className="ml-6">
                      <input
                        className="w-72 bg-black border h-10 rounded-xl"
                        value={toexp}
                        onChange={handleToexp}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-10 justify-center items-center ">
                  <div>Description</div>
                  <input
                    className="bg-black border h-10 rounded-xl w-full"
                    value={descriptionexp}
                    onChange={handleDescriptionexp}
                  />
                  <div className="add">
                    <button className="addbtn " onClick={addExperience}>
                      ADD
                    </button>
                  </div>
                </div>
              </div>

              {experience.map((item) => (
                <div className="mt-20 border-t pt-10 flex flex-col gap-10">
                  <div className="flex gap-10">
                    <div className="flex justify-center items-cer  gap-4">
                      <div>Organisation</div>
                      <div>
                        <input
                          className="w-72 bg-black border h-10 rounded-xl"
                          value={item.organisation}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-cer  gap-4">
                      <div>Positon</div>
                      <div>
                        <input
                          className="w-72 bg-black border h-10 rounded-xl"
                          value={item.positon}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div className="flex justify-center items-cer  gap-4">
                      <div className="mr-14 ">From</div>
                      <div>
                        <input
                          className="w-72 bg-black border h-10 rounded-xl"
                          value={item.from}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-cer  gap-4">
                      <div>To</div>
                      <div className="ml-6">
                        <input
                          className="w-72 bg-black border h-10 rounded-xl"
                          value={item.to}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-10 justify-center items-center ">
                    <div>Description</div>
                    <input
                      className="bg-black border h-10 rounded-xl w-full"
                      value={item.description}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*projects */}

          <div className="personal">
            <div className="personal1">
              <div className="fullpersonal">
                <div className="leftpart">
                  <h3 className="personalhd">PROJECTS</h3>
                  <div className="name">
                    <h4 className="namehd">Title</h4>
                    <input
                      className="titleinput"
                      onChange={handleTitle}
                      value={titleinput}
                      type="text"
                    />
                  </div>
                  <div className="mobile desc">
                    <h4 className="mobilehd">Description</h4>
                    <input
                      className="descriptioninput"
                      onChange={handleDescription}
                      value={descriptioninput}
                      type="text"
                      style={{ width: "600px" }}
                    />
                    <div className="add">
                      {" "}
                      <button className="addbtn " onClick={addProject}>
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="rightpart -mr-72 text-[10px]"
                  style={{ height: "50%" }}
                >
                  <div className="email pt-2">
                    <h4 className="emailhd pl-16 text-lg">Link</h4>
                    <input
                      className="linkinput h-10"
                      onChange={handleLinkinput}
                      value={linkinput}
                      type="text"
                    />
                  </div>

                  <div className="skills totalto"></div>
                </div>
              </div>
              {projects.map((item, index) => (
                <div className="fullpersonal border-t mt-20 pt-10">
                  <div className="leftpart">
                    <div className="name">
                      <h4 className="namehd">Title</h4>
                      <input
                        className="titleinput"
                        type="text"
                        value={item.title}
                      />
                    </div>
                    <div className="mobile desc">
                      <h4 className="mobilehd">Description</h4>
                      <input
                        className="descriptioninput"
                        type="text"
                        style={{ width: "600px" }}
                        value={item.description}
                      />
                      <div className="add">
                        {" "}
                        <button className="addbtn " onClick={addProject}>
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rightpart -mr-72 text-[10px]"
                    style={{ height: "50%" }}
                  >
                    <div className="email pt-2">
                      <h4 className="emailhd pl-16 text-lg">Link</h4>
                      <input
                        className="linkinput h-10"
                        type="text"
                        value={item.link}
                      />
                    </div>

                    <div className="skills totalto"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* achievements*/}

          <div className="personal">
            <div className="personal1">
              <div className="fullpersonal">
                <div className="leftpart">
                  <h3 className="personalhd">HOBBIES / ACHIEVEMENTS</h3>

                  <div className="mobile desc">
                    <h4 className="mobilehd">Description</h4>
                    <input
                      className="hobbiesinput"
                      onChange={handleHobbies}
                      value={hobbiesinput}
                      type="text"
                      style={{ width: "600px" }}
                    />
                    <div className="add">
                      {" "}
                      <button className="addbtn" onClick={addHobbies}>
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rightpart" style={{ height: "50%" }}>
                  <div className="skills totalto"></div>
                </div>
              </div>
              {hobbies.map((item, index) => (
                <div className="fullpersonal">
                  <div className="leftpart">
                    <div className="mobile desc">
                      <h4 className="mobilehd">Description</h4>
                      <input
                        className="hobbiesinput"
                        onChange={handleHobbies}
                        value={item.description}
                        type="text"
                        style={{ width: "600px" }}
                      />
                      <div className="add">
                        {" "}
                        <button className="addbtn" onClick={donehobbies}>
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rightpart" style={{ height: "50%" }}>
                    <div className="skills totalto "></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center ">
              <div
                className="z-10 w-16 text-white py-2 add addbtn h-10"
                onClick={resumesendhandler}
              >
                Submit
              </div>
              {resume == 1 ? (
                <Resume
                  name={nameinput}
                  mobile={mobileinput}
                  github={githubinput}
                  email={emailinput}
                  linkedin={linkedininput}
                  skills={skillsinput}
                  education={education}
                  projects={projects}
                  hobbies={hobbies}
                  experience={experience}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 text-white bg-red-100 h-10 add">Submit</div>
    </div>
  );
}

export default ResumeInput;
