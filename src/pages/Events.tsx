import {Link} from "react-router-dom";
import {Button} from "flowbite-react";

const Events = () => {

  const events = [1,2,3,4,5,6,7]

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
          <input type="text" className="gg_searchInput" placeholder="Vyhľadať event"/>
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
      <div className="mt-20 grid grid-cols-3 gap-16">
        {events.map(event => (
          <div className="gg_panel overflow-hidden">
            <div key={event}
                 className="bg-[url('https://phongvu.vn/cong-nghe/wp-content/uploads/2018/09/csgo-free.jpg')] h-[200px] bg-center relative shadow-lg">
              <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gray-200 dark:to-sky-900 h-full"></div>
              <div className="absolute bottom-0 left-0 m-5 text-xl font-semibold">
                Zimný výpredaj
              </div>
            </div>
            <div className="p-5 flex flex-col gap-5">
              <div>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
                designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
                scrambled parts of Cicero's
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">Štartuje:</span> 12.04.2024 16:00
                </div>
                <Link to="/event/32"
                      className="ms-auto dark:hover:bg-sky-900/50 hover:bg-sky-200/50 border border-sky-700 dark:border-sky-400 rounded-lg font-semibold px-2 py-1.5 transition">Zobraziť
                  viac</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-14">
        <Button className="mx-auto">Načítať ďalšie</Button>
      </div>
    </>
  );
};

export default Events;