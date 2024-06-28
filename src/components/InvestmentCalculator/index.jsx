import { useState } from "react";
import "./style.css";

const InvestmentCalculator = () => {
  const [investmentData, setInvestmentData] = useState({
    current_saving: 10000,
    yearly_saving: 1200,
    interest: 7,
    investment: 10,
  });
  const [calculation, setCalculation] = useState([]);
  const onChangeHandler = (e) => {
    const { name } = e.target;
    const value = e.target.value;
    console.log(name);
    setInvestmentData((prev) => ({ ...prev, [name]: Number(value) }));
  };
  console.log(investmentData);
  const formHandler = (e) => {
    e.preventDefault();
    CalculateInvestment();
  };

  const CalculateInvestment = () => {
    const { current_saving, yearly_saving, interest, investment } =
      investmentData;
    const interestRate = interest / 100;
    let totalSaving = current_saving;
    let totalInterest = 0;
    let investedCapital = current_saving;
    let result = [];
    for (let year = 1; year <= investment; year++) {
      let yearlyInterest = totalSaving * interestRate;
      totalSaving += yearlyInterest + yearly_saving;
      investedCapital += yearly_saving;
      totalInterest += yearlyInterest;
      result.push({
        year,
        totalSaving: totalSaving.toFixed(2),
        yearlyInterest: yearlyInterest.toFixed(2),
        investedCapital: investedCapital.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
      });
    }
    setCalculation(result);
  };
  console.log(investmentData);
  const resetHandler = () => {
    console.log("reset");
    setCalculation([]);
    setInvestmentData({
      current_saving: 10000,
      yearly_saving: 1200,
      interest: 7,
      investment: 10,
    });
  };

  return (
    <div className="cal-container">
      <div className="cal-input-form">
        <form onSubmit={formHandler}>
          <div className="main-form">
            <div className="left">
              <div className="current-saving">
                <label htmlFor="current_saving">CURRENT SAVINGS</label>
                <input
                  value={investmentData.current_saving}
                  type="number"
                  name="current_saving"
                  id="current_saving"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="current-saving">
                <label htmlFor="yearly_saving">YEARLY SAVINGS</label>
                <input
                  value={investmentData.yearly_saving}
                  type="number"
                  name="yearly_saving"
                  id="yearly_saving"
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="right">
              <div className="current-saving">
                <label htmlFor="interest">
                  EXPECTED INTEREST (%, PER YEAR)
                </label>
                <input
                  value={investmentData.interest}
                  type="number"
                  name="interest"
                  id="interest"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="current-saving">
                <label htmlFor="investment">INVESTMENT DURATION (YEARS)</label>
                <input
                  value={investmentData.investment}
                  type="number"
                  name="investment"
                  id="investment"
                  onChange={onChangeHandler}
                />
              </div>
            </div>
          </div>

          <div className="btn-cal">
            <button
              type="reset"
              onClick={resetHandler}
              className="reset-btn-cal"
            >
              Reset
            </button>
            <button type="submit" className="cal-btn">
              Calculate
            </button>
          </div>
        </form>
      </div>
      {calculation.length > 0 && (
        <div className="table-container">
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
              </tr>
            </thead>
            <tbody>
              {calculation.map((item, index) => {
                console.log(item);
                return (
                  <tr key={index}>
                    <td>{item.year}</td>
                    <td>{item.totalSaving}</td>
                    <td>{item.yearlyInterest}</td>
                    <td>{item.totalInterest}</td>
                    <td>{item.investedCapital}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;
