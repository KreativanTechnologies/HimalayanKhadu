import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    images : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true,
    },
    details : {
        type : String,
        default : 'user'
    },
    incExc : {
        type : String,
        default : 'user'
     },
    packing : {
        type : String,
        default : 'user'
    },
    faq : {
        type : String,
        default : 'user'
    }
})

const TourPackage = mongoose.model('TourPackage',PackageSchema);

export default TourPackage