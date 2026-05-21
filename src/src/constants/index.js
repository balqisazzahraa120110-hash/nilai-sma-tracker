// Data Sekolah Dinas dengan target nilai
export const SCHOOLS = [
  {
    id: 'akpol',
    name: 'Akademi Kepolisian (Akpol)',
    targetScore: 75,
    description: 'Akademi Kepolisian Negara',
    color: '#3b82f6'
  },
  {
    id: 'akmil',
    name: 'Akademi Militer (Akmil)',
    targetScore: 77,
    description: 'Akademi Militer Nasional',
    color: '#ef4444'
  },
  {
    id: 'polkes',
    name: 'Politeknik Kesehatan (Polkes)',
    targetScore: 72,
    description: 'Politeknik Kesehatan Kemenkes',
    color: '#10b981'
  },
  {
    id: 'sekolpen',
    name: 'Sekolah Penerbangan (Sekolpen)',
    targetScore: 80,
    description: 'Sekolah Penerbangan Indonesia',
    color: '#8b5cf6'
  },
  {
    id: 'ipdn-admin',
    name: 'IPDN - Administrasi Publik',
    targetScore: 78,
    description: 'Institut Pemerintahan Dalam Negeri',
    color: '#f59e0b'
  },
  {
    id: 'ipdn-kependudukan',
    name: 'IPDN - Kependudukan',
    targetScore: 76,
    description: 'Institut Pemerintahan Dalam Negeri',
    color: '#06b6d4'
  }
]

// Mata Pelajaran per Semester
export const SUBJECTS_BY_SEMESTER = {
  1: ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Biologi', 'Kimia'],
  2: ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Fisika', 'Sejarah'],
  3: ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Geografi', 'Sosiologi'],
  4: ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Ekonomi', 'Akuntansi'],
  5: ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'PPKn', 'Seni Budaya'],
  6: ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Olahraga', 'Keterampilan']
}

// Skala nilai
export const SCORE_RANGES = {
  excellent: { min: 90, max: 100, label: 'Sempurna', color: '#10b981' },
  very_good: { min: 80, max: 89, label: 'Sangat Baik', color: '#3b82f6' },
  good: { min: 70, max: 79, label: 'Baik', color: '#f59e0b' },
  fair: { min: 60, max: 69, label: 'Cukup', color: '#ef4444' },
  poor: { min: 0, max: 59, label: 'Kurang', color: '#6b7280' }
}
