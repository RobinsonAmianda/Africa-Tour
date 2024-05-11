import React from "react";
import Footer from "../Components/Footer";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BiCalendarWeek } from 'react-icons/bi';
import { FaEnvelope } from "react-icons/fa";
import {useState} from "react"


function OurContact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <BiCalendarWeek  className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <FaEnvelope className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
      <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative min-h-screen flex items-center justify-center overflow-y-auto">
      
      <div   style={{width:"100%"}} className="bg-white p-8 rounded-lg shadow-md w-full max-w-screen-md md:flex md:mx-auto">
        {/* Left Section (Location and Contacts) */}
        <div className="md:w-1/2 pr-4 bg-white bg-opacity-90">
          <h1 className="text-2xl font-semibold mb-4 text-black">Contact Us</h1>

          {/* Location */}
          <div className="mb-4">
            <h2 className="text-lg font-medium text-black">Location</h2>
            <a
              href="https://maps.app.goo.gl/gSdi2tNfhvJyJkVXA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Africa Adventure Nairobi
            </a>
          </div>

          {/* Support Contacts */}
          <div className="mb-4">
            <h2 className="text-lg font-medium text-black">Support</h2>
            <p>Email: africaadventure@com</p>
            <p>Phone: 0205002167</p>
          </div>

          {/* Admission Contacts */}
          <div className="mb-4">
            <h2 className="text-sm font-medium text-black">Learn More</h2>
            <p style={{fontSize:"15px"}}>Email:africaadventure.com</p>
            <p>Phone: +254 712 293 878</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/moringaschool/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-blue-600 cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/moringaschool/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-blue-800 cursor-pointer" />
            </a>
            <a href="https://twitter.com/moringaschool/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-blue-400 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="md:w-1/2 bg-white bg-opacity-90">
          {!isSubmitted ? (
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                 
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 text-black">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                 
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 text-black">
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  className="mt-1 p-2 w-full border rounded-md"
                  rows="4"
                  required
                 
                ></textarea>
              </div>

              <button type="submit"  className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Submit
              </button>
            </form>
          ) : (
            <p className="text-green-500">Message Recieved!</p>
          )}
        </div>
      </div>
    </div> 
        </div>
      </div>
    </div>
    <Footer/>   
    </>
  );
}

export default OurContact;
