import { useEffect, useState } from 'react';

import TinderCard from 'react-tinder-card';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { deleteCard } from '../Actions/deleteCard'

import './Cards.css';

function Cards(props) {
  const [foto, setFoto] = useState([]);
  const [deleted, setDeleted] = useState(0)

  useEffect(() => {
    fetch(`https://astri-be.herokuapp.com/tinder/cards`)
    .then(res => res.json())
    .then(data => setFoto(data))
  }, [props.qq, deleted])
  
  const remove = (id) => {
    deleteCard(id)
    setDeleted(deleted + 1)
  }

  const swiped = (nameToDelete) => console.log('removed', nameToDelete);
  
  const outOfFrame = (name) => console.log(name, 'left the screen');

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10vh'
  };
  const closeStyle = {
    color: '#ec5e6f',
    backgroundColor: 'white',
    boxShadow: '0px 10px 53px 0px rgba(0, 0, 0, 0.3)'
  };
  const textCardStyle = {
    position: 'absolute',
    bottom: '0',
    margin: '10px',
    color: '#fff'
  };

  return (
    <div style={cardContainerStyle}>
      {foto.map((ithem) => 
        <TinderCard
          className='swipe'
          key={ithem.name}
          preventSwipe={['up', 'down']}
          onSwipe={() => swiped(ithem.name)}
          onCardLeftScreen={() => outOfFrame(ithem.name)}
        >
          <div
            style={{
              backgroundImage: `url(${ithem.imgUrl})`,
              position: 'relative',
              backgroundColor: 'white',
              width: '600px',
              padding: '20px',
              maxWidth: '85vw',
              height: '50vh',
              boxShadow: '0px 18px 53px 0px rgba(0, 0, 0, 0.3)',
              borderRadius: '20px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              widthContent: '100%',
              heightContent: '100%'
            }}
          >
             <IconButton style={closeStyle} onClick={() => remove(ithem._id)}>
               <CloseIcon fontSize="large" />
             </IconButton>
            <h3 style={textCardStyle}>{ithem.name}</h3>
          </div>
        </TinderCard>
      )}
    </div>
  );
}

export default Cards;
