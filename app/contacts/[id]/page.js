"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContactAPI } from "/app/data/ContactAPI";

const Contact = () => {
  const { id } = useParams();
  const contact = ContactAPI.get(parseInt(id, 10));

  if (!contact) {
    return (
      <div className="text-xl flex justify-center p-4">
        Sorry, this contact was not found.
      </div>
    );
  }

  const generateId = () => Math.round(Math.random() * 100000000);

  return (
    <main>
      <div>
        <p>{contact.imageURL}</p>
        <h1>{contact.name}</h1>
        <p>{contact.email}</p>
        <p>{contact.phoneNum}</p>
        <Link href="/contacts">Back to Contacts</Link>
      </div>
    </main>
  );
};

export default Contact;
