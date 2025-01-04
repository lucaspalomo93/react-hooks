import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useLocalStorage(key: string, value: any) {
	const [localStorageValue, setLocalStorageValue] = useState(() =>
		getLocalStorageValue(key, value)
	);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const setValue = (value: any) => {
		const valueToStore = typeof value === 'function' ? value(localStorageValue) : value;

		setLocalStorageValue(valueToStore);
		localStorage.setItem(key, JSON.stringify(valueToStore));
	};

	return [localStorageValue, setValue] as const;
}
function getLocalStorageValue(key: string, value: string) {
	const itemFromStorage = localStorage.getItem(key);
	return itemFromStorage ? JSON.parse(itemFromStorage) : value;
}

export default useLocalStorage;
