import React, { FC } from 'react';

import UserBoard from './UserBoard';

interface Props {
  input: any;
  user: any;
  clear: Function;
  clsName: string;
}

const User: FC<Props> = ({ input, clear, user, clsName }) => {
  const isEmpty = Object.keys(user).length === 0 && typeof user === 'object';
  return (
    <div className={['User', clsName].join(' ').trim()}>
      {isEmpty ? (
        <>{input}</>
      ) : (
        <>
          <UserBoard user={user} />
          <button
            className="reset-btn"
            onClick={() => {
              clear();
            }}
          >
            reset
          </button>
        </>
      )}
    </div>
  );
};

export default User;
