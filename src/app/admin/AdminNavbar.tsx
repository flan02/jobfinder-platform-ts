

"use client";
import { useClerk } from "@clerk/nextjs";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function AdminNavbar() {
  const { user, signOut } = useClerk();
  const router = useRouter();

  console.log(user);

  return (
    <div className="px-3">
      <div className="m-auto flex h-10 max-w-5xl items-center justify-between gap-2">
        <Link href="/admin" className="font-semibold underline">
          Admin Dashboard
        </Link>
        <UserButton />
      </div>

    </div>
  );
}