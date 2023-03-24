const passport= require('passport');

const passportAuth = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
      
    }
    if (!user) {
      return res.json(
        'acceso denegado'
      );
    }
    req.logIn(user, function (err) {
      if (err) {
        console.log(err)
        return res.status(500).send({
          err: 'Could not log in user',
          failureRedirect:'/login'
        });
      }
      res.json(
        'Bienvenido'
        
      );
    });
  })(req, res, next);
};

module.exports={
  passportAuth
}