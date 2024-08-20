"use client";

import CustomerStore from "@/stores/CustomersStore";
import { useState } from "react";
import { useStore } from "zustand";

type Customer = {
  name: string;
  email: string;
  phone: string;
  orders: number;
};

const useAddCustomer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addCustomer } = useStore(CustomerStore);

  const newCustomer = async (customer: Customer) => {
    setIsLoading(true);
    setError(null);

    // // This is a mock API call, Normally this should be pulled from an API.
    // const response = await fetch("/api/customers", {
    //     method: "POST",
    //     body: JSON.stringify(customer),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })

    // if (!response.ok) {
    //     setError("Something went wrong")
    //     setIsLoading(false)
    //     return
    // }

    // const data = await response.json()
    // addCustomer(data)

    addCustomer(customer);

    setIsLoading(false);
  };

  return { isLoading, error, newCustomer };
};

export default useAddCustomer;
