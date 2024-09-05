import { useContext } from "react";
import SelectionContext from "../context/selectionContext";
import Thank from "../images/illustration-thank-you.svg";
/*------------------------------------*/

export default function SubmitPage() {
  const { selection } = useContext(SelectionContext);
  return (
    <div className="w-80  bg-[--Dark-Blue] p-6 rounded-2xl flex flex-col  justify-between items-center  min-h-80 m-3 gap-4 text-center">
      <div>
        <img src={Thank} alt="starlogo" />
      </div>
      <div className="rounded-full bg-[--Blue] text-[--Orange] px-6 py-1">
        You selected {selection} out of 5
      </div>

      <div className="font-[--font-Weights-bold] text-[24px]">Thank You !</div>
      <div className="text-[12px]  text-[--Light-Grey]">
        <p>We appreciate you taking the time to give a rating.</p>
        <p>if you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>
  );
}
