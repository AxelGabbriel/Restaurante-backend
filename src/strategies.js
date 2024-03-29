const passport = require('passport');
const { Strategy } = require('passport-local');
const { Pool } = require('pg');
const helpers =require('./helpers')

const config={
  
  user: 'postgres',
  host: 'localhost',
  database: 'restaurante',
  password: 'axel',
  port: 5432,
  
};
  
  const pool = new Pool(config); 
  
  const LocalStrategy = new Strategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  async (username, password, done) => {
    try {
      
      const user={
        username:username,
        clave:password
      }
     //console.log(`SELECT * FROM usuario WHERE username='${user.username}'`)
      //const result= await pool.query(`SELECT * FROM usuario WHERE username='${user.username}'`)
      const result= await pool.query('SELECT * FROM usuario WHERE username=$1',[user.username])
      
      console.log(result.rows[0])
      if(result.rowCount>0){
         const newuser =result.rows[0];
         const validpassword= await helpers.compararclave(user.clave,newuser.contraseña) 
        
         if(validpassword){
          
          done(null,newuser,console.log('bienvenido'))
          


         }else{
              done(null,false,console.log('password incorrecto'))
              
         }
      }else{
        return done(null, false,console.log('el usuario no existe'))   
        
      }
      
    } catch (e) {
      console.log(e);
      return done(null, false);
    }
  }
);





module.exports={
  LocalStrategy
}