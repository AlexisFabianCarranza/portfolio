import { toast } from "react-toastify";

const customToast = {
  success(msg, palette) {
    return toast.success(<div>{msg}</div>, {
      style: {
        backgroundColor: palette.background.paper,
        color: palette.success.main,
      },
      progressStyle: {
        backgroundColor: palette.success.main,
        color: palette.success.main,
      },
    });
  },
  error(msg, palette) {
    return toast.error(msg, {
      style: {
        backgroundColor: palette.background.paper,
        color: palette.error.main,
      },
      progressStyle: {
        backgroundColor: palette.error.main,
        color: palette.error.main,
      },
    });
  },
};

export default customToast;
