import AddUserForm from "@/components/AddUserForm";
import CustomerList from "@/components/CustomerList";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="border rounded-lg px-5 py-10">
      <div className="flex w-full justify-between items-center">
        <div className="w-full">
          <h1 className="text-xl font-semibold">Customers</h1>
          <p className="text-sm text-gray-500">
            Take a look at your customers and what they're doing.{" "}
          </p>
        </div>
        <Sheet>
          <SheetTrigger>
            <Button>Add Customer</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add a new customer</SheetTitle>
              <SheetDescription>
                <p className="pb-3">
                  Enter the Name, Email and Phone for the customer
                </p>
              </SheetDescription>
            </SheetHeader>
            <AddUserForm />
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <CustomerList />
      </div>
    </div>
  );
};

export default page;
