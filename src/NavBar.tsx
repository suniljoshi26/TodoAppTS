import React, { FC } from "react";
import { ITodo } from "./interfaces";
type Nav = {
  doneList: ITodo[];
  todoList: ITodo[];
};
export const NavBar: FC<Nav> = ({ doneList, todoList }) => {
  return (
    <div>
      <nav className="bg-white px-2 sm:px-4  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto pl-6 sm:pl-32">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiU4IjSMOl-iE34Ikjr1TfaCHSWOFXr4ahHA&usqp=CAU"
              className="mr-3 h-10 sm:h-20 "
              alt="todo logo"
            />
          </a>

          <div
            className="hidden justify-between items-center space-x-4 w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <div className="text-2xl">
              Completed :
              <span className="text-2xl text-green-400 ml-2">
                {doneList.length}
              </span>
            </div>

            <div className="text-2xl">
              Incompleted :
              <span className=" text-2xl text-red-500 ml-2">
                {todoList.length}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
