import express from 'express';
import Video from '../models/Video.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const videos = await Video.find().sort({ createdAt: -1 });
  res.json(videos);
});

router.post('/', async (req, res) => {
  const { title, description, videoUrl, userId } = req.body;
  const video = new Video({ title, description, videoUrl, userId });
  await video.save();
  res.status(201).json(video);
});

export default router;
