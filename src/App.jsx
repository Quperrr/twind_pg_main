import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="">
      <div className="bg-gray-400 w-full h-auto p-4 flex justify-around items-center">
        <a href="#">
          <p>SITE LOGO</p>
        </a>
        <div className="">
          <ul className="flex justify-around items-center font-medium">
            <li>
              <a className="mr-12" href="#">
                ITEM 1
              </a>
            </li>
            <li>
              <a className="mr-12" href="#">
                ITEM 1
              </a>
            </li>
            <li>
              <a className="mr-12" href="#">
                ITEM 1
              </a>
            </li>
            <li>
              <a className="mr-12" href="#">
                ITEM 1
              </a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="bg-black h-lvh w-full">
        <h1 className="flex justify-center items-center text-white">Hello, this is my react/tailwind playground! PAGE 1</h1>
      </div>
      <div className="bg-black h-lvh w-full">
        <h1 className="flex justify-center items-center text-white">Hello, this is my react/tailwind playground! PAGE 2</h1>
      </div>
    </div>
  );
}
export default App;
