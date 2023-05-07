import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam doloribus laborum perferendis eos doloremque." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library <span className='gradient__text'>&#8594;</span> </p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam doloribus laborum perferendis eos doloremque." />
      <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam doloribus laborum perferendis eos doloremque." />
      <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam doloribus laborum perferendis eos doloremque." />
    </div>
  </div>
);

export default WhatGPT3;