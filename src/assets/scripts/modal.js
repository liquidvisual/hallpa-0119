/*
    MODAL.JS - Last updated: 05.02.19

    Notes:
        - https://getbootstrap.com/docs/4.1/components/modal/#via-javascript
        - $('.modal-location').on('hidden.bs.modal', function (e) { })
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------

var $locationModal = $('#location-modal');
var $personalInjuryModal = $('#personal-injury-modal');

//-----------------------------------------------------------------
// LAUNCH MODAL
//-----------------------------------------------------------------

function launchModal() {
    var showModal = Boolean(document.querySelector(".theme-show-modal"));
    var state = getLocation();

    // if location exists in localStorage, set it on body
    if (state) {
        setLocation(state);
    }

    // if not, launch modal for user selection - ONLY if page requests modal
    else if (!state && showModal) {
        $locationModal.modal('show');
    }
}

launchModal();

//-----------------------------------------------------------------
// GET LOCATION
//-----------------------------------------------------------------

function getLocation() {
    return localStorage.getItem('location') || null;
}

//-----------------------------------------------------------------
// SET LOCATION
// Both modals can call this function
//-----------------------------------------------------------------

function setLocation(state, condition) {

    if (state == 'qld' && condition == 'confirm') {
        // open next modal
        $personalInjuryModal.modal('show');

    } else {

        // store location string on the body
        document.body.dataset.location = state;

        // store location in localStorage
        localStorage.setItem('location', state);

        // close modal #2
        $personalInjuryModal.modal('hide');
    }

    // close modal #1
    $locationModal.modal('hide');
}

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================