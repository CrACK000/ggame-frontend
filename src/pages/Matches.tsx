import {Avatar, Button} from "flowbite-react";
import {Link} from "react-router-dom";

const Matches = () => {

  const matches = [1, 2, 3, 4];

  return (
    <>
      <div>
        <div className="text-2xl font-medium mb-4 text-center">
          Posledné odohraté zápasy
        </div>
      </div>
      <div className="gg_panel grid grid-cols-4 divide-x gg_divide overflow-hidden">
        {matches.map((match) => (
          <div className="px-4 py-8 flex items-center w-full gap-x-2 gap-y-1 hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition" key={match}>
            <div className="w-full text-center font-semibold flex flex-col gap-1.5">
              <Avatar/>
              Na'vi
            </div>
            <div className="w-full flex items-center justify-center gap-3">
              <div className="text-3xl font-extrabold opacity-50">9</div>
              <div className="text-lg font-semibold opacity-50">:</div>
              <div className="text-3xl font-extrabold dark:text-sky-400 text-sky-600">13</div>
            </div>
            <div className="w-full text-center font-semibold dark:text-sky-400 text-sky-600 flex flex-col gap-1.5">
              <Avatar/>
              Progamers
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 w-full md:w-11/12 lg:w-10/12 xl:w-8/12 mx-auto">
        <div className="relative">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 text-sky-600 dark:text-sky-400">
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/></svg>
          </div>
          <input type="text" className="gg_searchInput" placeholder="Vyhľadať zápas"/>
          <div className="absolute top-1/2 left-full -translate-y-1/2">
            <Button className="ms-2.5" size="xs">
              <svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2.133 2.6 5.856 6.9L8 14l4 3 .011-7.5 5.856-6.9a1 1 0 0 0-.804-1.6H2.937a1 1 0 0 0-.804 1.6Z"/></svg>
              Filter
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full md:w-11/12 lg:w-10/12 mx-auto">
        <div className="gg_panel flex flex-col divide-y gg_divide overflow-hidden">
          {matches.map((match) => (
            <div className="px-6 py-8 flex items-center w-full gap-x-2 gap-y-1 hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition" key={match}>
              <div className="w-full flex justify-start items-center gap-4">
                <Avatar size="lg"/>
                <div className="text-2xl font-semibold">
                  Na'vi
                  <div className="text-sm opacity-75">
                    <Link to="/">CrACK</Link>, <Link to="/">NR | Dado</Link>, <Link to="/">Restt</Link>, <Link to="/">Corben Dallas</Link>, <Link to="/">Grindderrer</Link>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="mb-2 flex items-center justify-center gap-2 text-sm font-medium">
                  <img src="/games/cs2.png" className="rounded w-5 h-5" alt="Counter Strike 2" />
                  Counter Strike 2
                </div>
                <div className="w-full flex items-center justify-center gap-3">
                  <div className="text-[40px] font-extrabold opacity-50">9</div>
                  <div className="text-lg font-semibold opacity-50">:</div>
                  <div className="text-[40px] font-extrabold dark:text-sky-400 text-sky-600">13</div>
                </div>
                <div className="mt-2 text-center">
                  <Link to="/match/12" className="text-xs dark:hover:bg-sky-900/50 hover:bg-sky-200/50 border border-sky-700 dark:border-sky-400 rounded-lg font-semibold px-2 py-1.5 transition">Zobraziť detaily</Link>
                </div>
              </div>
              <div className="w-full flex justify-end items-center gap-4 text-end">
                <div className="text-2xl font-semibold">
                  Progamers
                  <div className="text-sm opacity-75">
                    <Link to="/">CrACK</Link>, <Link to="/">NR | Dado</Link>, <Link to="/">Restt</Link>, <Link to="/">Corben Dallas</Link>, <Link to="/">Grindderrer</Link>
                  </div>
                </div>
                <Avatar size="lg"/>
              </div>
            </div>
          ))}
        </div>

        <div className="my-14">
          <Button className="mx-auto">Načítať ďalšie</Button>
        </div>

      </div>
    </>
  )
};

export default Matches;