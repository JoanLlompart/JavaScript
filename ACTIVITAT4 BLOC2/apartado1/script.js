function identificador(){
    let subtitulos = document.getElementsByTagName("h2");
    let paragrafos = document.getElementsByTagName("p");

    let text_subtitulos = getTextFromTag(subtitulos);
    let text_subtitulos = getTextFromTag(paragrafos);

    alert("H2: " + text_subtitulos + "\n" + "P: " + text_paragrafos)

}

function getTextFromTag(tags) {
    let texto = [];
    for (let i = 0; i < tags.length; i++) {
        const tag = tag[i];
        texto.push(tag.innerHTML);
    }
    return texto;
}
