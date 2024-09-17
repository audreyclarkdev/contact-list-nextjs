import './globals.css';
import Link from 'next/link'
import ContactList from './components/ContactList'

export default function Home() {

  console.log('Home page')
  return (
    <main className='p-3 flex justify-items-center'>
      <h1 className="text-3xl font-bold p-4">Home Page - All Contacts List</h1>
      <ContactList />
      <Link className="bg-blue-500 text-white p-1 rounded" href='/contacts'>Go to All Contacts</Link>
      <br />
      <br />
      <Link className="bg-blue-500 text-white p-1 rounded" href='/contacts/new'>Add a new contact</Link>
    </main>
  )
}
