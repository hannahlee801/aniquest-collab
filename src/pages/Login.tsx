import LoginForm from "@/components/LoginForm";
import LogoSimplified from "../components/LogoSimplified";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="font-anton ml-[25px] mr-[25px]">
        <LogoSimplified />
      </div>
      <div className="absolute bottom-0">
        <img src="../src/assets/collage2.jpg" alt="Collage" className="" />
      </div>
      <LoginForm />
      <div className="flex justify-center mt-27">
        <p className="text-white">Don't have an account?</p>
        <Link to="/createaccount">
          <p className="ml-2 text-medorange-400 font-bold">Sign Up</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
