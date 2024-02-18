const Root = () => {
  return (
    <div>
      {/* frame by frame animation */}
      <div className="spaceship"></div>
      <div className="world">
        <div className="card">
          <div className="card-side card-side-front">Front</div>
          <div className="card-side card-side-back">Back</div>
        </div>
      </div>
    </div>
  );
};

export { Root };
