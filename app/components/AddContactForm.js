"use client";
import { useState } from 'react';

export const AddContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("The contact has been added successfully!");
  }

  return (
    <div>
      <h1>Add a New Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Email
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Image URL
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
        </label>
        <label>Phone Number
          <input type="number" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}/>
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  )
}
