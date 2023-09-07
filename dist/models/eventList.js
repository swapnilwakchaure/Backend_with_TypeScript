import mongoose, { Schema } from 'mongoose';
;
;
const participantsSchema = new Schema({
    name: String,
    date: Date,
    email: String,
    contact: Number
}, {
    strict: true,
    versionKey: false
});
const eventSchema = new Schema({
    title: String,
    selectedUser: [participantsSchema]
}, {
    strict: true,
    versionKey: false
});
const EventModel = mongoose.model('eventlist', eventSchema);
export { EventModel };
