export interface Outcome { name:string; price:number }
export interface Market { key:string; outcomes:Outcome[] }
export interface Bookmaker { key:string; title:string; last_update?:string; markets:Market[] }
export interface Match { id:string; sport_title:string; commence_time:string; home_team:string; away_team:string; bookmakers:Bookmaker[] }
export type MatchStatus = 'upcoming'|'live'|'finished';
