import { FC, ReactNode } from "react";

interface IPros {
  backgroundColor: string;
  icon: ReactNode;
}

const CenterIcon: FC<IPros> = ({ backgroundColor, icon }) => {
  return (
    <button
      className={`${backgroundColor} size-11 p-2 rounded-full flex items-center justify-center`}
    >
      {icon}
    </button>
  );
};

export default CenterIcon;
