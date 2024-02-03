import {useState} from 'react';
import {Link} from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from "../components/Modal.jsx";

function NewPost({onAddPost}) {
   /* const [enterText, setText] = useState('');
   // stateData[0] //current value
   // stateData[1] // state updating function
    //상태가 바뀔 때마다 함수가 재 실행됨
    function changeBodyHandler(e) {
        setText(e.target.value);
    }*/

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();

        const postData = {
            body : enteredBody,
            author : enteredAuthor
        };
        console.log(postData);
        onAddPost(postData);
        onCancel();
    }

  return (
      <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
        <p className={classes.actions}>
            <Link to=".." type="button">Cancel
            </Link>
            <button>Submit</button>
        </p>
    </form>
      </Modal>
  );
}

export default NewPost;
