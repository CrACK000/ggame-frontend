import TopTeams from "../components/TopTeams.tsx";
import LatestEvents from "../components/LatestEvents.tsx";
import CurrentMatches from "../components/CurrentMatches.tsx";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-7 gap-14">
        <div className="col-span-2">
          <div className="text-2xl font-medium mb-4 text-center">
            Najbližšie zápasy
          </div>
          <div
            className="gg_panel flex flex-col divide-y gg_divide overflow-hidden">
            {CurrentMatches()}
          </div>
        </div>
        <div
          className="col-span-5 flex justify-between bg-gradient-to-bl from-sky-400 to-sky-800 rounded-3xl p-10 text-white shadow-xl">
          <div>
            <div className="text-[45px] font-bold drop-shadow mb-4">
              Zahraj si snami !
            </div>
            <div className="w-96 font-light opacity-90 text-2xl leading-9 drop-shadow">
              Vytvor si vlastný tím, pozvi priateľov a zapoj do rôznych eventov kde môžete získaj zaujímavé výhry.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-center mb-8">
              <div className="text-[40px] font-extrabold drop-shadow">2 234</div>
              <div className="font-semibold drop-shadow">Odohraných zápasov</div>
            </div>
            <div className="text-center">
              <div className="text-[40px] font-extrabold drop-shadow">40 tis.</div>
              <div className="font-semibold drop-shadow">Hráčov</div>
            </div>
            <div className="mt-auto text-end">
              <button
                className="bg-white/30 hover:bg-white/40 py-3.5 px-6 mt-8 rounded-xl font-semibold uppercase shadow-xl transition">
                <span className="drop-shadow">Zapojiť sa aj ty</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 items-start mt-32">
        <div>
          <div className="text-2xl font-medium mb-4 text-center">
            TOP 5 Tímov
          </div>
          <div className="flex flex-col gap-3">
            {TopTeams()}
          </div>
        </div>
        <div className="col-span-2">
          <div className="text-2xl font-medium mb-4 text-start">
            Najnovšie Eventy
          </div>
          <div
            className="gg_panel flex flex-col divide-y gg_divide overflow-hidden">
            {LatestEvents()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;