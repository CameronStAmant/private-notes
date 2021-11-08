import './Notebook.css';
import baseUrl from '../const';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import editCog from '../images/setting-line.png';
import './Folders.css';

function Folders() {
  const [name, setName] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [folderList, setFolderList] = useState(null);
  const [requestData, setRequestData] = useState(new Date());
  const [editFolderName, setEditFolderName] = useState(false);
  const refContainer = useRef(null);

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

  const handleUpdateSubmit = async (e, folder) => {
    e.preventDefault();

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: refContainer.current.value,
      }),
    };
    await fetch(`${baseUrl}/notebook/folders/${folder._id}`, requestOptions);
    setEditFolderName(false);
  };

  const editFolder = (e) => {
    setEditFolderName(e._id);
  };

  const folderEditor = (folder) => {
    return (
      <div>
        <div className="folderInfo">
          <form>
            <input
              type="text"
              defaultValue={name ? name : folder.name}
              ref={refContainer}
            />
            <button onClick={(e) => handleUpdateSubmit(e, folder)}>
              Update
            </button>
          </form>
        </div>
        <button onClick={() => editFolder('')}>Cancel</button>
      </div>
    );
  };

  useEffect(() => {
    const GETFolders = async () => {
      const response = await fetch(`${baseUrl}/notebook/folders`);
      const responseJSON = await response.json();
      const folderListings = responseJSON.map((folder) => {
        return (
          <li key={folder._id}>
            {editFolderName === folder._id ? (
              folderEditor(folder)
            ) : (
              <div>
                <div className="folderInfo">
                  <Link to={`/notebook/folders/${folder._id}`}>
                    <div>{folder.name}</div>
                  </Link>
                </div>
                <button onClick={() => editFolder(folder)}>
                  <img src={editCog} height="50px" alt="Edit" />
                </button>
              </div>
            )}
          </li>
        );
      });

      setFolderList(folderListings);
      setShowForm(false);
      setName(null);
    };
    GETFolders();
  }, [requestData, editFolderName]);

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
      <ul>{folderList}</ul>
    </div>
  );
}

export default Folders;
