import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../Redux/action";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const { todos, status, error } = useSelector((state) => state.todos);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  if (status === "loading")
    return <p className="text-center text-blue-500 mt-10">Loading...</p>;
  if (status === "failed")
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <>
       <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Todo List</h1>
        <div className="flex justify-end mb-4">
          <Link to="/create">
            <button className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
              Create New Todo
            </button>
          </Link>
        </div>

        <div className="space-y-4">
          {todos.map((ele) => (
            <div
              key={ele.id}
              className={`flex flex-wrap items-center justify-between bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition duration-200 border-l-8 ${
                ele.id % 2 === 0 ? "border-l-green-500" : "border-l-red-500"
              }`}
            >
              <div className="font-bold w-full sm:w-1/2 truncate">
                Title: <span className="font-normal">{ele.title.slice(0, 20)}</span>
              </div>
              <div className="font-bold w-full sm:w-1/4 mt-2 sm:mt-0">
                Completed: <span className="font-normal">{ele.completed ? "Yes" : "No"}</span>
              </div>
              <Link
                to={`/edit/${ele.id}`}
                className="text-blue-500 hover:underline mt-2 sm:mt-0"
              >
                Edit Task
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
