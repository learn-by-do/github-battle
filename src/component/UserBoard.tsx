import React from 'react';

export interface UserInfo {
  name: string,
  avatar_url: string,
  public_repos: number,
  followers: number,
  html_url: string,
}

const UserBoard: React.FC<{user:UserInfo}> = ({ user }) => {
  
  return (
    <div className="UserBoard">
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        <img src={user.avatar_url} alt="" className="avatar" />
      </a>
      <div className="name">{user.name}</div>
      <div className="info">
        <div>repo: {user.public_repos}</div>
        <div>followers: {user.followers}</div>
      </div>
    </div>
  );
}

export default UserBoard