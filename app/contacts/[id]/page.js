"use client";
import ContactDetails from "@/app/components/ContactDetails";
import Link from "next/link";
import { useParams } from "next/navigation";
import {ContactAPI} from "/app/data/ContactAPI";


const Contact = () => {
  const { id } = useParams();
  const contact  = ContactAPI.get(parseInt(id, 10));

	if (!contact) {
		return <div>This contact was not found.</div>;
	}

  return (
    <main>
      <div>
        <h1>
          {contact.name}
        </h1>
        <Link href='/contacts'>Back to Contacts</Link>
      </div>
    </main>
  );
};

export default Contact;
