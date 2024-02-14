import {Avatar, Tooltip} from "flowbite-react";

const TopTeams = () => {
  const data = [
    {
      id: 1,
      name: 'Na\'vi',
      members: 12,
      wins: 130,
    },
    {
      id: 2,
      name: 'Progamers',
      members: 5,
      wins: 57,
    }
  ]

  return data.map((team) =>
    <div className="gg_panel" key={team.id}>
      <div className="p-5 flex items-center gap-4">
        <Avatar alt={team.name}/>
        <div>
          <div className="text-xl font-medium">
            {team.name}
          </div>
          <div className="text-xs opacity-50">
            Členovia: {team.members}
          </div>
        </div>
        <div className="ms-auto leading-none">
          <Tooltip content="Výhry">
            <div className="text-2xl font-extrabold text-sky-600 dark:text-sky-400 drop-shadow-xl">
              {team.wins}
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default TopTeams;