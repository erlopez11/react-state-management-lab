import { useState } from "react";
import './App.css';

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [isNotEnoughMoney, setIsNotEnoughMoney] = useState(false);
  const [zombieFighters, setZommbieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])


  let totalStrength = 0;
  let totalAgility = 0;
  team.forEach(team => {
    totalStrength += team.strength;
    totalAgility += team.agility;
  })
  
  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      setIsNotEnoughMoney(true);
    } else {
      const newTeamArray = [...team, fighter];
      setTeam(newTeamArray);
   
      const id = fighter.id;
      const newFighterArray = zombieFighters.filter((fighter) => fighter.id !== id);
      setZommbieFighters(newFighterArray);
  
      setMoney(money - fighter.price);
      setIsNotEnoughMoney(false);
 
    }
  }

  
  const handleRemoveFighter = (fighter) => {
    const id = fighter.id;
    const newTeamArray = team.filter((fighter) => fighter.id !== id);
    setTeam(newTeamArray);

    const newFighterArray = [...zombieFighters, fighter];
    setZommbieFighters(newFighterArray);

    setMoney(money + fighter.price);
  }

  return (
    <>
      <h2>Money: {money}</h2>
      <p>{isNotEnoughMoney ? 'Not enough money!' : ''}</p>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>{team.length === 0 ? 'Quick! Pick Some Team Members!' : 'My Team:'}</h2>

      <ul>
        {team.map(member => (
          <li key={member.id}>
            <img src={member.img} />
            <h2>{member.name}</h2>
            <p><span>Price: </span>{member.price}</p>
            <p><span>Strength: </span>{member.strength}</p>
            <p><span>Agility: </span>{member.agility}</p>
            <button onClick={() => handleRemoveFighter(member)}>Remove Fighter</button>
          </li>
        ))}
      </ul>

      <h2>The Zombie Fighters:</h2>
      <ul>
        {zombieFighters.map(fighter => (
          <li key={fighter.id}>
            <img src={fighter.img} />
            <h2>{fighter.name}</h2>
            <p><span>Price: </span>{fighter.price}</p>
            <p><span>Strength: </span>{fighter.strength}</p>
            <p><span>Agility: </span>{fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add To Team</button>
          </li>

        ))}
      </ul>

    </>
  );
}




export default App;