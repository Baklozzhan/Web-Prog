// var myNodelist = document.getElementsByTagName("li")
// console.log(myNodelist)
if (typeof window!=='undefined'){
    var myNodelist = document.getElementsByTagName("li")
    function addElement() {
        var li = document.createElement("li")
        var inputValue = document.getElementById("input_text").value
        var t = document.createTextNode(inputValue)
        li.appendChild(t)
        if (inputValue === "") {
            alert("ЧМО ТЫ НИЧЕГО НЕ ВВЕЛ")
        }
        else {
            document.getElementById("chmo").appendChild(li)
        } document.getElementById("input_text").value = ""
    }

}
else{
    console.log("You are in server")
}
