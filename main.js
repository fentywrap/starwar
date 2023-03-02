'use strict';

function returnURLStarWarsAPI(baseURL, numberId = 0) {

    let urlFull = new URL(baseURL);

    // parsing the url for a specific id.json
    if (numberId != 0) {
        urlFull.href += `/id/${numberId}.json`
    } else { // parsing the general api url to all.json
        urlFull.href += '/all.json';
    }

    return urlFull.href;
}

const returnRandomNumber = (range) => Math.ceil(Math.random() * range);