import mongoose, { Schema, Document } from 'mongoose';

interface Notification extends Document {
  type: string;
  content: string;
  link: string;
  createdAt: Date;
}

const notificationSchema = new Schema<Notification>(
  {
    type: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Notification || mongoose.model<Notification>('Notification', notificationSchema);
