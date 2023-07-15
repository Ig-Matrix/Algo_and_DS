/* Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. 
The last line is not preceded by any spaces.

Write a program that prints a staircase of size .*/


function staircase(n) {  
    let str ='';
    for (let i=1; i<=n; i++) {
        for (let j=0; j<n; j++) {
            if (i < n- j) {
                str += ' '
            } else {
                str += '#'
            }
        } 
        str += '\n'
    }
    console.log(str);
    return str;
}
staircase(6);


