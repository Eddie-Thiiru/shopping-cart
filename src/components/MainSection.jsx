import { Outlet } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="mainSection">
      <Outlet />
    </div>
  );
};

export default MainSection;
