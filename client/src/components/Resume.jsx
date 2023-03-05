import React from "react";
import Pdf from "react-to-pdf";

export function Work(item) {
  return (
    <div className="mt-2">
      <div className="flex justify-between text-sm">
        <div className="font-semibold text-black">
          {item.item.position} at {item.item.organisation}
        </div>
        <div className="text-black">
          {item.item.from} - {item.item.to}
        </div>
      </div>
      <div className="text-sm text-black">{item.item.description}</div>
    </div>
  );
}

export function Projects(item) {
  return (
    <div className="mt-2 ">
      <div className="text-black font-semibold text-lg">{item.item.title}</div>
      <div>
        <a href="" className="text-blue-600 underline">
          {item.item.link}
        </a>
      </div>
      <div className="text-sm text-black">{item.item.description}</div>
    </div>
  );
}

export function Education({ item }) {
  return (
    <div className=" mt-2 ">
      <div className=" text-black flex text-sm justify-between">
        <div className="text-black">
          {item.from}-{item.to}
        </div>
        <div className="text-black">
          {item.degree} {item.college}
        </div>
        <div className="text-black">(CGPA: {item.marks} )</div>
      </div>
    </div>
  );
}
const ref = React.createRef();
export default function Resume(props) {
  return (
    <div className="pl-[800px] text-black">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <div className="pb-60">
          <div className="text-5xl text-center text-black">Pranav</div>
          <div>Socials</div>
          <div className="mt-8  mx-16">
            <div className="text-black text-xl pb-2  border-b-2 border-black">
              WORK EXPERIENCE
            </div>
            <div className="pt-2 text-black">
              {props.experience.map((item) => (
                <Work item={item} />
              ))}
            </div>
          </div>
          <div className="mt-8  mx-16">
            <div className="text-black text-xl pb-2  border-b-2 border-black">
              PROJECTS
            </div>
            <div className="pt-2">
              {props.projects.map((item, index) => (
                <Projects item={item} />
              ))}
            </div>
          </div>
          <div className="mt-8  mx-16">
            <div className="text-black text-xl pb-2  border-b-2 border-black">
              EDUCATION
            </div>
            <div className="pt-2">
              {props.education.map((item, index) => (
                <Education item={item} />
              ))}
            </div>
          </div>
          <div className="mt-8  mx-16">
            <div className="text-black text-xl pb-2  border-b-2 border-black">
              SKILLS
            </div>
            <div className="text-black pt-2 text-sm">{props.skills}</div>
          </div>
          <div className="mt-8  mx-16">
            <div className="text-black text-xl pb-2  border-b-2 border-black">
              ACHIVEMENTS AND HOBBIES
            </div>
            {props.hobbies.map((item) => (
              <div className="text-black pt-2 text-sm">{item.description}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
