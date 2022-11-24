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
         var delUser = prompt("Enter ID of the user you wish to remove: ");
         delete userList[delUser]
        console.log(userList);
        break;
    case '3':
        let joinedList = userList.join(';');
        document.write(joinedList);
        console.log(userList);

        break;
    case '4':
        let sortNames = userList.sort();
        document.write(sortNames);
        
        console.log(sortNames);
        break;
}