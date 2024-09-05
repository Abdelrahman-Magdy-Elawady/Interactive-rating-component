import { useContext, useEffect } from "react";
import Button from "../components/button";
import SelectionContext from "../context/selectionContext";
/*--------------------------------------*/
import star from "../images/icon-star.svg";
/*------------------------------------*/
import { NavLink } from "react-router-dom";

export default function SelectionPage() {
  const { selection, selectionSetter } = useContext(SelectionContext);
  /*-----------------------------*/
  useEffect(() => {
    selectionSetter("");
  }, [selectionSetter]);
  /*----------------------------*/
  const roundedBtnsStyle =
    "rounded-full size-9 bg-[--Blue] text-[--Light-Grey]  flex justify-center items-center font-[--font-Weights-bold] hover:bg-[--Orange] hover:text-[black]  focus:bg-[--White] focus:text-[black]";
  /*------------------------------*/
  return (
    <div className="w-80  bg-[--Dark-Blue] p-6 rounded-2xl flex flex-col  justify-between  min-h-80 m-3 gap-4">
      <div className={roundedBtnsStyle.replace("hover:bg-[--Orange]", "")}>
        <img src={star} alt="starlogo" />
      </div>
      <h1 className="font-[--font-Weights-bold]">How did we do?</h1>
      <div className="text-[12px]  text-[--Light-Grey]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>
      <div className="flex  flex-wrap justify-between items-center content-center ">
        <Button className={roundedBtnsStyle}>1</Button>
        <Button className={roundedBtnsStyle}>2</Button>
        <Button className={roundedBtnsStyle}>3</Button>
        <Button className={roundedBtnsStyle}>4</Button>
        <Button className={roundedBtnsStyle}>5</Button>
      </div>

      <NavLink
        to={selection !== "" ? "/submit" : "/"}
        className="text-[black]  flex  justify-center items-center bg-[--Orange] rounded-full font-[--font-Weights-bold] h-[32px] tracking-widest hover:bg-[--White] peer"
      >
        SUBMIT
      </NavLink>
      {!selection && (
        <div className="hidden text-[red] text-[12px] peer-focus:block ">
          please select a feedback
        </div>
      )}
    </div>
  );
}
