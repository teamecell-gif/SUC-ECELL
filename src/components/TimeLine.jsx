import React from "react";
import "./Timeline.css";
import image1 from "../assets/image1.png";
// import pdf from "../assets/tnc24.pdf";

const TimeLine = () => (
  <div>
    <section id="timeline">
      <div className="bg-opacity-0 text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12">
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
            <p className="text-lg text-gray-50 mb-4">
              Mark your Calenders as we present before you the Timeline of the
              SUC-26 Event. Go through all the steps to know the exact process
              of the Event.
            </p>
          </div>

          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border absolute h-full"></div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="text-xl mb-3 text-yellow-400">29 Jan, 2026</p>
                    <h4 className="mb-3 font-bold font-serif text-lg md:text-3xl">
                      Registration Starts
                    </h4>
                    <p className="text-lg leading-snug text-gray-50">
                      Start your journey with Start-Up Conclave 2026 by
                      registering for the event.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="text-xl mb-3 text-yellow-400">
                      29 Jan to 6 Feb, 2026
                    </p>
                    <h4 className="mb-3 font-bold font-serif text-lg md:text-3xl">
                      Questionnaire Round
                    </h4>
                    <p className="text-lg leading-snug text-gray-50">
                      Participants answer key questions to evaluate business
                      clarity.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="text-xl mb-3 text-yellow-400">
                      7 Feb to 8 Feb, 2026
                    </p>
                    <h4 className="mb-3 font-bold font-serif text-lg md:text-3xl">
                      Mentorship & Pitch Deck Submission
                    </h4>
                    <p className="text-lg leading-snug text-gray-50">
                      One-on-one mentorship sessions with experienced founders.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="text-xl mb-3 text-yellow-400">15 Feb, 2026</p>
                    <h4 className="mb-3 font-bold font-serif text-lg md:text-3xl">
                      Shark Tank Conso
                      <a
                        href="https://drive.google.com/file/d/1SzAj0nemWqkoy3GNrkGWXf_gsAVSXEBZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 underline"
                      >
                        tnc
                      </a>
                    </h4>
                    <p className="text-lg leading-snug text-gray-50">
                      Top 10 startups pitch their ideas before industry leaders.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="mx-auto -mt-36 md:-mt-36"
                src={image1}
                alt="Startup Conclave timeline illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default TimeLine;
