import { FC } from "react";
import CountUp from "react-countup";
interface stateProps {
  count: number;
  title: string;
  isView: boolean;
}

const StatesCountup: FC<stateProps> = ({ count, title, isView }) => {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
        {isView && <CountUp start={0} end={count} duration={5} separator="," />}
        +
      </h2>
      <p className="xl:text-lg">{title}</p>
    </div>
  );
};

export default StatesCountup;
