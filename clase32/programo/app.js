// let fecha = moment();

// console.log(fecha);

// console.log(fecha.format('YYYY MM DD'));

// console.log(fecha.format('Z SS ss mm HH DD'));

// console.log(fecha.format('LTS'));

// console.log(fecha.format('llll'));

// console.log(fecha.add(2000, 'days').calendar());

$('h1').text('JQERY');

$('.par').on('click', () => {
    $('.par').toggleClass('cross');
});

$('#disappear').on('click', () => {
    $('div').fadeOut(1000);
});

$('#appear').on('click', () => {
    $('div').fadeIn(1000);
});

$('#toggle').on('click', () => {
    $('div').fadeToggle(1000);
});

$('#animate').click(() => {
    $('div').animate({
        left: '+=50px',
        top: '+=50px',
        opacity: '-=0.1',
        height: '+=20px',
        width: '+=20px',
        'background-color': 'green'
    });
});

$('#reset').on('click', () => {
    $('div').css({
        'position': 'relative',
        'left': '0',
        'top': '0',
        'opacity': '1',
        'width': '100px',
        'height': '100px',
        'background-color': 'red'
    });
});

$('div').hover(() => {
    $('div').css("background-color", "blue");
}, () => {
    $('div').css("background-color", "red");
});

$('div').mousedown(() => {
    alert('click')
})