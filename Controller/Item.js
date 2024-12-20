import ItemModels from "../../models/ItemModels.js";
import {item_array} from "../../db/database.js";


let selected_item_index = null;
//loadItemTable
const loaditemTbl = () => {
    $("#itemTableBody").empty();
    item_array.map((item) => {
        console.log(item);
        let data = `<tr><td>${item.code}</td><td>${item.description}</td><td>${item.unitPrice}</td><td>${item.qty}</td></tr>`;
        $("#itemTableBody").append(data);
    });
}
//clear Form
const clearitemform  = () => {
    $('#itemCode').val("");
    $('#itemDescription').val("")
    $('#itemPrice').val("");
    $('#itemQty').val("");
}

// Item Save button
$('#item_save').on('click',function (){
    let code = $('#itemCode').val();
    let description = $('#itemDescription').val();
    let unitPrice = $('#itemPrice').val();
    let qty = $('#itemQty').val();

    if(code.length===0){
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Code",
        });
    }else if(description.length===0){
        // Swal.fire({
        //     icon: "error",
        //     title: "Invalid Input",
        //     text: "Invalid input",
        // });
    }else if(unitPrice.length===0){
        // Swal.fire({
        //     icon: "error",
        //     title: "Invalid Input",
        //     text: "Invalid number",
        // });
    }else if(qty.length===0){
        // Swal.fire({
        //     icon: "error",
        //     title: "Invalid Input",
        //     text: "Invalid number",
        // });
    }else {
        let item = new ItemModels(
            code,
            description,
            unitPrice,
            qty
        );

        item_array.push(item);

        clearitemform();
        loaditemTbl();
    }
});

$('#itemTableBody').on('click','tr', function (){
    selected_item_index = $(this).index();

    let item_obj = item_array[selected_item_index];

    let code = item_obj.code;
    let description = item_obj.description;
    let unitPrice = item_obj.unitPrice;
    let qty = item_obj.qty;

    $('#itemCode').val(code);
    $('#itemDescription').val(description);
    $('#itemPrice').val(unitPrice);
    $('#itemQty').val(qty);
});

$('#item_update').on('click',function (){
    let code = $('#itemCode').val();
    let description = $('#itemDescription').val();
    let unitPrice = $('#itemPrice').val();
    let qty = $('#itemQty').val();

    let item = new ItemModels(
        code,
        description,
        unitPrice,
        qty
    );

    item_array[selected_item_index]= item;

    clearitemform();
    loaditemTbl();
});

$('#item_delete').on('click',function (){
    // item_array.splice(selected_item_index,1);
    //
    // clearitemform();
    // loaditemTbl();

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

            item_array.splice(selected_item_index, 1);

            // clean item form
            clearitemform();

            // reload the table
            loaditemTbl()

            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success"
            });
        } else if (
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