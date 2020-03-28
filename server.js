
const express = require("express")
const server = express()

const ideas=[
    {
       img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
       title:"Cursos de Programação",
       category:"Estudo",
       description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint amet qui officia quam ad tenetur, nobis totam dignissimos fugiat odit magnam recusandae dolores. Non dolore dicta repudiandae neque quisquam",
       url:"https://rocketseat.com.br" 
    },

    {
        img:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title:"Exercícios",
        category:"Saúde",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint amet qui officia quam ad tenetur, nobis totam dignissimos fugiat odit magnam recusandae dolores. Non dolore dicta repudiandae neque quisquam",
        url:"https://rocketseat.com.br" 
     },

     {
        img:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title:"Meditação",
        category:"Mentalidade",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint amet qui officia quam ad tenetur, nobis totam dignissimos fugiat odit magnam recusandae dolores. Non dolore dicta repudiandae neque quisquam",
        url:"https://rocketseat.com.br" 
     },

     {
        img:"https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title:"Karaokê",
        category:"Programa em Família",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint amet qui officia quam ad tenetur, nobis totam dignissimos fugiat odit magnam recusandae dolores. Non dolore dicta repudiandae neque quisquam",
        url:"https://rocketseat.com.br" 
     },

     {
        img:"https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title:"Pintura",
        category:"Criatividade",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint amet qui officia quam ad tenetur, nobis totam dignissimos fugiat odit magnam recusandae dolores. Non dolore dicta repudiandae neque quisquam",
        url:"https://rocketseat.com.br" 
     },

     {
        img:"https://image.flaticon.com/icons/svg/2729/2729054.svg",
        title:"Brincar com o Catioro",
        category:"Pet",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint amet qui officia quam ad tenetur, nobis totam dignissimos fugiat odit magnam recusandae dolores. Non dolore dicta repudiandae neque quisquam",
        url:"https://rocketseat.com.br" 
     },


]



//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//Configuração do Nunjucks

const nunjucks=require("nunjucks")
nunjucks.configure("views",{
    express: server,
    noCache:true,
})

// rota criada / 
// captura pedido do cliente para responder 
server.get("/", function(req, res){
    return res.render("index.html", { ideas:lastIdeas })
})

const reversedIdeas=[...ideas].reverse()

let lastIdeas =[]
for(let idea of reversedIdeas){
    if(lastIdeas.length<2)
    {
        lastIdeas.push(idea)
    }
}




server.get("/ideias", function(req, res){
    const reversedIdeas=[...ideas].reverse()
    return res.render("ideias.html", {ideas: reversedIdeas})
})

//servidor ligado na porta 3000
server.listen(3000)

