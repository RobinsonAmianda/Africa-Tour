import React from "react";
import Header from "../Components/Header";
import Footer from "./Footer";

function OurServices() {
  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn't care if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://images.unsplash.com/photo-1562112446-297a0d33fdd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1553368108-09d653399550?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1600965962102-9d260a71890d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1598751337485-0d57b0c50b83?q=80&w=1582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-6 px-5 mt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <h1 className="text-5xl mb-4 font-bold text-purple-800">
              OUR SERVICES
            </h1>
          </div>
        </div>

        <div className="inline-grid grid-cols-3 gap-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-item text-center px-4 py-5 bg-gray-100">
            <img
                  className="rounded-lg mb-4"
                  src="https://images.unsplash.com/photo-1616164744857-1439f3dd5687?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Support</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Our mentors work one-on-one with each young person to provide
                personalized guidance and support tailored to their individual
                needs and goals.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item text-center px-4 py-5 bg-gray-100">
            <img
                  className="rounded-lg mb-4"
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill Development</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Our mentors help young people develop a range of skills
                including communication, problem-solving, decision-making, and
                leadership skills.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item text-center px-4 py-5 bg-gray-100">
            <img
                  className="rounded-lg mb-4"
                  src="https://images.unsplash.com/photo-1476360806206-b2f7af3fbda4?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Positive Role Models</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Our mentors serve as positive role models for young people,
                providing them with a sense of stability, support, and
                encouragement.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item text-center px-4 py-5 bg-gray-100">
            <img
                  className="rounded-lg mb-4"
                  src="https://images.unsplash.com/photo-1561489401-fc2876ced162?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />              <h3 className="text-xl font-semibold text-gray-900 mb-3">Networking Opportunities</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Our program provides young people with opportunities to network
                with other like-minded individuals, including other mentees and
                mentors.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
  <div className="service-item text-center px-4 py-5 bg-gray-100 rounded-lg shadow-lg">
    <img
      className="rounded-lg mb-4"
      src="https://plus.unsplash.com/premium_photo-1681494075589-0796795f9655?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />
    <h3 className="text-xl font-semibold text-gray-900 mb-3">Connecting Youths</h3>
    <p className="text-base text-gray-700 leading-relaxed">
      Our mentorship program is designed to connect young people with experienced and caring mentors who can provide them with guidance and support in a variety of areas.
    </p>
  </div>
</div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item text-center px-4 py-5 bg-gray-100">
            <img
                  className="rounded-lg mb-4"
                  src="https://images.unsplash.com/photo-1496395650962-374cae58ca8b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Coaching</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Our experienced coaches can help you identify your strengths,
                set goals, and develop a roadmap to achieve your career
                objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurServices;
