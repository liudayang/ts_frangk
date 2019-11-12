{
    function createBtn(text, container) {
        var btn = document.createElement('button');
        btn.textContent = text;
        container.appendChild(btn);
    }
    var keys = [
        ['Clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];
    keys.forEach(function (textList) {
        var div = document.createElement('div');
        textList.forEach(function (str) {
            createBtn(str, div);
        });
    });
}
