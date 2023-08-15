

function findModules() {
    var list = document.getElementById("list");
    if(list.children.length > 0 ) {
        deleteChild(list);
    }

    var text = document.getElementById('text').value;
    var keywords = document.getElementById('keywords').value;
    var foundTextMod = findMod(text);
    var foundKeyword = findMod(keywords);
    let uniqueKeyword = [...new Set(foundKeyword)];
    for(var i = 0; i<uniqueKeyword.length; i++) {
        let div = document.createElement("div");
        if(foundTextMod.find(element => element == uniqueKeyword[i])) {
            div.innerHTML = uniqueKeyword[i] + " FOUND";
        } else {
            div.innerHTML = uniqueKeyword[i] + " NOT FOUND";
        }
        list.appendChild(div);
    }
} 

function findMod(text) {
    const regex = /mod_.\w*/gm;
    var arr = text.match(regex);
    return arr;
}

function deleteChild(list) {
    var child = list.lastElementChild;
    while(child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }
}