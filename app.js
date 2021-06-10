//const fs  = require('fs')
//fs.writeFileSync('note.txt','i will become a software developer')
//fs.appendFileSync('note.txt' ,' i am a software developer')
 //const add= require('./util.js')
//const sum = add(4 , 1)
//console.log(sum)

//const validator = require('validator')

const chalk = require('chalk')

const yargs = require('yargs')

const notes = require( './notes.js')

// customize version

yargs.version('1.1.0')

// add notes, remove notes, read ,list

// 1. create add command 

yargs.command({
    command : 'add',
    describe : 'add a new note',
    builder : {
        title :{
            describe : 'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'

        }
    },
    handler( argv){
       // console.log('Adding a new note',argv)
       //console.log('Title: ' + argv.title)
       //console.log('Body '+argv.body)
       notes.addNote(argv.title,argv.body)
    }
})

// 2. create a remove command 

yargs.command({
    command: 'remove',
    describe: ' remove a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        //console.log('removing a note')
        notes.removeNote(argv.title)
    }
})

// 3. create a list command 

yargs.command({
    command:'list',
    describe: 'list all the notes',
    handler(argv){
        //console.log('listing out all the notes')
        notes.listNotes()
    }
})

// 4. create a read command 

yargs.command({
    command :'read',
    describe : ' read a note',
    builder : {
       title :{
           describe: 'Note title',
           demandOptions : true,
           type : 'string'
       }
    },
    handler (argv){
        //console.log('reading a note')
        notes.readNotes(argv.title)
    }
})



//const notes = getNotes()

//console.log(notes)

//console.log(validator.isEmail('@gmail.com')) // downloaded package is loaded in the app.js 

//console.log(validator.isURL('https://mead.io'))

//const greenMsg = chalk.yellow('Sushma')

//console.log(greenMsg)

//console.log(chalk.green('success..'))

//console.log(chalk.bgRed.bold('Today is a good day ,its all yours ,make a best out of it'))

//console.log(process.argv)

//const command = process.argv[2]

console.log(process.argv)

yargs.parse()
//console.log(yargs.argv)

/*if(command === 'add'){
    console.log('add note')
}else if(command === 'remove'){
    console.log('removing note')
}*/




