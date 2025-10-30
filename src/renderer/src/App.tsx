import UpdateChecker from './components/update'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="welcome">Welcome to GDG RBU</div>
      <div className="welcome">Testing 23:05</div>

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
