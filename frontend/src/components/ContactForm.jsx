import { useState} from "react"
import Header from "./Header"
import { useNavigate } from "react-router-dom"






function ContactForm() {
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        comment: "",
        businessOrResidential: "",
        plan: ""
    })

    const {
        firstName,
        lastName,
        email,
        phone,
        streetAddress,
        city,
        state,
        zipCode,
        comment,
        businessOrResidential,
        plan
    } = formData


    const navigate = useNavigate()
    //set form data
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
  }

    const handleSubmit = async (e) => {
        e.preventDefault()
       
          const formDataCopy = { 
            ...formData ,
          }
          console.log(formDataCopy)
        // Fetch the existing workbook from the live URL
     
  };
    

  

    return (
        <>
            <Header />
            <form className="lof-blue"
                onSubmit={(e) => handleSubmit(e)}>
                <div className="flex flex-wrap justify-center mt-20 ">
                    <section className="flex flex-col mr-2 p-10">
                        <span className="label-text text-white text-xl">First Name</span>
                        <input type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            value={firstName}
                            onChange={handleChange}

                        />
                        <span className="label-text text-white text-xl">Last Name</span>
                        <input type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            value={lastName}
                            onChange={handleChange}
                        />
                        <span className="label-text text-white text-xl">E-Mail Address</span>
                        <input type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            value={email}
                            onChange={handleChange}
                        />
                        <span className="label-text text-white text-xl">Phone</span>
                        <input type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            className="input input-bordered rounded-none w-full max-w-xs"
                            value={phone}
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                        <span className="label-text text-white text-xl">City</span>
                        <input type="text"
                            id="city"
                            name="city"
                            placeholder="City"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            value={city}
                            onChange={handleChange}
                        />
                        <span className="label-text text-white text-xl">State</span>
                        <input type="text"
                            id="state"
                            name="state"
                            placeholder="State"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            value={state}
                            onChange={handleChange}
                        />
                        <span className="label-text text-white text-xl">Zip Code</span>
                        <input type="text"
                            id="zipCode"
                            name="zipCode"
                            placeholder="Zip Code"
                            className="input input-bordered rounded-none w-full max-w-xs mb-6"
                            value={zipCode}
                            onChange={handleChange}
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
                            onChange={handleChange}
                        >
                        </textarea>
                        <br />

                        <span className="label-text text-white text-xl mt-2">Business or Residential</span>
                        <select
                            id="businessOrResidential"
                            name="businessOrResidential"
                            value={businessOrResidential}
                            className="mt-2 h-8"
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
                                    onChange={handleChange}>
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
                                    onChange={handleChange}>
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