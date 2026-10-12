import React from "react";
import LinkWithProgress from "./LinkWithProgress";

interface OutlineButtonProps {
  title: string;
  navigation: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ title, navigation }) => {
  return (
    <LinkWithProgress
      href={navigation}
      className="rounded-lg py-2 px-4 bg-[var(--white-color)] cursor-pointer text-[var(--black-color)] font-semibold "
    >
      {title}
    </LinkWithProgress>
  );
};

export default OutlineButton;
