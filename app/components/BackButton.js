'use client';
import Link from "next/link";

export const BackButton = () => {
  return (
    <div>
      <button className="bg-blue-500 text-white p-2 rounded">Back</button>
      <Link href={'/'}></Link>
    </div>
  )
}
