"use client";

import { useUser, SignOutButton, useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { FiLogOut, FiSettings } from "react-icons/fi";

export default function CustomUserMenu() {
  const { user } = useUser();
  const { openUserProfile } = useClerk();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      {/* Bouton */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full overflow-hidden shadow hover:opacity-90 transition"
      >
        <img
          src={user.imageUrl}
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </button>

      {/* MENU */}
      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-xl border p-3 z-50">
          {/* Header */}
          <div className="flex items-center gap-3 p-2">
            <img
              src={user.imageUrl}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">{user.fullName}</span>
              <span className="text-gray-500 text-xs">
                {user.primaryEmailAddress?.emailAddress}
              </span>
            </div>
          </div>

          <div className="border-t my-2"></div>

          {/* Manage Account → ouvre le popup Clerk natif */}
          <button
            onClick={() => {
              setOpen(false);
              openUserProfile(); // 🟢 ouvre le popup Clerk natif
            }}
            className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition w-full text-left"
          >
            <FiSettings className="text-gray-600" />
            <span className="text-sm">Manage account</span>
          </button>

          {/* Sign out */}
          <SignOutButton>
            <button
              className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-left transition"
            >
              <FiLogOut className="text-gray-600" />
              <span className="text-sm">Sign out</span>
            </button>
          </SignOutButton>
        </div>
      )}
    </div>
  );
}
