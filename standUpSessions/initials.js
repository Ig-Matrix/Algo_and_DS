//A function that returns the initials from a person's fullname

function returnInitials(fullname) {
    let fullnameArr= fullname.split(' ')

    let initials=''
    fullnameArr.forEach(name => {
        initials +=name.charAt(0)
    });

    return initials;
}

console.log(returnInitials('Omoma Ighawosa Matrix'));