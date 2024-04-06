import React, { useState, useEffect } from "react";

// ...

function LandingPage() {
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
                Welcome to my portfolio
              </h2>
            </div>
          </div>
          <img src="../public/sel.jpg" className="roll-in-left" alt="Huy Lam" />
        </div>
      </div>
      <div
        id="About"
        className="About bg-gray-100 p-10 rounded-lg shadow-lg flex"
      >
        <div>
          <div className="flex p-1">
            <img
              className="w-2/6"
              src="../public/coding.gif"
              alt="Coding Gif"
            />
            <div className="text-lg leading-relaxed text-gray-800 w-4/6 ml-4">
              <p className="mb-4">
                My name is Huy Lam, a recent graduate with a Bachelor of Science
                in Computer Science from DePaul University, specializing in
                Software Development. My academic journey was enriched by an
                internship at Ulta Beauty in the IT E-Commerce department, where
                I collaborated with cross-functional teams on digital commerce
                projects.
              </p>
              <p className="mb-4">
                I also led a team as Scrum Master in developing a Cybersecurity
                Clinic website for DePaul University, which we completed in
                March. Beyond my professional and academic experiences, I have a
                passion for exploring new places. I love to travel to different
                locations, believing that each new place offers unique insights
                and learning opportunities.
              </p>
              <p className="mb-4">
                This curiosity also extends to my professional life, where I'm
                eager to dive into new technologies and projects. I'm fluent in
                both Vietnamese and English.
              </p>
              <p>
                Quick to adapt and always open to feedback, I'm looking for my
                first full-time role in computer science where I can leverage my
                technical skills, love for innovation, and team spirit to
                contribute to meaningful and impactful projects.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="border border-gray-300 p-4 rounded-lg">
              <p className="mb-2">Project Completed:</p>
              <p className="text-xl font-bold">3</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg">
              <p className="mb-2">Year of Experience:</p>
              <p className="text-xl font-bold">0 (soon to be graduated)</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg">
              <p className="mb-2">Technology:</p>
              <p className="text-xl font-bold">
                Javascript, SQL, MySQL, React.js, Jira, MariaDB, Nodejs, Python,
                Microsoft Office, Postman, Java, C++, C, Managing, Coaching,
                Leading, Github.
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
      <div className="Project"></div>
      <div className="Contact"></div>
    </>
  );
}

export default LandingPage;
