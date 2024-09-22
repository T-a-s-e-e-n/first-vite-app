import React, { useState } from "react";

function CalculateAverage() {
  const [marks, setMarks] = useState('');  // String for user input
  const [result, setResult] = useState(''); // For showing the result

  const handleAverage = () => {
    // Convert input marks (comma separated) to an array of numbers
    const marksArray = marks.split(',').map(Number); // Convert string to array of numbers
    const total = marksArray.reduce((acc, curr) => acc + curr, 0); // Sum all the marks
    const average = total / marksArray.length; // Calculate average
    setResult(average); // Set the calculated average
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter marks separated by commas"
        value={marks}
        onChange={(e) => setMarks(e.target.value)} // Update marks from input
      />
      <button onClick={handleAverage}>Calculate Average</button>
      <p>Average: {result}</p> {/* Display the result */}
    </div>
  );
}

export default CalculateAverage;
