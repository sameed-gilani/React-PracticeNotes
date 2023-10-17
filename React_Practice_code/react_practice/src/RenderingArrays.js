
export function NumberListMap(props) {

    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number} x {props.n} = {number*2}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

 export function ConditionalRenderingArray(props){

    const numbers = props.numbers;
    let listItems = []

    for(let i = 0;i<numbers.length; i++){

        if(numbers[i]%2 == 0){
            listItems.push(<li>{numbers[i]} is Even!</li>);
        }
        else{
            listItems.push(<li>{numbers[i]} is Odd!</li>);
        }
    }

    return(
        <ul>{listItems}</ul>
    );

}




