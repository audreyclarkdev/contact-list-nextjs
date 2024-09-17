import React from 'react';
import ContactList from '../components/ContactList';
import BackButton from '../components/BackButton';

const AllContactsPage = ()  => {
  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold p-4 ">All My Contacts</h1>
      <ContactList />
      <BackButton />
    </div>
  );
};


export default AllContactsPage;