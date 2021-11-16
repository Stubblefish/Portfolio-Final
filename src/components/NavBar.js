import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-green-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            George
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-green-100 bg-green-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-green-100 bg-green-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-green-100 bg-green-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          {/* <SocialIcon
            url=""
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          /> */}
          <SocialIcon
            url="https://github.com/Stubblefish"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/george-wise-37a39a204/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
