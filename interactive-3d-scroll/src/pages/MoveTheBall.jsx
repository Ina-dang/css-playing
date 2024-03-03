import { useState } from "react";

const MoveTheBall = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isTransitionEnd, setIsTransitionEnd] = useState(false);

  const handleMove = () => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
    setIsTransitionEnd(false);
  };

  const handleTransitionEnd = () => {
    setIsTransitionEnd(true);
  };

  const ballStyle = {
    "--x": `${position.x}px`,
    "--y": `${position.y}px`,
  };

  return (
    <div className="move-the-ball" onClick={handleMove}>
      <div
        style={ballStyle}
        className={`ball ${isTransitionEnd ? "end" : ""}`}
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
};

export { MoveTheBall };
