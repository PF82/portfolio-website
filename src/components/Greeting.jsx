import React from 'react'

const Greeting = () => {
    var date = new Date();
    var hours = date.getHours();
    var greet;

    if (hours >= 7 && hours <= 12) {
        greet = "morning";
    } else if (hours >= 12 && hours <= 17) {
        greet = "afternoon";
    } else {
        greet = "evening";
    }

    return <span>Good {greet}!</span>
}

export default Greeting