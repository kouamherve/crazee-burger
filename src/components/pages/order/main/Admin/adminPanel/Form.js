import React, { forwardRef } from "react";
import ImagePreview from "./ImagePreview";
import { TextInput } from "../../../../../reusable-ui/TextInput";
import { getTextInputsConfig } from "./textInputsConfig";

const Form = forwardRef(
  ({ onSubmit, onChange, product, children, onFocus, onBlur }, ref) => {
    const textInputs = getTextInputsConfig(product);

    return (
      <div className="h-[160px] w-[880px]">
        <div className="mt-[30px] flex space-x-5 w-full h-full mb-13">
          <ImagePreview title={product.title} image={product.imageSource} />
          <div className=" h-[131px] w-[73%]">
            <form
              className="flex flex-col gap-2"
              onSubmit={onSubmit && onSubmit}
            >
              {textInputs.map((input) => {
                return (
                  <TextInput
                    {...input}
                    onChange={onChange}
                    version="minimalist"
                    key={input.id}
                    ref={ref && input.name === `${"title"}` ? ref : null}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                );
              })}
              {children}
            </form>
          </div>
        </div>
      </div>
    );
  }
);

export default Form;
