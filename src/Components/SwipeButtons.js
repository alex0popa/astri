import ReplayIcon from '@material-ui/icons/Replay';
// import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlasOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons(props) {
  const swipeButtons = {
    position: 'fixed',
    bottom: '10vh',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly'
  };
  const replayStayle = {
    color: '#f5b748',
    backgroundColor: 'white',
    boxShadow: '0px 10px 53px 0px rgba(0, 0, 0, 0.3)'
  };
  // const closeStyle = {
  //   color: '#ec5e6f',
  //   backgroundColor: 'white',
  //   boxShadow: '0px 10px 53px 0px rgba(0, 0, 0, 0.3)'
  // };
  const starRateStyle = {
    color: '#62b4f9',
    backgroundColor: 'white',
    boxShadow: '0px 10px 53px 0px rgba(0, 0, 0, 0.3)'
  };
  const favoriteStyle = {
    color: '#76e2b3',
    backgroundColor: 'white',
    boxShadow: '0px 10px 53px 0px rgba(0, 0, 0, 0.3)'
  };
  const flashStyle = {
    color: '#915dd1',
    backgroundColor: 'white',
    boxShadow: '0px 10px 53px 0px rgba(0, 0, 0, 0.3)'
  };
  return (
    <div style={swipeButtons}>
      <IconButton style={replayStayle} onClick={props.toogle}>
        <ReplayIcon fontSize="large" />
      </IconButton>
      {/* <IconButton style={closeStyle}>
        <CloseIcon fontSize="large" />
      </IconButton> */}
      <IconButton style={starRateStyle}>
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton style={favoriteStyle}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton style={flashStyle}>
        <FlasOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
