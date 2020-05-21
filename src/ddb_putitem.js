console.log('function starts')

const AWS = require('aws-sdk');
const docClient = new AWS.DyanmoDB.DocumnetClient({region: 'us-east-1'});

exports.handler = fucntion(event,context,callback){

var params = {
    Items:
    {
        msg_nbr: "2",
        last_name: "ltest",
        fist_name: "jtest",
        email: "divek.mali@gsbs.com",
        msg_txt: 'ttest'
    },
TableName: 'COVID_MSG'


};


docClient.put(params, function (err, data){
    if(err){
        callback(err,null);

    }
    else {
          callback(null, data);
    }
});

}

