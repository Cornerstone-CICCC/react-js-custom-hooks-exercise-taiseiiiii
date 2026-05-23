import { useTime } from "./hooks/useTime";
import "./App.css";

function App() {
  const day = useTime<string>("day");
  const hour = useTime<string>("hour");
  const minute = useTime<string>("minute");
  const second = useTime<string>("second");

  return (
    <main className="clock">
      <h1>useTime Custom Hook</h1>
      <h3>Day: {day}</h3>
      <h3>Hour: {hour}</h3>
      <p className="full-time">
        {hour}:{minute}:{second}
      </p>
    </main>
  );
}

export default App;
