
function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
    
    document
        .querySelector("body")
        .classList()
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList()
        .toggle("addScroll")

}

function checkFields(event){
    const valuesToCheck= [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value){
        
        const checkIfIsString= typeof event.target[value].value==="string"
        const checkIfIsEmpty = !event.target[value].value.trim()
        if (checkIfIsString && checkIfIsEmpty){
            return true

        }
    })

    if (isEmpty){
        event.preventDefault()
        alert ("Por Favor, preencha todos os campos!")
    }
}

    function deletar(idea) {
        db.run(`DELETE FROM ideas WHERE id = ?`, [value], function (err) {
            if (err) return console.log(err)
            console.log("DELETEI", this)
        })
    
}