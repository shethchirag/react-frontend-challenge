import { useEffect, useState } from "react";
import "./style.css";

const TodoList = () => {
  const [todo, setTodo] = useState({ todoText: "" });
  const [todoist, setTodoist] = useState([]);
  const [edit, setEdit] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const todoOnchangeHandler = (e) => {
    const { name } = e.target;
    const value = e.target.value;
    setTodo({ [name]: value });
    setErrorMessage([]);
  };
  const errorRule = {
    todoText: [
      { require: true, message: "Please Enter Value" },
      { minLength: 3, message: "Please Enter Atleast 3 char" },
    ],
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

  const submitHandler = (e) => {
    e.preventDefault();
    const error = errorHandler(todo);
    if (Object.keys(error).length) return;
    if (edit) {
      setTodoist((prev) => {
        const newValue = prev.map((item) => {
          if (item.id === edit) {
            return { ...todo, id: edit };
          } else {
            return item;
          }
        });
        setLocalStorage(newValue);
        return newValue;
      });
      setEdit("");
      setTodo({ todoText: "" });
      return;
    }
    const newTodo = { ...todo, id: crypto.randomUUID(), todoChecked: false };
    const newValue = [...todoist, newTodo];

    setTodoist(newValue);
    setLocalStorage(newValue);
    setTodo({ todoText: "" });
  };

  const deleteHandler = (id) => {
    const newTodo = todoist.filter((item) => item.id !== id);
    setLocalStorage(newTodo);
    setTodoist(newTodo);
  };
  const updateHandler = (id) => {
    const newTodo = todoist.find((item) => item.id === id);
    setLocalStorage(newTodo);
    setTodo(newTodo);
    setEdit(id);
  };
  const checkedHandler = (id) => {
    const newCheckTodo = todoist.map((item) => {
      if (item.id === id) {
        return { ...item, todoChecked: !item.todoChecked };
      } else return item;
    });
    setLocalStorage(newCheckTodo);
    setTodoist(newCheckTodo);
  };

  const setLocalStorage = (item) => {
    localStorage.setItem("todo", JSON.stringify(item));
  };
  const getLocalStorage = () => {
    const localItem = localStorage.getItem("todo");
    return JSON.parse(localItem);
  };

  useEffect(() => {
    const localStorageTodo = getLocalStorage();
    console.log(localStorageTodo);
    if (localStorageTodo) {
      setTodoist([...localStorageTodo]);
    }
  }, []);
  console.log(todoist);
  return (
    <div className="todo-container">
      <div className="TodoList">
        <form onSubmit={submitHandler}>
          <input
            onChange={todoOnchangeHandler}
            type="text"
            name="todoText"
            value={todo.todoText}
            placeholder="Enter your Todo"
          />
          <p className="error-style">{errorMessage.todoText}</p>
          <div className="btn">
            <button className="submit">{edit ? "save" : "Submit"}</button>
            <button type="reset" className="cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
      <p className="p-text-message">
        Double click on todo to toggle completion status
      </p>
      {todoist.length > 0 &&
        todoist.map((item) => (
          <div key={item.id} className="todo-list">
            <ul>
              <li className="todo-li">
                <span
                  className={item.todoChecked ? "checked-text" : ""}
                  onDoubleClick={() => checkedHandler(item.id)}
                >
                  {item.todoText}
                </span>
                <div className="todo-action">
                  <button
                    onClick={() => updateHandler(item.id)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteHandler(item.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
