import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen w-full bg-[--Very-Dark-Blue] text-[--White] flex flex-row justify-center items-center">
      <Outlet />
    </div>
  );
}

export default App;
