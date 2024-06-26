const dec = (num) => {
    var i
    if (num > 0xfffffffff) {
        num -= 0xfffffffff;
        i += 0xfffffffff;
    }
    var i
    var og = num
    if(num < 0){
        num = -num
    }
    for(i = 0 ; i<= num ; i++){}
    if(og < 0){
        return -(num -(i-1))
    }
    return num -(i-1)
}
const round = (num) =>{
    let decimal = dec(num)
    let clean = num - decimal
    let output = 0
    if(num > 0){
        if(decimal >= 0.5){
            output = clean+1
        }else{
            output = clean 
        }
    }else{
        if(decimal >= -0.5){
            output = clean 
        }else{
            output = clean -1
        }
    }
 
    return output
}

