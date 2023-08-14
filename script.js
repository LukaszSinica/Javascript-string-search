

function findModules() {
    var text = document.getElementById('text').value;
    var keywords = document.getElementById('keywords').value;
    var foundTextMod = findMod(text);
    var foundKeyword = findMod(keywords);
    for(var i = 0; i<foundKeyword.length; i++) {
        let div = document.createElement("div");
        if(foundTextMod.find(element => element == foundKeyword[i])) {
            div.innerHTML = foundKeyword[i] + " FOUND";
        } else {
            div.innerHTML = foundKeyword[i] + " NOT FOUND";
        }
        document.getElementById("list").appendChild(div);
    }
} 

function findMod(text) {
    const regex = /mod_.\w*/gm;
    var arr = text.match(regex);
    return arr;
}