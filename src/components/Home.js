import React from "react";
import image from "../firewatch.jpg";
import "../HoverEffect.css";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Overlooking the forest"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
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
          <div className="text-green-100 bg-green-700 py-2 text-2xl">
            And welcome to my portfolio!
          </div>
        </div>
      </section>
    </main>
  );
}
