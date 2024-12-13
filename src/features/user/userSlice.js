import { createSlice } from '@reduxjs/toolkit';

// Khai báo initialState chính xác
const initialState = {
  name: "",
  email: "",
  photo: "",
};

// Tạo slice cho user
const userSlice = createSlice({
  name: 'user', // Tên của slice
  initialState, // Sử dụng initialState đúng
  reducers: {
    // Action để set thông tin đăng nhập người dùng
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    // Action để set trạng thái đăng xuất (reset thông tin người dùng)
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

// Export các action để sử dụng trong component
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

// Các selector để lấy state
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email; // Đổi từ name thành email
export const selectUserPhoto = (state) => state.user.photo; // Đổi từ name thành photo

// Export reducer để sử dụng trong store
export default userSlice.reducer;
