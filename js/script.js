var empList = [];

$("#submit").click( a => {
    
    let first = $("#first").val();
    let last = $("#last").val();
    let number = $("#number").val();
    let email = $("#email").val();
    let password = $("#password").val();

    var emp = {first: first, last: last, number: number, email: email, password: password};
    
    if(email !== "" && password !== "")
    {
        if(empList.some((e)=>e.email === emp.email))
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: emp.email + "is already added ! ",
                footer: '<a href="#">do not a add duplicate email ids</a>'
              });
        }
        else{
            empList.push(emp);
            Swal.fire({
                title: "Good job!",
                text: "Employee details added successfully !",
                icon: "success"
              });
              $("#first").val("");
              $("#last").val("");
              $("#number").val("");
              $("#email").val("");
              $("#password").val("");
        }
        console.log(empList);
        renderTable();
    }
    else{
        Swal.fire({
            title: "Can not empty",
            text: "fill the input field",
            ican: "warning",
        })
    }
})

$('body').on('click', '.delete', function(){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          var id = $(this).attr('id');
      empList.pop(a => a.email == id);
      console.log(empList);
      renderTable();
        }
      });
      
    
    });

    function renderTable()
    {
        if(empList.length != 0)
        {
            var table = `<table class="table table-secondry table-hover">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Number</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>`;

            empList.forEach(e =>{
                
                table +=  `<tr>
                <td>${e.first}</td>
                <td>${e.last}</td>
                <td>${e.number}</td>
                <td>${e.email}</td>
                <td>${e.password}</td>
                <td><div class="fa fa-trash-o delete" id="${e.email}"></div></td>
                </tr>`
            })
              
          table +=  `</tbody>
          </table>`

          $('.empData').html(table);

        }
        else{
            $('.empData').html("");
        }
    }
    

