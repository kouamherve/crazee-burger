import { BsPersonCircle } from "react-icons/bs";
import Profile from "./Profile";
import clsx from "clsx";
import ToggleButton from "./ToggleButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastAdmin from "./ToastAdmin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function NavbarRightSide() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  const displayToastNotification = () => {
    setIsModeAdmin(!isModeAdmin);
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30}/>,
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const rightSideClassName = clsx(
    "text-greyBlue",
    "gap-[10px] mr-[50px] pl-[50px]",
    "flex items-center justify-center"
  );

  return (
    <div className="flex items-center ">
      <ToggleButton
        isChecked={isModeAdmin}
        onClick={displayToastNotification}
        labelIfChecked="désactiver le mode admin"
        labelIfUnchecked="activer le mode admin"
      />
      <ToastAdmin />
      <div className={rightSideClassName}>
        <Profile />
        <BsPersonCircle className=" w-9 h-9" />
      </div>
    </div>
  );
}
