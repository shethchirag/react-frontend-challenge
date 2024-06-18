import { useEffect, useState } from "react";
import "./style.css";

const ExpenseTracker = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [errorMessage, setErrorMessage] = useState({});
  const [totalExpense, setTotalExpense] = useState(0);
  const [expense, SetExpense] = useState({
    date: "",
    amount: "",
    categories: "",
  });

  const errorRule = {
    date: [{ require: true, message: "Date is require" }],
    amount: [{ require: true, message: "Amount is require" }],
    categories: [{ require: true, message: "please Select categories" }],
  };
  const errorHandler = (expenseValue) => {
    let errorData = {};
    Object.entries(expenseValue).forEach(([data, value]) => {
      errorRule[data].some((rule) => {
        if (rule.require && !value) {
          errorData[data] = rule.message;
        }
      });
    });
    setErrorMessage(errorData);
    return errorData;
  };

  const formHandler = (e) => {
    e.preventDefault();

    const error = errorHandler(expense);
    if (Object.keys(error).length) return;
    setExpenseData((prev) => [
      ...prev,
      { ...expense, id: crypto.randomUUID() },
    ]);
    SetExpense({ date: "", amount: "", categories: "" });
  };
  const expenseHandler = (e) => {
    const { name } = e.target;
    SetExpense((prev) => ({ ...prev, [name]: e.target.value }));
    setErrorMessage({});
  };

  const handleDelete = (id) => {
    const deleteData = expenseData.filter((expense) => expense.id !== id);
    setExpenseData(deleteData);
  };
  useEffect(() => {
    const totalExpense = expenseData.reduce((acc, value) => {
      return acc + parseInt(value.amount);
    }, 0);
    setTotalExpense(totalExpense);
  }, [expenseData]);

  return (
    <div className="expense-container">
      <div className="left">
        <div className="expense-input-container">
          <h2 style={{ marginBlockStart: 0 }}>Add Your Expense</h2>
          <form onSubmit={formHandler}>
            <input
              type="date"
              value={expense.date}
              name="date"
              id="date"
              onChange={expenseHandler}
            />
            <p className="error-style">{errorMessage.date}</p>
            <input
              type="number"
              name="amount"
              value={expense.amount}
              onChange={expenseHandler}
              placeholder="enter Amount"
            />
            <p className="error-style">{errorMessage.amount}</p>
            <select
              name="categories"
              value={expense.categories}
              className="form-select"
              required
              onChange={expenseHandler}
            >
              <option hidden value="Science">
                Select categories
              </option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>
            <p className="error-style">{errorMessage.categories}</p>
            <div>
              <button className="add-Expense">Add Expense</button>
            </div>
          </form>
        </div>
        <div className="expense-summary-container">
          <h3>Summary</h3>
          <hr />
          <div className="exp-text">
            <p>
              Total Expenses: <span>{totalExpense}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="expense-show-container">
          <h3>Expenses</h3>
          <hr />
          {expenseData.length ? (
            expenseData.map((entry, index) => (
              <>
                <div className="exp-text" key={index}>
                  <p>{`${entry.date} - ₹ ${entry.amount} - ${entry.categories}`}</p>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </>
            ))
          ) : (
            <div className="exp-text">
              <h5>⬅️ Enter Some Expense </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
