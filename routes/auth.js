
// Authentication used by all the routes
// and handle the reqs

const auth = {
    
    required: function (req, res, next){
    
        if (req.isAuthenticated()) {
            // already authenticated, keep going
            return next();
        } else {
            // redirect to Home Page with login options.
            res.redirect('/');
      }
    },

    optional: function(req, res, next){
        
        // for optional authentication, just go ahead
        // On app website, there could be some pages 
        // such as information about the app or FAQs
        // where login is not required.
        next();

    },

  };
  
  module.exports = auth;