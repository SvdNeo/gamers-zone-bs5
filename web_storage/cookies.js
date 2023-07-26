// Set a cookie with an expiration date
document.cookie = 'username=Lakshmikant; expires=Sat, 27 Jul 2023 00:00:00 UTC; path=/';

// Retrieve all cookies
const cookies = document.cookie;

// Remove a cookie by setting its expiration to a past date
document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';


// Function to set a cookie with an expiration date
function setCookie(name, value, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to retrieve a cookie by name
function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Function to remove a cookie by name
function removeCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Setting a cookie with an expiration of 30 days
setCookie('theme', 'dark', 30);

// Retrieving the value of the 'theme' cookie
const themePreference = getCookie('theme');

// Removing the 'theme' cookie
removeCookie('theme');
