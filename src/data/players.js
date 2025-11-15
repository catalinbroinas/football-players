import images from "./images";

const players = [
  {
    id: crypto.randomUUID(),
    name: 'James Maddison',
    team: 'Tottenham',
    position: 'Forward',
    dateOfBirth: '1996-11-23',
    image: images.jamesMaddison,
  },
  {
    id: crypto.randomUUID(),
    name: 'Declan Rice',
    team: 'Arsenal',
    position: 'Midfielder',
    dateOfBirth: '1999-01-14',
    image: images.declanRice
  },
  {
    id: crypto.randomUUID(),
    name: 'Cole Palmer',
    team: 'Chelsea',
    position: 'Midfielder',
    dateOfBirth: '2002-06-05',
    image: images.colePalmer
  },
  {
    id: crypto.randomUUID(),
    name: 'Erling Haaland',
    team: 'Manchester City',
    position: 'Forward',
    dateOfBirth: '2000-07-21',
    image: images.erlingHaaland
  },
  {
    id: crypto.randomUUID(),
    name: 'Bruno Fernandes',
    team: 'Manchester Utd',
    position: 'Midfielder',
    dateOfBirth: '1994-08-09',
    image: images.brunoFernandes
  },
  {
    id: crypto.randomUUID(),
    name: 'Mohamed Salah',
    team: 'Liverpool',
    position: 'Forward',
    dateOfBirth: '1992-06-15',
    image: images.mohamedSalah
  },
  {
    id: crypto.randomUUID(),
    name: 'Emiliano Martinez',
    team: 'Aston Villa',
    position: 'Goalkeeper',
    dateOfBirth: '1992-09-02',
    image: images.emilianoMartinez
  },
  {
    id: crypto.randomUUID(),
    name: 'Kieran Trippier',
    team: 'Newcastle Utd',
    position: 'Defender',
    dateOfBirth: '1990-09-19',
    image: images.kieranTrippier
  },
  {
    id: crypto.randomUUID(),
    name: 'Ethan Nwaneri',
    team: 'Arsenal',
    position: 'Midfielder',
    dateOfBirth: '2007-03-21',
    image: images.ethanNwaneri
  },
];

export default players;
