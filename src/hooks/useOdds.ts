import { useCallback,useEffect,useState } from 'react';
import { fetchLeagueOdds } from '../api/oddsClient';
import type { Match } from '../data/types';
export function useOdds(leagueId:string){
  const [matches,setMatches]=useState<Match[]>([]);const [loading,setLoading]=useState(true);const [error,setError]=useState('');const [updatedAt,setUpdatedAt]=useState<Date>();
  const refresh=useCallback(async(signal?:AbortSignal)=>{try{setLoading(true);setError('');const data=await fetchLeagueOdds(leagueId,signal);setMatches(data);setUpdatedAt(new Date());}catch(cause){if(cause instanceof Error&&cause.name==='AbortError')return;setError(cause instanceof Error?cause.message:'Đã xảy ra lỗi.');}finally{setLoading(false);}},[leagueId]);
  useEffect(()=>{const controller=new AbortController();void refresh(controller.signal);const interval=window.setInterval(()=>void refresh(),120000);return()=>{controller.abort();window.clearInterval(interval);};},[refresh]);
  return {matches,loading,error,updatedAt,refresh};
}
