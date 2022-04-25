import Card from "./Card";
import React from "react";

const CardList = ({robots}) => {
        return (!robots.length) ?
        <h1 className='f3 light-red'>Ooops!!! Robot  not found 🙁</h1> :
       (
            <div className='tc'>
                {
                    robots.map((user, i) => {
                        return (
                            <Card
                                key={i}
                                id={robots[i].id}
                                name={robots[i].name}
                                email={robots[i].email}
                            />);
                    })
                }
            </div>
        );
}
export default CardList;
