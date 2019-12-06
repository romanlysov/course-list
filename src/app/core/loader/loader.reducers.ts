import { LoaderActionsTypes } from './loader.actions';

const initialState = {
  isLoading: false,
};

export interface LoaderState {
  isLoading: boolean;
}

export const loaderReducer = (state: LoaderState = initialState, action) => {
  switch (action.type) {
    case LoaderActionsTypes.setLoaderStatus: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};
