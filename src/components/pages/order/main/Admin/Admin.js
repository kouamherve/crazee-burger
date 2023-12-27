import React, { useContext } from "react";
import AdminTabs from "./adminTabs/AdminTabs";
import AdminPanel from "./adminPanel/AdminPanel";
import OrderContext from "../../../../../context/OrderContext";

export default function Admin() {
  const { isCollapse, setIsCollapse } = useContext(OrderContext);

  return (
    <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl">
      <AdminTabs isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      {!isCollapse && <AdminPanel />}
    </div>
  );
}
