import {Avatar, Button} from "flowbite-react";
import {Link} from "react-router-dom";

const Players = () => {

  let players = [1,2,3,4,5,6,7,8,9,10]

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
          <input type="text" className="gg_searchInput" placeholder="Hľadať hráča; Meno alebo ID"/>
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
      <div className="mt-20 grid grid-cols-4 gap-6">
        {players.map(player => (
          <Link to="/player/23" className="gg_panel overflow-hidden">
            <div className="p-4 flex items-center w-full gap-3 hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition"
                 key={player}>
              <Avatar/>
              user152535647
            </div>
          </Link>
        ))}
      </div>
      <div className="my-14">
        <Button className="mx-auto">Načítať ďalšie</Button>
      </div>
    </>
  );
};

export default Players;