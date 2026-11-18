import 'dotenv/config';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { getLeague } from '../src/data/leagues.js';
import { getLeagueOdds } from './services/oddsApi.js';

dotenv.config({ path: '.env.local' });
const app = express();
const port = Number(process.env.PORT) || 3001;
app.use(cors());
app.get('/api/health', (_req, res) => res.json({ status:'ok' }));
app.get('/api/odds/:leagueId', async (req, res) => {
  const league = getLeague(req.params.leagueId);
  if (!league) { res.status(404).json({ message: 'Không tìm thấy giải đấu.' }); return; }
  try { res.setHeader('Cache-Control', 'public, max-age=60'); res.json(await getLeagueOdds(league.sportKey)); }
  catch (error) { const message = error instanceof Error ? error.message : 'Không thể tải dữ liệu tỷ lệ.'; res.status(502).json({ message }); }
});
app.listen(port, () => console.log(`Oddsroom API listening on http://localhost:${port}`));
