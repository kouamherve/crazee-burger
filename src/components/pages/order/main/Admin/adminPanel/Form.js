import React, { forwardRef } from "react";
import ImagePreview from "./ImagePreview";
import { TextInput } from "../../../../../reusable-ui/TextInput";

const Form = forwardRef(
  (
    {
      onSubmit,
      onChange,
      imagePreviewTitle,
      imagePreviewimageSource,
      textInputs,
      children,
    },
    ref
  ) => {
    return (
      <div className="h-[160px] w-[880px]">
        <div className="mt-[30px] flex space-x-5 w-full h-full mb-13">
          <ImagePreview
            title={imagePreviewTitle}
            image={imagePreviewimageSource}
          />
          <div className=" h-[120px] w-[73%]">
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
                    ref={input.name === "title" ? ref : null}
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
