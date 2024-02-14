import {Link, useParams} from "react-router-dom";
import {Avatar, Tabs, Textarea} from "flowbite-react";
import { FaUsers } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoVideocamOutline, IoTimeOutline } from "react-icons/io5";
import { FaRegComment, FaFileVideo } from "react-icons/fa";

const Match = () => {

  const params = useParams();

  return (
    <div key={params.matchId}>
      <div className="my-20 flex items-center justify-center gap-4 text-3xl font-medium">
        <img src="/games/cs2.png" className="rounded w-10 h-10" alt="Counter Strike 2"/>
        Counter Strike 2
      </div>
      <div className="flex items-center w-full">
        <div className="w-full flex justify-start items-center gap-6">
          <Avatar size="xl"/>
          <div className="text-[40px] font-semibold">
            Na'vi
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-6">
          <div className="text-[72px] font-extrabold opacity-50">9</div>
          <div className="text-xl font-semibold opacity-50">:</div>
          <div className="text-[72px] font-extrabold dark:text-sky-400 text-sky-600">13</div>
        </div>
        <div className="w-full flex justify-end items-center gap-6 text-end">
          <div className="text-[40px] font-semibold">
            Progamers
          </div>
          <Avatar size="xl"/>
        </div>
      </div>

      <div className="w-full md:w-11/12 lg:w-10/12 mx-auto">
        <Tabs className="mt-14" aria-label="Detaily zápasu" style="fullWidth">
          <Tabs.Item active title="Podrobnosti" icon={LuLayoutDashboard}>
            <div className="mt-6 gg_panel flex flex-col divide-y gg_divide">
              <div className="px-10 py-5 flex flex-col divide-y gg_divide">
                <div className="py-5 text-xl grid grid-cols-3">
                  <div className="col-span-1">Štart zápasu</div>
                  <div className="col-span-2 flex items-center gap-3"><IoTimeOutline /> 12.04.2024 16:00</div>
                </div>
                <div className="py-5 text-xl grid grid-cols-3">
                  <div className="col-span-1">Moderátor</div>
                  <div className="col-span-2"><Link to="/">user124534636</Link></div>
                </div>
                <div className="py-5 text-xl grid grid-cols-3">
                  <div className="col-span-1">Hráči</div>
                  <div className="col-span-2">5 vs 5</div>
                </div>
                <div className="py-5 text-xl grid grid-cols-3">
                  <div className="col-span-1">Hra</div>
                  <div className="col-span-2 flex items-center gap-3">
                    <img src="/games/cs2.png" className="w-6 h-6 rounded" alt="Counter Strike 2"/>
                    Counter Strike 2
                  </div>
                </div>
                <div className="py-5 text-xl grid grid-cols-3">
                  <div className="col-span-1">Mapa</div>
                  <div className="col-span-2">de_dust2</div>
                </div>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Hráči" icon={FaUsers}>
            <div className="mt-6 gg_panel grid grid-cols-2 divide-x gg_divide">
              <div className="px-10 py-5 flex flex-col divide-y gg_divide">
                <div className="py-5 text-xl flex items-center justify-start gap-3">
                  <Avatar/>
                  user412221354
                </div>
                <div className="py-5 text-xl flex items-center justify-start gap-3">
                  <Avatar/>
                  user412221354
                </div>
                <div className="py-5 text-xl flex items-center justify-start gap-3">
                  <Avatar/>
                  user412221354
                </div>
                <div className="py-5 text-xl flex items-center justify-start gap-3">
                  <Avatar/>
                  user412221354
                </div>
                <div className="py-5 text-xl flex items-center justify-start gap-3">
                  <Avatar/>
                  user412221354
                </div>
              </div>
              <div className="px-10 py-5 flex flex-col divide-y gg_divide">
                <div className="py-5 text-xl flex items-center justify-end gap-3">
                  user412221354
                  <Avatar/>
                </div>
                <div className="py-5 text-xl flex items-center justify-end gap-3">
                  user412221354
                  <Avatar/>
                </div>
                <div className="py-5 text-xl flex items-center justify-end gap-3">
                  user412221354
                  <Avatar/>
                </div>
                <div className="py-5 text-xl flex items-center justify-end gap-3">
                  user412221354
                  <Avatar/>
                </div>
                <div className="py-5 text-xl flex items-center justify-end gap-3">
                  user412221354
                  <Avatar/>
                </div>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Server & Záznam hry" icon={IoVideocamOutline}>
            <div className="mt-6 gg_panel flex flex-col divide-y gg_divide">
              <div className="flex items-center divide-x gg_divide">
                <div className="p-8 text-2xl w-full">
                  Gamesites.cz CS2 CW/TG #1 | Fakaheda.eu
                </div>
                <div className="p-8 text-2xl">82.208.17.109:27201</div>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-10">Demo záznam</div>
                <div className="text-lg inline-flex gap-4 items-center bg-gray-200 dark:bg-sky-900 p-4 rounded-lg">
                  <FaFileVideo />
                  <span>auto-20230930-002811-de_cache.dem.gz</span>
                  <Link to="/">Stiahnuť</Link>
                </div>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Komentáre" icon={FaRegComment}>
            <div className="mt-6 gg_panel flex flex-col divide-y gg_divide">
              <div className="p-8">
                <Textarea rows={4} className="text-lg" placeholder="Napísať komentár"></Textarea>
              </div>
              <div className="p-8 flex gap-6 items-start">
                <Avatar size="lg"/>
                <div>
                  <div className="flex items-center mb-3">
                    <Link to="/" className="text-xl">user123426357457</Link>
                    <div className="ms-auto opacity-50">12.12.2023 13:42</div>
                  </div>
                  <div className="p-2">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default Match;