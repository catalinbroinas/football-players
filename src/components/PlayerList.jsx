import CardPlayer from "./CardPlayer";

function PlayerList() {
  const players = [
    {
      id: 1,
      name: 'Cristiano Ronaldo',
      team: 'Al-Nassr',
      position: 'Forward',
      dateOfBirth: '1985-02-05',
      image: 'https://images.pexels.com/photos/31067777/pexels-photo-31067777.jpeg',
    },
    {
      id: 2,
      name: 'Kylian Mbappé',
      team: 'PSG',
      position: 'Forward',
      dateOfBirth: '1998-12-20',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
    },
    {
      id: 3,
      name: 'Cristiano Ronaldo',
      team: 'Al-Nassr',
      position: 'Forward',
      dateOfBirth: '1985-02-05',
      image: 'https://images.pexels.com/photos/31067777/pexels-photo-31067777.jpeg',
    },
    {
      id: 4,
      name: 'Kylian Mbappé',
      team: 'PSG',
      position: 'Forward',
      dateOfBirth: '1998-12-20',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
    },
  ];

  return (
    <div className="player-list">
      {players.map(player => (
        <CardPlayer key={player.id} {...player} />
      ))}
    </div>
  );
}

export default PlayerList;
