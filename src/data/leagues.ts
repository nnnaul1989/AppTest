export interface League {
  id: string;
  sportKey: string;
  name: string;
  country: string;
  shortName: string;
  tag: string;
}

export const leagues: League[] = [
  { id: 'premier-league', sportKey: 'soccer_epl', name: 'Premier League', country: 'Anh', shortName: 'Ngoại Hạng Anh', tag: 'PL' },
  { id: 'la-liga', sportKey: 'soccer_spain_la_liga', name: 'LaLiga', country: 'Tây Ban Nha', shortName: 'LaLiga', tag: 'LL' },
  { id: 'serie-a', sportKey: 'soccer_italy_serie_a', name: 'Serie A', country: 'Ý', shortName: 'Serie A', tag: 'SA' },
  { id: 'bundesliga', sportKey: 'soccer_germany_bundesliga', name: 'Bundesliga', country: 'Đức', shortName: 'Bundesliga', tag: 'BL' },
  { id: 'champions-league', sportKey: 'soccer_uefa_champs_league', name: 'Champions League', country: 'Châu Âu', shortName: 'Champions League', tag: 'CL' },
];

export const defaultLeague = leagues[0];
export const getLeague = (id: string) => leagues.find((league) => league.id === id);
