import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { SlNote } from "react-icons/sl";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const Popup = (props) => {
  const [note, setNote] = useState();
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };
  useEffect(() => {
    setNote(props.items.task);
  }, []);
  const handlechange = async (e) => {
    console.log(props);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      _id: props.items._id,
      company: props.items.company,
      jobtitle: props.items.jobtitle,
      joblocation: props.items.joblocation,
      month: 1,
      status: props.items.status,
      task: note,
      __v: 0,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `https://foss-hack-api1.vercel.app/update/${props.items._id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setNote("");
    window.location.reload(false);
  };
  return (
    <div
      className="popup"
      style={{
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(211.42deg, rgba(203, 42, 119, 0.2) 2.89%, rgba(28, 13, 205, 0.176) 80.4%), linear-gradient(136.31deg, rgba(78, 77, 82, 0.4) 1.81%, rgba(78, 77, 82, 0) 100%)",
        backdropFilter: "blur(10px)",
        width: "600px",
        borderRadius: "10px",
        border: "0px solid white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          cursor: "pointer",
          padding: "10px",

          borderRadius: "50%",
        }}
        onClick={props.handleClick}
      >
        X
      </div>
      <div
        className="noteinput"
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "row",
        }}
      >
        <div className="notefd">Add Note</div>
        <input
          className="notefdinput"
          type="text"
          onChange={handleNoteChange}
          value={note}
        />
      </div>
      <div className="notebtn" onClick={handlechange}>
        Submit
      </div>
    </div>
  );
};

export function Options() {
  return (
    <div className="bg-[#161516]">
      <div className="pb-2 pl-16">
        <div className="w-60 pt-4 ">
          <div className="text-xl text-left text-outline">CAREER TRACK</div>
        </div>
        <div className=" text-[#E5E5E5]">User Name</div>
        <Link to="/resumeinput">
          <div className="tracking-wider pl-8 text-[#E5E5E5]"></div>
        </Link>
      </div>
    </div>
  );
}

export function Card(props) {
  return (
    <div>
      <div className="bg2 flex h-32 flex-col text-md  tracking-widest  rounded-xl text-[#E5E5E5] ">
        <div className="border-b-[1px] border-[#d9d9d947] flex-1 flex justify-center items-end  px-12 pb-4 ">
          {props.name}
        </div>
        <div className="px-12 h-10 flex justify-center text-[#FFFFFF5E] tracking-normal items-start mt-2">
          {props.item.length} JOBS
        </div>
      </div>
    </div>
  );
}
export function Company({
  item,
  company,
  jobtitle,
  status,
  setReRender,
  rerender,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [d, setD] = useState();
  const handleClick = () => {
    setShowPopup(!showPopup);
  };
  useEffect(() => {
    console.log(item.domain);
    setD(item.domain);
  }, []);
  useEffect(() => {
    console.log("HERE", d);
  }, [d]);
  const deleteEntry = async (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      company: "Google",
      jobtitle: "Intern",
      joblocation: "Noida",
      month: 1,
      status: "Wishlist",
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `https://foss-hack-api1.vercel.app/delete/${item._id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    window.location.reload(false);
  };

  const handlechange = (e) => {
    console.log(item, company, jobtitle, status, e.target.value);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      _id: item._id,
      company: item.company,
      jobtitle: item.jobtitle,
      joblocation: item.joblocation,
      month: 1,
      status: e.target.value,
      __v: 0,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://foss-hack-api1.vercel.app/update/${item._id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const [noti, setNoti] = useState(0);
  async function addDomain() {
    console.log("The d", d);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("Asdsads");
    var raw = JSON.stringify({
      _id: item._id,
      company: item.company,
      jobtitle: item.jobtitle,
      joblocation: item.joblocation,
      month: 1,
      status: item.status,
      domain: d,
      __v: 0,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `https://foss-hack-api1.vercel.app/update/${item._id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  function handleemail(e) {
    console.log("HERE", e.target.value);
    setD(e.target.value);
    console.log(d);
  }
  function getnotification() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      company: "Google",
      jobtitle: "Intern",
      joblocation: "Noida",
      month: 1,
      status: "Wishlist",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:8000/${d}`, requestOptions)
      .then((response) => response.text())
      .then((result) => setNoti(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="">
      <div className="font-Almarai rounded-xl mx-10 bg4 p-[0.7px]">
        <div className="items-center rounded-xl bg-black flex py-3  text-sm  justify-around">
          <div className="h-2 w-2 rounded-full -mr-10 bg1"></div>
          <div className="font-semibold text-lg text-[#D9D9D9]">{company}</div>
          <div className=" font-light -ml-7">{jobtitle}</div>
          <div className="-ml-6 text-[#CB2A77] font-light">Status</div>
          <div className="-ml-10 text-[#9F9A9A] border w-48">
            <select
              className="bg-black removeborder w-full px-2 py-1"
              name="status"
              id="status"
              onChange={handlechange}
            >
              <option value={status}>{status}</option>
              {status != "Wishlist" ? (
                <option value="Wishlist">Wishlist</option>
              ) : (
                <></>
              )}
              {status != "Applied" ? (
                <option value="Applied">Applied</option>
              ) : (
                <></>
              )}
              {status != "Interview" ? (
                <option value="Interview">Interview</option>
              ) : (
                <></>
              )}

              {status != "Offers" ? (
                <option value="Got it">Got it</option>
              ) : (
                <></>
              )}
            </select>
          </div>

          <div className="-ml-6 text-[#CB2A77] font-light">Email</div>
          <div className="-ml-6 text-[#9F9A9A] border w-60 mr-2 text-green-100 flex justify-center items-center ">
            <input
              className="mx-2 bg-black h-8"
              onChange={(e) => {
                setD(e.target.value);
              }}
              val={d}
            />
            <TiTick className="cursor-pointer" onClick={addDomain} />
          </div>

          <div>
            <div className="notepd">
              <SlNote onClick={handleClick} />
            </div>
            {showPopup && (
              <Popup
                showPopup={showPopup}
                handleClick={handleClick}
                items={item}
              />
            )}
          </div>
          <div
            className="text-[#D9D9D9] bg3 -ml-6 px-4 py-2 rounded-xl"
            onClick={getnotification}
          >
            Check for details
          </div>
          <div className="flex -ml-10 items-center gap-2">
            <div className="mt-1 bg-[#CB2A77] rounded-full h-5 w-5 flex justify-center items-center text-xs">
              {noti}
            </div>
            <div className="text-[#CB2A77] font-light">new notification</div>
          </div>
          <div
            className="text-lg text-[#9F9A9A] font-ligh cursor-pointer"
            onClick={deleteEntry}
          >
            x
          </div>
        </div>
      </div>
    </div>
  );
}
function CustomTooltip({ payload, label, active }) {
  if (active) {
    console.log(payload, label);
    return (
      <div className="border-black px-4">
        <p className="underline">{`${label} `}</p>
        <p className="">{`${payload[0].name} : ${payload[0].value}`}</p>
        <p className="">{`${payload[1].name} : ${payload[1].value}`}</p>
        <p className="">{`${payload[2].name} : ${payload[2].value}`}</p>
        <p className="">{`${payload[3].name} : ${payload[3].value}`}</p>
      </div>
    );
  }

  return null;
}
export function Part2(props) {
  console.log(props);
  const data = [
    { label: "Jan", wishlist: 0, applied: 0, interview: 0, offers: 0 },
    { label: "Feb", wishlist: 0, applied: 0, interview: 0, offers: 0 },
    { label: "Mar", wishlist: 0, applied: 0, interview: 0, offers: 0 },
    { label: "Apr", wishlist: 0, applied: 0, interview: 0, offers: 0 },
    { label: "May", wishlist: 0, applied: 0, interview: 0, offers: 0 },
    { label: "Jun", wishlist: 0, applied: 0, interview: 0, offers: 0 },
    { label: "Jul", wishlist: 0, applied: 0, interview: 0, offers: 0 },
    { label: "Aug", wishlist: 0, applied: 0, interview: 0, offers: 0 },
    { label: "Sept", wishlist: 1, applied: 0, interview: 0, offers: 0 },
    { label: "Oct", wishlist: 0, applied: 0, interview: 0, offers: 0 },
    { label: "Nov", wishlist: 0, applied: 0, interview: 0, offers: 0 },
    { label: "Dec", wishlist: 0, applied: 0, interview: 0, offers: 0 },
  ];

  // if (props.wishlist.length)
  //   props.wishlist.forEach((item, index, array) => {
  //     console.log(item.month, data[item.month].wishlist++);
  //   });

  if (props.applied.length)
    props.applied.forEach((item, index, array) => {
      console.log(item.month, data[item.month].applied++);
    });

  if (props.interview.length)
    props.interview.forEach((item, index, array) => {
      console.log(item.month, data[item.month].interview++);
    });

  if (props.offers.length)
    props.offers.forEach((item, index, array) => {
      console.log(item.month, data[item.month].offers++);
    });
  return (
    <div>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 15, right: 0, bottom: 15, left: 0 }}
          >
            <Tooltip content={<CustomTooltip />} />
            <XAxis dataKey="label" />
            <YAxis />
            <CartesianGrid stroke="#504f56" strokeDasharray="5 5" />
            <Legend />
            <Line type="monotone" dataKey="wishlist" stroke="#CB2A77" />
            <Line type="monotone" dataKey="applied" stroke="#9D7EE0" />
            <Line type="monotone" dataKey="interview" stroke="#150B8A" />
            <Line type="monotone" dataKey="offers" stroke="#B6B2B2" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export function MainPart(props) {
  const [rerender, setReRender] = useState(0);
  return (
    <div className="w-[1200px]">
      <div className="mt-10 flex justify-center">
        <div className=" -mx-10 w-6/12 justify-center items-center text-white gap-6 flex flex-wrap">
          <Card item={props.wishlist} name="WISHLIST" />
          <Card item={props.applied} name="APPLIED" />
          <Card item={props.interview} name="INTERVIEW" />
          <Card item={props.offers} name="OFFERS" />
        </div>
        <div className="flex-1 bg- w-2/12">
          <Part2
            applied={props.applied}
            wishlist={props.wishlist}
            interview={props.interview}
            offers={props.offers}
          />
        </div>
      </div>
      <div className="-mx-4 mt-16 flex flex-col gap-6 ">
        {props.alldata.map((item) => (
          <Company
            item={item}
            company={item.company}
            jobtitle={item.jobtitle}
            status={item.status}
            getData={props.getData}
            setReRender={setReRender}
            rerender={rerender}
          />
        ))}
      </div>
    </div>
  );
}

export default function DashBoard() {
  const [interview, setInterview] = useState([]);
  const [offers, setOffer] = useState([]);
  const [applied, setApplied] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [alldata, setAllData] = useState([]);
  function getData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = "";
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://foss-hack-api1.vercel.app/getinterview", requestOptions)
      .then((response) => response.json())
      .then((result) => setInterview(result))
      .catch((error) => console.log("error", error));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://foss-hack-api1.vercel.app/getoffers", requestOptions)
      .then((response) => response.json())
      .then((result) => setOffer(result))
      .catch((error) => console.log("error", error));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://foss-hack-api1.vercel.app/getapplied", requestOptions)
      .then((response) => response.json())
      .then((result) => setApplied(result))
      .catch((error) => console.log("error", error));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://foss-hack-api1.vercel.app/getwishlist", requestOptions)
      .then((response) => response.json())
      .then((result) => setWishlist(result))
      .catch((error) => console.log("error", error));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://foss-hack-api1.vercel.app/getall", requestOptions)
      .then((response) => response.json())
      .then((result) => setAllData(result))
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-black pb-10  text-white">
      <div className="flex flex-col">
        <Options />
        <MainPart
          applied={applied}
          wishlist={wishlist}
          interview={interview}
          offers={offers}
          alldata={alldata}
          getData={getData}
        />
      </div>
    </div>
  );
}
