import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Form.css';
import postData from '../../actions/postData';

function FormPost() {
    const title = useRef();
    const bodyData = useRef();
    const history = useHistory();
    const listPost = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const maxId = Math.max.apply(
        Math,
        listPost.map(function (post) {
            return post.id;
        })
    );

    function onSubmit(e) {
        e.preventDefault();
        const data = {
            userId: 11,
            id: maxId + 1,
            title: title.current.value,
            body: bodyData.current.value,
        };
        dispatch(postData(data));
        alert('Thêm dữ liệu thành công');
        history.push('/');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>Tiêu đề</label>
                <input type='text' ref={title} />
            </div>
            <div className='form-group'>
                <label>Content</label>
                <input type='text' ref={bodyData} />
            </div>

            <button type='submit'>Lưu lại</button>
        </form>
    );
}

export default FormPost;
