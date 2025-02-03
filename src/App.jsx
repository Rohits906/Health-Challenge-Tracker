import { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutTable from "./components/WorkoutTable";
import WorkoutChart from "./components/WorkoutChart";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">Workout Tracker</h1>
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutTable workouts={workouts} />
      <WorkoutChart workouts={workouts} /> {/* Displays charts per user */}
    </div>
  );
}

export default App;