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
      return {
        ...state,
        tasks: action.payload,
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
