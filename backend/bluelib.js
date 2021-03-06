// Base URL.
let base = 'https://www.thebluealliance.com/api/v3';

// TBA Object.
// This object must be created in order to access TBA and it's data, which requires an API key.
// To get an API key go here: https://www.thebluealliance.com/account
var TBA = function(apiKey, teamNumber, eventKey) {

    // API Key.
    this.apiKey = apiKey;

    // Team Number.
    this.teamNumber = teamNumber;

    // Event Key.
    this.eventKey = eventKey;

    // Base GET function, this is what all other requests will build off of.
    // Callback will only be run if data isn't null.
    this.get = function(url, callback) {
        let requestURL = base + url + '?X-TBA-Auth-Key=' + encodeURI(this.apiKey);
        $.getJSON(requestURL, function(data) {
            if (data !== null) {
                callback(data);
            }
        });
    };

    // Status, gets the status of TBA.
    this.status = function(callback) {
        this.get('/status', callback);
    }

};