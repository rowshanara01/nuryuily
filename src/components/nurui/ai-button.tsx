import { BsStars } from "react-icons/bs";
import "./styles/ai-button.css";

export const AiButton = () => {
  return (
    <div
      className="glowing-box glowing-box-active"
      style={{ "--animation-speed": "2s" } as React.CSSProperties}
    >
      <div className="glowing-box-animations">
        <div className="glowing-box-glow"></div>
        <div className="glowing-box-stars-masker">
          <div className="glowing-box-stars"></div>
        </div>
      </div>
      <div className="glowing-box-borders-masker">
        <div className="glowing-box-borders"></div>
      </div>
      <button className="glowing-box-button flex items-center gap-1">
        <BsStars className="text-white" />
        <span className="glowing-span font-bold ">Expliean Props</span>
      </button>
    </div>
  );
};
