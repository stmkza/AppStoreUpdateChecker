// Settings

// App ID
const appId = '626776655';

// Store Country
const country = 'jp';

// Latest Version
const latestVersion = '5.7.1';

// Check Interval
const checkInterval = 5000;

const fetchUrl = 'https://linkmaker.itunes.apple.com/ja-jp/details/' + appId + '?country=' + country;
const client = require('cheerio-httpcli');
setInterval(function(){
    client.fetch(fetchUrl, {}, function(error, $, response){
        const nowVersion = $('.version').text().replace('Version: ', '');
        if(latestVersion != nowVersion) {
            console.log('[Update] ' + latestVersion + ' => ' + nowVersion);
        }
    });
}, checkInterval);
