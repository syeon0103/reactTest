import {useState} from 'react';

import classes from './NewPost.module.css';

function NewPost(props) {
   /* const [enterText, setText] = useState('');
   // stateData[0] //current value
   // stateData[1] // state updating function
    //상태가 바뀔 때마다 함수가 재 실행됨
    function changeBodyHandler(e) {
        setText(e.target.value);
    }*/

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onKeyDown={props.onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;
