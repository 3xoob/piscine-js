function citiesOnly(states){
    let array = states.map(cites =>{
        return cites.city
    })
    return array
}
function upperCasingStates(cities){
    let array = cities.map(function city (currentValue){
    const reg = /^\w/g
    const SpaceReg = /\s\w/g
    const SP = new RegExp(SpaceReg)
    const STR = new RegExp(reg)
    let res1 = currentValue.match(STR)
    let res2 = currentValue.match(SP)
    let res = currentValue.replace(STR,res1[0].toUpperCase())
    if(res2!== null){
        res = res.replace(SP,res2[0].toUpperCase())
    }
        return res
    })
    return array
}
function fahrenheitToCelsius(temperature){
    let array = temperature.map(function Celsia(value){
        value = parseInt(value)
        let cel = (value -32)*5/9
        cel = Math.floor(cel)
        return cel+'°C'
        })
    return array
}
function trimTemp(states){
    let array = states.map(temp=>{
        const regex = /\s/g
        const resRegex = new RegExp(regex)
        let strin = temp.temperature
        let str = strin.match(resRegex)
        let res = strin.replace(resRegex,'')
        temp.temperature = res
        return temp
    })
    return array
}
function tempForecasts(states){
    let array = states.map(all =>{
        const regex = /\s/g
        const resRegex = new RegExp(regex)
        const regexSpace = /\s\w/g
        const regexSp = new RegExp(regexSpace)
        let strin = all.temperature
        let res2 = all.state.match(regexSp)
        let str = strin.match(resRegex)
        let res = strin.replace(resRegex,'')
        if(res2!== null){
            all.state = all.state.replace(regexSp,res2[0].toUpperCase())
        }
        res = parseInt(res)
        let cel = (res -32)*5/9
        cel = Math.floor(cel)
        let strRes = cel+'°Celsius in '+all.city+', ' + all.state[0].toUpperCase()+all.state.slice(1)
        return strRes
    })  
    return array
}
