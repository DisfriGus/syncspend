import React from "react";
import { Metadata } from "next";
import LoginTemplate from "@/components/templates/auth/Login";

export const metadata: Metadata = {
  title: "Sync Spend",
};

const Login = () => <LoginTemplate />;

Login.displayName = "Login";
export default Login;
