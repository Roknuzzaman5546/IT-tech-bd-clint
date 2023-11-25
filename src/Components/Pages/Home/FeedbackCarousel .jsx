import React, { useState } from 'react';

const FeedbackCarousel = () => {
    // Sample feedback data (replace it with your actual data)
    const feedbackData = [
        { text: "Great class! I learned a lot.", name: "John Doe", image: "john.jpg", title: "Mathematics 101" },
        { text: "The instructor was fantastic.", name: "Jane Smith", image: "jane.jpg", title: "Science Lab" },
        // Add more feedback items as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle next button click
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
    };

    // Function to handle previous button click
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbackData.length) % feedbackData.length);
    };

    return (
        <div>
            <div className="carousel">
                <button onClick={handlePrev}>&lt;</button>
                <div className="carousel-container">
                    {/* Display feedback card */}
                    <div className="feedback-card">
                        <p>{feedbackData[currentIndex].text}</p>
                        <p>{feedbackData[currentIndex].name}</p>
                        <img src={feedbackData[currentIndex].image} alt={feedbackData[currentIndex].name} />
                        <p>{feedbackData[currentIndex].title}</p>
                    </div>
                </div>
                <button onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
};

export default FeedbackCarousel;
