"use client";
import { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add overflow:hidden to body when loading
    document.body.style.overflow = loading ? 'hidden' : 'visible';

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup
    return () => {
      // Restore overflow property when component unmounts
      document.body.style.overflow = 'visible';
      clearTimeout(timer);
    };
  }, [loading]); // Add loading state as dependency to useEffect

  return (
    <div className={`min-h-screen bg-black flex justify-center items-center fixed top-0 left-0 w-full z-[99] ${loading ? '' : 'hidden'}`}>
      <div className="text-2xl sm:text-4xl preloader text-orange relative tracking-wide font-bold after:content-['SHIVISION...'] after:absolute after:start-0 after:top-0 after:text-white after:w-full after:h-full after:overflow-hidden box-border inline-block">SHIVISION...<span className="loader">🐄</span></div>
    </div>
  );
};

export default Preloader;
