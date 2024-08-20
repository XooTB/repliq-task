"use client";

import { useState } from "react";
import { useStore } from "zustand";
import AuthStore from "@/stores/AuthStore";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useStore(AuthStore);

  // This is just a dummy email & password for the example
  const userEmail = "example@example.com";
  const userPassword = "@Password123";

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    // // Example login request
    // const response = await fetch("your-api-endpoint", {
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (!response.ok) {
    //   setError("Invalid email or password");
    //   setIsLoading(false);
    //   return;

    if (email === userEmail && password === userPassword) {
      const user = {
        name: "John Doe",
        email,
        avatar: "https://randomuser.me/api/portraits",
      };

      setUser(user);
    }

    setIsLoading(false);
  };

  return { isLoading, error, login };
};

export default useLogin;
