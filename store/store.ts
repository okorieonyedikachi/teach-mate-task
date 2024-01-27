import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '@/store/task/taskSlice'
import { persistReducer,  persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, taskReducer)


export const store = configureStore({
  reducer: persistedReducer,
})
export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch