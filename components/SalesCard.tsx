import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type Props = {
  name: string;
  email: string;
  amount: string;
};

const SalesCard = ({ name, email, amount }: Props) => {
  return (
    <div className="flex justify-between items-center w-full border-b py-3 px-3">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/xootb.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center">
          <p className="font-semibold ">{name}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>
      <p className="font-semibold">+{amount}</p>
    </div>
  );
};

export default SalesCard;
