import { createContext, useCallback, useState } from "react";
const SelectionContext = createContext();
/*------------------------------*/
function SelectionContextProvider({ children }) {
  const [selection, setSelection] = useState("");
  const selectionSetter = useCallback((value) => {
    setSelection(value);
  }, []);
  const sharedValue = {
    selectionSetter,
    selection,
  };
  return (
    <SelectionContext.Provider value={sharedValue}>
      {children}
    </SelectionContext.Provider>
  );
}
/*---------------------------------*/
export default SelectionContext;
export { SelectionContextProvider };
