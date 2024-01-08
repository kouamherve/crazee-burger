import React from "react";
import Button from "../../../../../reusable-ui/Button";

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-[21px] text-4xl font-amatic text-greyBlue">
        <span>
          <b>Le menu est vide ?</b>
        </span>
        <span>Cliquez ci-dessous pour le réinitialiser</span>
      </div>
      <div className="w-[225px] h-[50px]">
        <Button
          onClick={onReset}
          label="Générer de nouveaux produits"
          version="normal"
        />
      </div>
    </div>
  );
}
