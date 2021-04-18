import json
from faker import Faker 
from random import randint

f = Faker()
recolter = 0

data = []
for i in range(100):
    
    dons = []
    for j in range(f.random_int(1,5)):
    
        donors=[]
        recolter = 0 
        for j in range(f.random_int(0,10)):
            
            amount = f.random_int(0,100)
            amount -= amount%5
            recolter += amount
            donors.append(
                {
                    "name":f.name(),
                    "amount":amount,
                    "comment" : f.sentence()
            })

            amount1 = f.random_int(0,10000)
            amount1 -= amount1%100
        dons.append(
            {
        
                "title" : f.sentence(),
                "description" :f.paragraph(),
                "date_publier":f"{f.day_of_month()}/{f.month()}/{f.year()}",
                "objectif":amount1,
                "recolter" :recolter,
                "donors":donors    
        })
        

    first_name = f.first_name()
    last_name = f.last_name()

    data.append(
        {
            "id" : i,
            "organisateur" :f"{last_name} {first_name}",
            "mail":f"{first_name}{last_name}@gmail.com",
            "ville":f.city(),
            "credit_card":[
                {
                    "card_number":f.credit_card_number(),
                    "card_expire":f.credit_card_expire(),
                    "security_code":f.credit_card_security_code()
                }
            ],
            "dons":dons
        })

with open("db1.json", mode='w', encoding='utf-8') as feedsjson:

    json.dump(data, feedsjson)