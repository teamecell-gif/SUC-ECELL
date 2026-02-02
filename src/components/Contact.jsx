import React, { Component } from "react";

export default class NewCard extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <h1 className="text-[40px] font-semibold  mb-4 items-center justify-center text-center text-red-600 uppercase tracking-loose">
            Contact Us
          </h1>
        </div>
        <div className="my-10  flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center flex-wrap gap-10">
          <div className="p-5 text-center w-[250px] rounded-2xl  bg-gradient-to-b from-[#f600005d] to-[#ff0000]">
           
            <a href="https://www.linkedin.com/in/aryan-garg-a5b193369/"
             target="_blank"
             rel="noopener noreferrer">
              <div className="">
                <h3 className="text-white font-bold text-[24px]">Aryan Garg</h3>

                <p className="mt-2 text-white text-[14px]">+91 85020 80654</p>
              </div>
            </a>
          </div>

          <div className="p-5 w-[250px] text-center rounded-2xl bg-gradient-to-b from-[#f600005d] to-[#ff0000] ">

              <a href="https://www.linkedin.com/in/bhagya-santoshi-kundrapu-274539338/"
             target="_blank"
             rel="noopener noreferrer">
              <div className="">
                <h3 className="text-white font-bold text-[24px]">Bhagya Kundrapu</h3>

                <p className="mt-2 text-white text-[14px]">+91 81215 09751</p>
              </div>
             </a>
          </div>
        </div>
      </div>
    );
  }
}
