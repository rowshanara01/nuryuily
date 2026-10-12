import { MdDone } from "react-icons/md";

export interface priceCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  isRecommended?: boolean | undefined;
}

const PriceCard: React.FC<priceCardProps> = ({
  name,
  price,
  description,
  features,
  cta,
  isRecommended,
}) => {
  return (
    <div
      className={`h-full rounded-2xl p-4 flex flex-col transform transition-all ${
        isRecommended &&
        "bg-[var(--glass-color-4)] dark:bg-[var(--glass-color-2)] text-[var(--white-color)]"
      }`}
    >
      <div className="space-y-1.5 min-h-28">
        <h3 className="text-2xl font-semibold flex items-center gap-3">
          <span>{name}</span>{" "}
          {isRecommended && (
            <span className="text-[var(--black-color)] bg-[var(--white-color)] relative before:-left-2 before:bottom-1 before:[clipPath:polygon(0_50%,_100%_100%,_100%_0)] py-1 px-4 rounded before:bg-[var(--white-color)] before:size-5 before:absolute text-sm">
              Recommended
            </span>
          )}
        </h3>
        <p>{description}</p>
      </div>
      <h2 className="text-5xl font-bold text-center pt-4 pb-20">{price}</h2>
      <ul className="space-y-3.5 pb-6">
        {features?.map((item, idx) => {
          return (
            <li className="flex gap-3.5" key={idx}>
              <MdDone className={`text-2xl flex-shrink-0`} />
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <button
        className={`rounded-lg border border-[var(--black-color)]  dark:border-[var(--white-color)] w-full py-2.5 px-2 mt-auto group-hover:bg-[var(--white-color)] group-hover:text-[var(--black-color)] group-hover:duration-200 cursor-pointer ${
          isRecommended
            ? "bg-[var(--white-color)] text-[var(--black-color)]"
            : "text-[var(--black-color)] dark:text-[var(--white-color)]"
        } `}
      >
        {cta}
      </button>
    </div>
  );
};

export default PriceCard;
