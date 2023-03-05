import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <div className="py-4 px-10 text-md flex justify-end gap-4 text-white font-Almarai ">
        <Link to="/dashboard">
          <div className="border border-[#CB2A77]  text-[#CB2A77] py-2 rounded-2xl px-4">
            Login
          </div>
        </Link>
        <Link to="/dashboard">
          <div className="border border-[#CB2A77]  text-[#CB2A77] py-2 rounded-2xl px-4 ">
            Sign Up
          </div>
        </Link>
      </div>
    </div>
  );
}

export function Part2() {
  return (
    <div className="  ml-20 -mt-20">
      <div>
        <div className="flex gap-4 items-end">
          <div className="bordernew p-[1.5px] rounded-xl">
            <div className=" h-12  w-14 rounded-xl  bg-black w-10"></div>
          </div>
          <div className="bordernew p-[1.5px] rounded-xl">
            <div className="pb-4 bg-black  font-bold text-lg pr-4  text-right pl-10 flex justify-end items-end  text-right pr-4  pb-4 text-lg w-52 h-28 rounded-xl">
              <div className="text-lg font-bold text-outline">
                Never Miss an interview
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-10">
          <div className="bordernew p-[1.5px] rounded-xl">
            <div className="bg-black font-semibold rounded-xl pt-4 px-4 text-lg font-bold  h-28 w-40 ">
              <div className="text-lg font-bold text-outline">
                Declutter your email
              </div>
            </div>
          </div>
          <div className="bordernew h-[50px] flex justify-center items-center p-[1.5px] rounded-xl">
            <div className="h-12 w-20 rounded-xl  bg-black "></div>
          </div>
        </div>
        <div className="-ml-4 flex gap-4 mt-10">
          <div className="bordernew p-[1.5px] rounded-xl">
            <div className="bg-black pb-4 font-bold text-lg pr-4 text-right pl-10 h-28 w-44 rounded-xl flex justify-end items-end ">
              <div className="text-lg font-bold text-outline">
                {" "}
                Instant notifications
              </div>
            </div>
          </div>
          <div className="-mt-24">
            <div className="bordernew p-[1.5px] rounded-xl">
              <div className="bg-black h-28 w-40 rounded-xl flex pr-2 pl-2 text-right text-lg font-bold items-center justify-end">
                <div className="text-lg font-bold text-outline">
                  Bring your carrer on track
                </div>
              </div>
            </div>
            <div className="bordernew p-[1.5px] mt-4 rounded-xl h-18 w-14 flex justify-center items-center rounded-xl">
              <div className="bg-black h-16 w-14 rounded-xl "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Body() {
  return (
    <div className="text-white mt-40 pb-20">
      <div className="flex ">
        <div className="flex-1 pl-28 flex justify-center">
          <div className="flex flex-col gap-10 flex-1">
            <div className="font-Almarai text-6xl text-outline ">
              CAREER TRACK
            </div>
            <div className="text-[#B6B2B2]">
              CareerTrack is a placement-focused web app designed to help
              college students track and analyze job opportunities. Our app
              offers personalized insights to each student to help them focus
              their preparation efforts and ace their interviews. With a
              user-friendly interface, students are reminded of new e-mails from
              the companies they have applied to and keep track of the updates
              through notes.
            </div>
            <div className="flex">
              <Link to="/dashboard">
                <div className="bg1 flex bg-blue-400 py-2 px-4 rounded-xl">
                  Sign up Now
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Part2 />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-black">
      <NavBar />
      <Body />
    </div>
  );
}
