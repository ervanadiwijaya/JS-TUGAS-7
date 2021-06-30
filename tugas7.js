
//make function showOne
function showOne() {
    var bodyHeight = [150,167,155,188,176,167,180,185,178,176,187];

    //make loop to print value of array with for
    for(i = 0; i < bodyHeight.length; i++){
        console.log(bodyHeight[i])
    }
}
//make function showTwo
function showTwo() {
    var bodyHeight = [150,167,155,188,176,167,180,185,178,176,187];

    //make loop to print value of array with for of
    for(let i of bodyHeight){
        console.log(i)
    }
    
}

//call function showOne
showOne();
//call function showTwo
showTwo();

//the different betwen generel for and for of
//general for : need method .length to get the number of arrays
//for of : dont need method .length . just declare the variable
//general for : we need declare variable array to print the value... exm : bodyHeight[i]
//for of : dont need declare variable array . because we make variable to take the value of array... 'let i of bodyHeight' .. just declare i to print the value

