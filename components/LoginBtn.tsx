"use client";

import React from "react";
import { useStore } from "zustand";
import { Button } from "./ui/button";
import AuthStore from "@/stores/AuthStore";

type Props = {};

const LoginBtn = (props: Props) => {
  const { user } = useStore(AuthStore);
  console.log(user);

  if (user) {
    return (
      <>
        <a href="/dashboard">
          <Button>Dashboard</Button>
        </a>
      </>
    );
  } else {
    return (
      <>
        <a href="/login">
          <Button>Login</Button>
        </a>
      </>
    );
  }
};

export default LoginBtn;
