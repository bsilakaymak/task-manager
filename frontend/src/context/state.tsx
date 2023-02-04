import { FC, ReactNode, useReducer } from "react";

import { AppContextActions } from "./actions";
import { AppContext } from "./context";
import { AppReducer } from "./reducer";

export const AppState: FC<{ children: ReactNode }> = ({ children }) => {
  const initialState = {
    tasks: [],
    currentTask: {},
    errors: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getAllTasks = async () => {
    const fetchData = async () => {
      const res = await fetch(`/api/v1/tasks`);
      const data = await res.json();

      dispatch({
        type: AppContextActions.GET_TASKS,
        payload: data,
      });
    };

    fetchData().catch((error) => {
      dispatch({
        type: AppContextActions.TASKS_ERROR,
        payload: error,
      });
    });
  };

  const getTaskById = async (id: string) => {
    const fetchData = async () => {
      const res = await fetch(`/api/v1/tasks/${id}`);
      const data = await res.json();
      dispatch({
        type: AppContextActions.GET_TASK,
        payload: data,
      });
    };

    fetchData().catch((error) => {
      dispatch({
        type: AppContextActions.TASKS_ERROR,
        payload: error,
      });
    });
  };

  const deleteTask = async (id: string) => {
    const fetchData = async () => {
      const res = await fetch(`api/`);
      const data = await res.json();
      dispatch({
        type: AppContextActions.GET_TASKS,
        payload: data,
      });
    };

    fetchData().catch((error) => {
      dispatch({
        type: AppContextActions.TASKS_ERROR,
        payload: error,
      });
    });
  };

  const updateTask = async (id: string) => {
    const fetchData = async () => {
      const res = await fetch(`api/`);
      const data = await res.json();

      dispatch({
        type: AppContextActions.GET_TASKS,
        payload: data,
      });
    };

    fetchData().catch((error) => {
      dispatch({
        type: AppContextActions.TASKS_ERROR,
        payload: error,
      });
    });
  };

  const createTask = async (task: any) => {
    const fetchData = async () => {
      await fetch(`/api/v1/tasks`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      dispatch({
        type: AppContextActions.CREATE_TASK,
        payload: state.tasks.push(task),
      });
    };

    fetchData().catch((error) => {
      dispatch({
        type: AppContextActions.TASKS_ERROR,
        payload: error,
      });
    });
  };

  return (
    <AppContext.Provider
      value={{
        tasks: state.tasks,
        currentTask: state.currentTask,
        errors: state.errors,
        getAllTasks,
        deleteTask,
        updateTask,
        getTaskById,
        createTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
