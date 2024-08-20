"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useAddCustomer from "@/hooks/useAddCustomer";
import { toast } from "sonner";

type Props = {};

const AddUserForm = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [orders, setOrders] = useState<string>("0");

  const { newCustomer } = useAddCustomer();

  const handleSubmit = () => {
    if (!email || !name || !phone) {
      toast("Please fill all the fields");
      return;
    }

    newCustomer({
      email,
      name,
      phone,
      orders: parseInt(orders),
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <label>Customer Name</label>
        <Input
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="mb-3"
          required
        />
        <label>Customer Email</label>
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3"
          required
        />
        <label>Customer Phone</label>
        <Input
          placeholder="Phone"
          type="number"
          onChange={(e) => setPhone(e.target.value)}
          className="mb-3"
          required
        />
        <label>Order Numbers</label>
        <Input
          placeholder="Orders"
          type="number"
          defaultValue={0}
          onChange={(e) => setOrders(e.target.value)}
          className="mb-3"
        />
        <Button onClick={handleSubmit}>Add Customer</Button>
      </div>
    </div>
  );
};

export default AddUserForm;
