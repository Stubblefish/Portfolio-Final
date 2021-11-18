import React from "react";
import image from "../firewatch.jpg";
import "../HoverEffect.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Overlooking the forest"
        className="absolute bg-fixed"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-36 px-8">
        <div class="foo">
          <div>
            <span class="letter" data-letter="H">
              H
            </span>
            <span class="letter" data-letter="I">
              I
            </span>

            <span className="mr-16" data-letter=""></span>
            <span class="letter" data-letter="I">
              I
            </span>
            <span class="letter" data-letter="'">
              '
            </span>
            <span class="letter" data-letter="M">
              M
            </span>
            <span className="mr-16" data-letter=""></span>
            <span class="letter" data-letter="G">
              G
            </span>
            <span class="letter" data-letter="E">
              E
            </span>
            <span class="letter" data-letter="O">
              O
            </span>
            <span class="letter" data-letter="R">
              R
            </span>
            <span class="letter" data-letter="G">
              G
            </span>
            <span class="letter" data-letter="E">
              E
            </span>
            <span class="letter" data-letter="!">
              !
            </span>
          </div>
          <NavLink
            to="/project"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center border-solid rounded-3xl border-2 border-opacity-50 py-6 px-3 mr-4 text-green-100 hover:text-green-400 text-4xl font-bold cursive tracking-widest"
          >
            Check out my portfolio!
          </NavLink>
        </div>
      </section>
    </main>
  );
}
