import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import { contactReducer } from './contacts/contacts.slice'
import { filterReducer } from './filters/filters.slice'

export const store = configureStore({
	reducer: {
		contacts: contactReducer,
		filters: filterReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
