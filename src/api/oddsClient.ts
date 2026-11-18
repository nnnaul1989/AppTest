import type { Match } from '../data/types';
export async function fetchLeagueOdds(leagueId:string,signal?:AbortSignal):Promise<Match[]>{
  const response=await fetch(`/api/odds/${encodeURIComponent(leagueId)}`,{signal});
  const body=await response.json();
  if(!response.ok)throw new Error(body.message??'Không tải được dữ liệu kèo.');
  return body as Match[];
}
