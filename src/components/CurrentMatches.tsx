const CurrentMatches = () => {
  const data = [
    {
      id: 1,
      game: 10,
      team: 14123,
      team_opponent: 561,
    },
    {
      id: 2,
      game: 11,
      team: 334,
      team_opponent: 4441,
    },
    {
      id: 2,
      game: 11,
      team: 6457,
      team_opponent: 561,
    },
    {
      id: 2,
      game: 11,
      team: 6457,
      team_opponent: 561,
    }
  ]

  return data.map((match) =>
    <div key={match.id}
         className="px-4 py-3 flex items-center w-full gap-x-2 gap-y-1 hover:bg-gray-200/50 dark:hover:bg-sky-100/5 transition">
      <div className="w-full text-start font-semibold">
        Na'vi
      </div>
      <div className="w-full text-center">
        <img src="/games/cs2.png" alt="Counter Strike 2" className="w-8 h-8 mx-auto rounded-lg shadow-lg"/>
        <div className="text-xs opacity-50 mt-1.5">
          12.03.2024 16:00
        </div>
      </div>
      <div className="w-full text-end font-semibold">
        Progamers
      </div>
    </div>
  );
}

export default CurrentMatches;