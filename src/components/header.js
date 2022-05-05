import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {
    const onClick=()=>{
        console.log('Click');
    }
  
    return (
    <header className='header'>
      <h1 >{props.title}</h1>
      <Button color="green" text="Add"
          onClick ={onClick} 
      />
      {/* <h1 style={headingstyle}>{props.title}</h1> */}
    </header>
  );
};

// const Header = ({title}) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//     </div>
//   );
// };

Header.defaultProps ={
title:"Task Tracker",
}

Header.propTypes={
title:PropTypes.string,
}
export default Header;


// const headingstyle = {
//   color: "red",
//   backgroundColor: "black",
// };