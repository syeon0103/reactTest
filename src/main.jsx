import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, { loader as postsLoader} from './routes/Posts.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";


//children 안에 넣었을 때 콘텐츠 안 보이는 이유
// 중첩된 라우트의 콘텐츠를 렌더링할 위치 지정 안 해줘서

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {path: '/',
                element: <Posts/>,
                loader : postsLoader,
                children:[
                    {path: '/create-post',
                        element: <NewPost/>
                    }
                ]}, //domain

        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
