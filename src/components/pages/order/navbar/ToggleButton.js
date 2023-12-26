import "react-toastify/dist/ReactToastify.css";

export default function ToggleButton({
  isChecked,
  onClick,
  labelIfChecked = "Fermer",
  labelIfUnchecked = "Ouvrir",
}) {
  return (
    <div className="mr-2.5 w-50 h-10">
      <div
        onClick={onClick}
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
