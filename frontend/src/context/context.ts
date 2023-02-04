import { createContext } from "react";

interface Context {
  tasks: any[];
  currentTask: any;
  errors?: null;
  getAllTasks: () => any;
  getTaskById: (id: string) => any;
  createTask: (task: any) => any;
  deleteTask: (id: any) => any;
  updateTask: (id: any) => any;
}

export const AppContext = createContext<Context>({
  getAllTasks: () => {},
  getTaskById: () => {},
  createTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
  errors: null,
  tasks: [{}],
  currentTask: {},
});
