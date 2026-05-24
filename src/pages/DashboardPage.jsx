import { useAuth } from '../context/AuthContext'

export default function DashboardPage() {
  const { user, signOut } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-lg mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-200">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-900">PocketStock</h1>
          <button
            onClick={signOut}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Sign out
          </button>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-green-800 font-medium text-sm">✓ You are logged in!</p>
          <p className="text-green-700 text-sm mt-1">{user?.email}</p>
          <p className="text-green-600 text-xs mt-1">User ID: {user?.id}</p>
        </div>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Inventory features coming in Phase 2
        </p>

      </div>
    </div>
  )
}