$(document).ready(function () {

    function showData(){
        eachRow = "";
        $.ajax({
            url:"showData.php",
            method:"GET",
            dataType:"JSON",
            success:function(data){
                newArr = data;
                console.log(newArr);
                for(let i = 0;i<newArr.length;i++){
                    eachRow += "<tr><td scope='col'>"+ newArr[i].id+"</td><td scope='col'>"+ newArr[i].name +"</td><td scope='col'>"+ newArr[i].email +"</td><td scope='col'>"+ newArr[i].password +"</td><td><button type='button' class='btn btn-warning'>Edit</button><button type='button' class='btn btn-danger ms-2'>Delete</button></td></tr>"
                }
                $("#tbody").html(eachRow);

            }
        });
    }
    showData();
    // insert the data in the database
    $("#btnadd").click(function (e) {
        e.preventDefault();

        let name = $("#nameid").val();
        let email = $("#emailid").val();
        let pass = $("#passwordid").val();

        myData = {
            name: name,
            email: email,
            pass: pass
        };
        $.ajax({
            url: "insert.php",
            method: "POST",
            data: JSON.stringify(myData),
            success: function (data) {
                console.log(data);
                swal.fire({
                    title:data,
                    icon:"success",
                    timer:2500,
                    showConfirmButton:false
                });
                showData();
                $("#myform")[0].reset();
            }
        });
        
    });
});
