var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'vallijavvadi11@gmail.com',
        pass:'uljfegscegifkkgz'
    }
});
var mailOption={
    from:'vallijavvadi11@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'21A25A0515',
    text:'node-js task3'
}
transporter.sendMail(mailOption,function(error,info)
{
    if(error){
        console.log(error);
    }
    else{
        console.log('emailsent:' +info.response);
    }
});