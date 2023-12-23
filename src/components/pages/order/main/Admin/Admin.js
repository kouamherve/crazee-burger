import React from "react";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
  return (
    <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl">
      <AdminTabs />
      <AdminPanel />
    </div>
  );
}
