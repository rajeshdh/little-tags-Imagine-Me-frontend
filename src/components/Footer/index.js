import React from "react";

import Logo from "../Header/Logo";

function Footer() {
  return (
    <footer class="text-gray-600 body-font">
      <div class="px-3 py-3 mx-auto md:mx-24 flex items-center sm:flex-row flex-col">
        <Logo />
        <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          Created By —
          <a
            href="https://twitter.com/paharihacker"
            rel="noopener noreferrer"
            class="text-gray-600 ml-1"
            target="_blank"
          >
            Rajesh Dhiman
          </a>
          &nbsp; &amp; &nbsp;
          <a
            href="https://twitter.com/paharihacker"
            rel="noopener noreferrer"
            class="text-gray-600 ml-1"
            target="_blank"
          >
            Prince Thomas
          </a>
          &nbsp;at
          <a
            href="https://twitter.com/PestoTech"
            rel="noopener noreferrer"
            class="text-gray-600 ml-1"
            target="_blank"
          >
          Pesto
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
