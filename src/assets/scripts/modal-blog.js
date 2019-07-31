/*
    BLOG-MODAL.JS - Last updated: 31.07.19

    Notes:
        - https://getbootstrap.com/docs/4.1/components/modal/#via-javascript
        - $('.modal-location').on('hidden.bs.modal', function (e) { })
*/
;(function($) {

    //-----------------------------------------------------------------
    // VARIABLES
    //-----------------------------------------------------------------

    var $el = $('#blog-modal'); // jquery for Bootstrap
    var modalRequested = document.body.classList.contains("theme-show-blog-modal");
    var localKey = 'seeking-information-about-queensland-personal-compensation-law';
    var localKeyExists = getLocalKey(localKey);
    var yesBtn = $el[0].querySelector('[data-yes-btn]');

    //-----------------------------------------------------------------
    // LAUNCH BLOG MODAL
    //-----------------------------------------------------------------

    // if modal requested and key is set in localStorage; hide modal
    if (modalRequested && localKeyExists) {
        setLocalKeyVal(localKey, true);
    }

    // if modal exists but no key; show modal
    if (modalRequested && !localKeyExists) {
        $el.modal('show');
    }

    //-----------------------------------------------------------------
    // CLICK 'YES'
    //-----------------------------------------------------------------

    yesBtn.addEventListener('click', function() {
        setLocalKeyVal(localKey, true);
    });

    //-----------------------------------------------------------------
    // GET LOCAL KEY
    //-----------------------------------------------------------------

    function getLocalKey(key) {
        return localStorage.getItem(key) || null;
    }

    //-----------------------------------------------------------------
    // SET LOCAL KEY VALUE
    //-----------------------------------------------------------------

    function setLocalKeyVal(key, val) {

        // store location in localStorage
        localStorage.setItem(key, val);

        // close modal
        $el.modal('hide');

        // make sure removal has timed release of modal-open class
        $el.modal('hide').on('hidden.bs.modal', function() {
            document.body.classList.remove('modal-open'); // force this removal
        });
    }

})($);

//==================================================
//
//==================================================