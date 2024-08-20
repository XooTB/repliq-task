"use client";

import React from "react";
import { useStore } from "zustand";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuthStore from "@/stores/AuthStore";
import { useRouter } from "next/navigation";

type Props = {};

const UserBox = (props: Props) => {
  const { user, setUser } = useStore(AuthStore);

  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
  };

  if (user) {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger className="items-center">
            <Avatar>
              <AvatarImage src="https://github.com/xootb.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                router.push("/dashboard");
              }}
              className="hover:cursor-pointer hover:bg-slate-200"
            >
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="hover:cursor-pointer hover:bg-slate-200"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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

export default UserBox;
