(function() {
    const sprite = `
    <svg style="display: none">
        <defs>
            <symbol id="svg-sprite__close" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.707 5.293a1 1 0 010 1.414l-12 12a1 1 0 01-1.414-1.414l12-12a1 1 0 011.414 0z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 5.293a1 1 0 011.414 0l12 12a1 1 0 01-1.414 1.414l-12-12a1 1 0 010-1.414z" />
            </symbol>
            <symbol id="svg-sprite__logo" viewBox="0 0 110 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1h30v30H0z"/>
                <rect x="38" width="32" height="32" rx="16"/>
                <path d="M78 0l32 32H78V0z"/>
            </symbol>
            <symbol id="svg-sprite__arrow" viewBox="0 0 18 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M.293.293a1 1 0 011.414 0L9 7.586 16.293.293a1 1 0 111.414 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414z"/>
            </symbol>
            <symbol id="svg-sprite__tooltip" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <g fill-rule="evenodd" clip-rule="evenodd">
                <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"/>
                <path d="M12.258 8.024a2 2 0 00-2.225 1.308 1 1 0 11-1.886-.664 4 4 0 017.773 1.333c0 1.53-1.135 2.54-1.945 3.081a8.041 8.041 0 01-1.686.848l-.035.013-.011.003-.004.002h-.002L11.92 13l.316.949a1 1 0 01-.633-1.897H11.6h.002l.016-.006.074-.027a6.051 6.051 0 001.172-.6c.69-.46 1.055-.95 1.055-1.419v-.001a2 2 0 00-1.662-1.975zM12 15a1 1 0 011 1v.5a1 1 0 11-2 0V16a1 1 0 011-1z"/>
                </g>
            </symbol>
            <symbol id="svg-sprite__menu" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 18a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z" />
            </symbol>
            <symbol id="svg-sprite__check" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 7.5L5 11L13 2" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>
            <symbol id="svg-sprite__success" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.663 3.773A9 9 0 1021 12v-.919a1 1 0 112 0V12A11.002 11.002 0 018.188 22.313a11 11 0 118.289-20.366 1 1 0 11-.814 1.826z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.707 3.293a1 1 0 010 1.414l-10 10.01a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L12 12.595l9.293-9.302a1 1 0 011.414 0z" />
            </symbol>
            <symbol id="svg-sprite__error" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.528 2.283a3 3 0 014.037 1.058l.003.005 8.47 14.14.008.014a3 3 0 01-2.565 4.5H3.519a3 3 0 01-2.565-4.5l.008-.014 8.47-14.14.858.514-.855-.519a3 3 0 011.093-1.058zm.618 2.094L2.683 18.506A1 1 0 003.536 20h16.928a1 1 0 00.853-1.494L12.855 4.379l-.001-.002a1 1 0 00-1.708 0z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1zM12 15a1 1 0 011 1v.5a1 1 0 11-2 0V16a1 1 0 011-1z" />
            </symbol>
        </defs>
    </svg>
    `;
    
    const template = document.createElement('template');
    template.innerHTML = sprite.trim();
    const body = document.querySelector('body');
    body.insertBefore(template.content.firstChild, body.firstElementChild);
})();
