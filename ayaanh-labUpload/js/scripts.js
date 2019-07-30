function showDesc(descript){
    $("#description").html("Descripton: "+ descript);
}

function hideDesc(){
    $("#description").html("");
}

function validate(){
    var strd= $("#dob").val();
    var d= new Date(strd);
    if(d>= new Date()){
        alert("Date of Birth has to be before today.");
        return false;}
    var n=$("#phone").val();
    if(isNaN(n)){
        alert("Phone number must be strictly numerical");
        return false;
    }
}

