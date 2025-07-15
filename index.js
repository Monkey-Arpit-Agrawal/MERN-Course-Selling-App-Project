import dotenv from 'dotenv' ;
import express from 'express' ;

dotenv.config() ;
const app = express() ;

let port = process.env.PORT || 3000 ; 

app.use(express.json()) ;

app.post('/signup' , function (req,res) {
    
}) ;

app.post('/login' , function (req,res) {
    
}) ;

app.post('/purchase' , function (req,res) {
    
}) ;

app.get('/allCourses' , function (req,res) {
    
}) ;

app.get('/purchasedCourses' , function (req,res) {
    
}) ;

app.listen(port , () => {
    console.log(`App is listening on the Port : ${port}`) ;
}) ;