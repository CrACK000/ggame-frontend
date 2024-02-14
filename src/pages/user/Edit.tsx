import {Button, Label, Select, TextInput} from "flowbite-react";

import { FaSteam } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";

const UserEdit = () => {
  return (
    <div className="gg_panel divide-y gg_divide">
      <div className="p-10">
        <div className="text-lg font-light mb-8">Steam účet</div>
        <form className="flex flex-col gap-4">
          <div className="max-w-sm">
            <div>
              <Button color="dark"><FaSteam className="w-5 h-5 me-3"/> Pripojiť Steam</Button>
            </div>
          </div>
        </form>
      </div>
      <div className="p-10">
        <div className="text-lg font-light mb-8">Informácie užívateľa</div>
        <form className="flex flex-col gap-4">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Prihlasovací email"/>
            </div>
            <TextInput id="email" type="email" value="patrikfejfar2@gmail.com" required/>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="nickname" value="Užívateľské meno"/>
            </div>
            <TextInput id="nickname" type="text" value="user124564563" required/>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="nationality" value="Národnosť"/>
            </div>
            <Select id="nationality" required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
          <div className="max-w-[100px]">
            <div className="mb-2 block">
              <Label htmlFor="age" value="Vek"/>
            </div>
            <Select id="age" required>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </Select>
          </div>
          <div className="flex items-center">
            <Button type="submit" className="ms-auto">Uložiť</Button>
          </div>
        </form>
      </div>
      <div className="p-10">
        <div className="text-lg font-light mb-8">Herné informácie</div>
        <form className="flex flex-col gap-4">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="favorite_game" value="Obľúbená hra"/>
            </div>
            <Select id="favorite_game">
              <option>Vybrať hru</option>
              <option>Counter Strike 2</option>
              <option>Counter Strike 1.6</option>
            </Select>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="discord_link" value="Discord"/>
            </div>
            <TextInput id="discord_link" icon={RiDiscordLine} type="url" placeholder="https://"/>
          </div>
          <div className="flex items-center">
            <Button type="submit" className="ms-auto">Uložiť</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;