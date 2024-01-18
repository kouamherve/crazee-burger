import React from "react";
import AddProductButton from "./AddProductButton";
import { getTextInputsConfig } from "./textInputsConfig";
import { TextInput } from "../../../../../reusable-ui/TextInput";

export default function AddForm({
  title,
  image,
  price,
  onChange,
  onSubmit,
  isSubmitted,
}) {
  const textInputs = getTextInputsConfig(title, image, price);

  return (
    <div className=" h-[120px] w-[73%]">
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        {textInputs.map((input) => {
          return (
            <TextInput
              {...input}
              onChange={onChange}
              version="minimalist"
              key={input.id}
            />
          );
        })}
        <AddProductButton isSubmitted={isSubmitted} />
      </form>
    </div>
  );
}
