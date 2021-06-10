
//const fs = require('fs')
/*const book={
    title:'Bhagavadgita',
    author:'Valmiki'

}*/

//const JSONbook=JSON.stringify(book)
//console.log(JSONbook)

//const parseData=JSON.parse(JSONbook)
//console.log(parseData.author)
//fs.writeFileSync('1-json.json',JSONbook)

//const dataBuffer=fs.readFileSync('1-json.json')
//const dataJSON=dataBuffer.toString()
//const data = JSON.parse(dataJSON)
//console.log(data.title)
//console.log(dataBuffer.toString())
const fs = require('fs')
const detail={
    name: 'sushma',
    planet: 'Earth',
    age: '22'

}
 const JSONdetail=JSON.stringify(detail)
 const data=JSON.parse(JSONdetail)
 fs.writeFileSync('1-json.json',JSONdetail)

 data.name ='cheong',
 data.age ='54'

 const dataJSON= JSON.stringify(data)
 fs.writeFileSync('1-json.json',dataJSON)
