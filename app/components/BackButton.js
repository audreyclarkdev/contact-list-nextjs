"use client";
import Link from "next/link";

const BackButton = () => {
  return (
    <div>
      <Link href="/contacts">
        <button
          onClick={() => console.log("Click")}
          className="bg-blue-500 text-white p-1 rounded"
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
