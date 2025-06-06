import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCode,
  FaFacebook,
} from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 mt-10 px-4">
      <div className="p-6 bg-gray-600 rounded-2xl shadow-2xl w-72 text-white flex flex-col items-center space-y-4">
        <img
          src="/assets/images/passport.png"
          alt="Wilfred Osozi"
          className="w-32 h-32 rounded-full object-cover"
        />
        <p className="text-lg font-semibold">Wilfred Osozi</p>
        <p className="text-yellow-400">Nairobi, Kenya</p>
        <h2 className="text-xl font-medium">Front-end Developer</h2>

        <a
          href="https://github.com/Sozi-source"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 border border-gray-300 w-full py-2 px-4 rounded-md hover:bg-gray-700 transition"
        >
          <FaGithub size={20} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.frontendmentor.io/profile/Sozi-source"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 border border-gray-300 w-full py-2 px-4 rounded-md hover:bg-gray-700 transition"
        >
          <FaCode size={20} />
          <span>Frontend Mentor</span>
        </a>

        <a
          href="https://www.linkedin.com/in/wilfred-osozi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 border border-gray-300 w-full py-2 px-4 rounded-md hover:bg-gray-700 transition"
        >
          <FaLinkedin size={20} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://x.com/OsoziWilfred"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 border border-gray-300 w-full py-2 px-4 rounded-md hover:bg-gray-700 transition"
        >
          <FaTwitter size={20} />
          <span>Twitter</span>
        </a>

        <a
          href="https://www.instagram.com/wosozi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 border border-gray-300 w-full py-2 px-4 rounded-md hover:bg-gray-700 transition"
        >
          <FaInstagram size={20} />
          <span>Instagram</span>
        </a>

        <a
          href="https://web.facebook.com/osozi.wilfred1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 border border-gray-300 w-full py-2 px-4 rounded-md hover:bg-gray-700 transition"
        >
          <FaFacebook size={20} />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
