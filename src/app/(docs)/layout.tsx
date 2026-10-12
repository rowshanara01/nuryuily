import ComponentsLayout from "@/components/layout/components-layout/ComponentsLayout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <ComponentsLayout>{children}</ComponentsLayout>;
};

export default layout;
