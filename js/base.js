;(function () {
    var openMenu = document.querySelector('#menuToggle');
    var closeMenu = document.querySelector('.close-menu');
    var oMenu = document.querySelector('.menu');
    var menuOverlord = document.querySelector('#menuOverlord')
    var pageoverlay = document.querySelector('#page-overlay');
    var bFlag = false;
    openMenu.addEventListener('click', openMenuFn, false);
    closeMenu.addEventListener('click', closeMenuFn, false);
    pageoverlay.addEventListener('click', closeMenuFn, false);
    
    function openMenuFn() {
        if (bFlag) {
            closeMenuFn();
            return;
        }
        bFlag = true;
        oMenu.classList.add('menu-open');
        oMenu.classList.remove('menu-close');
        closeMenu.style.display = 'block';
        menuOverlord.classList.remove('closeOverlord');
        menuOverlord.classList.add('openOverlord');
        pageoverlay.style.display = 'block';
    }
    function closeMenuFn() {
        bFlag = false;
        oMenu.classList.remove('menu-open');
        oMenu.classList.add('menu-close');
        closeMenu.style.display = 'none';
        menuOverlord.classList.remove('openOverlord');
        menuOverlord.classList.add('closeOverlord');
        pageoverlay.style.display = 'none';
    }
})()