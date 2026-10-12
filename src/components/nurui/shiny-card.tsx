import { ReactNode } from "react";
import { MdDone } from "react-icons/md";
import "./styles/shiny-card.css";

interface ShinyCardProps {
  featureName: string;
  featureItems: string[];
  icon: ReactNode | string;
}

const ShinyCard: React.FC<ShinyCardProps> = ({
  featureName,
  featureItems,
  icon,
}) => {
  return (
    <div className="shiny-card space-y-3 min-h-72 shadow-2xl dark:shadow-none">
      <p className="text-5xl text-[var(--primary-color)] mb-5 mt-1">{icon}</p>
      <h2 className="text-xl font-bold">{featureName}</h2>
      <ul className="space-y-2">
        {featureItems.map((item, index) => (
          <li
            key={index}
            className="text-pretty font-semibold flex items-center gap-2.5"
          >
            <span className="size-4 flex items-center justify-center p-0.5 bg-[var(--primary-color)] text-[var(--black-color)] rounded-full">
              <MdDone />
            </span>
            <span>{item} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShinyCard;
