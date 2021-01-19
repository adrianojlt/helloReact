import React , { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = length => [...Array(length)];

function GetStars() {

    return [
        <FaStar key={1} color="red" />,
        <FaStar key={2} color="red" />,
        <FaStar key={3} color="red" />,
        <FaStar key={4} color="grey" />,
        <FaStar key={5} color="grey" />
    ];
}

const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red": "grey"} onClick={onSelect} />
);

const StarRating = ({ style={}, totalStars = 5, ...props }) => {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <div style={{ padding: "5px", ...style}} {...props}>
            {createArray(totalStars).map((n,i) => 
                <Star 
                    key={i} 
                    selected={selectedStars > i} 
                    onSelect={() => setSelectedStars(i + 1)} 
                />
            )}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}


const Stars = () => {

    return (
        <>
            <div className="row">
                <h2> Stars </h2>
            </div>

            <div className="row">


                    <div className="col-sm">
                        <div>Static Stars</div>
                        {GetStars()}
                    </div>

                    <div className="col-sm">
                        <div>Star Component with State</div>
                        <StarRating style={{ backgroundColor: "lightblue" }} />
                    </div>

                    <div className="col-sm">
                        <div>Static Stars</div>
                        {GetStars()}
                    </div>

                    <div className="col-sm">
                        <div>to do ...</div>
                    </div>


            </div>
        </>
    );
}

export default Stars