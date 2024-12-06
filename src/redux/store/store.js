
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Використовуємо локальне сховище
import contactsReducer from '../contactsSlice/contactsSlice';
import filtersReducer from '../filtersSlice/filtersSlice';

// Налаштування конфігурації для Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'], // Зберігаємо лише contacts у локальному сховищі
};

// Persisted редюсер для контактів
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
});

// Створюємо persistor для PersistGate
const persistor = persistStore(store);

export { store, persistor };
