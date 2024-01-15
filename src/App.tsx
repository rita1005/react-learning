import { useState, useRef } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div>
      <Sign />
      <br />
      <TodoList />
    </div>
  );
}

function Sign() {
  const [sign, setSign] = useState<string>();
  const [name, setName] = useState<string>();
  const [signs, setSigns] = useState<string[]>([]);
  return (
    <>
      <h3>Sign</h3>
      <div className="App">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setSign(name);
            console.log(name);
            setSigns([...signs, name!]);
          }}
        >
          click
        </button>
        <div>{sign}您好</div>
        <div>{name}</div>
        <ul>
          {signs.map((sign) => (
            <li key={sign}>{sign}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

function TodoList() {
  const todoRef = useRef<HTMLInputElement>(null);
  const [todoList, setTodoList] = useState<{ note: string; isDone: boolean }[]>(
    [],
  );
  const [status, setStatus] = useState<string>();
  const handleButtonClick = () => {
    if (todoRef.current!) {
      setTodoList([
        ...todoList,
        { note: todoRef.current.value!, isDone: false },
      ]);
      todoRef.current.value = "";
    }
  };

  const handleCheckBoxChange = (index: number) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].isDone = !updatedTodoList[index].isDone;
    setTodoList(updatedTodoList);
  };

  const handleDeleteButton = (index: number) => {
    const updateTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updateTodoList);
  };

  return (
    <>
      <h3>Todo List</h3>
      <input
        ref={todoRef}
        onChange={(e) => {
          if (todoRef.current) {
            todoRef.current.value = e.target.value.trim();
          }
        }}
      />
      <button onClick={handleButtonClick}>add</button>
      <br />
      <form>
        <label>
          <input
            type="radio"
            name="choice"
            value="done"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />{" "}
          已完成
        </label>
        <label>
          <input
            type="radio"
            name="choice"
            value="undo"
            onChange={(e) => setStatus(e.target.value)}
          />{" "}
          未完成
        </label>
        <label>
          <input
            type="radio"
            name="choice"
            value="all"
            onChange={(e) => setStatus(e.target.value)}
          />{" "}
          全部
        </label>
      </form>
      <ul style={{ listStyle: "none" }}>
        {todoList.map((t, index) => (
          <TodoItem
            key={t.note}
            todoItem={t}
            index={index}
            status={status}
            handleCheckBoxChange={handleCheckBoxChange}
            handleDeleteButton={handleDeleteButton}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
