import { useState } from "react";

const MovingCharacter = () => {
  const [characters, setCharacters] = useState([1, 2, 3, 4]);

  const handleIlbuni = (item) => () => {
    setCharacters((prevCharacters) =>
      prevCharacters.filter((element) => element !== item)
    );
  };

  return (
    <div className="moving-character">
      <div className="stage">
        {characters.map((item) => (
          <div key={item} className="ilbuni" onClick={handleIlbuni(item)}></div>
        ))}
      </div>
    </div>
  );
};

export { MovingCharacter };
