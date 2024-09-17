'use client';
import { useState } from 'react';
import '../index.css';
import BackButton from './BackButton';

 const AddContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("The contact has been added successfully!");
  }

  return (
    <main className=" flex justify-center">
      <div className="space-y-12">
        <h1>Add a New Contact</h1>
        <form onSubmit={handleSubmit}>
          <label>Full Name
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ margin: '1rem 0' }} placeholder={"Enter your name"} />
          </label>
          <label>Email
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: '1rem 0' }} placeholder={"audreyclark@gmail.com"} />
          </label>
          <label>Image URL
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} style={{ margin: '1rem 0' }} placeholder={"Enter image URL"} />
          </label>
          <label>Phone Number
            <input type="number" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} style={{ margin: '1rem 0' }}
              placeholder={"(xxx)xxx-xxxx"}
            /> 
          </label>
          <button type="submit" className="bg-blue-500 text-white p-1 rounded">Submit</button>
        </form>
      </div>
      <BackButton />
    </main>
  )
}

export default AddContactForm;
