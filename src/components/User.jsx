import React from "react";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const User = async () => {
  const session = await getServerSession(authOptions);
  console.log(session); // browser console-এ দেখার জন্য

  return (
    <div className="p-4 bg-gray-50 text-gray-900">
      <h1 className="text-xl font-bold mb-2">Session Info</h1>

      {/* User name */}
      <p><strong>Name:</strong> {session?.user?.name || "No name"}</p>

      {/* Email */}
      <p><strong>Email:</strong> {session?.user?.email || "No email"}</p>

      {/* Image */}
      {session?.user?.image && (
        <img src={session.user.image} alt="User Image" className="w-20 h-20 rounded-full mt-2" />
      )}
    </div>
  );
};

export default User;
