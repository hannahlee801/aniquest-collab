import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

type LoginFormData = {
  username: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://localhost:8000/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFormData),
      mode: "cors",
    });
  };

  return (
    <div className="flex flex-col items-center mt-38">
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            autoComplete="username"
            value={loginFormData.username}
            onChange={handleChange}
            className="w-85 h-11 border-medorange-400"
          />
        </div>
        <div>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            value={loginFormData.password}
            onChange={handleChange}
            className="w-85 h-11 mt-5 border-medorange-400"
          />
        </div>
        <Button
          type="submit"
          className="mt-8 bg-maingrey-300 hover:bg-brightred-600"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
