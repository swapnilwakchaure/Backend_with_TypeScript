import mongoose, { Schema, Document, Model } from 'mongoose';


// define an interface for the document
interface AddToList extends Document {
    name: String,
    date: Date,
    email: String,
    contact: Number
};


// define the schema
const listSchema = new Schema<AddToList>({
    name: String,
    date: Date,
    email: String,
    contact: Number
}, {
    strict: true,
    versionKey: false
});


// define the model
const ListModel: Model<AddToList> = mongoose.model<AddToList>('participant', listSchema);



export { ListModel };
