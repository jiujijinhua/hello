$('.c999').mouseenter(function () {
    $('.c11').css("display", "block");
    $('.c11').mouseleave(function () {
        $(".c11").css("display", "none")
    })
})
$('.c997').click(() => {
    $.ajax({
        url: "http://localhost/interface/add.php",
        type: 'post',
        data: {
            id: $('.c4531').text().substring(5).trim(),
            name: $('.c4532').text().trim(),
            num: $('.c579').text().trim(),
            price: $('.c110').text().substring(3).trim(),
            img: $('.c130').attr('src').trim(),
        },
        dataType: "json",
        success: (res) => {
            console.log(res)
        }
    })
})