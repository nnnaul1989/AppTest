const API_BASE = 'https://api.the-odds-api.com/v4';
export async function getPremierLeagueOdds() {
  const apiKey = process.env.ODDS_API_KEY;
  if (!apiKey) throw new Error('Chưa cấu hình ODDS_API_KEY. Hãy thêm API key vào file .env.local.');
  const params = new URLSearchParams({ apiKey, regions:'uk', markets:'h2h,totals', oddsFormat:'decimal', dateFormat:'iso' });
  const response = await fetch(`${API_BASE}/sports/soccer_epl/odds/?${params}`);
  if (!response.ok) {
    if (response.status === 401) throw new Error('API key không hợp lệ. Kiểm tra ODDS_API_KEY.');
    if (response.status === 429) throw new Error('Đã hết lượt gọi API. Vui lòng thử lại sau.');
    throw new Error(`Odds API trả về lỗi ${response.status}.`);
  }
  return response.json();
}
