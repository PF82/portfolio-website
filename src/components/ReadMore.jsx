
import React, { useState } from "react";
import "../sass/readmore.scss"

const ReadMore = ({ children }) => {

    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <p className="text">
            {isReadMore ? text.slice(0, 0) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};

const Content = () => {

    const onButtonClick = () => {
        fetch('construction-portfolio.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.open = 'construction-portfolio.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className="divRM-1">
            As you can see, I have over ten years of work experience as a Quantity Surveyor in the UK.{' '}
            <ReadMore>
                Working in office and onsite in previous positions, I managed all the costs relating to construction projects and enhanced value
                for money, while still achieving the required standards and quality. Additionally, I established contracts and good relationships
                with clients, consultants and subcontractors in many different disciplines and always tried to ensure projects were delivered on
                time and within budget. (Should you want to take a peek at my construction portfolio, please click <button className='buttonAB' onClick={onButtonClick}>here</button>)
            </ReadMore>
        </div>

    );
};

export default Content;