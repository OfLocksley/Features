function changeLockText(btn, data, valueA, valueB, textA, textB){
                
    if (data === valueA){
        btn.innerText = textB
    } else if (data === valueB) {
        btn.innerText = textA
    }
                
}