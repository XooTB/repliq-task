"use client";

import React, { useEffect } from "react";
import { useStore } from "zustand";
import CustomerStore from "@/stores/CustomersStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useGetCustomers from "@/hooks/useGetCustomers";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  customer: {
    name: string;
    email: string;
    phone: string;
    orders: number;
  };
};

const CustomerCard = ({ customer }: Props) => {
  return (
    <div className="flex justify-between items-center w-full border-b py-3 px-3">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/xootb.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center">
          <p className="font-semibold ">{customer.name}</p>
          <p className="text-sm text-gray-500">Email: {customer.email}</p>
          <p className="text-sm text-gray-500">Phone: {customer.phone}</p>
        </div>
      </div>
      <p className="font-semibold">{customer.orders} orders</p>
    </div>
  );
};

const CustomerList = () => {
  const { customers } = useStore(CustomerStore);
  const { getCustomers } = useGetCustomers();

  useEffect(() => {
    getCustomers();
  }, []);

  if (customers.length < 1) {
    return <p>No customers found</p>;
  } else {
    return (
      <ScrollArea className="h-[600px] mt-5 px-10">
        {customers.map((customer, index) => (
          <CustomerCard key={index} customer={customer} />
        ))}
      </ScrollArea>
    );
  }
};

export default CustomerList;
