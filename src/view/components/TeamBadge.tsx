import { displayTeamName,teamInitials } from '../../data/teams';
const colors:Record<string,string>={ARS:'#e94c55',CHE:'#4b82ec',LIV:'#d63543',MCI:'#72c9ea',MUN:'#e34747',TOT:'#eef2f7',NEW:'#f4f6f4',AVL:'#ab465c',BHA:'#4c87d8',WHU:'#8c5265'};
export function TeamBadge({name}:{name:string}){const initials=teamInitials(name);return <span className="team-badge" style={{'--team-color':colors[initials]??'#a9d276'} as React.CSSProperties} aria-label={displayTeamName(name)}>{initials}</span>;}
