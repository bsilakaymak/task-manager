import { createContext } from "react";

interface Context {
  tasks: any[];
  currentTask: any;
  errors?: null;
  error: boolean;
  loading: boolean;
  getAllTasks: () => any;
  getTaskById: (id: string) => any;
  createTask: (task: any) => any;
  deleteTask: (id: any) => any;
  updateTask: (id: any, task: any) => any;
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
  loading: false,
  error: false,
});
