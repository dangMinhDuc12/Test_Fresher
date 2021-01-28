import './App.css';
import Nav from './components/Nav/Nav';
import ListPost from './components/ListPost/ListPost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from './actions/getData';
import FormPost from './components/FormPost/FormPost';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            dispatch(actions.getData(data));
        }

        fetchData();
    }, [dispatch]);

    return (
        <Router>
            <Nav />

            <Switch>
                <Route path='/' exact component={ListPost} />
                <Route path='/posts' component={FormPost} />
            </Switch>
        </Router>
    );
}

export default App;
