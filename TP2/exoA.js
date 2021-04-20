var unirest = require("unirest") 

var k;

unirest.get('http://localhost:3000/data/')
.then((response) => {

    len = response.body.length;
    k = response.body[len-1]['id'];
    
})     

setTimeout(() =>  {ha_data()},1000);


function ha_data(){
    
    var url = "http://localhost:3000/data/";
    var url1 = url.concat(k);
    
    unirest.delete(url1)
    .then((response) => {console.log(response.body)});
    


}
//ha_data();