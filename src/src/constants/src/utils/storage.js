// LocalStorage utility functions

const STORAGE_KEY = 'nilai_sma_tracker'

export const getStorageData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : getDefaultData()
  } catch (error) {
    console.error('Error reading storage:', error)
    return getDefaultData()
  }
}

export const saveStorageData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return true
  } catch (error) {
    console.error('Error saving storage:', error)
    return false
  }
}

export const getDefaultData = () => {
  return {
    selectedSchools: [],
    grades: {}, // { semesterId: { subjectName: score } }
    lastUpdated: new Date().toISOString()
  }
}

export const clearAllData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
    return true
  } catch (error) {
    console.error('Error clearing storage:', error)
    return false
  }
}
