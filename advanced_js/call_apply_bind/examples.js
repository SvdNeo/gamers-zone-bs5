function addClassToSelected(selector, className) {
    $(selector).each(function () {
        $(this).addClass(className);
    });
}

const elements = '.my-elements';
const cssClass = 'highlight';

addClassToSelected.apply(this, [elements, cssClass]);

function customMiddleware(req, res, next) {
    // Some middleware logic
    console.log(`Request received from: ${this.name}`);
    next();
}

const app = require('express')();
const person = { name: 'John' };

app.use(customMiddleware.bind(person));


function fetchUserDataSuccess(userData) {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: userData
    };
}

// Using apply to pass API response to action creator
const apiResponse = { name: 'Alice', age: 30 };
const action1 = fetchUserDataSuccess.apply(null, [apiResponse]);

// Alternatively, using call to pass API response to action creator
const action2 = fetchUserDataSuccess.call(null, apiResponse);

