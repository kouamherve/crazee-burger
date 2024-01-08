import React from "react";
import TextInput from "../../../../../reusable-ui/TextInput";
import AddProductButton from "./AddProductButton";
import { getTextInputsConfig } from "./textInputsConfig";

export default function AddForm({
  title,
  image,
  price,
  onChange,
  onSubmit,
  toast,
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
        <AddProductButton toast={toast} />
      </form>
    </div>
  );
}
