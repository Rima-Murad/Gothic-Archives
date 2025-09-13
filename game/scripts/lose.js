const shelfFiction = document.getElementById('return-fiction');
const shelfHistory = document.getElementById('return-history')
const description = document.getElementById('description')
const currentURL = window.location.pathname;

// opens and closes the book when you click on inventory

inventoryImg.addEventListener('click', () => {

    // if at incorrect shelf location, display losing image
    if (currentURL.includes('return.html')) { // check that msg has not been displayed
        if ( !(document.getElementById('secret-msg')) ) {
            const secretMsg = document.createElement('p');
            secretMsg.id = 'secret-msg';
            secretMsg.innerHTML = `You flip to the page with the number on the window... <br>
                It says "The answer is in <span style='color: slateblue;'> PLAIN SIGHT. </span>"`;
            textWindow.appendChild(secretMsg);
        }
    } 
});