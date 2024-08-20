"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useLogin from "@/hooks/useLogin";

type Props = {};

const LoginForm = (props: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { isLoading, login } = useLogin();

  const handleSubmit = async () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    await login(email, password);
  };

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <Input
        type="email"
        placeholder="Enter your email"
        className="w-2/3"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        className="w-2/3"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="w-2/3" onClick={handleSubmit}>
        {isLoading ? "Loading..." : "Login"}
      </Button>
    </div>
  );
};

export default LoginForm;
