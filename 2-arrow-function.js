//const square = function(x){
 //   return x * x
//}

// This is in arrow function
/*const square = (x) =>{
    return x * x
}*/

//This is shorthand method for arrow function
//const square = (x) => x * x
//console.log(square(12))

const event ={
    name: 'Birthday party',
    guestList:['Sushma','Sneha','Shwetha'],
    printGuestList (){
        //const that = this
        console.log('Guest list for '+this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest +'is attending '+this.name)
        })
    }
}
event.printGuestList()