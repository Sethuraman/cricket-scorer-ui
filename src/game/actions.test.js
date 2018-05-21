import { createMockStore, mockAxios } from "../testHelpers/mockHelpers";
import { fetchGameDetails, GAME_DETAILS_FETCHED } from './actions';

const mock = mockAxios();
let store;
const apiData = {
  team1: 'Team 1',
  team2: 'Team 2',
};


describe("game/actions", () => {
  beforeEach(() => {
    store = createMockStore({})
  });

  it('should dispatch gameDetailsFetched', async () => {
    mock
      .onGet('http://localhost:9090/game')
      .reply(200, apiData);

    store.dispatch(fetchGameDetails()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: GAME_DETAILS_FETCHED,
        payload: {
          gameDetails: apiData
        }
      });
    });
  });


})
