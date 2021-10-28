import './Notebook.css';
import baseUrl from '../const';
import React, { useState, useEffect } from 'react';

function Folders() {
  const [name, setName] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [folderList, setFolderList] = useState(null);
  const [requestData, setRequestData] = useState(new Date());

  const newForm = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
      }),
    };
    await fetch(`${baseUrl}/notebook/folders`, requestOptions);

    setRequestData(new Date());
    setShowForm(false);
  };

  useEffect(() => {
    const GETFolders = async () => {
      const response = await fetch(`${baseUrl}/notebook/folders`);
      const responseJSON = await response.json();
      const folderListings = responseJSON.map((folder) => {
        return <div key={folder._id}>{folder.name}</div>;
      });

      setFolderList(folderListings);
      setShowForm(false);
      setName(null);
    };
    GETFolders();
  }, [requestData]);

  return (
    <div>
      <p>Folders</p>
      <button onClick={newForm}>+</button>
      {showForm && (
        <form>
          <label>
            Name:
            <input
              type="text"
              value={name ? name : ''}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" value="Create" onClick={handleSubmit} />
        </form>
      )}
      <div>{folderList}</div>
    </div>
  );
}

export default Folders;
