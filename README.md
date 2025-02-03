# Workout Tracker

A React-based web application for tracking workout progress. This app allows users to log workouts, view workout summaries by user, and visualize workout data using charts.

# Features

- **Add Workouts:** Users can input their workout data including their name, workout type, and the duration of their workout.

- **Search & Filter Workouts:** Users can search for workouts by user name and filter by workout type.

- **Workout Summary:** Displays a bar chart of the total minutes spent on each workout type per user.

- **Workout Type Distribution:** Displays a pie chart showing the distribution of workout types based on the total minutes spent by each user.

- **Pagination:** Workouts are displayed in a paginated table format.

# Tech Stack

- **React:** JavaScript library for building user interfaces.
- **recharts:** Library for composable charts in React.
- **Tailwind CSS:** Utility-first CSS framework for fast UI development.

# Installation

Follow these steps to get the project up and running locally:

**1. Clone the repository**

```bash
git clone https://github.com/Rohits906/Health-Challenge-Tracker
cd workout-tracker
```

**2. Install dependencies**

```bash
npm install
```

**3. Run the project**

```bash
npm run dev
```

# File Structure

```bash
/workout-tracker
│
├── /src
│   ├── /components
│   │   ├── WorkoutForm.jsx
│   │   ├── WorkoutTable.jsx
│   │   └── WorkoutChart.jsx
│   ├── App.jsx
│   └── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

# Components

`WorkoutForm.jsx`

A form for users to enter their workout data. The form includes fields for the user's name, workout type, and workout minutes. The form passes the input data back to the parent component (`App`) via the `addWorkout` function.

`WorkoutTable.jsx`

Displays a table of all workouts with features like search, filter by workout type, pagination, and items per page. This component allows users to view and manage their logged workouts.

`WorkoutChart.jsx`

Renders visual representations of the workout data using charts:

- **Bar Chart:** Displays the total workout minutes for each workout type by user.
- **Pie Chart:** Displays the distribution of workout types per user based on the total minutes spent.

`App.jsx`

The root component that holds the state for the workout data (`workouts`) and renders all child components (`WorkoutForm`, `WorkoutTable`, `WorkoutChart`). It manages the addition of new workout entries through the `addWorkout` function.

# Customization

- **Chart Colors:** The pie chart colors can be customized in the `COLORS` array in `WorkoutChart.jsx`.

- **Items per Page:** The number of items per page in the workout table can be adjusted by selecting a value from the dropdown.


# Example Usage

Here’s an example of how the app might look in action:

**1. Add a new workout:** Users can add a workout via the form (`WorkoutForm`).

**2. View and manage the added workouts:** The logged workouts are displayed in a table with search and filter features (`WorkoutTable`).

**3. Visualize workout progress:** The app visualizes workout data with a bar chart and pie chart (`WorkoutChart`).