import React from "react";

const ComponentsFooter = () => {
  return (
    <footer className="relative py-6 md:py-0 mt-auto">
      <div
        className="absolute top-0 h-px w-full "
        style={{
          background:
            "radial-gradient(50% 100% at 50% 100%,#3ca2fa 0%,rgba(255,255,255,0) 100%)",
        }}
      ></div>
      <div className="container flex flex-col items-center justify-center gap-4 md:h-16 md:flex-row">
        <p className="text-[--copy-right-color] text-xs lg:text-sm">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/md-afsar-mahmud"
            target="_blank"
            className="text-[var(--primary-color)] border-b border-[var(--primary-color)] font-semibold"
          >
            Md Afsar Mahmud
          </a>{" "}
          . The source code is available on{" "}
          <a
            href="https://github.com/afsar-dev/Nurui"
            target="_blank"
            className="text-[var(--primary-color)] border-b border-[var(--primary-color)] font-semibold"
          >
            Github
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default ComponentsFooter;
