import express from "express"
import { Vendor } from "../models/vendormodal.js"
const router=express.Router();
router.post('/',async(req,res)=>{
    try{
      if(!req.body.vendorname||!req.body.accountno||!req.body.bankname||!req.body.addressline2||!req.body.city||!req.body.country||!req.body.zipcode){
        return res.status(400).send({
            message:"send all required fields"
           
        })
      }
      const newVendor={
        vendorname:req.body.vendorname,
        accountno:req.body.accountno,
        bankname:req.body.bankname,
        addressline1: req.body.addressline1,
        addressline2: req.body.addressline2,
        city:req.body.city,
        country: req.body.country,
        zipcode:req.body.zipcode
      }
      const vendor=await Vendor.create(newVendor);
      return res.status(201).send(vendor);
    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})
router.get('/',async(req,res)=>{
    try{
      const vendors=await Vendor.find({})
      return res.status(200).json({
       count:vendors.length,
       data:vendors

      });

    }
    catch(error){
     console.log(error.message);
     res.status(500).send({message: error.message});
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const vendor = await Vendor.findById(id);
        return res.status(201).json(vendor
        );

    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
   
});


router.put("/:id",async(req,res)=>{
    try{
        if(!req.body.vendorname||!req.body.accountno||!req.body.bankname||!req.body.addressline2||!req.body.city||!req.body.country||!req.body.zipcode)
     {
        return res.status(400).send({
            message:"Send all required fields",
        }) 
     }
     const{id}=req.params;
     const result=await Vendor.findByIdAndUpdate(id,req.body);
     if(!result)
     {
        return res.status(404).json({message:'Vendor not found'});
     }
     return res.status(200).send({message:'Vendor updated successfully'});
    }
  catch(error){
console.log(error.message);
res.status(500).send({message:error.message});
  }
});

router.delete('/:id',async(req,res)=>{
    try{
    const {id}=req.params;
    const result=await Vendor.findByIdAndDelete(id);
    if(!result)
    {
        return res.status(404).json({message:'Vendor not found'});
    
    }
    return res.status(200).send({message:'Vendor deleted successfuly'});
    }
    catch(error){
    console.log(error.message);
    res.status(500).send({message:error.message});
    }
    });



export default router;