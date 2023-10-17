import logo from './logo.svg';
import './App.css';
import ProfilePersonKat from './ComponentsTesting.js';
import {ProfilePersonAlan} from './ComponentsTesting.js';
import TodoList from './ComponentTesting01.js';
import ProfilePersonPassingProps from './UsingProps';
import PackingList from './ConditonalRendering';
import {MappingArray} from "./RenderingArrays";

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

            <h2>Rendering Arrays: </h2>
            <MappingArray />;
        </>

    );
}


export default App;
