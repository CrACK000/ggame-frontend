import {Link, useParams} from "react-router-dom";
import {Avatar, Button, Tabs, Textarea, Tooltip} from "flowbite-react";
import {TbMessage2} from "react-icons/tb";
import {FaRegComment, FaSteam} from "react-icons/fa";
import {LuLayoutDashboard} from "react-icons/lu";
import {MdHistory, MdInfoOutline} from "react-icons/md";

const Player = () => {

  let params = useParams();

  return (
    <div key={params.playerId} className="mt-10 w-full md:w-11/12 lg:w-10/12 mx-auto">
      <div className="grid grid-cols-4 gap-10 items-center">
        <div className="text-center">
          <Avatar size="xxl"/>
          <div className="opacity-50 text-lg mt-5 tracking-wide">
            <span className="select-none me-1">#</span>2135346478
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex items-end gap-5 mb-6">
            <div className="text-3xl font-bold">user2135346478</div>
            <div className="ms-auto">
              <div className="opacity-50 text-end mb-1">Posledná aktivita</div>
              <div className="text-2xl font-light">12.04.2023 12:43</div>
            </div>
          </div>
          <div className="gg_panel relative">
            <div className="absolute top-0 right-0 m-2">
              <Button><TbMessage2 className="w-5 h-5 me-2" /> Pozvať</Button>
            </div>
            <div className="flex flex-col divide-y gg_divide text-lg">
              <div className="grid grid-cols-3 items-center p-4">
                <div>Odohraté zápasy</div>
                <div className="col-span-2 font-semibold">23</div>
              </div>
              <div className="grid grid-cols-3 items-center p-4">
                <div>Vyhraté zápasy</div>
                <div className="col-span-2 font-semibold">12</div>
              </div>
              <div className="grid grid-cols-3 items-center p-4">
                <div>Prehraté zápasy</div>
                <div className="col-span-2 font-semibold">11</div>
              </div>
              <div className="grid grid-cols-3 items-center p-4">
                <div>Obľúbená hra</div>
                <div className="col-span-2 font-semibold flex items-center gap-3">
                  <img src="/games/cs2.png" className="w-6 h-6 rounded" alt="Counter Strike 2"/>
                  Counter Strike 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Tabs aria-label="Detaily hráča" style="fullWidth">
          <Tabs.Item active title="Podrobnosti" icon={LuLayoutDashboard}>
            <div className="mt-6 gg_panel">
              <div className="flex flex-col divide-y gg_divide text-lg">
                <div className="grid grid-cols-3 items-center p-4">
                  <div>Tím</div>
                  <div className="col-span-2 font-semibold">
                    <Link to="/team/23">Progamers</Link>
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center p-4">
                  <div>Vek</div>
                  <div className="col-span-2 font-semibold">24</div>
                </div>
                <div className="grid grid-cols-3 items-center p-4">
                  <div>Národnosť</div>
                  <div className="col-span-2 font-semibold flex items-center gap-3"><img src="/locations/sk.png" className="h-6" alt="Slovensko"/>Slovensko</div>
                </div>
                <div className="grid grid-cols-3 items-center p-4">
                  <div>Discord</div>
                  <div className="col-span-2 font-semibold">
                    <Link to="/team/23" target="_blank">CrACK Developer</Link>
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center p-4">
                  <div>Steam profil</div>
                  <div className="col-span-2 font-semibold">
                    <Link to="https://steamcommunity.com/profiles/76561198974046868/" target="_blank" className="inline-flex items-center gap-3"><FaSteam /> CrACK</Link>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="História zápasov" icon={MdHistory}>
            <div className="mt-6 gg_panel overflow-hidden">
              <div className="flex flex-col divide-y gg_divide text-lg">
                <Link to="/match/23" className="grid grid-cols-12 gap-6 items-center p-4 hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
                  <div className="col-span-1 text-gray-900 dark:text-gray-100 opacity-50">#5324</div>
                  <div className="col-span-4">Na'vi <div className="inline-block text-gray-900 dark:text-gray-100 opacity-50 mx-3">vs</div> Progamers</div>
                  <div className="col-span-4 mx-auto text-gray-900 dark:text-gray-100 opacity-50">12.11.2023 16:00</div>
                  <div className="col-span-3 ms-auto font-semibold dark:text-sky-400 text-sky-600">Výhra</div>
                </Link>
                <Link to="/match/23" className="grid grid-cols-12 gap-6 items-center p-4 hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
                  <div className="col-span text-gray-900 dark:text-gray-100 opacity-50">#323</div>
                  <div className="col-span-4">Progamers <div className="inline-block text-gray-900 dark:text-gray-100 opacity-50 mx-3">vs</div> Exoti</div>
                  <div className="col-span-4 mx-auto text-gray-900 dark:text-gray-100 opacity-50">12.11.2023 16:00</div>
                  <div className="col-span-3 ms-auto font-semibold text-gray-900 dark:text-gray-100 opacity-75">Prehra</div>
                </Link>
                <Link to="/match/23" className="grid grid-cols-12 gap-6 items-center p-4 hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
                  <div className="col-span text-gray-900 dark:text-gray-100 opacity-50">#55123</div>
                  <div className="col-span-4">Progamers <div className="inline-block text-gray-900 dark:text-gray-100 opacity-50 mx-3">vs</div> Exoti</div>
                  <div className="col-span-4 mx-auto text-gray-900 dark:text-gray-100 opacity-50">12.11.2023 16:00</div>
                  <div className="col-span-3 ms-auto font-semibold text-red-500 flex items-center gap-2">
                    <Tooltip content="Opustil zápas">
                      <MdInfoOutline className="w-5 h-5" />
                    </Tooltip>
                    Penalizácia
                  </div>
                </Link>
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

export default Player;