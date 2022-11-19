import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="movies-Cards">
                <div className="sub-Cards">
                    <h1>{props.name}</h1>
                    <div className="image">
                        <img src={props.image} alt="movies-profile" />
                    </div>
                    <div className="years">
                        <h1>{props.year}</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card