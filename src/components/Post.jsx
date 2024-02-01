import classes from './Post.module.css';

function Post({author, body}) {
   //const choseName = Math.random() > 0.5 ? names[0] : names[1];
   //css.module 라이브러리 사용하면 개발자도구로 확인할 때 변형돼서 나옴 (이게 적용된 것 )
    return (
        <li className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
    </li>
    );
}

export default Post;