import { ICartGame } from '../../utils/interfaces';
import {
  ADD_TO_CART,
  REMOVE_NUMBER,
  ADD_NUMBER,
  COMPLETE_GAME,
  CLEAR_GAME,
  REMOVE_FROM_CART,
  GET_GAMES_COMPLETED,
  GET_GAMES_PENDING,
  GET_GAMES_REJECTED,
  CLEAR_CART,
} from './actions';

interface IInitialState {
  games: ICartGame[];
  numbers: number[];
  totalAmount: number;
  completedGames: ICartGame[];
}

interface IAction {
  type: string;
  payload: any;
}

const initialState = {
  games: [],
  numbers: [],
  totalAmount: 0,
  completedGames: [],
};

function cartReducer(state: IInitialState = initialState, action: IAction) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        games: [...state.games, action.payload],
        totalAmount: state.totalAmount + action.payload.price,
      };

    case REMOVE_FROM_CART:
      const filteredGames = state.games.filter(
        (game) => game.id !== action.payload.id
      );
      return {
        ...state,
        games: filteredGames,
        totalAmount: state.totalAmount - action.payload.price,
      };
    case CLEAR_CART:
      return {
        ...state,
        games: [],
        totalAmount: 0,
      };

    case ADD_NUMBER:
      return { ...state, numbers: [...state.numbers, action.payload] };

    case REMOVE_NUMBER:
      const filtered = state.numbers.filter(
        (number) => number !== action.payload
      );
      return { ...state, numbers: filtered };
    case COMPLETE_GAME:
      return {
        ...state,
        numbers: action.payload,
      };

    case CLEAR_GAME:
      return {
        ...state,
        numbers: [],
      };

    case GET_GAMES_COMPLETED:
      const arrays = Object.values(action.payload);
      const games = arrays.reduce((acc: any, cur: any) => {
        return [...acc, ...cur];
      }, []);

      return {
        ...state,
        completedGames: games,
        loading: false,
        error: null,
      };
    case GET_GAMES_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_GAMES_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default cartReducer;
