function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
}

function ItemTernaryOp({ name, isPacked }) {
    return (
        <li className="item">
            {isPacked ? name + ' ✔' : name}
        </li>
    );

}


export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List Using ?:</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>

            <ul>
                <ItemTernaryOp
                    isPacked={true}
                    name="Space suit"
                />
                <ItemTernaryOp
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <ItemTernaryOp
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}
