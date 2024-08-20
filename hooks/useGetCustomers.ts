"use client";

import { useState } from "react";
import { useStore } from "zustand";
import CustomerStore from "@/stores/CustomersStore";
import customers from "@/constants/customer";

const useGetCustomers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addCustomers } = useStore(CustomerStore);

  const getCustomers = async () => {
    setIsLoading(true);
    setError(null);

    // // This is a mock API call, Normally this should be pulled from an API.
    // const response = await fetch("/api/customers")

    // if (!response.ok) {
    //     setError("Something went wrong")
    //     setIsLoading(false)
    //     return
    // }

    // const data = await response.json()
    // data.forEach((customer) => {
    //     addCustomer(customer)
    // })

    addCustomers(customers);

    setIsLoading(false);
  };

  return { isLoading, error, getCustomers };
};

export default useGetCustomers;
