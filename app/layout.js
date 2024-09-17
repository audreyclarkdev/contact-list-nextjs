import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {children}
        <nav className="flex flex-row">
          {/* <ul>
            <li>
              <Link href="/contacts">Contacts</Link>
            </li>
            <li>
              <Link href="/contacts/new">Add a New Contact</Link>
            </li>
          </ul> */}
        </nav>
      </body>
    </html>
  )
}
