"use client";
import ContactDetails from "@/app/components/ContactDetails";
import Link from "next/link";
import { useParams } from "next/navigation";

const Contact = () => {
  const { id } = useParams();

  return (
    <div>
      <ContactDetails />
      
    </div>
  );
};

export default Contact;
