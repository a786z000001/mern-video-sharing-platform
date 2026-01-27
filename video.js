import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  views: { type: Number, default: 0 },
  userId: String
}, { timestamps: true });

export default mongoose.model('Video', VideoSchema);
