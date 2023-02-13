
var mysql = require("mysql2");

const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3333,
    user     : 'root',
    password : '1234',
    database : 'clinique'
  }).promise();

exports.afficherP = async()=>{
    const sql='SELECT * FROM patient';
    const result=await connection.execute(sql)
    return result
}

exports.ajouterP=async(CodePatient,nom,Prenom,DateNaissance,Genre)=>{
    const sql = `INSERT INTO PATIENT (CodePatient,Nom,Prenom,DateNaissance,Genre)values('${CodePatient}','${nom}','${Prenom}','${DateNaissance}','${Genre}')`;
    await connection.execute(sql)
}

exports.afficherRDV = async()=>{
    const sql='SELECT * FROM RendezVous';
    const result=await connection.execute(sql)
    return result
}

exports.ajouterRDV=async(Date,Heure,CodePatient,symthomes)=>{
    const sql = `INSERT INTO RendezVous (Date,Heure,CodePatient,symthomes)values('${Date}','${Heure}','${CodePatient}','${symthomes}')`;
    await connection.execute(sql)
}

exports.supprimerP = async (id) => {
    await connection.execute("DELETE FROM patient WHERE CodePatient = ?", [id]);
    return
}
exports.supprimerRDV = async (id) => {
    await connection.execute("DELETE FROM RendezVous WHERE id = ?", [id]);
    return
}






