import React, { useState } from "react";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl">
      <AdminTabs isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      {!isCollapse && <AdminPanel />}
    </div>
  );
}
