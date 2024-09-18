import React from "react";
import ContactList from "../components/ContactList";
import BackButton from "../components/BackButton";

const AllContactsPage = () => {
  return (
    <div className="flex justify-center p-4">
      <h1 className="text-3xl font-bold">All Contacts</h1>
      <ContactList />
      <BackButton />
    </div>
  );
};

export default AllContactsPage;
