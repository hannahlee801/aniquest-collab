import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type NewUserFormData = {
  full_name: string;
  email: string;
  username: string;
  password: string;
};

const NewUserForm: React.FC = () => {
  const [newUserFormData, setNewUserFormData] = useState<NewUserFormData>({
    full_name: "",
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewUserFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserFormData),
      mode: "cors",
    });
  };

  return (
    <div className="flex flex-col items-center mt-21 text-white">
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            id="full_name"
            name="full_name"
            placeholder="Name"
            autoComplete="name"
            value={newUserFormData.full_name}
            onChange={handleChange}
            className="w-85 h-11 border-medorange-400"
          />
        </div>
        <div>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            value={newUserFormData.email}
            onChange={handleChange}
            className="w-85 h-11 border-medorange-400 mt-5"
          />
        </div>
        <div>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            autoComplete="username"
            value={newUserFormData.username}
            onChange={handleChange}
            className="w-85 h-11 border-medorange-400 mt-5"
          />
        </div>
        <div>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            value={newUserFormData.password}
            onChange={handleChange}
            className="w-85 h-11 border-medorange-400 mt-5"
          />
        </div>
        <Button
          type="submit"
          onClick={() => {
            navigate("/login");
          }}
          className="mt-8 bg-maingrey-300 hover:bg-brightred-600"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewUserForm;
