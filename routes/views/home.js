var keystone = require('keystone'),
    eveapi = require('../../api/eve/eveapi');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'home';

    var user = req.user;

    eveapi.setCache(new eveapi.cache.FileCache());

    //TODO: Pull user id and vcode for setting params, see how user and account information can persist.
    eveapi.setParams({
        keyID: user.keyId,
        vCode: user.vCode
    });

    eveapi.fetch('account:Characters', function(err,result){
        if(err) throw err;

        console.log(result);
    });


    // Render the view
    view.render('home');

};