import Navbar from '../components/Navbar';
import bgImage from '../assets/authpage.jpg';
import { useState } from 'react';

const Authpage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Navbar />
      <div
        className="flex items-start justify-start min-h-screen bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg max-w-md w-full mt-12 ml-8 text-left">
          <div className="mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white md:text-[gold]">
              Clipper Call
            </h2>
            <p className="text-lg text-white md:text-[gold]">
              Welcome to Clipper Call
            </p>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            {isLogin ? 'Login to Clipper Call' : 'Register for Clipper Call'}
          </h1>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-md"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>
          <p
            className="text-white mt-4 cursor-pointer text-center"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </p>
        </div>
      </div>
    </>
  );
};

export default Authpage;
