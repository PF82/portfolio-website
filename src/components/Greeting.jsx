import React from 'react'

const Greeting = () => {
    var date = new Date();
    var hours = date.getHours();
    var greet;

    if (hours >= 6 && hours <= 11.59) {
        greet = "morning";
    } else if (hours >= 12 && hours <= 18.59) {
        greet = "afternoon";
    } else {
        greet = "evening";
    }

    return <span>Good {greet}.</span>
}

export default Greeting