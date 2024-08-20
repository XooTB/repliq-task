import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/LoginForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex py-20 justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3">
        <Tabs defaultValue="login">
          <TabsList className="w-full">
            <TabsTrigger value="login" className="w-1/2">
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="w-1/2">
              Signup
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="flex justify-center flex-col items-center px-4 border py-5 rounded-md">
              <div className="w-full py-5 text-center">
                <h2 className="text-xl font-semibold">
                  Login into your account
                </h2>
                <p className="text-sm text-gray-500">
                  Login into your account using your email & password
                </p>
              </div>
              <LoginForm />
            </div>
          </TabsContent>
          <TabsContent value="signup">
            <div className="flex justify-center flex-col items-center px-4 border py-5 rounded-md">
              <div className="w-full py-5 text-center">
                <h2 className="text-xl font-semibold">Create a new account</h2>
                <p className="text-sm text-gray-500">
                  Create a new account using your email & password
                </p>
              </div>
              <div className="w-full flex flex-col items-center gap-5">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-2/3"
                />
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="w-2/3"
                />
                <Button className="w-2/3">Signup</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
