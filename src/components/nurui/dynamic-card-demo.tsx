import DynamicCard from "@/components/nurui/dynamic-card";

const DynamicCardDemo = () => {
  return (
    <div className="py-20">
      <DynamicCard
        normalTitle="Dynamic Border"
        colorfulTitle="Animations"
        buttonText="Explore More"
        description="This card features animated border elements that continuously move around the perimeter, creating a dynamic visual effect using React and Tailwind CSS."
      />
    </div>
  );
};

export { DynamicCardDemo };
