import { createContext, useState } from "react";

export const SnackContext = createContext();
let timeId = null;
const init = () => ({
  message: "unkown",
  color: "green",
  open: false,
});
export const SnackProvider = ({ children }) => {
  const [snack, setSnack] = useState({
    message: "unkown",
    color: "green",
    open: false,
  });
  const close = () => {
    clearTimeout(timeId);
    setSnack((v) => {
      return init();
    });
  };
  const show = (msg, c) => {
    setSnack((v) => {
      timeId = setTimeout(() => {
        close();
      }, 3000);
      return {
        message: msg,
        color: c,
        open: true,
      };
    });
  };
  return (
    <SnackContext.Provider value={{ show, close, snack }}>
      {children}
    </SnackContext.Provider>
  );
};
