import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer, // Thêm userReducer vào store
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // Tắt kiểm tra các giá trị không thể serialize
  }),
});

export default store;
