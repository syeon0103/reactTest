import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import {useState, useEffect} from "react";

function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    //아래처럼 하면 리액트 특성상 무한 루프
    /* fetch('http://localhost:8080/posts').then(
        r => r.json()).then(data => {
            setPosts(data.posts);
    });*/
    //프로미스 반환이 뭔데 ?
    //효과 함수에서는 프로미스를 반환할 수 없기 때문에 async 를 앞에 붙일 수 없음
    //그래서 중첩 함수를 만듦
    //useEffect 로 감싸면 컴포넌트가 실행될 때마다 매번 실행되지 않음

    useEffect(() => {
        async function fetchPosts() {
           const response = await fetch('http://localhost:8080/posts')
           const resData = await response.json();
           setPosts(resData.posts);
        }

        fetchPosts().then();

    }, []); //빈 배열을 넣으면 이 함수에는 의존성이 없다는 거여서 두 번 실행되지 않음

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then();

        setPosts([postData, ...posts]);
       // setPosts((existingPosts) => [postData, ...posts]);
    }

    //let modalContent;

    /*if(isPosting) {
        modalContent = <Modal onClose={onStopPosting}>
            <NewPost onBodyChange={bodyChangeHandler}
                     onAuthorChange={AuthorChangeHandler}
                     OnCancel={onStopPosting}
            />
        </Modal>
    }
*/
    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting}
                             onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color:'darkolivegreen' }}>
                    <h2>아무것도 없음</h2>
                </div>
            )}
        </>
    );
}

export default PostsList;