import { useContext } from "react";
import SelectionContext from "../context/selectionContext";
export default function Button({ children, className }) {
  const { selectionSetter } = useContext(SelectionContext);

  const selectHandler = () => {
    selectionSetter(children);
  };

  return (
    <button className={className} onClick={selectHandler}>
      {children}
    </button>
  );
}
