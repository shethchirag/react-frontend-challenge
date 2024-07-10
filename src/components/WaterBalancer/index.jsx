import { useEffect, useRef, useState } from "react";
import "./style.css";

const WaterBalancer = () => {
  const [totalTank, setTotalTank] = useState(4);
  const [activeTank, setActiveTank] = useState(null);
  const [tanks, setTanks] = useState(Array(4).fill(0));

  const intervalRef = useRef(null);
  useEffect(() => {
    setTanks(Array(totalTank).fill(0));
  }, [totalTank]);
  const handleMouseDown = (tank) => {
    if (!activeTank) {
      setActiveTank(tank);
      intervalRef.current = setInterval(() => {
        setTanks((prevTanks) => {
          const newTanks = [...prevTanks];
          newTanks[tank] = Math.min(newTanks[tank] + 1, 100);
          return newTanks;
        });
      }, 100);
    }
  };

  const handleMouseUp = () => {
    if (activeTank !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;

      // Calculate average fill level
      const averageFill =
        tanks.reduce((acc, curr) => acc + curr, 0) / totalTank;

      // Equally distribute water fill among all tanks
      const updatedTanks = tanks.map(() => averageFill);

      setTanks(updatedTanks);
      setActiveTank(null);
    }
  };

  return (
    <div className="waterBalanceContainer">
      <h2>{`Press and Hold "Add" to start filling the tank`}</h2>
      <div className="water-tank-flex">
        {[...Array(Number(totalTank))].map((_, index) => (
          <div key={index} className="water_part">
            <div className="water-tank">
              <div className="water-add-control">
                <button
                  onMouseDown={() => handleMouseDown(index)}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  ADD
                </button>
                <button>EMPTY</button>
              </div>
              <div className="water-tank-part">
                <div className="water-container">
                  <div
                    className="Water-Fill"
                    style={{
                      height: `${tanks[index]}%`,
                    }}
                  ></div>
                </div>
                <p>25.00 lts</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="water-tanks-number">
        <label htmlFor="waterControlRange">Water Tanks:</label>
        <input
          type="range"
          name="waterControlRange"
          id="waterControlRange"
          min={5}
          max={8}
          value={totalTank}
          onChange={(e) => setTotalTank(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default WaterBalancer;
