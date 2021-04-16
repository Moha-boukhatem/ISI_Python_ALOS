var unirest = require("unirest")
var req = unirest("GET", "http://localhost:3000/data")
req.headers({
        "cache-control": "no-cache",
})
req.end(function (res) {
        if (res.error) throw new Error(res.error)
        
        
        // 10 enregistrement
        console.log("######  10 enregitrements : ")
        for (var i = 0;i<10;i++){
            console.log(res.body[i])
        }
        

        // filtred by "M"
        function filter(index, letter) {
                for (i in res.body){
                        if (res.body[i]['organisateur'].charAt(index) === letter)
                                console.log(res.body[i]['organisateur'])
                }
            }
        
        filter(0,"M");

        /*Q3 "cache-control": "no-cache" : Permet au navigateur d'indiquer au cache de récupérer 
        le data auprès du serveur d'origine plutôt que de lui renvoyer celui qu'il conserve. */
        

        

})


