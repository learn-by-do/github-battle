import React, { useState } from 'react';
import API from '../api/index';

const UserInput: React.FC<{ fetchUser: Function }> = props => {
  const [active, setActive] = useState(false)
  let textInput = React.createRef<HTMLInputElement>();

  const handleKeyDown = (event: any) => {
    const name = event.target.value;
    name ? setActive(true) : setActive(false);
    
    if (event.key === 'Enter') {
      event.persist();
      event.target.disabled = true;
      API.get('users/' + name).then(resp => {
        props.fetchUser(resp.data);
        event.target.disabled = false;
      }, error => {
        console.error('fetch user error: ', error)
        event.target.disabled = false;
      });
    }
  };

  return (
    <div className={['Input', active?'active':''].join(' ').trim()}>
      <input type="text" onKeyDown={handleKeyDown} ref={textInput} />
      <span className="label">Name</span>
    </div>
  );
};

export default UserInput;
