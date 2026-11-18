import 'dotenv/config';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { getPremierLeagueOdds } from './services/oddsApi.js';

dotenv.config({ path: '.env.local' });
const app = express();
const port = Number(process.env.PORT) || 3001;
app.use(cors());
app.get('/api/health', (_req, res) => res.json({ status:'ok' }));
app.get('/api/odds/premier-league', async (_req, res) => {
  try { res.setHeader('Cache-Control', 'public, max-age=60'); res.json(await getPremierLeagueOdds()); }
  catch (error) { const message = error instanceof Error ? error.message : 'Không thể tải dữ liệu tỷ lệ.'; res.status(502).json({ message }); }
});
app.listen(port, () => console.log(`Oddsroom API listening on http://localhost:${port}`));
