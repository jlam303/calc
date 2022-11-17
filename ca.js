function insertNum(num) 
{
    document.getElementById("inputScreen").value +=num;
}
function addNum()
{
    document.getElementById("inputScreen").value +="+";
}
function subtractNum()
{
    document.getElementById("inputScreen").value +="-";
}
function divideNum()
{
    document.getElementById("inputScreen").value +="/";
}
function multiplyNum()
{
    document.getElementById("inputScreen").value +="*";
}
function clearNum()
{
    document.getElementById("inputScreen").value ="";
}
function calcNum()
{
    document.getElementById("inputScreen").value = eval(document.getElementById("inputScreen").value)
}