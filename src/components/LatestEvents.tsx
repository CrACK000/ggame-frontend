const LatestEvents = () => {
  const data = [
    {
      id: 32,
    },
    {
      id: 32,
    }
  ]

  return data.map((event) =>
    <div className="px-8 py-6 w-full hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition" key={event.id}>
      <div className="flex items-center gap-x-2 gap-y-1">
        <div className="text-2xl font-semibold">
          Zimný výpredaj
          <div className="text-sm font-medium opacity-50">Hra: Counter Strike 2</div>
        </div>
        <div className="ms-auto">
          <div className="font-bold text-3xl text-end">1 000 €</div>
          <div className="uppercase font-normal text-sm opacity-50 flex gap-1.5 items-center">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8 19v-9m3-4H5.5a2.5 2.5 0 1 1 0-5C7 1 8.375 2.25 9.375 3.5M12 19v-9m-9 0h14v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8ZM2 6h16a1 1 0 0 1 1 1v3H1V7a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"/>
            </svg>
            Hlavná výhra
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-6">
        <div>
          <div className="font-semibold text-sky-600 dark:text-sky-400 text-sm">Začiatok výberu</div>
          <div className="text-lg font-semibold opacity-75">12.4.2024 15:00</div>
        </div>
        <div>
          <div className="font-semibold text-sky-600 dark:text-sky-400 text-sm">Koniec výberu</div>
          <div className="text-lg font-semibold opacity-75">12.4.2024 15:00</div>
        </div>
        <div>
          <div className="font-semibold text-sky-600 dark:text-sky-400 text-sm">Štart zápasu</div>
          <div className="text-lg font-semibold opacity-75">12.4.2024 15:00</div>
        </div>
      </div>
    </div>
  );
}

export default LatestEvents;