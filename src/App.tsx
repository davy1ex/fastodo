import './App.css'
import MainPage from './components/MainPage'
import { TodoProvider } from './store/todoContext'


function App() {


  return (
    <>
      <TodoProvider>
        <MainPage/>
      </TodoProvider>
    </>
  )
}

export default App
