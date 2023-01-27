import { useState } from "react";

import WaveImg from "../../assets/wave.svg";

import Input from "../../Components/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-7 relative">
      <div className="flex flex-col md:flex-row md:items-center md:justify-evenly md:pt-14">
        <div className="text-center text-mywhite-100 md:max-w-lg">
          <h1 className="text-5xl md:text-6xl md:text-left font-bold">
            MarkNow
          </h1>
          <p className="text-mywhite-200 mt-2 text-4xl md:text-left font-semibold">
            Create your markdown files and see them preview in real time
          </p>
        </div>
        <form className="mt-10 w-full p-2 flex flex-col gap-4 bg-myblack-100 md:max-w-md shadow-md rounded-lg">
          <h2 className="text-mywhite-100 font-semibold text-3xl ">Login</h2>
          <Input
            placeholder="email@example.com"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            id="loginEmail"
            type="email"
          />
          <Input
            placeholder="strong password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            id="loginPassword"
            type="password"
          />
          <button className="w-full text-mywhite-100 font-semibold h-12 bg-myblue-100 text-left pl-4 rounded-lg hover:bg-blue-500 transition-colors">
            Login in your account
          </button>
          <button className="w-full text-mywhite-100 font-semibold h-12 bg-red-700 text-left pl-4 rounded-lg hover:bg-red-900 transition-colors">
            Register new account
          </button>
          <button className="w-full text-myblack-200 font-semibold h-12 bg-mywhite-100 text-left pl-4 rounded-lg hover:bg-mywhite-200 transition-colors">
            Login with Google
          </button>
        </form>
      </div>
      <div>
        <h2 className="font-bold text-mywhite-100 text-3xl text-center mt-10 mb-5 md:text-5xl md:mt-36">
          What you can do ?
        </h2>
        <ul className="flex flex-col items-center gap-5 md:gap-6 ">
          <li className="h-12 w-full flex items-center pl-4 bg-mygray-200 rounded-lg text-mywhite-100 font-semibold md:max-w-lg md:h-14 text-lg">
            Organize your markdown files
          </li>
          <li className="h-12 w-full flex items-center pl-4 bg-mygray-200 rounded-lg text-mywhite-100 font-semibold md:max-w-lg md:h-14 text-lg">
            Create multiple files
          </li>
          <li className="h-12 w-full flex items-center pl-4 bg-mygray-200 rounded-lg text-mywhite-100 font-semibold md:max-w-lg md:h-14 text-lg">
            See them preview in realtime
          </li>
          <li className="h-12 w-full flex items-center pl-4 bg-mygray-200 rounded-lg text-mywhite-100 font-semibold md:max-w-lg md:h-14 text-lg">
            Edit save and access your files anywhere
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
