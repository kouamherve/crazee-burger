import "react-toastify/dist/ReactToastify.css";

export default function ToggleButton({
  isChecked,
  onToggle,
  labelIfChecked = "Fermer",
  labelIfUnchecked = "Ouvrir",
}) {
  return (
    <div className="mr-[10px] w-[200px] h-[40px]">
      <div
        onChange={onToggle}
        className={`toggle ${
          isChecked ? "border-2 border-primary" : "bg-background_dark"
        }`}
      >
        <span
          className={`spanToggle ${
            isChecked ? "translate-x-[155px]" : "translate-x-0"
          }`}
        />
        <span
          className={`textToggle ${
            isChecked
              ? "text-dark font-normal -translate-x-[34px]"
              : "text-primary font-bold -translate-x-3"
          }`}
        >
          {isChecked ? labelIfChecked : labelIfUnchecked}
        </span>
      </div>
    </div>
  );
}
