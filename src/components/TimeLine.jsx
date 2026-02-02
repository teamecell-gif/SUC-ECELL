import React from "react";
import "./Timeline.css";
import image1 from "../assets/image1.png";
import pdf from "../assets/tnc24.pdf"; // Corrected line

const TimeLine = () => (
  <div>
    <section id="timeline">
      <div className="bg-opacity-0 text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-12">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="text-2xl ml-2 text-yellow-400 uppercase tracking-loose">
              TIMELINE
            </p>
            <p
              className="text-3xl font-bold font-serif md:text-4xl leading-normal md:leading-relaxed mb-2"
              id="same"
            >
              START UP CONCLAVE
            </p>
            <p className="text-lg md:text-lg text-gray-50 mb-4">
              Mark your Calenders as we present before you the Timeline of the
              SUC-26 Event. Go through all the steps to know the exact process
              of the Event.
            </p>
            {/* <a href="#"
        className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
        Explore Now</a> */}
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="bg-opacity-0 container mx-auto w-full h-full">
              <div id="Dot1">
                <span id="dot1"></span>
              </div>
              <div className=" bg-opacity-0 relative wrap overflow-hidden p-10 h-full">
                <div className="style1 border-2-2 border-yellow-555 absolute h-full border"></div>
                <div className="style2 border-2-2 border-yellow-555 absolute h-full border"></div>
                <div className="bg-opacity-0 mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="text-xl mb-3 text-yellow-400">29 Jan, 2026</p>
                    <h4
                      className="mb-3 font-bold font-serif text-lg md:text-3xl"
                      id="same"
                    >
                      Registration Starts
                    </h4>
                    <p className="text-lg md:text-lg leading-snug text-gray-50 text-opacity-100">
                      Start your journey with Start-Up Conclave 2026 by
                      registering for the event by clicking the above Register
                      button.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="text-xl mb-3 text-yellow-400">29 Jan to 6 Feb, 2026</p>
                    <h4
                      className="mb-3 font-bold font-serif text-lg md:text-3xl"
                      id="same"
                    >
                      Questionnaire Round
                    </h4>
                    <p className="text-lg md:text-lg leading-snug text-gray-50 text-opacity-100">
                      The Start of Questionnaire rounds wherein participants
                      answer key questions one on one to evaluate their 
                      ideas and business clarity.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="text-xl mb-3 text-yellow-400">
                      {" "}
                      7 Feb to 8 Feb, 2026
                    </p>
                    <h4
                      className="mb-3 font-bold font-serif text-lg md:text-3xl"
                      id="same"
                    >
                      Mentorship And 
                      Pitch Deck Submission
                    </h4>
                    <p clasaName="text-lg md:text-lg leading-snug text-gray-50 text-opacity-100">
                      The Start of Mentorship rounds wherein Expereinced
                      Business owners would consult and mentor you one on one to
                      build your Dream Company.
                    </p>
                  </div>
                </div>

                <div className="bg-opacity-0 mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="text-xl mb-3 text-yellow-400">15 Feb, 2026</p>
                    <h4
                      className="mb-3 font-bold font-serif text-lg md:text-3xl text-left"
                      id="same"
                    >
                      Shark Tank Conso
                      <a
                        href={pdf}
                        target="_blank"
                        rel="noopener noreferrer" // Added rel for security
                        className="pdf"
                        style={{ color: "black" }}
                      >
                        tnc
                      </a>
                    </h4>
                    <p className="text-lg md:text-lg leading-snug text-gray-50 text-opacity-100">
                      Top 15 Start-Ups which will qualify for the above rounds
                      will then be given a once in a lifetime opportunity to
                      present their ideas before our Sharks.
                    </p>
                  </div>
                </div>
              </div>
              <div id="Dot1">
                <span id="dot1"></span>
              </div>
              <img
                className="bg-opacity-0 mx-auto -mt-36 md:-mt-36"
                src={image1}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default TimeLine;
