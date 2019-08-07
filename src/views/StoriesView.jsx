import React, { useState, useEffect, Fragment } from 'react';
import StoriesService from '../services/StoriesService';
import Stories from '../components/Stories';
import Input from '../components/Input';

const StoriesView = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      const retrievedStories = await StoriesService.getStories(); 
      setStories(retrievedStories);
    }
    fetchStories();
    console.log("RUN EFFECT");
  }, []);

  const addStory = async (text) => {
    const response = await StoriesService.addStory(text);
    setStories([...stories, { id: response.id, text: response.text }]);
  };

  return (
    <Fragment>
      <Input onSubmit={addStory} />
      <Stories stories={stories} />
    </Fragment>
  );
};

export default StoriesView;
