import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  displayName: String,
  avatar: String,
  password: {
    type: String,
    required: true,
  },
  signupDate: {
    type: Date,
    default: Date.now(),
  },
  bucket: String,
});

export default model('User', UserSchema);
