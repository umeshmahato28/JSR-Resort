import Contact from './../models/Contact.js'

// create new Report
export const createContact = async(req,res) => {
   const newContact = new Contact(req.body)

   try {
      const savedContact = await newContact.save()

      res.status(200).json({success:true, message:"Successful!", data:savedContact})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
}

// get single Report
export const getContact = async(req,res) => {
   const id = req.params.id
   
   try {
      const contact = await Contact.findById(id)
      res.status(200).json({success:true, message:"Successful!", data:contact})
   } catch (error) {
      res.status(404).json({success:true, message:"Not Found!"})
   }
} 


// get all Report
export const getAllContact = async(req,res) => {
   
   try {
      const contact = await Contact.find()

      res.status(200).json({success:true, message:"Successful!", data:contact})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
} 