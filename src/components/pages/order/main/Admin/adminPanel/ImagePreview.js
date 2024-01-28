export default function ImagePreview({ title, image }) {
  return (
    <div
      className={`w-[18.5%] h-[133.5px] rounded-md font-openSans text-sm font-normal ${
        image ? "" : "border border-greyLight"
      } text-greySemiDark flex items-center justify-center`}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center"
        />
      ) : (
        <span>Aucune image</span>
      )}
    </div>
  );
}
