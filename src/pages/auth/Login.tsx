import { FaSteam } from "react-icons/fa6";
import {Button, Checkbox, Label, TextInput} from "flowbite-react";

const Login = () => {
  return (
    <div className="my-14 w-full sm:w-8/12 md:w-5/12 mx-auto">
      <div className="text-center text-3xl font-light mb-5">Prihlásiť sa</div>
      <div className="gg_panel p-14">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Prihlasovací email"/>
            </div>
            <TextInput id="email" type="email" placeholder="name@mail.com" required/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Heslo"/>
            </div>
            <TextInput id="password" type="password" required/>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember"/>
            <Label htmlFor="remember">Zostať prihlásený</Label>
          </div>
          <Button type="submit">Prihlásiť sa</Button>
          <Button type="button" color="dark">Prihlásiť sa cez <FaSteam className="mx-2"/> Steam</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;