// Settings

// App ID
const appId = '626776655';

// Store Country
const country = 'jp';

// Check Interval
const checkInterval = 5000;

const fetchUrl = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?country=' + country + '&entity=software&term=' + appId

const http = require('http');

var latestVersion = '';

setInterval(function(){
    http.get(fetchUrl, function(res){
        let data = '';
        res.on('data', function(c){data += c;});
        res.on('end', function(){
            res = JSON.parse(data);
            if(res.results[0].version != latestVersion) {
                latestVersion = res.results[0].version;
                console.log('Latest Version: ' + latestVersion);
            }
        });
    }).on('error', function(ev){
        console.log(e.message);
    });
}, checkInterval);
