var unirest = require("unirest") 

function add_data(){

    unirest.post('http://localhost:3000/data')
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    .send({
        "organisateur": "mohamed boukhatem",
        "mail": "moha94orly@gmail.com",
        "ville": "mostaganem",
        "credit_card": [
        {
            "card_number": "5256339134777152",
            "card_expire": "10/27",
            "security_code": "701"
        }
        ],
        "dons": [
            { 
                "title": "Send 60 Girls in Pakistan to School.",
                "description": "This project supports secondary education for 60 girls in various Pakistani villages. In our role as a pass through organization and partner of Bedari, a nonprofit based in Pakistan, we cover the costs associated with safely transporting girls from their homes in remote villages to their schools.",
                "date_publier": "05/03/1994",
                "objectif": 75000 ,
                "recolter": 47733,
                "donors": [
                    {
                        "name": "Cassandra Contreras",
                        "amount": 200,
                        "comment": "good luck !"
                    },
                    {
                        "name": "Angela Watkins",
                        "amount": 50,
                        "comment": ""
                    }          
                ]
            }
        ]
    
    
    }).then((response) => {console.log(response.body)})    
}

function update_data(){
    unirest.patch('http://localhost:3000/data/100')
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    .send({
        "ville": "oran",     
    }).then((response) => {console.log(response.body)})    
}

function header_print(){
    unirest.patch('http://localhost:3000/data/100')
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    .send({
        "ville": "oran",     
    }).then((response) => {console.log(response.body)})    
}

//add_data();
update_data();