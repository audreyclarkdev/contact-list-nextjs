"use client";
import { contactAPI } from "@/app/data/contactAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";

const AddContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  // const searchParams = useSearchParams();
  // const sort = searchParams.get("sort");
  // const query = searchParams.get("q");
  // console.log({ sort, query });

  const handleSubmit = (event) => {
    event.preventDefault();
    contactAPI.addContact({
      name,
      imageURL,
      email,
      phoneNum,
    });
    router.push("/contacts");
    alert("The contact has been added successfully!");
  };

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center" >
        <form className="flex flex-col justify-center p-5" onSubmit={handleSubmit}>
          <label className="text-xl font-bold">
            Full Name
          </label>
          <input
            type="text"
            className="border-2 border-gray-400 rounded-lg p-2 m-2"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{ width: "600px" }}
            placeholder={"Enter your name"}
          />
          
          <label className="text-xl font-bold">
            Email
          </label>
          <input
            type="text"
            className="border-2 border-gray-400 rounded-lg p-2 m-2"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{ width: "600px" }}
            placeholder={"yourname@email.com"}
          />
          <label className="text-xl font-bold">
            Phone Number
          </label>
          <input
            type="number"
            className="border-2 border-gray-400 rounded-lg p-2 m-2"
            value={phoneNum}
            onChange={(event) => setPhoneNum(parseInt(event.target.value))}
            style={{ width: "600px" }}
            placeholder={"(xxx)xxx-xxxx"}
          />
          <label className="text-xl font-bold">
            Image URL
          </label>
          <input
            type="text"
            className="border-2 border-gray-400 rounded-lg p-2 m-2"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            style={{ width: "600px" }}
            placeholder={"Enter image URL"}
          />
          <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddContactForm;
