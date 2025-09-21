import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task
        title="Dishes"
        deadline="Today"
        description="Wash dishes, dry them, and wipe the counters"
      />
      <Task
        title="Laundry"
        deadline="Tomorrow"
        description="Fold laundry and put everything away"
      />

      <Task
        title="Tidy"
        deadline="Today"
        description="Organize the living room and clear the coffee table"
      />
    </div>
  );
}

export default App;
