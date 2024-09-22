"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ContactAPI } from "../data/ContactAPI";
import SearchBox from "./SearchBox";

const ContactList = () => {
  const [allContacts, setAllContacts] = useState(ContactAPI.all());
  const [filteredContacts, setFilteredContacts] = useState(allContacts);

  const handleSearch = (term) => {
    if (term === "") {
      setFilteredContacts(allContacts);
    } else {
      const filtered = allContacts.filter((contact) =>
        contact.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  };

  const handleDelete = (id) => {
    const updatedContacts = allContacts.filter((contact) => contact.id !== id);
    setAllContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  }

  const formatPhoneNumber = (phoneNum) => {
    if (!phoneNum) return "";
    const cleanedUp = ('' + phoneNum).replace(/\D/g, '');
    const match =cleanedUp.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNum;
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Contacts</h1>

      <div className="flex flex-col items-center mb-8 gap-4">
        <Link href="/contacts/new">
          <button className="bg-blue-500 text-white p-2 rounded text-sm">
            Add New Contact
          </button>
        </Link>
        <SearchBox onSearch={handleSearch} />
      </div>

      {/* Table for contact list */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-gray-600 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-900 border-b">
              <th className="p-4 text-left"></th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone Number</th>
              <th className="p-4 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr key={contact.id} className="border-b hover:bg-gray-500">
                <td className="p-4">
                  <Image
                    src={contact.imageURL || "/avatar-placeholder.png"}
                    alt={contact.name}
                    className="w-16 h-16 rounded-full object-cover"
                    width={60}
                    height={60}
                  />
                </td>
                <td className="p-4">{contact.name}</td>
                <td className="p-4">{contact.email}</td>
                <td className="p-4">{formatPhoneNumber(contact.phoneNum)}</td>
                <td className="p-4">
                  <button onClick={() => handleDelete(contact.id)} className="hover:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ContactList;
