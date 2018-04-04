// Settings

// App ID
const appId = '626776655';

// Store Country
const country = 'jp';

// Check Interval
const checkInterval = 3000;

const fetchUrl = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?country=' + country + '&entity=software&term=' + appId

const http = require('http');

var latestVersion = '';
var msg = '';

setInterval(function(){
    const dt = new Date();
    const now = padding2(dt.getHours()) + ':' + padding2(dt.getMinutes()) + ':' + padding2(dt.getSeconds());
    http.get(fetchUrl, function(res){
        let data = '';
        res.on('data', function(c){data += c;});
        res.on('end', function(){
            res = JSON.parse(data);
            if(res.results[0].version != latestVersion) {
                latestVersion = res.results[0].version;
                msg = 'Version: ' + latestVersion;
                process.stdout.write('\n[' + now + '] ' + msg);
            } else {
                process.stdout.write('\r[' + now + '] ' + msg);
            }
        });
    }).on('error', function(ev){
        console.log(e.message);
    });
}, checkInterval);

function padding2(num){
    if(num < 10) {
        num = '0' + num;
    }
    return num.toString();
}
