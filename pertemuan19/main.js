let data1 = "string"
const data2 = 15
let data3 = true
let data4 = false
let array = [1,2,3,4,5]
let object = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}
function apcb(...data){
let hasil = {}
data.forEach((v,i,a) =>{
    hasil[`data${i + 1}`] = v
})
return hasil
}
console.log(apcb(data1,data2,data3,data4,array,object))


function f1(...datas){
    let object = {}
    if(!datas) {
        for (let i = 0; i < datas.length; i++) {
           object[`data ${i+1}`] = datas[i]
        }
    }
    return object
}

function f2(...datas){
    let object = {}
    datas.forEach((v,i,a)=>{
           object[`${v}`] = v
    })
    return object
}

console.log(f2("Bambang",'Ujang',"asep","Udin"));


let obj1 = {key1:"1"}

obj1['key1'] = "VALUE"

console.log(obj1);