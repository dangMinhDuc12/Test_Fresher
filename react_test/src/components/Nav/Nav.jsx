import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <ul className='nav'>
            <li className='nav__home'>
                <Link to='/' className='nav__home-link'>
                    Trang chủ
                </Link>
            </li>
            <li className='nav__posts'>
                <Link to='/posts' className='nav__posts-link'>
                    Thêm Posts
                </Link>
            </li>
        </ul>
    );
}

export default Nav;
