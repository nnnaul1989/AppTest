import { useState } from 'react';
import { ChevronDown,ChevronUp,ExternalLink,Star } from 'lucide-react';
import { bestOutcome,bookmakerCount,findMarket } from '../../data/odds';
import { displayTeamName } from '../../data/teams';
import { formatKickoff,formatUpdated } from '../../data/format';
import type { Match } from '../../data/types';
import { OddsButton } from './OddsButton';
import { TeamBadge } from './TeamBadge';

export function MatchCard({match,index}:{match:Match;index:number}){
 const [expanded,setExpanded]=useState(false);const [favorite,setFavorite]=useState(false);const bookmakers=match.bookmakers.slice(0,3);
 const outcomes=[{name:match.home_team,label:'1'},{name:'Draw',label:'X'},{name:match.away_team,label:'2'}];
 const totalMarket=match.bookmakers.map(book=>findMarket(book,'totals')).find(Boolean);
 return <article className="match-card">
  <div className="match-top"><div className="kickoff"><span className="match-index">{String(index+1).padStart(2,'0')}</span><span>{formatKickoff(match.commence_time)}</span><span className="match-status"><i/> SẮP DIỄN RA</span></div><button className={`icon-button favorite ${favorite?'is-favorite':''}`} onClick={()=>setFavorite(!favorite)} aria-label="Đánh dấu yêu thích"><Star size={17} fill={favorite?'currentColor':'none'}/></button></div>
  <div className="match-main"><div className="team-row"><div className="team-info"><TeamBadge name={match.home_team}/><b>{displayTeamName(match.home_team)}</b><small>Chủ nhà</small></div><div className="versus">VS</div><div className="team-info away"><TeamBadge name={match.away_team}/><b>{displayTeamName(match.away_team)}</b><small>Đội khách</small></div></div>
   <div className="odds-section"><div className="odds-heading"><span>KÈO 1X2 <span className="market-note">· TỶ LỆ TỐT NHẤT</span></span><span className="market-note">DECIMAL</span></div><div className="odds-grid">{outcomes.map(outcome=><OddsButton key={outcome.label} label={outcome.label} price={bestOutcome(match,outcome.name)?.price} onClick={()=>setExpanded(true)}/>)}</div><div className="odds-legend"><span>{displayTeamName(match.home_team)}</span><span>Hòa</span><span>{displayTeamName(match.away_team)}</span></div></div>
  </div>
  <div className="match-footer"><div className="bookmakers"><span className="book-icon">{bookmakers[0]?.title.slice(0,1)??'+'}</span><span className="book-icon second">{bookmakers[1]?.title.slice(0,1)??'↗'}</span><span className="book-icon third">{bookmakers[2]?.title.slice(0,1)??'·'}</span><span>{bookmakerCount(match)} nhà cái</span></div><div className="footer-right"><span className="updated">{formatUpdated(match.bookmakers[0]?.last_update)}</span><button className="detail-button" onClick={()=>setExpanded(!expanded)}>Chi tiết {expanded?<ChevronUp size={14}/>:<ChevronDown size={14}/>}</button></div></div>
  {expanded&&<div className="match-details"><div className="detail-title">SO SÁNH NHÀ CÁI <span>{bookmakerCount(match)} nguồn dữ liệu</span></div><div className="bookmaker-table"><div className="bookmaker-head"><span>NHÀ CÁI</span><span>{displayTeamName(match.home_team)}</span><span>HÒA</span><span>{displayTeamName(match.away_team)}</span></div>{match.bookmakers.map(book=>{const market=findMarket(book,'h2h');return <div className="bookmaker-row" key={book.key}><span className="book-name">{book.title}</span>{outcomes.map(outcome=><span key={outcome.label}>{market?.outcomes.find(item=>item.name===outcome.name)?.price.toFixed(2)??'—'}</span>)}</div>})}</div>{totalMarket&&<p className="totals-info">Tổng bàn thắng · {totalMarket.outcomes.map(outcome=>`${outcome.name}: ${outcome.price.toFixed(2)}`).join(' · ')}</p>}<a className="source-link" href="https://the-odds-api.com/" target="_blank" rel="noreferrer">Dữ liệu từ The Odds API <ExternalLink size={13}/></a></div>}
 </article>;
}
