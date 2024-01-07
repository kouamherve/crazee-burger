import React from "react";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";

export default function EmptyMenuAdmin({ handleReset }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-[21px] text-4xl font-amatic text-greyBlue">
        <span>
          <b>Le menu est vide ?</b>
        </span>
        <span>Cliquez ci-dessous pour le réinitialiser</span>
      </div>
      <PrimaryButton
        onClick={handleReset}
        label={"Générer de nouveaux produits"}
        className="h-[50px] border border-primary bg-primary active:bg-white active:text-primary rounded-md text-xs font-bold text-white px-5 py-3"
      />
    </div>
  );
}
