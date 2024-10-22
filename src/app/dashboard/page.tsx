import React from "react";
import { Metadata } from "next";
import DashboardTemplate from "@/components/templates/Dashboard";

export const metadata: Metadata = {
  title: "Sync Spend",
};

const dashboard = () => <DashboardTemplate />;

dashboard.displayName = "Signup";
export default dashboard;
