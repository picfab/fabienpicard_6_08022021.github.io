window.addEventListener("load", (event) => {

            const listElts = document.querySelectorAll('.select')
            const photos = document.querySelectorAll('.listPhoto__container')

            const eltsInLines = {}
            const lines = []
            const changeLine = (elt,index,keyCode) => {
                const lineIndex = lines.findIndex(x=> {
                    console.log(x , elt.offsetTop)
                    return x === elt.offsetTop
                })
                console.log(lineIndex)
                let newLineValue
                let newLine
                let initialIndex
                let newIndex
                //Si up
                if(keyCode===38){
                    newLineValue = lines[lineIndex - 1] >= 0 ?lines[lineIndex - 1] : lines[lines.length-1]

                    newLine = eltsInLines[newLineValue]
                    newIndex = index - newLine.length
                    initialIndex = newLine.length - 1
                }
                // Si down
                else if(keyCode===40){
                    newLineValue = lines[lineIndex + 1] >= lines.length-1 ? lines[lineIndex + 1] : lines[0]
                    newLine = eltsInLines[newLineValue]

                    newIndex = index + eltsInLines[lines[lineIndex]].length
                    initialIndex = 0
                    console.log(initialIndex,'initialIndex')
                }
                let verif = true
                if(listElts[newIndex]===undefined){
                    verif = false
                }else{
                    if(listElts[newIndex].offsetLeft !== elt.offsetLeft){
                        verif=false
                    }
                }
                // console.log(verif,listElts[newIndex],newLine[initialIndex])
                return verif ? listElts[newIndex].focus() : newLine[initialIndex].focus()
            }
            const changeElt = (index,keyCode) => {
                let newIndex
                //left
                if(keyCode===37){
                    newIndex = index - 1 < 0 ? listElts.length - 1 : index - 1
                }
                //right
                if(keyCode===39){
                    newIndex = index + 1 > listElts.length - 1 ? 0 : index + 1
                }
                listElts[newIndex].focus()
            }
            Array.from(listElts).forEach(elt => {
                const top = elt.offsetTop
                console.log(top,elt)
                const line = []
                const verifLineExist = lines.findIndex(x=>x===top)

                if(verifLineExist!==-1){
                    eltsInLines[top].push(elt)
                }else{
                    lines.push(top)
                    const newLine = {[top]:[elt]}
                    Object.assign(eltsInLines, newLine)
                }
            })
            console.log(listElts)
            console.log(lines)

            Object.values(listElts).forEach((elt,index) => {
                elt.onkeydown = event => {
                    // event.preventDefault()
                    const top = elt.offsetTop
                    switch (event.keyCode) {
                        case 37:
                            console.log('left')
                            changeElt(index,event.keyCode)
                            console.log(changeElt(index,event.keyCode))
                            break;
                        case 38:
                            console.log('top',changeLine(elt,index,event.keyCode))
                            changeLine(elt,index,event.keyCode)
                            break;
                        case 39:
                            console.log('rigth')
                            changeElt(index,event.keyCode)
                            console.log(changeElt(index,event.keyCode))
                            break;
                        case 40:
                            console.log('bottom',changeLine(elt,index,event.keyCode))
                            changeLine(elt,index,event.keyCode)
                            break;

                        default:
                            break;
                    }
                }
            })
        });
