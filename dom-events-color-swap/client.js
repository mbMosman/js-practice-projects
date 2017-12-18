$(document).ready( () => {

    let counter = 1;

    $('#btn-add').on('click', () => {

        counter += 1;

        $('#out-blocks').append(`<div class="block red"><p>${counter}</p><button class="btn-swap">Swap</button><button class="btn-delete">Delete</button></div>`);
        $('#out-blocks .btn-swap:last').on('click', function() {
            console.log(this);
            $(this).parent().toggleClass("red");
            $(this).parent().toggleClass("yellow");
        });
        $('#out-blocks .btn-delete:last').on('click', function() {
            console.log(`Clicked delete on block ${counter}`);
            $(this).parent().remove();
        });
    });


})