import mongoose from "mongoose";
const vendorSchema=mongoose.Schema({
vendorname:{
    type:String,
    required:true,
},
accountno:{
    type:Number,
    required:true,
},
bankname:{
    type:String,
    required:true,
},
addressline1:{
    type:String,
   
},
addressline2:{
    type:String,
    required:true,
},
city:{
    type:String,
    required:true,
},
country:{
    type:String,
    required:true,
},
zipcode:{
    type:Number,
    required:true,
},
});
export const Vendor=mongoose.model('Vendor',vendorSchema);