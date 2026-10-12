import { FC } from "react";

interface IProps {
  icon: React.ReactNode;
  title: string;
  storeName: string;
}

const MobileApplicationDownloadCard: FC<IProps> = ({
  icon,
  title,
  storeName,
}) => {
  return (
    <div className="flex items-center gap-2 border dark:border-0 border-[var(--border-color)] shadow-xl dark:shadow-none bg-[var(--glass-color)] hover:dark:bg-[var(--glass-color-2)] rounded-lg py-3 px-5 w-44 xl:w-auto cursor-pointer">
      {icon}
      <div>
        <p className="uppercase text-xs">{title}</p>
        <h5 className="font-semibold capitalize">{storeName}</h5>
      </div>
    </div>
  );
};

export default MobileApplicationDownloadCard;
