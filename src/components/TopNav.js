import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clear } from '../features/counter/selectSlice';
import baseUrl from '../const';

import Button from './Button';

const TopNav = (props) => {
  const selected = useSelector((state) => state.selected.value);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();

  const multiDelete = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ids: selected,
      }),
    };
    await fetch(baseUrl + '/notebook/delete-many-notes', requestOptions);
    setRefresh(refresh ? false : true);
    dispatch(clear());
    props.setReload();
  };

  const deleteFolder = async () => {
    const promptDecision = window.confirm(
      'Are you sure you want to delete this folder and all notes within it?'
    );
    if (promptDecision === true) {
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await fetch(
        `${baseUrl}/notebook/folders/${props.folderId}`,
        requestOptions
      );
    }
  };

  return (
    <div>
      <Link to="/notes/new">
        <Button wording="+" />
      </Link>
      <button onClick={multiDelete}>Delete selected</button>
      <button onClick={deleteFolder}>Delete folder</button>
    </div>
  );
};

export default TopNav;
