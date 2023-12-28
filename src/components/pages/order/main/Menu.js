import React, { useContext } from "react";
import clsx from "clsx";
import Card from "../../../reusable-ui/Card";
import OrderContext from "../../../../context/OrderContext";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { refreshPage } from "../../../../utils/utils";

export default function Menu() {
  const { menu, setMenu, isModeAdmin } = useContext(OrderContext);

  const handleDelete = (productId) => {
    setMenu(menu.filter((p) => p.id !== productId));
  };

  const menuClassName = clsx(
    "w-full p-13 gap-x-21 gap-y-15",
    "shadow-strong bg-background_white overflow-y-auto",
    "grid grid-cols-container justify-items-center"
  );

  return (
    <div className={menuClassName}>
      {menu.length !== 0 ? (
        menu.map((product) => (
          <Card
            key={product.id}
            imageSource={
              product.imageSource
                ? product.imageSource
                : "/images/coming-soon.png"
            }
            title={product.title}
            price={product.price}
            onClick={() => handleDelete(product.id)}
          />
        ))
      ) : isModeAdmin ? (
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-[21px] text-4xl font-amatic text-greyBlue">
            <span>
              <b>Le menu est vide ?</b>
            </span>
            <span>Cliquez ci-dessous pour le réinitialiser</span>
          </div>
          <PrimaryButton
            onClick={refreshPage}
            label={"Générer de nouveaux produits"}
            className="h-[50px] border border-primary bg-primary active:bg-white active:text-primary rounded-md text-xs font-bold text-white px-5 py-3"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-[21px] text-4xl font-amatic text-greyBlue">
          <span>
            <b>Victime de notre succès ! :D</b>
          </span>
          <span>De nouvelles recettes sont en cours de préparation.</span>
          <span>À très vite !</span>
        </div>
      )}
    </div>
  );
}
