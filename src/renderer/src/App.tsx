import UpdateChecker from './components/update'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="welcome">Welcome to GDG RBU</div>
      <div className="welcome">Testing 16:00</div>
      <div className="welcome">3.7.0</div>
      <div className="welcome">pls pls</div>

      <div className="action">
        <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
          Send IPC
        </a>
      </div>
      <UpdateChecker />
    </>
  )
}

export default App
