import { useState, useEffect } from "react"
import Header from "./Header"
import { useNavigate } from "react-router-dom"
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


function ContactForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [streetAddress, setStreetAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [plan, setPlan] = useState("")
  const [comment, setComment] = useState("")
  const [businessOrResidential, setBusinessOrResidential] = useState("")
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      firstName,
      lastName,
      fullName,
      email,
      phone,
      streetAddress,
      city,
      state,
      zipCode,
      businessOrResidential,
      plan,
      comment,
    };


    // Send POST request to server-side endpoint
    try {
      const response = await fetch('/save-to-excel', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      console.log('Data saved to Excel successfully!');
      navigate("/confirmation"); // Navigate to confirmation page
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error gracefully (e.g., display error message to user)
    }
  };


  return (
    <>
      <Header />
      <form className="lof-blue"
        onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-center mt-20 ">
          <section className="flex flex-col mr-2 p-10">
            <span className="label-text text-white text-xl">First Name</span>
            <input type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered rounded-none w-full max-w-xs mb-6"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}

            />
            <span className="label-text text-white text-xl">Last Name</span>
            <input type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered rounded-none w-full max-w-xs mb-6"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setFullName(firstName + " " + e.target.value)
              }}
            />
            <span className="label-text text-white text-xl">E-Mail Address</span>
            <input type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="input input-bordered rounded-none w-full max-w-xs mb-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="label-text text-white text-xl">Phone</span>
            <input type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered rounded-none w-full max-w-xs"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />


          </section>

          <section className="flex flex-col ml-2 p-10">
            <span className="label-text text-white text-xl">Street Address</span>
            <input type="text"
              id="streetAddress"
              name="streetAddress"
              placeholder="Street Address"
              className="input input-bordered rounded-none w-full max-w-xs mb-6"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <span className="label-text text-white text-xl">City</span>
            <input type="text"
              id="city"
              name="city"
              placeholder="City"
              className="input input-bordered rounded-none w-full max-w-xs mb-6"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <span className="label-text text-white text-xl">State</span>
            <input type="text"
              id="state"
              name="state"
              placeholder="State"
              className="input input-bordered rounded-none w-full max-w-xs mb-6"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <span className="label-text text-white text-xl">Zip Code</span>
            <input type="text"
              id="zipCode"
              name="zipCode"
              placeholder="Zip Code"
              className="input input-bordered rounded-none w-full max-w-xs mb-6"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />

          </section>

          <section className="flex flex-col ml-5 mt-8">
            <span className="label-text text-white text-xl">How Can We Help?</span>
            <textarea
              name="comment"
              id="comment"
              cols="50"
              rows="7"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            >
            </textarea>
            <br />

            <span className="label-text text-white text-xl mt-2">Business or Residential</span>
            <select
              id="businessOrResidential"
              name="businessOrResidential"
              value={businessOrResidential}
              className="mt-2 h-8"
              onChange={(e) => setBusinessOrResidential(e.target.value)}>
              <option value="">Select One</option>
              <option value="Residential">Residential</option>
              <option value="Business">Business</option>
            </select>

            {/* Plans */}
            {/* if residential is selected show the residential options, if business is selected show the business options */}

            {businessOrResidential === "Residential" ? (
              <>
                <span className="label-text text-white text-xl mt-3">Select a Plan</span>
                <select
                  name="plan"
                  id="plan"
                  value={plan}
                  className="mt-2 h-8"
                  onChange={(e) => setPlan(e.target.value)}>
                  <option value="">Select A Plan</option>
                  <option value="500 Mbps">Fiber 500 Mbps</option>
                  <option value="2 Gbps">Fiber 2 Gbps</option>
                  <option value="5 Gbps">Fiber 5 Gbps</option>
                </select>
              </>
            ) : (
              <>
                <span className="label-text text-white text-xl mt-3">Select a Plan</span>
                <select
                  name="plan"
                  id="plan"
                  value={plan}
                  className="mt-2 h-8"
                  onChange={(e) => setPlan(e.target.value)}>
                  <option value="">Select A Plan</option>
                  <option value="1 Gbps">Fiber 1 Gbps</option>
                  <option value="2 Gbps">Fiber 2 Gbps</option>
                  <option value="5 Gbps">Fiber 5 Gbps</option>
                </select>
              </>
            )}

          </section>
        </div>

        <section className="flex justify-center">
          <button type="submit" className="btn lof-red text-white border-white rounded-tr-xl rounded-none mb-20 h-16 w-1/4 ">Submit</button>
        </section>

      </form>
    </>
  )
}
export default ContactForm