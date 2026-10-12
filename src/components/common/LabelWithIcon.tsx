import React from "react";
interface IProps {
  icon: React.ReactNode;
  label: string;
}

const LabelWithIcon: React.FC<IProps> = ({ icon, label }) => {
  return (
    <p className="flex items-center gap-2  ">
      <span className="text-[var(--primary-color)]">{icon}</span>
      <span className="text-[var(--opacity-text-color)]">{label}</span>
    </p>
  );
};

export default LabelWithIcon;
