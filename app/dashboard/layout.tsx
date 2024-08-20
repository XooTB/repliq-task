"use client";

import React from "react";
import { useStore } from "zustand";
import AuthStore from "@/stores/AuthStore";
import { useRouter } from "next/navigation";
import dashboardMenu from "@/constants/dashboardMenu";
import MenuItem from "@/components/MenuItem";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useStore(AuthStore);

  // Nav Router for Client Components.
  const router = useRouter();

  if (!user) {
    router.push("/login");
  } else {
    return (
      <div className="min-h-screen px-20">
        <div className="flex gap-10">
          <div className="w-1/5 bg-slate-200 px-5 py-10 rounded-lg flex flex-col gap-2 h-fit">
            {dashboardMenu.map((menu) => (
              <MenuItem key={menu.name} {...menu} />
            ))}
          </div>
          <div className="w-4/5">{children}</div>
        </div>
      </div>
    );
  }
}
