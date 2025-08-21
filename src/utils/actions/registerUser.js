"use server";

export const registerUser = async (data) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache:"no-cache"
    });

    if (!res.ok) {
      throw new Error("Failed to register user");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
