import { createSelector } from '@ngrx/store';
import { AppStore } from '../../shared/models/store.model';
import { LoaderState } from './loader.reducers';

const getLoader = (state: AppStore) => state.loader;

export const getLoaderStatus = createSelector(
  getLoader,
  (loaderState: LoaderState) => loaderState.isLoading
);
