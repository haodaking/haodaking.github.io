function ready(fn) {
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn, false)
    }
    else {
        document.attachEvent('onreadystatechange',
            function () {
                if (document.readyState == 'complete') {
                    fn();
                }
            }
        )
    }
}
ready(function () {
    ;(function () {
        var oMenuToggle = document.querySelector('#js-menuToggle');
        var oMenu = document.querySelector('#js-menu');
        var oPageInner = document.querySelector('#js-pageInner');
        var bFlag = false;
        oMenuToggle.addEventListener('click', function () {
            if (!bFlag) {
                bFlag = true;
                oMenuToggle.classList.add('active');
                oMenu.classList.add('offset');
                oPageInner.classList.add('offset');
            }
            else {
                bFlag = false;
                oMenuToggle.classList.remove('active');
                oMenu.classList.remove('offset');
                oPageInner.classList.remove('offset');
            }
        }, false)
    })();
})
