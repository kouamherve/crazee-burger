import React from "react";
import AddForm from "./AddForm";
import ImagePreview from "./ImagePreview";

export default function AddPanel() {
  return (
    <div className="h-[160px] w-[880px]">
      <div className="mt-[30px] flex space-x-5 w-full h-full mb-13">
        <ImagePreview />
        <AddForm />
      </div>
    </div>
  );
}
