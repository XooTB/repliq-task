import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
  name: string;
  email: string;
  avatar: string;
};

type storeTypes = {
  token: string | null;
  user: User | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
};

const AuthStore = create<storeTypes, [["zustand/persist", any]]>(
  persist(
    (set) => ({
      token: null,
      user: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default AuthStore;
