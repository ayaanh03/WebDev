/*checking whether number input is stricly numerical or not*/
function checkInp()
{
  var x=$("checkNum").value;
  if (isNaN(x)) 
  {
    alert("Must input numbers");
    return false;
  }
}

