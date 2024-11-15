import Navbar from '../components/Navbar';
import bgImage from '../assets/authpage.jpg'; 
import { useState } from 'react';

const Authpage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Navbar />
      <div
        className="flex items-center justify-start min-h-screen bg-cover bg-center px-8"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-md w-full">
          {/* Golden color for the title and welcome message */}
          <h1 className="text-5xl font-bold mb-2" style={{ color: '#FFD700' }}>Clipper Call</h1>
          <h2 className="text-2xl mb-8" style={{ color: '#FFD700' }}>Welcome to Clipper Call</h2>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
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
              className="text-white mt-4 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authpage;
