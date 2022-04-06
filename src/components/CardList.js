import React from 'react';
import Card from "./Card";

const CardList = ({ cats }) => {
    const cardComponent = cats.map((user, i) => {
        if (true) {
            throw new Error('NOOOOOOOOOO');
        }

        return (
            <Card
                key={cats[i].id}
                name={cats[i].name}
                email={cats[i].email}
            />
        )
    })

    return (
        <div>
            { cardComponent }
        </div>
    );
}

export default CardList;