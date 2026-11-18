import type { Match } from '../data/types';
export async function fetchPremierLeagueOdds(signal?:AbortSignal):Promise<Match[]>{
  const response=await fetch('/api/odds/premier-league',{signal});
  const body=await response.json();
  if(!response.ok)throw new Error(body.message??'Không tải được dữ liệu kèo.');
  return body as Match[];
}
