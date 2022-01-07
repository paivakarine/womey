const baseKey = "@womey_";

export const setStorageItem = (key, value) =>
  localStorage.setItem(`${baseKey + key}`, value);

export const getStorageItem = (key) => localStorage.getItem(`${baseKey + key}`);

export const removeStorageItem = (key) => localStorage.removeItem(`${baseKey + key}`);


