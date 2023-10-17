
export default function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    return element;
}

export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

