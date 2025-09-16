import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 dark:bg-navy/50 backdrop-blur-md">
      <div className="w-16 h-16 border-4 border-pink border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
