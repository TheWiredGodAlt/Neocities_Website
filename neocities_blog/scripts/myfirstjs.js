//basic var declaration
var a=1,str="basic"
//Basic function, it takes the user to another window :)
function traintest(){

    testing=confirm("Are you sure???")
    if(testing) window.location="https://google.com"
};
setTimeout.traintest, 60000
//Function calling
//Basic code that changes the html frontend (i still need to end this shit)
document.getElementById('basicbtn').addEventListener('click', () => {
        document.getElementById('test23').textContent='I hate you all';
    });



//Basic object training
var obj={
    test:20,
    test2:["luke","Elize"]
}
//Basic print in JS
console.log(a+1, obj.test,obj.test2[0])
console.log("HelloWolrd!!")

