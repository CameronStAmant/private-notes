import './ContentListings.css';
import ContentCard from './ContentCard';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';

const ContentListings = () => {
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(baseUrl + '/notebook/');
      const listings = await response.json();

      console.log(listings);
      const listNotes = listings.map((note) => {
        return <ContentCard note={note} key={note._id} />;
      });

      setNotes(listNotes);
    };
    fetchNotes();
  }, []);

  return <ul className="contentListings">{notes}</ul>;
};

export default ContentListings;
