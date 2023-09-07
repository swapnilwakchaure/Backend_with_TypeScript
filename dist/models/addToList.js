import mongoose, { Schema } from 'mongoose';
;
// define the schema
const listSchema = new Schema({
    name: String,
    date: Date,
    email: String,
    contact: Number
}, {
    strict: true,
    versionKey: false
});
// define the model
const ListModel = mongoose.model('participant', listSchema);
export { ListModel };
