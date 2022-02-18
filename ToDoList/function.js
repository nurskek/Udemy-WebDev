let input = prompt("What you would like to do?");
const ourList = [];
console.log("Welcome to our app!")


// this loop doesn't consider error cases.
while(input !== "quit") {
    
    if(input === "new") {
        input = prompt("Enter the task:");
        ourList.push(input);
        input = prompt("The task is added. Enter the new command:")
    } else if(input === "delete") {
        if(ourList.length === 0) {
            input = prompt("You can delete. List is empty. Enter new text:")

        } else {
            for(let i = 0; i < ourList.length; i++) {
                console.log(`${i} : ${ourList[i]}`);
            }

            input = prompt("Enter the index to delete");
            ourList.splice(parseInt(input), 1);
            input = prompt("Deleted. Enter the new command:");
        }
    } else if(input === "list") { 
        console.log("********")
        for(let i = 0; i < ourList.length; i++) {
            console.log(`${i} : ${ourList[i]}`);
        }
        console.log("********")
        input = prompt("Done. Enter the new command:");
    } else {
        input = prompt("What you would like to do?");
    }
}

console.log("ok, quit the app.");
