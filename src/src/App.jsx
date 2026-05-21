import { useState, useEffect } from 'react'
import { BookOpen, Target, BarChart3, Zap } from 'lucide-react'
import Dashboard from './components/Dashboard'
import InputNilai from './components/InputNilai'
import TargetSelector from './components/TargetSelector'
import StatisticsChart from './components/StatisticsChart'
import Recommendation from './components/Recommendation'
import { getStorageData, saveStorageData } from './utils/storage'
import './App.css'

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard')
  const [data, setData] = useState(getStorageData())
  const [loading, setLoading] = useState(false)

  // Save data whenever it changes
  useEffect(() => {
    saveStorageData(data)
  }, [data])

  const handleUpdateGrades = (semester, subject, score) => {
    setData(prev => ({
      ...prev,
      grades: {
        ...prev.grades,
        [semester]: {
          ...prev.grades[semester],
          [subject]: score
        }
      },
      lastUpdated: new Date().toISOString()
    }))
  }

  const handleSelectSchools = (schoolIds) => {
    setData(prev => ({
      ...prev,
      selectedSchools: schoolIds,
      lastUpdated: new Date().toISOString()
    }))
  }

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return <Dashboard data={data} />
      case 'input':
        return <InputNilai data={data} onUpdateGrades={handleUpdateGrades} />
      case 'target':
        return <TargetSelector data={data} onSelectSchools={handleSelectSchools} />
      case 'statistics':
        return <StatisticsChart data={data} />
      case 'recommendation':
        return <Recommendation data={data} />
      default:
        return <Dashboard data={data} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Nilai SMA Tracker</h1>
            <span className="ml-auto text-sm text-gray-500">Prediksi Sekolah Dinas</span>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto">
            <button
              onClick={() => setCurrentTab('dashboard')}
              className={`px-4 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                currentTab === 'dashboard'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => setCurrentTab('input')}
              className={`px-4 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                currentTab === 'input'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              ✏️ Input Nilai
            </button>
            <button
              onClick={() => setCurrentTab('target')}
              className={`px-4 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                currentTab === 'target'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              <Target className="w-5 h-5 inline mr-1" />Target
            </button>
            <button
              onClick={() => setCurrentTab('statistics')}
              className={`px-4 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                currentTab === 'statistics'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              <BarChart3 className="w-5 h-5 inline mr-1" />Statistik
            </button>
            <button
              onClick={() => setCurrentTab('recommendation')}
              className={`px-4 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                currentTab === 'recommendation'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              <Zap className="w-5 h-5 inline mr-1" />Rekomendasi
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-16">
        <p>© 2024 Nilai SMA Tracker - Made with ❤️ for students</p>
      </footer>
    </div>
  )
}

export default App
