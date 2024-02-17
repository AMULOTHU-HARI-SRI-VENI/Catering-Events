
import './App.css';

import HomePage from './HomePage';
import MyComponent from './MyComponent';
import VideoPlayer from './VideoPlayer';
import Content from './Content';
import ImageGallery from './ImageGallery';
import SignUpWithImage from './SignUpWithImage';


function App() {
  const images=['Venue1.jpg','Venue2.jpg','Venue3.jpg','Venue5.jpg','Venue6.jpg','Venue7.jpg'];
  return (
    <div className="App">
      <HomePage />
      <div className="spacer"></div>
      <VideoPlayer src="https://24carrots.com/wp-content/video/24carrtos-home-banner.mp4" />
      <div className="spacer"></div>
      <MyComponent />
      <div className="spacer"/>
      <img src='traditional-western-wedding.jpg' alt="img"/>
      <Content 
        text="24 Carrots is the exclusive or preferred caterer at Southern California’s most spectacular properties. 
        From intimate understated spaces to large and luxurious, 
        we’ll help you find the event venue that makes your heart skip a beat."

        heading="Unforgettable Events"
      />
      <button className="curved-button">Explore Venues</button>
      <div className="spacer" />
      <ImageGallery images={images} />
      <Content 
        text ="The way you do anything is the way you do everything. 
        We haven’t cracked the code on catering; we simply care unreasonably about every aspect of what we do. 
        We care about people as much as we care about details, and we absolutely refuse to compromise on making your day anything but the best. 
        We’ve got your back from the initial idea to the final farewell!"

        heading ="Far More Than Just Business"
      />

      <VideoPlayer src="Collaboration.mp4"/>
      <Content 
        text ="Catering is just the beginning. Sure, we love astonishing your guests with attentive service, thoughtful food, 
        and an inviting environment. But what really matters most is helping you create memories that will last for a lifetime. 
        Our industry experts think of all the little things that turn an ordinary event into an unforgettable experience."

        heading ="Great Food & A Whole Lot More"
      />
      <div className='spacer'/>
      <button className="curved-button">Explore services</button>
      <div className='spacer'/>
      <SignUpWithImage />
    </div>
    
  );
}

export default App;
