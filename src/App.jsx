import './App.css'
import Body from './Body'
import NavBar from './NavBar'

function App() {

  return (
    <>
      <div className='w-11/12 mx-auto mt-4'>
        <NavBar />
        <div className="divider"></div>
      </div>
      <Body />
    </>
  )
}

export default App
