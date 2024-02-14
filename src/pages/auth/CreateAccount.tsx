import {Button, Checkbox, Label, TextInput} from "flowbite-react";
import {FaSteam} from "react-icons/fa6";
import {Link} from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="my-14 w-full sm:w-8/12 md:w-5/12 mx-auto">
      <div className="text-center text-3xl font-light mb-5">Vytvoriť účet</div>
      <div className="gg_panel p-14">
        <form className="flex max-w-md flex-col gap-4">
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
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Zopakujte heslo"/>
            </div>
            <TextInput id="repeat-password" type="password" required shadow/>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree"/>
            <Label htmlFor="agree" className="flex">
              Súhlasím s týmito&nbsp;
              <Link to="/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                podmienkami
              </Link>
            </Label>
          </div>
          <Button type="submit">Zaregistrujte si nový účet</Button>
          <Button type="button" color="dark">Prihlásiť sa cez <FaSteam className="mx-2"/> Steam</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;