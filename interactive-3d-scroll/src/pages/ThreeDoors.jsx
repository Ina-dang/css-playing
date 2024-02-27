import { useState } from "react";

const ThreeDoors = () => {
  const doors = [1, 2, 3];
  const [open, setOpen] = useState([false, false, false]);

  const handleDoor = (index) => () => {
    setOpen((prev) => {
      const updateOpenStatus = [...prev];
      updateOpenStatus[index] = !updateOpenStatus[index];
      return updateOpenStatus;
    });
  };
  return (
    <div className="three-doors">
      <div className="stage">
        {doors.map((item, index) => (
          <div
            className={open[index] ? "door door-opened" : "door"}
            key={item}
            onClick={handleDoor(index)}
          >
            <div className="door-back">
              <div className="ilbuni" />
            </div>
            <div className="door-body" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ThreeDoors };
