export const getLocalData = (key: string) => JSON.parse(localStorage.getItem(key) as string)


export const setLocalData = <T>(key: string, data: T) => localStorage.setItem(key, JSON.stringify(data))