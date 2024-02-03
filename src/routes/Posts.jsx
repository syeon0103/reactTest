
import PostsList from "../components/PostList.jsx";
import {useState} from "react";
import {Outlet} from 'react-router-dom';
import '../App.css'


function Posts() {

    return (
      <>
        <Outlet/>
      <main>
        <PostsList/>
      </main>
      </>

      );

}

export default Posts;

export async function loader() {
    const response = await fetch('http://localhost:8080/posts')
    const resData = await response.json();
    return resData.posts;
}
