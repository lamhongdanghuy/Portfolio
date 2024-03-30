import React from 'react';

function LandingPage() {
  return (
    // Assuming this div is the container for your page content
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center min-h-screen">
      <div className="pt-16 md:pt-0 md:w-1/2 px-8"> {/* Adjust padding-top (pt-16) as needed */}
        <h1 className="text-3xl font-bold">Hi there, my name is Huy Lam.</h1>
        <h2 className="text-xl mt-4">Welcome to my portfolio</h2>
      </div>
      <img src='../public/sel.jpg' className="w-1/4 rounded-full border-2 border-gray-300 shadow-lg m-4" alt="Huy Lam"/>
    </div>
  );
}

export default LandingPage;
