import "./style.css";

const ExpenseTracker = () => {
  return (
    <div className="expense-container">
      <div className="expense-input-container">
        <h2 style={{ marginBlockStart: 0 }}>Add Your Expense</h2>
        <form>
          <input type="date" name="date" id="date" />
          <input type="number" />
          <select name="categ" className="form-select" required>
            <option hidden value="Science">
              Select categories
            </option>
            <option value="Math">Math</option>
            <option value="Religion">Religion</option>
            <option value="Art">Art</option>
            <option value="Psychology">Psychology</option>
            <option value="Astronomy">Astronomy</option>
          </select>
          <div>
            <button className="add-Expense">Add Expense</button>
          </div>
        </form>
      </div>
      <div className="expense-show-container">
        <h3>Expenses</h3>
        <hr />
        <div className="exp-text">
          <p>
            2024-06-01 - $1000 - Food<span>$3000.00</span>
          </p>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
      <div className="expense-summary-container">
        <h3>Summary</h3>
        <hr />
        <div className="exp-text">
          <p>
            Total Expenses: <span>$3000.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
