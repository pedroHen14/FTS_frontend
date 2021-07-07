import { toast } from "react-toastify";

export const notify = (message, type) => {
  switch (type) {
    case "success":
      toast.success(`${message} !`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case "error":
      toast.error(`${message} !`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    default:
      break;
  }
};

export const maskCel = (tel) => {
  tel=tel?.replace(/\D/g,"")
    tel=tel?.replace(/^(\d)/,"+$1")
    tel=tel?.replace(/(.{3})(\d)/,"$1($2")
    tel=tel?.replace(/(.{6})(\d)/,"$1)$2")
    if(tel?.length == 12) {
        tel=tel?.replace(/(.{1})$/,"-$1")
    } else if (tel?.length == 13) {
        tel=tel?.replace(/(.{2})$/,"-$1")
    } else if (tel?.length == 14) {
        tel=tel?.replace(/(.{3})$/,"-$1")
    } else if (tel?.length == 15) {
        tel=tel?.replace(/(.{4})$/,"-$1")
    } else if (tel?.length > 15) {
        tel=tel?.replace(/(.{4})$/,"-$1")
    }
    return tel;
};

