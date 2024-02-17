import React from 'react';
import ComponentWithImage from './ComponentWithImage';

const MyComponent = () => {
  return (
    <div>
      <ComponentWithImage
        text="24 Carrots is the premier catering and events company of choice in Southern California. 
        We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, 
        driven by our passion for life’s special occasions.."
        heading="Remarkable Caterings & Events"
        imageUrl="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
      />
      <ComponentWithImage
        text="Wishing you a lifetime of love and happiness."
        heading="Making Every Experience Magical"
        imageUrl="https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg"
      />
      {/* Add more instances of ComponentWithImage as needed */}
    </div>
  );
};

export default MyComponent;
