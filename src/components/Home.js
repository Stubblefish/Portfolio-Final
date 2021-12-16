import React from "react";
import image from "../portfolio-background.jpg";
import "../HoverEffect.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Overlooking the forest"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-24 px-8">
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
            className="inflex-flex items-center border-solid rounded-2xl border-2 border-opacity-50 bg-gradient-to-r from-green-100 to-green-50 px-3 mr-4 text-green-900 hover:text-green-400 text-6xl font-bold cursive tracking-widest"
          >
            Check out my Portfolio!
          </NavLink>
        </div>
      </section>
    </main>
  );
}
