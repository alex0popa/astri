import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
  const headerStyle = {
    alignItems: 'center',
    borderBottom: '1px solid #f9f9f9',
    display: 'flex',
    justifyContent: 'space-between'
  };

  const iconStyle = {
    padding: '20px'
  };
  
  const imgStyle = {
    height: '60px',
    objectFit: 'contain'
  };

  return (
    <div style={headerStyle}>
      <IconButton>
        <PersonIcon fontSize="large" style={iconStyle} />
      </IconButton>

      <img 
        alt=""
        src="http://pngimg.com/uploads/earth/earth_PNG28.png" 
        style={imgStyle}
      />

      <IconButton>
        <ForumIcon fontSize="large" style={iconStyle}/>
      </IconButton>
    </div>
  );
}

export default Header;