import { configureStore, createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from './src/localStorage';

// Create a slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    updateTodo: (state, action) => {
      return state.map((todo, index) => {
        if (index === action.payload.index) {
          return action.payload.value;
        }
        return todo;
      });
    },
    setTodos: (state, action) => {
      return action.payload;
    }
  }
});

// Export actions
export const { addTodo, removeTodo, updateTodo, setTodos } = todoSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
});

// Subscribe to store updates
store.subscribe(() => {
  saveState(store.getState().todos);
});

export default store;
