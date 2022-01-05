const items = document.querySelectorAll('.container div');

items.forEach(item => {

    const photo = item.querySelector('.photo');

    item.addEventListener('mousemove', function(event){
        photo.classList.add('active');

        const cursorX = event.pageX,
            cursorY = event.pageY;

        const itemLeft = item.getBoundingClientRect().left,
            itemTop = item.getBoundingClientRect().top;
    });

    item.addEventListener('mouseout', ()=>{
        photo.classList.remove('active')
    });
});

