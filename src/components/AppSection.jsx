import React from 'react';
import '../style.css'; // Import the CSS file

export const AppSection = () => {
  return (
    <div className="download-section">
      <div className="overlay"></div>
      <div className="content">
        <h1>Download the Mealsurplus app and start saving</h1>
        <button className="cta-button">Join the waiting list</button>
      </div>
    </div>
  );
};

export default AppSection;

// // AppSection.jsx
// import React from 'react';

// export const AppSection = () => { // Named export
//   return (
//     <div>
//       <h1>Hello from AppSection</h1>
//     </div>
//   );
// };
