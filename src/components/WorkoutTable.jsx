import { useState } from "react";

const WorkoutTable = ({ workouts }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Filtering logic
  const filteredWorkouts = workouts.filter(
    (workout) =>
      workout.userName.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || workout.workoutType === filter)
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWorkouts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full max-w-4xl bg-white shadow-md p-4 rounded-lg">
      {/* Search & Filter */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-1/2"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded cursor-pointer"
        >
          <option value="All">All</option>
          <option value="Cycling">Cycling</option>
          <option value="Running">Running</option>
          <option value="Swimming">Swimming</option>
          <option value="Yoga">Yoga</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Workout</th>
            <th className="border p-2">Minutes</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((workout, index) => (
            <tr key={index} className="border">
              <td className="p-2">{workout.userName}</td>
              <td className="p-2">{workout.workoutType}</td>
              <td className="p-2">{workout.workoutMinutes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-gray-200 rounded hover:bg-gray-400 cursor-pointer"
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= filteredWorkouts.length}
          className="p-2 bg-gray-200 rounded hover:bg-gray-400 cursor-pointer"
        >
          Next
        </button>

        {/* Items per page */}
        <div>
          <label>Items per page:</label>
          <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTable;
