import "./globals.css";
import Link from "next/link";
import ContactList from "./components/ContactList";

export default function Home() {
  
  return (
    <main className="p-3 flex items-center flex-col space-y-4 min-h-screen">
      <div className="text-3xl font-bold p-4">
        <h1>Welcome to the Home Page</h1>
        <h2>Here are all your contacts</h2>
      </div>
      <Link className="bg-blue-500 text-white p-1 rounded" href="/contacts">
        Go to All Contacts
      </Link>
      <ContactList />
    </main>
  );
}
