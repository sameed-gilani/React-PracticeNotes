import logo from './logo.svg';
import './App.css';
import ProfilePersonKat from './ComponentsTesting.js';
import {ProfilePersonAlan} from './ComponentsTesting.js';
import TodoList from './ComponentTesting01.js';
import ProfilePersonPassingProps from './UsingProps';
import PackingList from './ConditonalRendering';

function App() {

    return (
        <>
            <section>
                <h1>Amazing scientists</h1>
                <ProfilePersonKat />
                <ProfilePersonKat />
                <ProfilePersonKat />
                <ProfilePersonAlan />
                <ProfilePersonAlan />
                <ProfilePersonAlan />
            </section>

            <TodoList />;

            <ProfilePersonPassingProps />;

            <PackingList />;
        </>

    );
}


export default App;
