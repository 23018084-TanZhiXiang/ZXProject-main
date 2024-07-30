// Presence of "document" signifies that this JS file is meant for browser to execute.
// As such, do NOT utilize NodeJS to execute this file (you can try, but it doesn't work)
// This file injects Bootstrap JS and Bootstrap CSS into the HTML files.

document.addEventListener('DOMContentLoaded', () => {       //learn in c210 incase forget is just ensuring to run aft html parsed
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';      
    link.integrity = 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC';  //SRI ensure css not being tampered with
    link.crossOrigin = 'anonymous';                                                              //supports RSI
    document.head.appendChild(link);

    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    let jquery = document.createElement('script');
    jquery.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    document.body.appendChild(jquery);
});



/*  verifyin of da Admin Status */
// Internal Function: Check for admin cookie. This function will inherit to the other client JS files.
function verifyAdminStatus() {
    let cookies = document.cookie.split(';');
    for(let cookie of cookies) {
        cookie = cookie.trim();
        if(cookie.startsWith('user=')) {
            let value = cookie.substring('user='.length);
            if(value === 'admin') {
                console.log("Recognised that this user is an admin.")
                return true;
            }
        }
        continue;
    }  
    return false;
}
/*  verifyin of da Admin Status */



// Internal Function: Log user out and redirect.
function logout() {
    document.write("<html><body style='text-align: center; font-size: 20px;'>Logging out...</body></html>"); //overwritin thats all, replace code
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Remove by expiring the cookie early.
    setTimeout(() => window.location.href = "/", 2000); // Force a redirect to reload the page.
}