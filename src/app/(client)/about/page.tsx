import React from 'react'

const page = () => {
  return (
    <div className="about-page min-h-screen py-10">
      <div className="container flex justify-center items-center flex-col">
        <h1 className="page-title text-5xl text-indigo-600 font-bold my-10">About BlogNook</h1>
        <p className="about-text text-center max-w-md md:max-w-lg text-lg mb-4">
          Welcome to BlogNook, your go-to source for insightful and engaging content. 
          Our team of passionate writers is dedicated to bringing you the latest 
          updates, trends, and perspectives on a wide range of topics. 
        </p>
        <p className="about-text max-w-md text-lg text-center mb-4 md:max-w-lg">
          At BlogNook, we believe in the power of storytelling and its ability to connect, inspire, and inform. 
          We strive to create a space where readers can explore new ideas, challenge their perspectives, 
          and engage in meaningful conversations. 
        </p>
        <p className="about-text max-w-md text-center text-lg md:max-w-lg">
          Thank you for joining us on this journey of discovery and knowledge. 
          We hope you enjoy your time at BlogNook.
        </p>
      </div>
    </div>
  )
}

export default page