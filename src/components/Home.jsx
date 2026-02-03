import React from "react";
import "./home.css";
import logo1 from "../assets/SUC logo_1_copy.png";
import brochure from "../assets/SuC Brochure 2025.pdf";

const Home = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 py-12">
    <div id="suc_logo" className="flex items-center justify-center mt-8">
      <div>
        <img
          id="image_logo"
          src={logo1}
          alt="SUC logo"
          className="w-[75%] py-8 ml-[35px] md:ml-16"
        />
      </div>
    </div>

    <div className="flex flex-col items-center justify-center mt-8 p-2">
      <p className="text-center">
        <span className="text-[#B70404] font-bold">
          Central India's Largest B-Plan Competition.
        </span>
        <br />
        <span className="text-2xl">
          Registrations for SUC 2026 has Started !!!
        </span>
      </p>

      <div>
        <a
          href="https://unstop.com/p/startup-conclave-consortium26-consortium26-the-entrepreneurship-cell-vnit-1632203"
          target="_blank"
          rel="noreferrer"
          className="mr-8"
        >
          <button className="bg-[#ff0000] scale-110 hover:bg-red-700 text-white font-bold mt-2 py-2 px-4 rounded">
            Register Now
          </button>
        </a>

        <a
          href={brochure}
          download="StartUp Conclave Media Brochure.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-[#ff0000] scale-110 hover:bg-red-700 text-white font-bold mt-2 py-2 px-4 rounded">
            Brochure
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Home;
