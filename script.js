let upperClick = document.getElementById("upper-case");
let lowerClick = document.getElementById("lower-case");
let properClick = document.getElementById("proper-case");
let sentenceClick = document.getElementById("sentence-case");
let savetextClick = document.getElementById("save-text-file");

upperClick.addEventListener("click", function() {
    let words = document.querySelector('textarea').value.toUpperCase().split(' ');
    document.querySelector('textarea').value = words.join(' ');
});


lowerClick.addEventListener("click", function () {
    let words = document.querySelector('textarea').value.toLowerCase().split(' ');
    document.querySelector('textarea').value = words.join(' ');

});

properClick.addEventListener("click", function () {
    let words = document.querySelector('textarea').value.split(' ');
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        word = word[0].toUpperCase() + word.substring(1);
        words[i] = word;
    };
    document.querySelector('textarea').value = words.join(' ');

});

sentenceClick.addEventListener("click", function () {
    let string = document.querySelector('textarea').value;//берем значение из формы
    let str = string.toLowerCase();//исключаем верхний регистр полность

    const pattern = /(^|\.)\s*(\b[a-z](?!\s))/g;//выделяем только первую букву предложения

    str = str.replace(pattern,(x)=> x.toUpperCase()); //переводим символ в верхний регистр
    document.querySelector('textarea').value = str; //возвращаем значение в форму

});

savetextClick.addEventListener("click", function () {
    let string = document.querySelector('textarea').value;
    download("text.txt",string);

})


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}