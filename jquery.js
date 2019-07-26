$('#view-work').on('click', function() {
    const images = $('#Projects').position().top;

$('html, body').animate(
    {
        scrollTop: images
    }, 

    900

);

});