import React, { useState, useRef, useEffect } from 'react';
import TinyMCE from './TinyMCE';
import SideNav from './SideNav';
import { useSelector } from 'react-redux';
import baseUrl from '../const';
import { useHistory, useLocation } from 'react-router-dom';
import './NewNote.css';

function NewNote() {
  const data = useLocation();
  const [title, setTitle] = useState(data.state ? data.state.title : null);
  const [folders, setFolders] = useState(null);
  const [selectedOption, setSelectedOptions] = useState('');
  const view = useSelector((state) => state.nav.value);
  const editorRef = useRef(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: editorRef.current.getContent(),
        folder: selectedOption,
      }),
    };
    const response = await fetch(baseUrl + '/notebook/create', requestOptions);
    const redirectUrl = await response.json();
    history.push(redirectUrl.url);
  };

  useEffect(() => {
    const GETFolders = async () => {
      const response = await fetch(`${baseUrl}/notebook/folders`);
      const responseList = await response.json();
      const folderList = responseList.map((folder) => {
        return (
          <option key={folder._id} value={folder._id}>
            {folder.name}
          </option>
        );
      });
      setFolders(folderList);
    };
    GETFolders();
  });

  return (
    <div>
      <div className="topNav">
        <SideNav />
      </div>
      <div className={view ? 'mainContentNavOpened' : 'mainContentNavClosed'}>
        <form>
          <label>Title</label>
          <input
            type="text"
            value={title ? title : ''}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Body</label>
          <TinyMCE
            editorRef={editorRef}
            body={data.state ? data.state.body : ''}
          />
          <label>Folder</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOptions(e.target.value)}
          >
            {folders}
          </select>
          <button onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default NewNote;
