import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  accessToken: '',
  email: '',
  name: '',
  profile: '',
  profileId: '',
  refreshToken: '',
  picture: '',
  expiresAt: '',
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };

      return newState;
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;

      localStorage.clear();
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.logando = true;
      return newState;
    }

    default: {
      return state;
    }
  }
}
