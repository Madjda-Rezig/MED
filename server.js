const express = require("express")
const server = express()
const{afficherP,ajouterP, afficherRDV, ajouterRDV,supprimerRDV,supprimerP}=require('./bd')
const mysql      = require('mysql2');


server.use(express.json()) //this is to accept data in jason format
server.use(express.urlencoded({extended:false})) //this is basically to decode the data send through html form
server.use(express.static('public')) //this to serve our public folder as a static folder

server.set("view engine","ejs")
server.get("/",(req,res)=>{
    res.status(200).render('page')
})

server.listen(3000,()=>{
    console.log("server running")
})

// ROUTES 


server.get('/FormPatient',function(request,response)
{
   response.status(200).render('Formpatient');
})

server.get('/RDV',async function(request,response)
{
  const [RendezVous,_]= await afficherRDV()
   response.status(200).render('RDV',{RendezVous});
})


server.get('/FormRDV',function(request,response)
{

   response.status(200).render('FormRDV');
})


// affichage PATIENTS
server.get("/patients",async(req,res)=>{
  const[patient,_]=await afficherP()
  res.status(200).render('patients',{patient})
})
// REMPLISSAGE FORM PATIENTS
server.post("/FormPatient",async (req,res)=>{
  const{code,Nom,Prenom,dateDeNaissance,genre}=req.body
  await ajouterP(code,Nom,Prenom,dateDeNaissance,genre)
  res.status(201).redirect('/Patients')

})

// affichage RDV
server.get("/RDV",async(req,res)=>{
  const[RendezVous,_]=await afficherRDV()
  res.status(200).render('RDV',{RendezVous})
})
// REMPLISSAGE FORM RDV
server.post("/FormRDV",async (req,res)=>{
  const{Date,Heure,CodePatient,symthomes}=req.body
  await ajouterRDV(Date,Heure,CodePatient,symthomes)
  res.status(201).redirect('/RDV')

})

// delete patient
server.delete("/:CodePatient", async (request, response) => {
  await supprimerP(request.params.CodePatient)
  response.status(202).end();
});

// delete RDV
server.delete("/rdv/:id", async (request, response) => {
  await supprimerRDV(request.params.id)
  response.status(202).end();
});





































server.use("/*",(req,res)=>{
  res.status(404).send('NOT FOUND')
})









