import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const GithubStar = () => {
  const [stars, setStars] = useState(19);

  useEffect(() => {
    async function fetchStars() {
      const response = await fetch(
        "https://api.github.com/repos/afsar-dev/Nurui",
      );
      const data = await response.json();
      setStars(data.stargazers_count);
    }

    fetchStars();
  }, []);

  return (
    <a className="hidden md:block" href="https://github.com/afsar-dev/Nurui" target="_blank">
      <button className="flex text-base overflow-hidden items-center font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#3ca2fa33] text-[#3ca2fa] shadow hover:bg-[#3ca2fa66] h-9 px-3 py-2 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-transparent hover:ring-offset-2 hover:ring-offset-[#3ca2fa]">
        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-[#3ca2fa] opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
        <div className="flex items-center gap-2 text-[var(--primary-color)]">
          <FaGithub className="text-lg" />
          <span className="font-semibold mt-0.5">Star on GitHub</span>
        </div>
        <div className="ml-2 flex items-center gap-1">
          <svg
            className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
            data-slot="icon"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              fillRule="evenodd"
            />
          </svg>
          <span className="inline-block tabular-nums tracking-wider font-display text-[var(--primary-color)] font-semibold mt-0.5">
            {stars}
          </span>
        </div>
      </button>
    </a>
  );
};

export default GithubStar;
