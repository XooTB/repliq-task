import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { match } from "assert";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { Just_Me_Again_Down_Here } from "next/font/google";
import React from "react";

type Props = {};

// This data will be fetched from the server
const overviewCards = [
  {
    name: "Total Revenue",
    value: "$12,769.76",
    growth: "+20.1% from last month",
  },
  {
    name: "Subscriptions",
    value: "+3290",
    growth: "+180.3% from last month",
  },
  {
    name: "Sales",
    value: "+12234",
    growth: "+19% from last month",
  },
  {
    name: "Active Now",
    value: "+573",
    growth: "+201 since last hour",
  },
];

const page = (props: Props) => {
  const handleIcons = (name: string) => {
    switch (name) {
      case "Total Revenue":
        return <DollarSign size={24} />;
      case "Subscriptions":
        return <Users size={24} />;
      case "Sales":
        return <CreditCard size={24} />;
      case "Active Now":
        return <Activity size={24} />;
    }
  };

  return (
    <div className="border w-full rounded-lg px-5 py-10">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">
          An overview of the latest happening in the shop!
        </p>
      </div>
      <div className="flex flex-1 gap-5 justify-between py-4">
        {overviewCards.map((card) => (
          <Card className="w-1/4">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex justify-between">
                {card.name} {handleIcons(card.name)}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-1">
              <p className="text-3xl font-bold">{card.value}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm font-medium text-gray-500">{card.growth}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
