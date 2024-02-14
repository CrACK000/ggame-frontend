import { Outlet, Link } from "react-router-dom";
import {Avatar, Badge, DarkThemeToggle, Dropdown, Footer} from "flowbite-react";

import { MdNotificationsNone, MdLogout } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

import Logout from "../auth/Logout.tsx";

interface UserMenuProps {
  loggedIn: boolean;
}

function UserMenu({ loggedIn }: UserMenuProps) {
  return (
    <>
      {loggedIn ? (
        <div>
          <Dropdown label="" placement="bottom-end" dismissOnClick={false} renderTrigger={() => (
            <div className="flex items-center gap-4 hover:bg-gray-300 dark:hover:bg-sky-100/10 p-2 rounded-lg cursor-pointer leading-none font-semibold">
              CrACK
              <Avatar size="sm" />
            </div>
          )}>
            <Dropdown.Item icon={FaUserEdit} as={Link} to="/user/edit">Upraviť profil</Dropdown.Item>
            <Dropdown.Item icon={IoSettingsOutline} as={Link} to="/user/settings">Nastavenia</Dropdown.Item>
            <Dropdown.Item icon={MdNotificationsNone} as={Link} to="/user/notifications">Upozornenia <Badge color="info" className="ms-3">0</Badge></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item icon={MdLogout} onClick={Logout}>Odhlásiť sa</Dropdown.Item>
          </Dropdown>
        </div>
      ) : (
        <>
          <li>
            <Link to="/login" className="gg_navlink">Prihlásiť sa</Link>
          </li>
          <li>
            <Link to="/create-account" className="gg_navlink">Zaregistrovať sa</Link>
          </li>
        </>
      )}
    </>
  );
}

const Layout = () => {
  return (
    <>
      <div className="gg_container">

        <div className="flex items-center py-12 w-full">
          <div className="w-full text-start">
            <ul className="gg_navbar">
              <li>
                <Link to="/matches" className="gg_navlink">Zápasy</Link>
              </li>
              <li>
                <Link to="/teams" className="gg_navlink">Tímy</Link>
              </li>
              <li>
                <Link to="/players" className="gg_navlink">Hráči</Link>
              </li>
              <li>
                <Link to="/events" className="gg_navlink">Eventy</Link>
              </li>
            </ul>
          </div>
          <div className="w-full text-center">
            <Link to="/">
            <img src="/ggame-logo.png" className="mx-auto" alt="Logo GGame.be"/>
            </Link>
          </div>
          <div className="w-full text-end">
            <ul className="gg_navbar justify-end">
              <li>
                <DarkThemeToggle/>
              </li>
              {UserMenu({ loggedIn: true })}
            </ul>
          </div>
        </div>

        <Outlet/>

        <div className="py-14">
          <Footer container>
            <Footer.Copyright href="#" by="GGame.be™" year={2024} />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </Footer>
        </div>

      </div>
    </>
  )
}

export default Layout;