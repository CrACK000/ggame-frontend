import {useNavigate} from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  console.log('Si odhlásený');
  navigate('/');
};

export default Logout;