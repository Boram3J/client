import update from 'immutability-helper';
import { createAction, createReducer, current } from '@reduxjs/toolkit';

import { initialImageState } from '../constants/image';

const ACTIONS = {
  SET_SELECTED_MENU: 'Image/SET_SELECTED_MENU',
};

export const setSelectedMenu = createAction(ACTIONS.SET_SELECTED_MENU, (payload: { id: number }) => ({ payload }));

export interface ImageState {
  id: number;
}

const initialState: ImageState = initialImageState;

const imageReducer = createReducer<ImageState>(initialState, builder => {
  builder.addCase(setSelectedMenu, (state, action) => {
    const currState = current(state);

    return update(currState, {
      // @ts-ignore
      id: action.payload.id,
    });
  });
});

export default imageReducer;
