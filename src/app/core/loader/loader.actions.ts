import { Action } from '@ngrx/store';

export const LoaderActionsTypes = {
  setLoaderStatus: '[Loader] Set Loader Status',
};

export class SetLoaderStatus implements Action {
  readonly type = LoaderActionsTypes.setLoaderStatus;

  constructor(public payload: boolean) {
  }
}
