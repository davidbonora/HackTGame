document.addEventListener('DOMContentLoaded', function () {
    let playerName = document.querySelector('.player-name');
    let btn = document.querySelector('.player-btn');

    btn.addEventListener('mouseenter', function (e) {
        btn.classList.add('show-hvr');
        btn.classList.remove('hide-hvr');
        playerName.classList.add('hide-hvr');
        playerName.classList.remove('show-hvr');
    });
    btn.addEventListener('mouseleave', function () {
        btn.classList.add('hide-hvr');
        btn.classList.remove('show-hvr');
        playerName.classList.add('show-hvr');
        playerName.classList.remove('hide-hvr');
    })
})
