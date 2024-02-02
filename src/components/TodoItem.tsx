import { memo } from "react";
const TodoItem = memo(function TodoItem({
  todoItem,
  index,
  status,
  handleCheckBoxChange,
  handleDeleteButton,
}: {
  todoItem: { note: string; isDone: boolean };
  index: number;
  status: string | undefined;
  handleCheckBoxChange: (index: number) => void;
  handleDeleteButton: (index: number) => void;
}) {
  console.log("hi" + todoItem.note);
  return (
    <>
      <li
        // key={t.note}
        style={{
          textAlign: "left",
          textDecoration: todoItem.isDone ? "line-through" : "none",
          display:
            (status === "done" && !todoItem.isDone) ||
            (status === "undo" && todoItem.isDone)
              ? "none"
              : "block",
        }}
      >
        <input
          type="checkbox"
          checked={todoItem.isDone}
          onChange={() => {
            console.log(index);
            handleCheckBoxChange(index);
          }}
        />
        {todoItem.note}
        <button
          onClick={() => {
            handleDeleteButton(index);
          }}
        >
          delete
        </button>
      </li>
    </>
  );
}, arePropsEqual);

function arePropsEqual(
  oldProps: { todoItem: { note: string; isDone: boolean } },
  newProps: { todoItem: { note: string; isDone: boolean } },
) {
  return (
    oldProps.todoItem.note === newProps.todoItem.note &&
    oldProps.todoItem.isDone === newProps.todoItem.isDone
  );
}
export default TodoItem;
