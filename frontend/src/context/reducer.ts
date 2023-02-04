import { AppContextActions } from "./actions";

export const AppReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case AppContextActions.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    case AppContextActions.GET_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };
    case AppContextActions.CREATE_TASK:
      const newTask = action.payload;
      const newTasks = state.tasks.push(newTask);
      return {
        ...state,
        tasks: newTasks,
      };
    case AppContextActions.DELETE_TASK:
      const filteredTasks = state.tasks.filter(
        (task: any) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: filteredTasks,
        currentTask: null,
      };
    case AppContextActions.UPDATE_TASK:
      const updatedTask = action.payload;
      const updatedTasks = state.tasks.map((task: any) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
        currentTask: action.payload,
      };
    case AppContextActions.TASKS_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
