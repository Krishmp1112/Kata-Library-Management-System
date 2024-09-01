import mongoose, { Schema, Document } from 'mongoose';

interface IBook extends Document {
    isbn: string;
    title: string;
    author: string;
    publicationYear: number;
    available: boolean;
    borrowedBy?: string | null; // Allow null
}

const BookSchema: Schema = new Schema({
    isbn: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    available: { type: Boolean, default: true },
    borrowedBy: { type: String, default: null } // Allow null
});

export default mongoose.model<IBook>('Book', BookSchema);