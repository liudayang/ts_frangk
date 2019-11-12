{
    function createBtn(text: string, container: HTMLElement) {
        let btn = document.createElement('button')
        btn.textContent = text
        container.appendChild(btn)
    }

    let keys: Array<Array<string>> = [
        ['Clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];
    keys.forEach((textList:Array<string>)=>{
        let div:HTMLElement=document.createElement('div');
        textList.forEach((str:string)=>{
            createBtn(str,div);

        })
    })
}