function handleInput() {  // changes text colour when /gif command is written
    let searchField = document.getElementById("textInput");
    let text = searchField.value;
    document.getElementById("sendGIF").src = ""; // delete previous picture
    if(text.slice(0, 5) === '/gif ') { // if /gif command was sent
        searchField.setAttribute("style", "font-style: italic;\n" +
            "    background: linear-gradient(45deg, #0077FF 30%, violet 60%);\n" +
            "    -webkit-background-clip: text;" +
            "    -webkit-text-fill-color: transparent;\n" +
            "    color: blueviolet;");
    }

    else { // if no /gif command is detected
        searchField.setAttribute("style", "font-style: normal;\n" +
            "    background: none;\n" +
            "    -webkit-background-clip: none;" +
            "    -webkit-text-fill-color: none;\n" +
            "    color: black;");
    }
}

async function send(imageSRC) { // sends selected picture
    let GIFMenu = document.getElementById("selectGIFMenu");
    GIFMenu.innerHTML = "";
    GIFMenu.style.display = "none";
    document.getElementById("sendGIF").src = imageSRC;
}

const GIFS_LIMIT = 25;
const SECRET_KEY = "TOPSECRET"

function generateURL(query) { // generates url to get gifs according to users request
    return `https://api.giphy.com/v1/gifs/search?api_key=${SECRET_KEY}&q=${query}&limit=${GIFS_LIMIT}&offset=0&rating=g`;
}

async function processText() { // is called when users press "GIF" button
    let text = document.getElementById("textInput");
    let val = text.value;
    if(val.slice(0, 5) !== '/gif ') {
        /* no gif command actions */
    }
    else {
        document.getElementById("sentGIF").style.display = "flex";
        let response = await fetch(generateURL(val.slice(5))); // get our pictures
        if (response.ok) {
            let json = await response.json();
            let pictures = json['data'];
            let slideNumber = pictures.length;
            let selectMenu = document.getElementById("selectGIFMenu");
            let newContent = "";
            for(let i=0; i<slideNumber; i++) {
                const src = pictures[i]['images']['fixed_height_small']['url'];
                newContent += `<img class='searchResult' src='${src}' id='${pictures[i]['images']['original']['url']}' onclick='send(this.id)'>\n`;
            } // gluing gifs previews together

            selectMenu.innerHTML = newContent;
            selectMenu.style.display = "block";
            selectMenu.style.border = "5px solid #0077FF";

        } else {
            alert("Ошибка HTTP: " + JSON.stringify(await response.json()));
        }
    }
}