import '../scss/index.scss';

function main() {
    //mobile navigation button
    const menu_button = document.getElementById('menu_button');
    menu_button.addEventListener('click', () => {
        toggleMenu(menu_button);
    });
}

function toggleMenu(btn) {
    const menu = document.getElementById('menu_pane');

    menu.classList.toggle('menu_pane_out');
    btn.classList.toggle('is-active');//adds css burger animation

    /*for animating the menu in and out w/css animations*/
    if(menu.classList.contains('menu_pane_out')) {
        menu.classList.remove('menu_pane_in');
    } else {
        menu.classList.add('menu_pane_in');
    }
}

main();