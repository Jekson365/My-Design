$(document).ready(()=> {
    $(".components").on("mouseover",".element",function() {
        $(this).css({
            backgroundColor:"#678983"
        })
        $(this).children().css({
            color:"#E6DDC4"
        })
    })
    $(".components").on("mouseleave",".element",function() {
        $(this).css({
            backgroundColor:"transparent"
        })
        $(this).children().css({
            color:"#678983"
        })
    })
})