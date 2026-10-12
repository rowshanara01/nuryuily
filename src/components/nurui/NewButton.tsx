const NewButton = () => {
  return (
    <button className="relative px-8 py-3 ml-4 overflow-hidden font-semibold rounded-lg bg-gray-800 text-gray-50 hover:bg-gray-800">
      <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-600">
        New
      </span>
      <span className="relative flex items-center gap-2">
        <span>Download</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-y-1"
        >
          <path
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default NewButton;
