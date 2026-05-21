import { AlertCircle, TrendingUp, Award, Zap } from 'lucide-react'
import { SCHOOLS } from '../constants'

function Dashboard({ data }) {
  // Calculate average score
  const allScores = Object.values(data.grades).flatMap(sem => Object.values(sem))
  const averageScore = allScores.length > 0
    ? (allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(2)
    : 0

  // Get selected schools
  const selectedSchools = SCHOOLS.filter(school => data.selectedSchools.includes(school.id))

  // Calculate how many schools are achievable
  const achievableCount = selectedSchools.filter(school => averageScore >= school.targetScore).length

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Rata-rata Nilai</p>
              <p className="text-4xl font-bold">{averageScore}</p>
            </div>
            <TrendingUp className="w-12 h-12 opacity-50" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-500 to-green-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Sekolah Tercapai</p>
              <p className="text-4xl font-bold">{achievableCount}/{selectedSchools.length}</p>
            </div>
            <Award className="w-12 h-12 opacity-50" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total Input</p>
              <p className="text-4xl font-bold">{allScores.length}</p>
            </div>
            <Zap className="w-12 h-12 opacity-50" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-amber-500 to-amber-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-100 text-sm">Target Sekolah</p>
              <p className="text-4xl font-bold">{selectedSchools.length}</p>
            </div>
            <AlertCircle className="w-12 h-12 opacity-50" />
          </div>
        </div>
      </div>

      {/* Target Schools Overview */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Sekolah Target Anda</h2>
        {selectedSchools.length === 0 ? (
          <div className="card bg-yellow-50 border-2 border-yellow-300">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-yellow-900">Belum ada sekolah yang dipilih</p>
                <p className="text-yellow-700 text-sm mt-1">Pilih sekolah target Anda di tab "Target" untuk memulai tracking</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedSchools.map(school => {
              const isAchievable = averageScore >= school.targetScore
              return (
                <div key={school.id} className="card border-l-4" style={{ borderLeftColor: school.color }}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{school.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{school.description}</p>
                      <p className="text-sm text-gray-500 mt-2">Target Nilai: <span className="font-semibold text-gray-800">{school.targetScore}</span></p>
                    </div>
                    <div className={`px-3 py-2 rounded-full text-sm font-semibold ${
                      isAchievable
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {isAchievable ? '✓ Tercapai' : '✗ Perlu Usaha'}
                    </div>
                  </div>
                  <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${Math.min((averageScore / school.targetScore) * 100, 100)}%`,
                        backgroundColor: school.color
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1 text-right">{averageScore}/{school.targetScore}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Quick Tips */}
      <div className="card bg-blue-50 border-l-4 border-blue-500">
        <h3 className="font-bold text-blue-900 mb-3">💡 Tips Sukses</h3>
        <ul className="text-sm text-blue-800 space-y-2">
          <li>✓ Input nilai Anda setiap selesai ulangan untuk tracking akurat</li>
          <li>✓ Fokus pada subjek yang nilainya masih di bawah target</li>
          <li>✓ Lihat rekomendasi untuk strategi belajar terbaik</li>
          <li>✓ Pantau progress Anda di statistik setiap minggu</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
