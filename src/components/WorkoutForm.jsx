import { useState } from "react";

const WorkoutForm = ({ addWorkout }) => {
  const [formData, setFormData] = useState({
    userName: "",
    workoutType: "Cycling",
    workoutMinutes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.workoutMinutes) {
      alert("Please fill in all fields.");
      return;
    }
    addWorkout(formData);
    setFormData({ userName: "", workoutType: "Cycling", workoutMinutes: "" });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {/* User Name */}
        <div className="flex flex-col bg-gray-200 p-3 rounded-md">
          <label className="text-gray-700 text-sm font-semibold">User Name*</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
            className="bg-transparent text-lg font-medium focus:outline-none"
          />
        </div>

        {/* Workout Type */}
        <div className="flex flex-col bg-gray-200 p-3 rounded-md">
          <label className="text-gray-700 text-sm font-semibold">Workout Type*</label>
          <select
            name="workoutType"
            value={formData.workoutType}
            onChange={handleChange}
            className="bg-transparent text-lg font-medium focus:outline-none cursor-pointer"
          >
            <option value="Cycling">Cycling</option>
            <option value="Running">Running</option>
            <option value="Swimming">Swimming</option>
            <option value="Yoga">Yoga</option>
          </select>
        </div>

        {/* Workout Minutes */}
        <div className="flex flex-col bg-gray-200 p-3 rounded-md">
          <label className="text-gray-700 text-sm font-semibold">Workout Minutes*</label>
          <input
            type="number"
            name="workoutMinutes"
            value={formData.workoutMinutes}
            onChange={handleChange}
            required
            className="bg-transparent text-lg font-medium focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200">
          Add Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
