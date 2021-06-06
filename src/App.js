import { useState } from 'react'
import Cards from './Components/Cards';
import Header from './Components/Header';
import SwipeButtons from './Components/SwipeButtons';
import { Add } from './Components/Cards/Add';

function App() {
  const [show, setShow] = useState(false)
  const [id, setId] = useState()
  const toogle = () => setShow(!show)

  return (
    <div>
       <Header />
       <Cards setId={x => setId(x)} qq={show}/>
       {id}
       {show ? <Add  toogle={toogle} /> :
       <SwipeButtons
        toogle={toogle}
        // onDelete={onDelete(id)}
      />}
    </div>
  );
}

export default App;
