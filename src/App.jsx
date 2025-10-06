import './App.css'
import Body from './Body'
import NavBar from './NavBar'
import Footer from './Footer'

function App() {

  return (
    <>
      <div className='  mt-4'>
        <NavBar />
        <div className="divider"></div>
      </div>
      <Body />
      <Footer></Footer>
    </>
  )
}

export default App
