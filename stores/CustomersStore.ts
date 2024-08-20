import { create } from "zustand";

type Customer = {
  name: string;
  email: string;
  phone: string;
  orders: number;
};

type storeType = {
  customers: Customer[];
  addCustomer: (customer: Customer) => void;
  removeCustomer: (customer: Customer) => void;
  addCustomers: (customers: Customer[]) => void;
};

export const CustomerStore = create<storeType>((set) => ({
  customers: [],
  addCustomer: (customer) =>
    set((state) => ({ customers: [...state.customers, customer] })),
  removeCustomer: (customer) =>
    set((state) => ({
      customers: state.customers.filter((c) => c !== customer),
    })),
  addCustomers: (customers) => set({ customers }),
}));

export default CustomerStore;
