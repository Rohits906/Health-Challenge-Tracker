import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff6f61"];

const WorkoutChart = ({ workouts }) => {
  // Group workouts by user
  const users = [...new Set(workouts.map((workout) => workout.userName))];

  return (
    <div className="w-full max-w-4xl mt-6 bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-bold text-center mb-4">Workout Progress Per User</h2>

      {users.map((user) => {
        // Filter workouts for this user
        const userWorkouts = workouts.filter((w) => w.userName === user);

        // Aggregate total minutes per workout type
        const workoutData = userWorkouts.reduce((acc, workout) => {
          const existing = acc.find((item) => item.name === workout.workoutType);
          if (existing) {
            existing.minutes += parseInt(workout.workoutMinutes);
          } else {
            acc.push({ name: workout.workoutType, minutes: parseInt(workout.workoutMinutes) });
          }
          return acc;
        }, []);

        return (
          <div key={user} className="mb-10 p-4 border rounded-lg bg-gray-100">
            <h3 className="text-md font-semibold text-center mb-2">{user}'s Workout Progress</h3>

            {/* Bar Chart */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-center mb-2">Total Workout Minutes</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={workoutData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="minutes" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div>
              <h4 className="text-sm font-medium text-center mb-2">Workout Type Distribution</h4>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={workoutData} dataKey="minutes" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                    {workoutData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutChart;
