import { useState} from "react"
import AlertSuccess from "./AlertSuccess"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"



function ContactForm() {
    // Set initial State
    // show alert is set to false until the form is submitted
    const [showAlert, setShowAlert] = useState(false)
    // set state for the form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        message: "",
        businessOrResidential: "",
        plan: ""
    })
    // Destructure the form data
    const {
        firstName,
        lastName,
        email,
        phone,
        streetAddress,
        city,
        state,
        zipCode,
        message,
        businessOrResidential,
        plan
    } = formData
   
    const handleChange = (e) => {
        // set the form data to the values of the form
      setFormData({ ...formData, [e.target.name]: e.target.value })
  }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // set formData to the values of the form
          const formDataCopy = { 
            ...formData,
            submittedAt: serverTimestamp()
          }
          // add the form data copy to the database
          const docRef = await addDoc(collection(db, "leads"), formDataCopy)
            // clear the form
          setFormData({...formData, firstName: "", lastName: "", email: "", phone: "", streetAddress: "", city: "", state: "", zipCode: "", message: "", businessOrResidential: "", plan: ""})
          console.log("Document submitted successfully")
          // show the alert
          setShowAlert(true)
  };
    

    return (
        <>
            <form className="lof-blue"
                onSubmit={handleSubmit}>
                {/* container div for flex properties */}
                <div className="flex flex-wrap justify-center mt-8 ">
                {/* once the form is submitted the show alert component will appear.*/}
                {showAlert && <AlertSuccess />} 

                {/* The form is split into 3 sections(columns) */}
                {/* Section 1 - name, email, phone */}
                    <section className="flex flex-col mr-2 p-10">
                        <span className="label-text text-white text-xl">First Name</span>
                        <input type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            required
                            value={firstName}
                            onChange={handleChange}

                        />
                        <span className="label-text text-white text-xl">Last Name</span>
                        <input type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            required
                            value={lastName}
                            onChange={handleChange}
                        />
                        <span className="label-text text-white text-xl">E-Mail Address</span>
                        <input type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            required
                            value={email}
                            onChange={handleChange}
                        />
                        <span className="label-text text-white text-xl">Phone</span>
                        <input type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            className="input input-bordered rounded-none w-full max-w-xs"
                            required
                            value={phone}
                            onChange={handleChange}
                        />
                    </section>
                    {/* section 2 - address, city, state, zip */}
                    <section className="flex flex-col ml-2 p-10">
                        <span className="label-text text-white text-xl">Street Address</span>
                        <input type="text"
                            id="streetAddress"
                            name="streetAddress"
                            placeholder="Street Address"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            required
                            value={streetAddress}
                            onChange={handleChange}
                        />
                        <span className="label-text text-white text-xl">City</span>
                        <input type="text"
                            id="city"
                            name="city"
                            placeholder="City"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            required
                            value={city}
                            onChange={handleChange}
                        />
                        <span className="label-text text-white text-xl">State</span>
                        <input type="text"
                            id="state"
                            name="state"
                            placeholder="State"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            required
                            value={state}
                            onChange={handleChange}
                        />
                        <span className="label-text text-white text-xl">Zip Code</span>
                        <input type="text"
                            id="zipCode"
                            name="zipCode"
                            placeholder="Zip Code"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            required
                            value={zipCode}
                            onChange={handleChange}
                        />

                    </section>
                    {/* section 3 - textbox, biz/residental, plan */}
                    <section className="flex flex-col ml-5 mt-8">
                        <span className="label-text text-white text-xl">How Can We Help?</span>
                        <textarea
                            name="message"
                            id="message"
                            cols="50"
                            rows="7"
                            value={message}
                            onChange={handleChange}
                        >
                        </textarea>
                        <br />

                        <span className="label-text text-white text-xl mt-2">Business or Residential</span>
                        <select
                            id="businessOrResidential"
                            name="businessOrResidential"
                            className="mt-2 h-8"
                            required
                            value={businessOrResidential}
                            onChange={handleChange}>
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
                                    required
                                    onChange={handleChange}>
                                    <option value="">Select A Plan</option>
                                    <option value="500 Mbps">Fiber 500 Mbps</option>
                                    <option value="2 Gbps">Fiber 2 Gbps</option>
                                    <option value="5 Gbps">Fiber 5 Gbps</option>
                                    <option value="Phone Service">Phone Service</option>
                                    <option value="Not Sure">I'm not sure</option>
                                </select>
                            </>
                        ) : ( businessOrResidential === "Business" ? (
                            <>
                                <span className="label-text text-white text-xl mt-3">Select a Plan</span>
                                <select
                                    name="plan"
                                    id="plan"
                                    value={plan}
                                    className="mt-2 h-8"
                                    required
                                    onChange={handleChange}>
                                    <option value="">Select A Plan</option>
                                    <option value="1 Gbps">Fiber 1 Gbps</option>
                                    <option value="2 Gbps">Fiber 2 Gbps</option>
                                    <option value="5 Gbps">Fiber 5 Gbps</option>
                                    <option value="Phone Service">Phone Service</option>
                                    <option value="Not Sure">I'm not sure</option>
                                </select>
                            </>
                        ) :
                            <>
                                <span className="label-text text-white text-xl mt-3">Select a Plan</span>
                                <select
                                    name="plan"
                                    id="plan"
                                    value={plan}
                                    className="mt-2 h-8"
                                    onChange={handleChange}>
                                    <option value="">Select Business or Residential</option>
                                </select>
                            </>
                        )}

                    </section>
                </div>
                    {/* submit btn */}
                <section className="flex justify-center">
                    <button type="submit" 
                    className="btn submit-btn lof-red text-white border-white rounded-tr-xl rounded-none mb-20 h-16 w-1/4 "
                    disabled={showAlert}
                    >Submit</button>
                </section>

            </form>
        </>
    )
}


export default ContactForm