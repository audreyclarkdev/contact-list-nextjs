"use client";
import { ContactAPI } from "@/app/data/ContactAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const AddContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let [imageURL, setImage] = useState("");
  const router = useRouter();

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   imageURL: ""
  // });

  const [errors, setErrors] = useState({});

  // Form validation logic
  const validate = () => {
    const newErrors = {};

    if (!name.trim() || name === "") {
      newErrors.name = "Cannot be blank";
    }
    
    if (!email === "" || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!phoneNumber === "" || !/^\d{10,15}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number (10-15 digits)";
    }

    if (!imageURL === "") {
      imageURL = "/public/avatar-placeholder.png";
    }

    return newErrors;
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      ContactAPI.addContact({
        name,
        email,
        phoneNumber,
        imageURL
      });
      router.push("/contacts");
      console.log("Form submitted and contact added");
      alert("The contact has been added successfully!");
  }
  };


  return (
    <>
      <form className="max-w-lg mx-auto p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">New Contact Form</h2>

        <div className="mb-4">
          <label className="block font-semibold text-white mb-2 text-xl">
            Full Name
          </label>
          <input
            type="text"
            className={`w-full p-1 border  border-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={"Enter name"}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block font-semibold text-white mb-2 text-xl">
            Email
          </label>
          <input
            type="text"
            className={`w-full p-1 border border-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={"name@email.com"}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-white mb-2 text-xl">
            Phone Number
          </label>
          <input
            type="text"
            className={`w-full p-1 border border-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(parseInt(event.target.value))}
            placeholder={"(888)888-8888"}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-white mb-2 text-xl">
            Image URL
          </label>
          <input
            type="text"
            className="w-full p-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={imageURL}
            onChange={(event) => setImage(event.target.value)}
            style={{ width: "600px" }}
            placeholder={"Enter image URL"}
          />
        </div>

        <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddContactForm;
