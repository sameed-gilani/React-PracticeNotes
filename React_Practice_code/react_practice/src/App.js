import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


// import tick from "./RenderingElement";
import {Welcome} from "./RenderingElement";
import {Toggle} from "./EventHandlers";
import {ToggleCondition} from "./ConditionalRender";
import {NumberListMap} from "./RenderingArrays";
import {ConditionalRenderingArray} from "./RenderingArrays";
import {NameForm} from "./Forms";
import {CalculatorC} from "./LiftingStates";

const root = ReactDOM.createRoot(
    document.getElementById('root')
);



function App() {

    return(
            <div>
                <CalculatorC />
            </div>
    );
}


export default App;
