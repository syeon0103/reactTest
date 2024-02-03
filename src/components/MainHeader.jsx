import { MdPostAdd, MdMessage } from 'react-icons/md';
import {Link} from 'react-router-dom';
import classes from './MainHeader.module.css';

//Link 가 아닌 a href 사용하면 그때마다 새로 계속 로드됨

function MainHeader({  }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button} >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
