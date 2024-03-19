import React, { useState } from 'react';
import './utility.css';

function FontChange() {
  const [text, setText] = useState('');
  const [style, setStyle] = useState([]);

  function submit(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  function change(e) {
    if (e.target.id === 'one')
     {
      setText(text.toUpperCase());
    }
     else if (e.target.id === 'two') 
     {
      setText(text.toLowerCase());
    } 
    else if (e.target.id === 'three') 
    {
      setStyle([...style, 'italic']);
    } 
    else if (e.target.id === 'four') 
    {
      setStyle([...style, 'bold']);
    }
  }

  return (
    <>
      <textarea className={style.length > 0 ? style.join(""): ""}
        placeholder='Write something here...'
        value={text}
        onChange={submit}
      />
      <button id='one' onClick={change}>UpperCase</button>
      <button id='two' onClick={change}>LowerCase</button>
      <button id='three' onClick={change}>Italic</button>
      <button id='four' onClick={change}>Bold</button>
    </>
  );
}

export default FontChange;
