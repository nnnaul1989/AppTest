export function formatKickoff(iso:string){return new Intl.DateTimeFormat('vi-VN',{weekday:'short',day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit',timeZone:'Asia/Ho_Chi_Minh'}).format(new Date(iso));}
export function formatTime(iso:string){return new Intl.DateTimeFormat('vi-VN',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Ho_Chi_Minh'}).format(new Date(iso));}
export function formatUpdated(iso?:string){if(!iso)return 'Đang cập nhật';const minutes=Math.max(0,Math.floor((Date.now()-new Date(iso).getTime())/60000));return minutes<1?'Vừa cập nhật':`${minutes} phút trước`;}
