import CustomerModels from "../../models/CustomerModels.js";
import {customer_array} from "../../db/database.js";

// let customer_array = [];
// selected customer for update or delete
let selected_customer_index = null;

const loadcustomertbl = () => {
    $("#customerTableBody").empty();
    customer_array.map((item, index) => {
        console.log(item);
        let data = `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.address}</td><td>${item.tel}</td></tr>`
        $("#customerTableBody").append(data);
    });
};

const cleancustomerform  = () => {
    $('#customerId1').val("");
    $('#customerName1').val("")
    $('#customerAddress').val("");
    $('#customerTel').val("");
};

//customer save button
$('#customer_save').on('click', function (){
    let id = $('#customerId1').val();
    let name = $('#customerName1').val();
    let address = $('#customerAddress').val();
    let tel = $('#customerTel').val();

if(id.length === 0){
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid ID",
        });
    }else if(name.length === 0){
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Name",
        });
    }else if(address.length === 0){
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Address",
        });
    }else if(tel.length === 0){
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid number",
        });
    }else {
        let customer = new CustomerModels(
            // customer_array.length +1,
            id,
            name,
            address,
            tel
        );


        customer_array.push(customer);


        cleancustomerform();
        loadcustomertbl();
    }
});

$('#customerTableBody').on('click','tr', function (){
    // get tr index
    selected_customer_index = $(this).index();

    // get customer object by index
    let customer_obj = customer_array[selected_customer_index];

    // get customer's data
    let id = customer_obj.id;
    let name = customer_obj.name;
    let address = customer_obj.address;
    let tel  =  customer_obj.tel;

    // fill data into the form
    $("#customerId1").val(id);
    $("#customerName1").val(name);
    $("#customerAddress").val(address);
    $("#customerTel").val(tel);
});

$('#customer_update').on('click',function (){
    let index = selected_customer_index;

    let id = $('#customerId1').val();
    let name = $('#customerName1').val();
    let address = $('#customerAddress').val();
    let tel = $('#customerTel').val();

    let customer = new CustomerModels(
        id,
        name,
        address,
        tel
    );

    // update
    customer_array[selected_customer_index] = customer;

    cleancustomerform();
    loadcustomertbl();
});

$('#customer_delete').on('click',function (){
    // customer_array.splice(selected_customer_index,1);
    //
    // cleancustomerform();
    // loadcustomertbl();

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            customer_array.splice(selected_customer_index, 1);

            // clean customer form
            cleancustomerform();

            // reload the table
            loadcustomertbl();

            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your customer has been deleted.",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });

});
