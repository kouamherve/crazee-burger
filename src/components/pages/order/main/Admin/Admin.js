import React, { useState } from "react";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import TabAddSelectedContext from "../../../../../context/TabAddSelectedContext";
import TabEditSelectedContext from "../../../../../context/TabEditSelectedContext";

export default function Admin() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const tabAddSelectedContext = { isAddSelected, setIsAddSelected };
  const tabEditSelectedContext = { isEditSelected, setIsEditSelected };

  return (
    <TabAddSelectedContext.Provider value={tabAddSelectedContext}>
      <TabEditSelectedContext.Provider value={tabEditSelectedContext}>
        <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl">
          <AdminTabs isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
          {!isCollapse && <AdminPanel />}
        </div>
      </TabEditSelectedContext.Provider>
    </TabAddSelectedContext.Provider>
  );
}
