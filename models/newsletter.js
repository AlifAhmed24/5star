import mongoose from 'mongoose';
const {Schema} = mongoose;

const newsletterSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
},
{
    timestamps: true
}
)

export default mongoose.model("Newsletter", newsletterSchema);