let os = require('os');
let colors = require('colors');

function getOSinfo() {
    let type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    
    let release = os.release();
    let cpu = os.cpus()[0].model;
    let uptime = os.uptime();
    let userInfo = os.userInfo();
    
    console.log(colors.gray('System:'), type);
    console.log(colors.red ('Release:'), release);
    console.log(colors.blue('CPU model:'), cpu);
    console.log(colors.green('Uptime: ~'), (uptime / 60).toFixed(0), 'min');
    console.log(colors.yellow('User name:'), userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;