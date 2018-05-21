import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mockStore = configureMockStore([thunk]);

export const createMockStore = (initialState) => {
  return mockStore(initialState);
};

export const mockAxios = () => {
  return new MockAdapter(axios);
};