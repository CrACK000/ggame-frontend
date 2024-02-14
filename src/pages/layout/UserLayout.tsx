import {Outlet} from "react-router-dom";
import UserMenu from "./UserMenu.tsx";

const UserLayout = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto">
      <div className="grid grid-cols-10 gap-24">
        <div className="col-span-3 relative">
          <UserMenu/>
        </div>
        <div className="col-span-7 py-10">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;