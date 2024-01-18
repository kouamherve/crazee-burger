import React, { useContext } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import { getTextInputsConfig } from "./textInputsConfig";
import ImagePreview from "./ImagePreview";
import { TextInput } from "../../../../../reusable-ui/TextInput";

export default function EditPanel() {
  // state
  const { productSelected, setProductSelected, handleEdit, titleInputRef } =
    useContext(OrderContext);

  const textInputs = getTextInputsConfig(
    productSelected.title,
    productSelected.imageSource,
    productSelected.price
  );

  // event handler
  const handleChange = (event) => {
    const productBeingUpdated = {
      ...productSelected,
      [event.target.name]: event.target.value,
    };
    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  };

  return (
    <div>
      {productSelected ? (
        <div className="h-[160px] w-[880px]">
          <div className="mt-[30px] flex space-x-5 w-full h-full mb-13">
            <ImagePreview
              title={productSelected.title}
              image={productSelected.imageSource}
            />
            <div className=" h-[120px] w-[73%]">
              <form className="flex flex-col gap-2">
                {textInputs.map((input) => {
                  return (
                    <TextInput
                      {...input}
                      onChange={handleChange}
                      version="minimalist"
                      key={input.id}
                      ref={input.name === "title" ? titleInputRef : null}
                    />
                  );
                })}
              </form>
            </div>
          </div>
        </div>
      ) : (
        <HintMessage />
      )}
    </div>
  );
}
