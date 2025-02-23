import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../i18n'; // Import i18next để thay đổi ngôn ngữ

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'en', // Ngôn ngữ mặc định là tiếng Anh
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      i18n.changeLanguage(action.payload); // Cập nhật ngôn ngữ trong i18next
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;