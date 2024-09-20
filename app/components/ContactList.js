"use client";
import ContactDetails from "./ContactDetails";
import Link from "next/link";
import Image from "next/image";
import { ContactAPI } from "../data/ContactAPI";
import SearchBox from "./SearchBox";

const ContactList = () => {
  // Retrieving all the contacts from ContactAPI
  const contacts = ContactAPI.all();

  return (
    <main>
      <h1 className="text-3xl font-bold text-center mb-8">Contacts</h1>

      <div className="flex flex-col items-center mb-8 gap-4">
        <Link href="/contacts/new">
          <button className="bg-blue-500 text-white p-1 rounded">
            Add New Contact
          </button>
        </Link>
        <SearchBox />
      </div>

      <div className="min-h-screen p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {contacts.map((contact) => {
            <div key={contact.id} className="bg-white rounded-lg shadow p-4">
              <Image
                src={contact.imageURL}
                alt={contact.name}
                className="h-32 w-32 mx-auto rounded-full"
                width={100}
                height={100}
              />
              <h2 className="text-xl font-bold mt-4 text-center">
                {contact.name}
              </h2>
              <p className="text-center text-gray-600">{contact.email}</p>
              <p className="text-center text-gray-600">{contact.phoneNum}</p>
            </div>;
          })}
        </div>
      </div>
    </main>
  );
};

export default ContactList;
