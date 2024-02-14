import {Avatar, Button, Flowbite} from "flowbite-react";
import type { CustomFlowbiteTheme } from 'flowbite-react';
import {Link, useParams} from "react-router-dom";

import { TbMatchstick } from "react-icons/tb";
import {IoTimeOutline} from "react-icons/io5";

const customTheme: CustomFlowbiteTheme['avatar'] = {
  root: {
    size: {
      "xxl": "w-60 h-60"
    }
  }
};

const Team = () => {

  let params = useParams();

  return (
    <div key={params.teamId}>
      <div className="mx-auto mt-14">
        <Flowbite>
          <Avatar theme={customTheme} size="xxl"/>
        </Flowbite>
        <div className="text-[44px] font-bold text-center mt-8">
          Progamers
        </div>
      </div>
      <div className="mt-20 grid grid-cols-3 justify-center divide-x divide-gray-400 dark:divide-sky-900">
        <div>
          <div className="text-sky-600 dark:text-sky-400 text-xl font-semibold text-center mb-5">Odohraté zápasy</div>
          <div className="text-[40px] font-extrabold text-center">432</div>
        </div>
        <div>
          <div className="text-sky-600 dark:text-sky-400 text-xl font-semibold text-center mb-5">Hráči</div>
          <div className="text-[40px] font-extrabold text-center">12</div>
        </div>
        <div>
          <div className="text-sky-600 dark:text-sky-400 text-xl font-semibold text-center mb-5">Výhry</div>
          <div className="text-[40px] font-extrabold text-center">390</div>
        </div>
      </div>
      <div className="mt-32 grid grid-cols-3 gap-20">
        <div className="gg_panel flex flex-col divide-y gg_divide overflow-hidden">
          <div className="p-6 flex items-center gap-5 text-xl hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
            <Avatar/>
            <Link to="/">user14254634634</Link>
            <div className="ms-auto text-sm bg-sky-400/50 p-2 leading-none rounded-lg">Zakladateľ</div>
          </div>
          <div className="p-6 flex items-center gap-5 text-xl hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
            <Avatar/>
            <Link to="/">user14254634634</Link>
          </div>
          <div className="p-6 flex items-center gap-5 text-xl hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
            <Avatar/>
            <Link to="/">user14254634634</Link>
          </div>
          <div className="p-6 flex items-center gap-5 text-xl hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
            <Avatar/>
            <Link to="/">user14254634634</Link>
          </div>
          <div className="p-6 flex items-center gap-5 text-xl hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
            <Avatar/>
            <Link to="/">user14254634634</Link>
          </div>
          <div className="p-6 flex items-center gap-5 text-xl hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
            <Avatar/>
            <Link to="/">user14254634634</Link>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-8 flex items-center gap-10">
            <div className="me-auto text-3xl self-end">Podrobnosti & Štatistika</div>
            <Button size="xl">Vyzvať tím <TbMatchstick className="ms-3 h-6 w-6" /></Button>
          </div>
          <div className="gg_panel p-4 flex flex-col divide-y gg_divide text-lg">
            <div className="grid grid-cols-3 p-4">
              <div>Založenie tímu</div>
              <div className="col-span-2 font-semibold flex items-center gap-3"><IoTimeOutline /> 12.04.2024</div>
            </div>
            <div className="grid grid-cols-3 p-4">
              <div>Hráči</div>
              <div className="col-span-2 font-semibold">12</div>
            </div>
            <div className="grid grid-cols-3 p-4">
              <div>Odohraté zápasy</div>
              <div className="col-span-2 font-semibold">432</div>
            </div>
            <div className="grid grid-cols-3 p-4">
              <div>Výhry</div>
              <div className="col-span-2 font-semibold">390</div>
            </div>
            <div className="grid grid-cols-3 p-4">
              <div>Prehry</div>
              <div className="col-span-2 font-semibold">42</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;