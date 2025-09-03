import { useState } from 'react'
import Sidebar from './components/Sidebar'
import AccountSettings from './components/AccountSettings'
import PasswordSettings from './components/PasswordSettings'

function App() {
  const [activeTab, setActiveTab] = useState('Setting')
  const [settingsTab, setSettingsTab] = useState('account')

  return (
    <div className="App flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="ml-64 flex-1 overflow-auto">
        {activeTab === 'Setting' && (
          <div>
            <div className="bg-white p-4 shadow">
              <h1 className="text-xl font-semibold">Settings</h1>
              <div className="flex mt-4 border-b">
                <button
                  className={`px-4 py-2 font-medium ${
                    settingsTab === 'account'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600'
                  } cursor-pointer`}
                  onClick={() => setSettingsTab('account')}
                >
                  Account Settings
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    settingsTab === 'password'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600'
                  } cursor-pointer`}
                  onClick={() => setSettingsTab('password')}
                >
                  Password & Settings
                </button>
              </div>
            </div>
            
            {settingsTab === 'account' ? <AccountSettings /> : <PasswordSettings />}
          </div>
        )}
        
        {activeTab !== 'Setting' && (
          <div className="p-6">
            <h2 className="text-2xl font-bold">{activeTab}</h2>
            <p className="text-gray-600 mt-2">This section is under development.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App