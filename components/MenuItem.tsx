"use client";

import { useRouter } from "next/navigation";

const MenuItem = ({
  name,
  icon,
  link,
}: {
  name: string;
  icon: React.ReactNode;
  link: string;
}) => {
  const router = useRouter();
  return (
    <div
      key={name}
      className="flex items-center gap-4 hover:text-white hover:bg-slate-300 px-2 py-3 rounded-lg hover:cursor-pointer"
      onClick={() => router.push(`${link.toLowerCase()}`)}
    >
      {icon}
      {name}
    </div>
  );
};

export default MenuItem;
