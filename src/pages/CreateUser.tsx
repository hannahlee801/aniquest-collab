import LogoSimplified from "@/components/LogoSimplified";
import { Link } from "react-router-dom";
import NewUserForm from "@/components/NewUserForm";

const CreateUser = () => {
  return (
    <div>
      <div className="font-anton ml-[25px] mr-[25px]">
        <LogoSimplified />
      </div>
      <div className="absolute bottom-0">
        <img src="../src/assets/collage2.jpg" alt="Collage" className="" />
      </div>
      <NewUserForm />
      <div className="flex justify-center mt-13">
        <p className="text-white">Already have an account?</p>
        <Link to="/login">
          <p className="ml-2 text-medorange-400 font-bold">Log In</p>
        </Link>
      </div>
    </div>
  );
};

export default CreateUser;
