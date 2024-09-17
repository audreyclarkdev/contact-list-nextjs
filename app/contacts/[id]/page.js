'use client';
import BackButton from '@/app/components/BackButton';
import ContactDetails from '@/app/components/ContactDetails';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export const Contact = () => {
  const { id } = useParams();

  return (
    <div>
      <ContactDetails />
      <Link href='/contacts'>All Contacts</Link>
      <BackButton />
    </div>
  )
}

export default Contact;