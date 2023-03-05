import { useState } from "react"

import "./popup.css"

function IndexPopup() {
  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [selectedValue, setSelectedValue] = useState()
  const handleDrop = (e: any) => {
    setSelectedValue(e.target.value)
  }
  function onSub() {
    fetch("https://foss-hack-api1.vercel.app/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // Data to be sent in the request body
        company: company,
        jobtitle: role,
        joblocation: location,
        status: selectedValue
      })
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data)
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error)
      })
  }
  return (
    <div className="bg">
      <h3>Enter Job Role: </h3>
      <div className="textouter">
        <input type="text" onChange={(e) => setRole(e.target.value)} />
      </div>
      <h3>Enter Company Name: </h3>
      <div className="textouter">
        <input type="text" onChange={(e) => setCompany(e.target.value)} />
      </div>
      <h3>Location: </h3>
      <div className="textouter">
        <input type="text" onChange={(e) => setLocation(e.target.value)} />
      </div>
      <h3>Application Type: </h3>
      <div className="textouter">
        <select
          className="applntype"
          style={{}}
          value={selectedValue}
          onChange={handleDrop}>
          <option selected value="Applied">
            Applied
          </option>
          <option value="Interview">Interview</option>
          <option value="Wishlist">Wishlist</option>
          <option value="Offers">Offers</option>
        </select>
      </div>
      <button className="btn" onClick={onSub}>
        ADD
      </button>
    </div>
  )
}

export default IndexPopup
