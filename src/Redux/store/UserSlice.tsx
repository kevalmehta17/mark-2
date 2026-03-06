import { createSlice, current } from '@reduxjs/toolkit';
import type { User, FormData } from '../../types/User';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  users: [] as User[],
  formValue: { userName: '', city: '', age: 0 },
  mode: 'save',
  selectedId: null,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      console.log('after add user', current(state.users));
    },
    updateUser: (
      state,
      action: PayloadAction<{ id: number; formData: FormData }>,
    ) => {
      const { id, formData } = action.payload;
      const findUser = state.users.find((user) => user.id === id);
      if (!findUser) {
        alert('User not found for this id');
        console.log('Error inside updateUser Redux, user not found');
        return;
      }
      state.users = state.users.map((user) =>
        user.id === id ? { ...user, ...formData } : user,
      );
      console.log('after update user', state.users);
    },
    deleteUser: (state) => {},
    changeFormValue: (state, action: PayloadAction<FormData>) => {
      state.formValue[action.payload.field] = action.payload.value;
      console.log('field value', current(state.formValue));
    },
    selectId: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
      state.mode = 'update';
      // console.log("after selectedId", state)
    },
    // THIS WILL SHOW THE USER DATA IN INPUT FIELD BASED ON ID SELECTION
    showInputData: (state, action: PayloadAction<Number>) => {
      const findUser = state.users.find((user) => user.id === action.payload);
      console.log('User found', findUser);
      if (!findUser) {
        alert('User not found for this id');
        console.log('Error inside showInputData Redux, user not found');
        return;
      }
      state.formValue = {
        userName: findUser.userName,
        city: findUser.city,
        age: findUser.age,
      };
    },

    clearInputData: (state) => {
      state.formValue = { userName: '', city: '', age: 0 };
      console.log('clear', current(state));
    },
    selectIdNull: (state) => {},
  },
});

export const {
  addUser,
  updateUser,
  deleteUser,
  changeFormValue,
  selectId,
  showInputData,
  clearInputData,
  selectIdNull,
} = UserSlice.actions;

export default UserSlice.reducer;
