var express = require('express');
var router = express.Router();


var userCtrl = require('../controllers/users');




router.get('/test', userCtrl.testing);

router.post('/usercreate', userCtrl.userCreate);

router.get('/:userid/details', userCtrl.userDetails);

router.put('/:userid/userupdate', userCtrl.userUpdate);

router.delete('/:userid/userdelete', userCtrl.userDelete);

router.get('/:firtstname/userFirstList', userCtrl.userFirstName);

router.get('/:lastsname/userlastList', userCtrl.userLastName);

router.get('/:emailid/useremailIdList', userCtrl.userEmails);

router.get('/:phone/phoneList', userCtrl.userPhones);


module.exports = router;