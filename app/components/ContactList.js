"use client";
import ContactDetails from "./ContactDetails";
import Link from "next/link";
import Image from "next/image";
import { contactsData } from "../data/contacts";

const ContactList = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 min-h-screen">
      <ul>
        {contactsData.map((contact) => (
          <li key={contact.id} className="p-4 rounded mb-2">
            <div
              className="border border-gray-300 p-1 rounded-[50%] overflow-hidden"
              style={{ width: "100px", height: "100px" }}
            >
              <Image
                src={contact.image_url}
                alt={contact.name}
                className="rounded-full"
                width={100}
                height={100}
              />
            </div>
            <h2 className="text-lg font-bold">{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone_number}</p>
          </li>
        ))}
      </ul>

      <Link href="/contacts/new">
        <button className="bg-blue-500 text-white p-1 rounded">
          Add New Contact
        </button>
      </Link>
    </div>
  );
};

export default ContactList;
