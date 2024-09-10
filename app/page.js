import './globals.css';
import Link from 'next/link'
import ContactList from './components/ContactList'

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold p-4">Home Page - All Contacts List</h1>
      <ContactList />
      <Link href='/contacts'></Link>
    </main>
  )
}
