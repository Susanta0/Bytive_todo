import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTodo } from "../Redux/reducer";

const EditPage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todo = useSelector((state) =>
    state.todos.todos.find((todo) => todo.id === parseInt(id))
  );

  const [title, setTitle] = useState(todo?.title || "");
  const [completed, setCompleted] = useState(todo?.completed || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: parseInt(id), title, completed }));
    navigate("/"); // Navigate back to the home page
  };

  if (!todo)
    return <p className="text-center text-red-500 mt-10">Todo not found!</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Edit Todo
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter todo title"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-700">Completed</label>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
