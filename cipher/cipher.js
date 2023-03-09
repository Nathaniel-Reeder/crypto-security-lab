const arrOne = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
const arrTwo = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const decoded = []
const encoded = []

const decoder = str => {
    string = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if(arrOne.indexOf(string[i]) !== -1){
            decoded.push(arrTwo[arrOne.indexOf(string[i])])
        } else if (arrTwo.indexOf(string[i]) !== -1) {
            decoded.push(arrOne[arrTwo.indexOf(string[i])])
        } else if (string[i] === ' ') {
            decoded.push(' ')
        } else {
            decoded.push(str[i])
        }
    }
    return decoded.join('')
}

console.log(decoder('V ybir pelcgbtencul!'))

const encoder = str => {
    string = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        string = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if(arrOne.indexOf(string[i]) !== -1){
            encoded.push(arrTwo[arrOne.indexOf(string[i])])
        } else if (arrTwo.indexOf(string[i]) !== -1) {
            encoded.push(arrOne[arrTwo.indexOf(string[i])])
        } else if (string[i] === ' ') {
            encoded.push(' ')
        } else {
            encoded.push(str[i])
        }
    }
    return encoded.join('')
    }
}

console.log(encoder('I love cryptography!'))