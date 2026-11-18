import type { Bookmaker, Match, Market, Outcome } from './types';

export function findMarket(bookmaker:Bookmaker,key:string):Market|undefined{return bookmaker.markets.find(market=>market.key===key);}
export function bestOutcome(match:Match,team:string):{price:number;bookmaker:string}|undefined{
  let best:{price:number;bookmaker:string}|undefined;
  for(const bookmaker of match.bookmakers){const outcome=findMarket(bookmaker,'h2h')?.outcomes.find(item=>item.name===team);if(outcome&&(!best||outcome.price>best.price))best={price:outcome.price,bookmaker:bookmaker.title};}
  return best;
}
export function bestThreeWay(match:Match){return [match.home_team,'Draw',match.away_team].map(team=>({team,...(team==='Draw'?bestOutcome(match,'Draw'):bestOutcome(match,team))}));}
export function averageOdds(match:Match,team:string){const prices=match.bookmakers.flatMap(bookmaker=>findMarket(bookmaker,'h2h')?.outcomes.filter((outcome:Outcome)=>outcome.name===team).map(outcome=>outcome.price)??[]);return prices.length?prices.reduce((sum,value)=>sum+value,0)/prices.length:undefined;}
export function bookmakerCount(match:Match){return new Set(match.bookmakers.map(bookmaker=>bookmaker.key)).size;}
