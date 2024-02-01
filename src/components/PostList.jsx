import Post from "./Post.jsx";
import {useState} from "react";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
function PostsList() {
    const [enteredBody, setEnteredBody] = useState(); //post는 값이 usestate 가 비어져 있으니까 비어져 있음
    const [enteredAuthor,setEnteredAuthor] = useState()

    function bodyChangeHandler(e) {
        setEnteredBody(e.target.value);
    }

    function AuthorChangeHandler(e) {
        setEnteredAuthor(e.target.value);
    }

    return (
    <>
        <Modal>
    <NewPost onBodyChange={bodyChangeHandler}
             onAuthorChange={AuthorChangeHandler}/>
        </Modal>
    <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody}/>
        <Post author="test2" body="test2"/>
    </ul>
    </>
    );
}

export default PostsList;