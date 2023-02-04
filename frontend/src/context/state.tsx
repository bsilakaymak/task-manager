import { FC, ReactNode, useEffect, useReducer, useState } from "react";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllTasks = async () => {
    setLoading(true);
    setError(false);
    const fetchData = async () => {
      const res = await fetch(`/api/v1/tasks`);
      const data = await res.json();

      dispatch({
        type: AppContextActions.GET_TASKS,
        payload: data,
      });
      setLoading(false);
    };

    fetchData().catch((error) => {
      dispatch({
        type: AppContextActions.TASKS_ERROR,
        payload: error,
      });
      setError(true);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTaskById = async (id: string) => {
    let returnedData;
    setLoading(true);
    setError(false);
    const fetchData = async () => {
      const res = await fetch(`/api/v1/tasks/${id}`);
      const data = await res.json();
      dispatch({
        type: AppContextActions.GET_TASK,
        payload: data,
      });
      setLoading(false);
    };

    fetchData().catch((error) => {
      dispatch({
        type: AppContextActions.TASKS_ERROR,
        payload: error,
      });
      setError(true);
      setLoading(false);
    });
    return returnedData;
  };

  const deleteTask = async (id: string) => {
    setLoading(true);
    setError(false);
    const fetchData = async () => {
      await fetch(`/api/v1/tasks/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      dispatch({
        type: AppContextActions.DELETE_TASK,
        payload: id,
      });
      setLoading(false);
    };

    fetchData().catch((error) => {
      dispatch({
        type: AppContextActions.TASKS_ERROR,
        payload: error,
      });
    });
    setError(true);
  };

  const updateTask = async (id: string, task: any) => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(`/api/v1/tasks/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await response.json();

      dispatch({
        type: AppContextActions.UPDATE_TASK,
        payload: data,
      });

      setLoading(false);
    };

    fetchData().catch((error) => {
      dispatch({
        type: AppContextActions.TASKS_ERROR,
        payload: error,
      });
    });
    setError(true);
    setLoading(false);
  };

  const createTask = async (task: any) => {
    setLoading(true);
    setError(false);
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
      setLoading(false);
    };

    fetchData().catch((error) => {
      dispatch({
        type: AppContextActions.TASKS_ERROR,
        payload: error,
      });
    });
    setError(true);
    setLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        tasks: state.tasks,
        currentTask: state.currentTask,
        errors: state.errors,
        loading,
        error,
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
