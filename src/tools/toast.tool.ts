import { toast } from "react-toastify";

export default class Toast {
  public static success(
    message: string,
    duration: number = 4000,
    background: string = "#283563",
    progressColor: string = "#ffffff",
    position:
      | "bottom-right"
      | "bottom-left"
      | "top-left"
      | "top-right" = "bottom-right",
    color: string = "white",
  ) {
    toast.success(message, {
      position,
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background,
        color,
      },
      progressStyle: {
        background: progressColor,
      },
    });
  }

  public static error(
    message: string,
    duration: number = 4000,
    background: string = "#283563",
    progressColor: string = "#ffffff",
    position:
      | "bottom-right"
      | "bottom-left"
      | "top-left"
      | "top-right" = "bottom-right",
    color: string = "white",
  ) {
    toast.error(message, {
      position,
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background,
        color,
      },
      progressStyle: {
        background: progressColor,
      },
    });
  }

  public static info(message: string) {
    toast.info(message);
  }

  public static warning(message: string) {
    toast.warning(message);
  }
}
