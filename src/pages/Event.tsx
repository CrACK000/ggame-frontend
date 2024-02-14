import { FaRandom } from "react-icons/fa";
import {Avatar, Tooltip} from "flowbite-react";
import {Link} from "react-router-dom";
import { TfiMoreAlt } from "react-icons/tfi";

const Event = () => {
  return (
    <div>
      <div className="mt-10 text-[44px] font-semibold text-center">
        Zimný výpredaj
      </div>
      <div className="mt-16 w-full md:w-11/12 lg:w-10/12 mx-auto grid grid-cols-3 justify-center divide-x divide-gray-400 dark:divide-sky-900">
        <div>
          <div className="text-sky-600 dark:text-sky-400 font-semibold text-center mb-3">Začiatok výberu</div>
          <div className="text-xl font-semibold text-center">11.05.2024 11:00</div>
        </div>
        <div>
          <div className="text-sky-600 dark:text-sky-400 font-semibold text-center mb-3">Koniec výberu</div>
          <div className="text-xl font-semibold text-center">12.05.2025 14:00</div>
        </div>
        <div>
          <div className="text-sky-600 dark:text-sky-400 font-semibold text-center mb-3">Štart zápasu</div>
          <div className="text-xl font-semibold text-center">16.05.2025 14:00</div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <div className="text-3xl font-medium text-sky-600 dark:text-sky-400">Hlavná výhra</div>
        <div className="text-[60px] font-extrabold">1 000 €</div>
      </div>

      <div className="mt-32 grid grid-cols-3 gap-14">

        <div>
          <div className="mb-20">
            <div className="mb-3 text-2xl font-light text-center">Informácie</div>
            <div className="gg_panel flex flex-col divide-y gg_divide mb-10">
              <div className="grid grid-cols-3 items-center p-5">
                <div>Vytvorené</div>
                <div className="col-span-2 font-medium">05.04.2023 15:23</div>
              </div>
              <div className="grid grid-cols-3 items-center p-5">
                <div>Hra</div>
                <div className="col-span-2 font-medium flex items-center gap-3">
                  <img src="/games/cs2.png" className="w-5 h-5 rounded" alt="Counter Strike 2"/>
                  Counter Strike 2
                </div>
              </div>
              <div className="grid grid-cols-3 items-center p-5">
                <div>Výber tímov</div>
                <div className="col-span-2 font-medium flex items-center gap-2"><FaRandom className="text-sky-600 dark:text-sky-400" /> Náhodný</div>
              </div>
            </div>
          </div>
          <div className="mb-20">
            <div className="mb-3 text-2xl font-light text-center">Prihlásené tímy</div>
            <div className="gg_panel overflow-hidden flex flex-col divide-y gg_divide">
              <Link to="/team/12"
                    className="p-4 flex items-center gap-4 hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
                <Avatar/>
                <div>
                  <div className="text-xl font-medium">
                    Progamers
                  </div>
                  <div className="text-xs text-gray-900 dark:text-gray-100 opacity-75">
                    Členovia: 12
                  </div>
                </div>
                <div className="ms-auto leading-none">
                  <Tooltip content="Výhry">
                    <div className="text-2xl font-extrabold text-sky-600 dark:text-sky-400 drop-shadow-xl">
                      55
                    </div>
                  </Tooltip>
                </div>
              </Link>
              <Link to="/team/12"
                    className="p-4 flex items-center gap-4 hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
                <Avatar/>
                <div>
                  <div className="text-xl font-medium">
                    Na'vi
                  </div>
                  <div className="text-xs text-gray-900 dark:text-gray-100 opacity-75">
                    Členovia: 5
                  </div>
                </div>
                <div className="ms-auto leading-none">
                  <Tooltip content="Výhry">
                    <div className="text-2xl font-extrabold text-sky-600 dark:text-sky-400 drop-shadow-xl">
                      55
                    </div>
                  </Tooltip>
                </div>
              </Link>
              <Link to="/" className="p-2 hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
                <TfiMoreAlt className="mx-auto"/>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-2">

          <div className="mb-20">
            <div className="mb-3 text-2xl font-light text-start">Event</div>
            <div className="gg_panel p-8">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
            </div>
          </div>

          <div className="mb-20">
            <div className="mb-3 text-2xl font-light text-start">Podmienky & Pravidlá</div>
            <div className="gg_panel flex flex-col divide-y gg_divide">

              <div className="p-6">
                <div className="text-2xl font-light text-sky-600 dark:text-sky-400">Podmienky moderátora</div>
                <div className="p-4">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                  web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to
                  have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It
                  usually begins with
                </div>
              </div>

              <div className="p-6">
                <div className="text-2xl font-light flex items-center justify-between mb-4">
                  <span className="text-sky-600 dark:text-sky-400">Pravidlá hry</span>
                  <div className="inline-flex items-center gap-3">
                    <img src="/games/cs2.png" alt="Counter Strike 2" className="w-6 h-6"/>
                    Counter Strike 2
                  </div>
                </div>
                <div className="p-4">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Event;