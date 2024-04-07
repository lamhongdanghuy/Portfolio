import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { LinkIcon } from "@heroicons/react/solid";

// ...

function LandingPage({ darkMode }) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_v69t35q",
        "template_zp823wn",
        {
          from_name: email,
          to_name: "lamhongdanghuy@gmail.com",
          subject: subject,
          message: message,
          reply_to: email,
        },
        "-yk_8Yh0OwChLi5vA"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div id="Home">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center min-h-screen">
          <div className="flex-auto flex justify-center md:justify-end">
            <div className="max-w-md px-8 mx-auto">
              <h1 className="text-4xl font-bold text-center md:text-right nowrap">
                Hi there, my name is Huy Lam.
              </h1>
              <h2 className="text-xl mt-4 text-center md:text-right">
                Welcome to my portfolio!
              </h2>
              <div className="flex justify-center md:justify-end space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/huy-lam-22a59b219/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
                    alt="LinkedIn Logo"
                    className="w-30 h-30"
                  />
                </a>
              </div>
            </div>
          </div>
          <img src="/sel.jpg" className="roll-in-left" alt="Huy Lam" />
        </div>
      </div>
      <div id="About">
        <div>
          <h1 className="standout text-center text-4xl font-bold text-gray-800 my-8">
            About Me
          </h1>
        </div>
        <div className="About p-10 rounded-lg shadow-lg flex flex-col md:flex-row">
          <div className="flex-grow">
            <div className="flex p-1 items-center">
              <div
                className={`text-lg leading-relaxed ml-4 ${
                  darkMode ? "text-gray-300" : "text-white-800"
                }`}
              >
                <p className="mb-4">
                  My name is Huy Lam, a recent graduate with a Bachelor of
                  Science in Computer Science from DePaul University,
                  specializing in Software Development. My academic journey was
                  enriched by an internship at Ulta Beauty in the IT E-Commerce
                  department, where I collaborated with cross-functional teams
                  on digital commerce projects.
                </p>
                <p className="mb-4">
                  I also led a team as Scrum Master in developing a
                  Cybersecurity Clinic website for DePaul University, which we
                  completed in March. Beyond my professional and academic
                  experiences, I have a passion for exploring new places. I love
                  to travel to different locations, believing that each new
                  place offers unique insights and learning opportunities.
                </p>
                <p className="mb-4">
                  This curiosity also extends to my professional life, where I'm
                  eager to dive into new technologies and projects. I'm fluent
                  in both Vietnamese and English.
                </p>
                <p>
                  Quick to adapt and always open to feedback, I'm looking for my
                  first full-time role in computer science where I can leverage
                  my technical skills, love for innovation, and team spirit to
                  contribute to meaningful and impactful projects.
                </p>
              </div>
            </div>
            <div className="stats-container grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div
                className={`border border-gray-300 p-4 rounded-lg ${
                  darkMode ? "bg-white text-gray-300" : "bg-gray-700 text-white"
                }`}
              >
                <p className="mb-2">Project Completed:</p>
                <p className="text-xl font-bold">3</p>
              </div>

              <div
                className={`border border-gray-300 p-4 rounded-lg ${
                  darkMode ? "bg-white text-gray-300" : "bg-gray-700 text-white"
                }`}
              >
                <p className="mb-2">Year of Experience:</p>
                <p className="text-xl font-bold">0 (soon to be graduated)</p>
              </div>
              <div
                className={`border border-gray-300 p-4 rounded-lg ${
                  darkMode ? "bg-white text-gray-300" : "bg-gray-700 text-white"
                }`}
              >
                <p className="mb-2">Technology:</p>
                <p className="text-xl font-bold">
                  Javascript, SQL, MySQL, React.js, Jira, MariaDB, Nodejs,
                  Python, Microsoft Office, Postman, Java, C++, C, Managing,
                  Coaching, Leading, Github.
                </p>
              </div>
            </div>
          </div>
          <div>
            <pre
              data-prefix="$"
              className="mockup-code rounded-t bg-black text-white p-7 w-auto font-mono ml-10"
            >
              <code className="typing-animation">./aboutMe.out</code>
            </pre>
            <pre className="mockup-code bg-black text-white p-7 w-auto font-mono ml-10">
              <code>Name: Huy Lam</code>
            </pre>
            <pre className="mockup-code bg-black text-white p-7 w-auto font-mono ml-10">
              <code>Age: 22</code>
            </pre>
            <pre className="mockup-code bg-black text-white p-7 w-auto font-mono ml-10">
              <code>School: DePaul University</code>
            </pre>
            <pre className="mockup-code bg-black text-white p-7 w-auto font-mono ml-10">
              <code>Based in: Chicago, IL</code>
            </pre>
            <pre className="mockup-code bg-black text-white p-7 w-auto font-mono ml-10">
              <code>Hometown: Ho Chi Minh City, Vietnam</code>
            </pre>
            <pre className="mockup-code bg-black text-white p-7 w-auto font-mono ml-10">
              <code>Languages: Vietnamese, English</code>
            </pre>
            <pre className="mockup-code rounded-b bg-black text-white p-7 w-auto font-mono ml-10">
              <code>Interest: Travel, Coding</code>
            </pre>
          </div>
        </div>
      </div>
      <div id="Project">
        <div>
          <h1 className="standout text-center text-4xl font-bold text-gray-800 my-8">
            Completed Projects
          </h1>
        </div>
        <div className="flex space-between space-x-20 text-center justify-center">
          <div className="justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
            <img
              classname="justify-center rounded-t-lg"
              src="/depaul.png"
              alt=""
            />

            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                DePaul CyberSecurity Clinic
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Raise organizational awareness of information security and
                privacy risks discovered from a student-led risk assessment so
                that incremental improvements are made in the client’s security
                policies and practices while students in turn gain real-world
                experience that contributes to a cyber security workforce.
              </p>
            </div>
            <div className="flex">
              <a
                href="https://github.com/lamhongdanghuy/Guardian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub Logo"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://18.216.233.27/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="w-10 h-10" />
              </a>
            </div>
          </div>

          <div className="flex space-between space-x-20 text-center justify-center">
            <div className="justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
              <img
                classname="justify-center rounded-t-lg"
                src="/vnfood.png"
                alt=""
              />

              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Co Chin
                </h5>
                <p class=" font-normal text-gray-700 dark:text-gray-400">
                  Co Chin is a sleek, ReactJS-based website offering Vietnamese
                  cuisine. Its layout is clean and inviting, with high-quality
                  images and an easy navigation system. The site features an
                  interactive menu, cultural insights, and a simple checkout
                  process, targeting food lovers seeking Vietnamese flavors
                  online.
                </p>
              </div>
              <div className="flex">
                <a
                  href="https://github.com/lamhongdanghuy/buyfood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub Logo"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://buy-food-a0f2f.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="w-10 h-10" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex space-between space-x-20 text-center justify-center">
            <div className="justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
              <img
                classname="justify-center rounded-t-lg"
                src="/fakeamazon.jpeg"
                alt=""
              />

              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Clone Amazon
                </h5>
                <p class=" font-normal text-gray-700 dark:text-gray-400">
                  Clone Amazon is a ReactJS-based front-end replica of Amazon,
                  featuring a simplified interface with essential shopping
                  functionalities like product listings and search. It's perfect
                  for developers exploring e-commerce site development or for
                  creating a streamlined shopping experience.
                </p>
              </div>
              <div className="flex">
                <a
                  href="https://github.com/lamhongdanghuy/fake-amazon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub Logo"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://fake-860f4.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="w-10 h-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="standout text-center text-4xl font-bold text-gray-800 my-8">
            Ongoing Project
          </h1>
        </div>
        <div className="flex space-between space-x-20 text-center justify-center">
          <div className="flex space-between space-x-20 text-center justify-center">
            <div className="justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
              <img
                classname="justify-center rounded-t-lg"
                src="/randomfood.webp"
                alt=""
              />

              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Random Food Near You
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A desktop app that fetches your location, queries your cuisine
                  preference, and utilizes Google Maps API to suggest random
                  eateries nearby or offers a completely random selection for
                  spontaneous dining options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Contact">
        <section>
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2
              class={`mb-4 text-4xl tracking-tight font-extrabold text-center ${
                darkMode ? "text-gray-900" : "text-green-500"
              }`}
            >
              Contact Me Now!
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-blue-400 dark:text-gray-400 sm:text-xl">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <form onSubmit={sendEmail} className="space-y-8">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="text-green-500 border border-gray-300 py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
