const Move3DWalls = () => {
  return (
    <div className="Move3DWalls">
      <div className="progress-bar-con">
        <div className="progress-bar"></div>
      </div>
      <div className="select-character">
        <button
          className="select-character-btn select-character-btn-ilbuni"
          data-char="ilbuni"
        ></button>
        <button
          className="select-character-btn select-character-btn-ragirl"
          data-char="ragirl"
        ></button>
      </div>

      <div className="world">
        <div className="stage">
          <div className="house">
            <section className="wall wall-left"></section>
            <section className="wall wall-right"></section>
            <section className="wall wall-front wall-front-a">
              <div className="wall-content">
                <h2 className="wall-title">안녕하세요</h2>
              </div>
            </section>
            <section className="wall wall-front wall-front-b">
              <div className="wall-content">
                <h2 className="wall-title">Hello</h2>
              </div>
            </section>
            <section className="wall wall-front wall-front-c">
              <div className="wall-content">
                <h2 className="wall-title">Hola</h2>
              </div>
            </section>
            <section className="wall wall-front wall-front-d">
              <div className="wall-content">
                <h2 className="wall-title">こんにちは</h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Move3DWalls };
