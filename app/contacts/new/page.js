import {AddContactForm} from "@/app/components/AddContactForm";
import Link from "next/link";
import {BackButton} from "@/app/components/BackButton";

const NewContact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4">New Contact Form</h1>
      <AddContactForm />
      <BackButton />
    </div>
  )
}

export default NewContact;
