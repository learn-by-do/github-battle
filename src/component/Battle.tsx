import React, { FC, useState } from 'react';
import User from './User';
import './Battle.scss';
import UserInput from './UserInput';
import { UserInfo } from './UserBoard';


const Battle: FC = () => {
  const [user, setUser] = useState([{} as UserInfo,{} as UserInfo]);
  const [winnerIdx, setWinnerIdx] = useState(-1)
  const handleBattle = () => {
    const scores = user.map(item => {
      let score = item.followers/10 + item.public_repos;
      return score
    })
    setWinnerIdx(scores[0] > scores[1] ? 0 : 1)
  };

  let userInput = [
  <UserInput fetchUser={(val: any)=>{console.log(val);setUser([val,user[1]])}} />,
  <UserInput fetchUser={(val: any)=>{setUser([user[0],val])}} />]
  return (
    <div className="Battle">
      <User
        clsName={winnerIdx === 0 ? 'winner' : ''}
        input={userInput[0]}
        user={user[0]}
        clear={() => {setWinnerIdx(-1);setUser([{} as UserInfo, user[1]])}}
      />
      <button className="battle-btn" onClick={handleBattle}>
        Baaaaattle!
      </button>
      <User
        clsName={winnerIdx === 1 ? 'winner' : ''}
        input={userInput[1]}
        user={user[1]}
        clear={() => {setWinnerIdx(-1);setUser([user[0], {} as UserInfo])}}
      />
    </div>
  );
};

export default Battle;
