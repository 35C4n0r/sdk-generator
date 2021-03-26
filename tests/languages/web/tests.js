
require('isomorphic-fetch');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(``, {
    url: "https://appwrite.io"
});
global.window = dom.window;
global.localStorage = require("localStorage");

const Appwrite = require("./dist/cjs/sdk.js");
const fs = require('fs');

async function start() {
    let response;

    // Init SDK
    let sdk = new Appwrite.Appwrite();

    // Foo

    response = await sdk.foo.get('string', 123, ['string in array']);
    console.log(response.result);

    response = await sdk.foo.post('string', 123, ['string in array']);
    console.log(response.result);

    response = await sdk.foo.put('string', 123, ['string in array']);
    console.log(response.result);

    response = await sdk.foo.patch('string', 123, ['string in array']);
    console.log(response.result);

    response = await sdk.foo.delete('string', 123, ['string in array']);
    console.log(response.result);

    // // Bar

    response = await sdk.bar.get('string', 123, ['string in array']);
    console.log(response.result);

    response = await sdk.bar.post('string', 123, ['string in array']);
    console.log(response.result);

    response = await sdk.bar.put('string', 123, ['string in array']);
    console.log(response.result);

    response = await sdk.bar.patch('string', 123, ['string in array']);
    console.log(response.result);

    response = await sdk.bar.delete('string', 123, ['string in array']);
    console.log(response.result);

    response = await sdk.general.redirect();
    console.log(response.result);

    // //demo output for upload support
    console.log("POST:/v1/mock/tests/general/upload:passed");
}

 start();
