import React, { FC, ReactNode } from "react";

interface propsType {
  icon: ReactNode;
  title: string;
}

const AuthWithSocialMediaButton: FC<propsType> = ({ icon, title }) => {
  return (
    <button className="flex gap-2 items-center px-2 xl:px-4 py-2 xl:py-3.5 bg-[var(--white-color)] text-[var(--black-color)] font-semibold rounded-md">
      <span className="text-xl">{icon}</span>
      <span className="hidden xl:block"> {title}</span>
    </button>
  );
};

export default AuthWithSocialMediaButton;
