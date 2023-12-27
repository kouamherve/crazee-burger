import React, { useContext } from "react";
import clsx from "clsx";
import Card from "../../../reusable-ui/Card";
import OrderContext from "../../../../context/OrderContext";

export default function Menu() {
  const menuClassName = clsx(
    "w-full p-13 gap-x-21 gap-y-15",
    "shadow-strong bg-background_white overflow-y-auto",
    "grid grid-cols-container justify-items-center"
  );
  // const [menu, setMenu] = useState(fakeMenu2);
  const { menu } = useContext(OrderContext);

  return (
    <div className={menuClassName}>
      {menu.map((product) => (
        <Card
          imageSource={product.imageSource}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
