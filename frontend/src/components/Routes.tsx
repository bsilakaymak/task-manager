import {
  BrowserRouter as Router,
  Route,
  Routes as RouterRoutes,
} from "react-router-dom";
import AllTasks from "./AllTasks";
import CurrentTask from "./CurrentTask";
import Home from "./Home";
import NewTask from "./NewTask";
const Routes = (props: { children: React.ReactNode }) => {
  return (
    <Router>
      {props.children}
      <RouterRoutes>
        <Route path="/task/:id" element={<CurrentTask />} />
        <Route path="/tasks" element={<AllTasks />} />
        <Route path="/add" element={<NewTask />} />
        <Route path="/" element={<Home />} />
      </RouterRoutes>
    </Router>
  );
};

export default Routes;
