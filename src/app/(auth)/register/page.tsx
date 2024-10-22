import React from "react";
import { Metadata } from "next";
import SignupTemplate from "@/components/templates/auth/Register";

export const metadata: Metadata = {
  title: "Sync Spend",
};

const Signup = () => <SignupTemplate />;

Signup.displayName = "Signup";
export default Signup;
