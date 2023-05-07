import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam doloribus laborum perferendis eos doloremque.',
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam doloribus laborum perferendis eos doloremque..',
  },
  {
    title: 'Message or am nothing',
    text: 'LLorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam doloribus laborum perferendis eos doloremque.',
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam doloribus laborum perferendis eos doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam doloribus laborum perferendis eos doloremque..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;