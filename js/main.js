$(document).ready(function() {
    var h1Height = $('.header h1').height();
    halfHeight = h1Height / 2;
    $('.header h1').css('margin-top', -halfHeight);

    var x = window.matchMedia("(max-width:991px)");

    if (x.matches) {
        $('.dropdown_link li .sub-menu').show();
    } else {
        $('.dropdown_link li .sub-menu').hide();
        $('.dropdown_link li').hover(function () {
            $(this).find('.sub-menu').show();
        },
            function () {
                $(this).find('.sub-menu').hide();
            });
    };

    $('#buyModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var recipient = button.data('whatever');
        var price = button.data('price');
        var modal = $(this);
        modal.find('.modal-body #recipient-name').val(recipient);
        modal.find('.modal-body #recipient-price').val(price);
        modal.find('.modal-body #card-price').val(price);
    })

    $("select.custom-select").change(function () {
        var selectItems = $(this).children("option:selected").val();
        var getPrice = $('#recipient-price').val();
        var getSum = getPrice * selectItems;
        $('.form-group #items').html(selectItems);
        $('#card-price').val(getSum);
    });
});
