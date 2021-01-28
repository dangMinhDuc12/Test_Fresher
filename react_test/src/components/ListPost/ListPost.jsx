import React from 'react';
import './ListPost.css';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';

function ListPost() {
    const listPost = useSelector((state) => state.posts);

    function showPosts(listPost) {
        return listPost.map((post, index) => <Post key={index} post={post} />);
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body </th>
                </tr>
            </thead>
            <tbody>{showPosts(listPost)}</tbody>
        </table>
    );
}

export default ListPost;
