import {Link, NavLink} from "react-router-dom";

import { TbUserEdit, TbSettings, TbLogout, TbMessage2Exclamation, TbTrophy } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { RiTeamLine } from "react-icons/ri";

import Logout from "../auth/Logout.tsx";
import {PiHashBold} from "react-icons/pi";

const UserMenu = () => {
  return (
    <div className="sticky top-0">
      <ul className="gg_usermenu">
        <li>
          <NavLink to="edit" className={({isActive}) => isActive ? 'active' : ''}>
            <TbUserEdit className="w-6 h-6"/> Upraviť profil
          </NavLink>
        </li>
        <li>
          <NavLink to="avatar" className={({isActive}) => isActive ? 'active' : ''}>
            <RxAvatar className="w-6 h-6"/> Avatar
          </NavLink>
        </li>
        <li>
          <NavLink to="team" className={({isActive}) => isActive ? 'active' : ''}>
            <RiTeamLine className="w-6 h-6"/> Môj tím
          </NavLink>
        </li>
        <li>
          <NavLink to="settings" className={({isActive}) => isActive ? 'active' : ''}>
            <TbSettings className="w-6 h-6"/> Nastavenia
          </NavLink>
        </li>
        <li>
          <NavLink to="events" className={({isActive}) => isActive ? 'active' : ''}>
            <TbTrophy className="w-6 h-6"/> Eventy
          </NavLink>
        </li>
        <li>
          <NavLink to="notifications" className={({isActive}) => isActive ? 'active' : ''}>
            <TbMessage2Exclamation className="w-6 h-6"/> Upozornenia
          </NavLink>
        </li>
        <li>
          <Link to="logout" onClick={(event) => {
            event.preventDefault();
            Logout();
          }}>
            <TbLogout className="w-6 h-6"/> Odhlásiť sa
          </Link>
        </li>
      </ul>
      <div className="bg-white/30 dark:bg-black/30 shadow-lg rounded-2xl mb-5 divide-y gg_divide">
        <div className="p-3 grid grid-cols-3 items-center">
          <div className="text-lg font-semibold text-center p-2">Moje ID</div>
          <div
            className="col-span-2 bg-white/75 dark:bg-black/30 opacity-75 hover:opacity-100 rounded-xl text-xl p-3 select-all relative text-center font-medium transition tracking-widest">
            <PiHashBold className="w-4 h-4 absolute top-1/2 left-3 transform -translate-y-1/2 opacity-50"/>
            12312332453
          </div>
        </div>
      </div>
    </div>
)
  ;
};

export default UserMenu;