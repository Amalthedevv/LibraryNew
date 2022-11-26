const express = require('express')
const { findById } = require('../model/book')
const router = express.Router() //routing function
const BookData = require('../model/book') // DB of student



router.get('/api/booklist',(req,res)=>{
    try{
            BookData.find().then(function(data){
            res.send(data);
        })
    }
    catch(error){
        console.log(error)
    }
})

//TODO: get single data from db  
router.get('/api/booklist/:id',(req,res)=>{
    try{
        BookData.findById({"_id":req.params.id}).then(function(data){
            res.send(data);
            })
    }
   
    catch(error){
        console.log(error);
    } 
})
    
 // send data from db
 router.post('/api/book',async(req,res)=>{
    try{
    

        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            book_title: req.body.book_title,
            author: req.body.author,
            publishdate:req.body.publishdate,
            pagecount:req.body.pagecount,
            details:req.body.details
        }
        const user = new BookData(item)
        const savedUser = await user.save();
        console.log('saved data :',savedUser);
        res.send();
    }
    catch(error){
        console.log(error);
    }   
  })

//TODO: delete a employee data from db

router.delete('/api/booklist/:id',async(req,res)=>{
    try{
        let id = req.params.id
        const deleteBook = await BookData.findByIdAndDelete(id)
        res.send(deleteBook)
    }
    
        catch(error){
            console.log(error);
        }   
    
})

//TODO: Update  a employee data from db 
router.put('/api/booklist',async(req,res)=>{

    try{

        console.log(req.body);
        await BookData.findByIdAndUpdate(req.body._id, {$set:req.body})
         .then(function(data){
              res.send(data);
      })  
    }
    catch(error){
        console.log(error);
    } 
 
}) 
const SignupData = require('../model/signup') // DB of student


// send data from db
router.post('/api/signup',async(req,res)=>{
    try{
        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
           name:req.body.name,
           email:req.body.email,
           phone:req.body.phone,
           password:req.body.password,
        }
        const user = new SignupData(item)
        const savedUser = await user.save();
        console.log('saved data :',savedUser);
        res.send();
    }
    catch(error)
      {
        console.log(error);
    }   
  })


  router.get('/api/signuplist',(req,res)=>{
    try{
            SignupData.find().then(function(data){
            res.send(data);
        })
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router