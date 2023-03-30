import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Detail from '../src/pages/Detail'

export default function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/card/:id'  element={<Detail/>} />
        </Routes>
      </Router>
    </>
  )
}
