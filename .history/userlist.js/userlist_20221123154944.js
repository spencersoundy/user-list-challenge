const userList =["Spencer","Wayne", "Menzi","Tintswalo","Tshepang","Belinda","Lebo","Anne","Carlo","Tumi"]


var select = prompt("====Menu==== \n What would you like to do? \n \n 1)Add three Users \n 2)Remove User \n 3)Display all Users \n 4)Sort Users:");

switch(select){
    case '1':
        var newUser = prompt("Enter three names:");
        var secondUser = prompt("add another one:");
        var thirdUser = prompt("Enter last name:");
        userList.push(newUser, secondUser, thirdUser);
        console.log(userList);
        break;
        case '2':
            var remove = function(removeID){
                var index = userList.indexOf(removeID);
                if (index>-1) {
                    array.splice(index, 1);
                }
            }
            remove(prompt("Enter ID of the worker you wish to remove: "));
            console.log(userList);

           
            break;
    case '3':
       
        break;
    case '4':
        
        break;
}