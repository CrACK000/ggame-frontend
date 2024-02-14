import {Avatar, Button} from "flowbite-react";
import {Link} from "react-router-dom";

const Teams = () => {

  const teams = [1,2,3,4];

  return (
    <>
      <div className="mt-20 w-full md:w-11/12 lg:w-10/12 xl:w-8/12 mx-auto">
        <div className="relative">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 text-sky-600 dark:text-sky-400">
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="text" className="gg_searchInput" placeholder="Vyhľadať tím"/>
          <div className="absolute top-1/2 left-full -translate-y-1/2">
            <Button className="ms-2.5" size="xs">
              <svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 20 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m2.133 2.6 5.856 6.9L8 14l4 3 .011-7.5 5.856-6.9a1 1 0 0 0-.804-1.6H2.937a1 1 0 0 0-.804 1.6Z"/>
              </svg>
              Filter
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full md:w-11/12 lg:w-10/12 mx-auto">
        <div className="gg_panel flex flex-col divide-y gg_divide overflow-hidden">
          {teams.map((team) => (
            <div
              className="p-8 flex items-center w-full gap-x-2 gap-y-1 hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition"
              key={team}>
              <div className="w-full flex justify-start items-center gap-6">
                <Avatar size="lg"/>
                <div className="text-3xl font-semibold">
                  Na'vi
                </div>
                <div className="ms-auto flex items-center divide-x gg_divide">
                  <div className="text-center px-10">
                    <div className="font-semibold text-sm opacity-50 mb-3">Odohraté zápasy</div>
                    <div className="font-extrabold text-3xl">322</div>
                  </div>
                  <div className="text-center px-10">
                    <div className="font-semibold text-sm opacity-50 mb-3">Hráči</div>
                    <div className="font-extrabold text-3xl">12</div>
                  </div>
                </div>
                <Link to="/team/32"
                      className="dark:hover:bg-sky-900/50 hover:bg-sky-200/50 border border-sky-700 dark:border-sky-400 rounded-lg font-semibold px-2 py-1.5 transition">Zobraziť
                  detaily</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-14">
        <Button className="mx-auto">Načítať ďalšie</Button>
      </div>
    </>
  );
};

export default Teams;