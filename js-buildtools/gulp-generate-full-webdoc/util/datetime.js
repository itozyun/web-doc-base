module.exports = {
    toISO8601, toUnixTime, toYYMMDD, toYYYY, toMM, toDD, toYYYYMMDDHHMM, toLocalString, toLocalARIAString
};

function toISO8601( unixtime ){
    // console.log( 'unixtime:' + unixtime )
    return new Date( unixtime ).toISOString();
};

function toUnixTime( strDateTime ){
    return parseFloat( new Date( strDateTime ).getTime() / 1000 / 60 ) * 60 * 1000;
};

function toYYMMDD( unixtime ){
    var d = new Date( unixtime ),
        yy = d.getFullYear(),
        mm = '0' + ( d.getMonth() + 1 ),
        dd = '0' + d.getDate();
    
    return yy.substr( yy.length - 2 ) + '/' + mm.substr( mm.length - 2 ) + '/' + dd.substr( dd.length - 2 );
};

function toYYYY( unixtime ){
    return new Date( unixtime ).getFullYear();
};

function toMM( unixtime ){
    var d = new Date( unixtime ),
        MM = '0' + ( d.getMonth() + 1 );

    return MM.substr( MM.length - 2 );
};

function toDD( unixtime ){
    var d = new Date( unixtime ),
        DD = '0' + d.getDate();

    return DD.substr( DD.length - 2 );
};

function toYYYYMMDDHHMM( unixtime ){
    var d = new Date( unixtime ),
        YY = d.getFullYear(),
        MM = '0' + ( d.getMonth() + 1 ),
        DD = '0' + d.getDate(),
        hh = '0' + d.getHours(),
        mm = '0' + d.getMinutes();
    
    return YY + '/' + MM.substr( MM.length - 2 ) + '/' + DD.substr( DD.length - 2 ) + ' ' +
           hh.substr( hh.length - 2 ) + ':' + mm.substr( mm.length - 2 );
};

//  2021年12月07日火曜日 04:45
function toLocalString( unixtime ){
    var d = new Date( unixtime ),
        YY = d.getFullYear(),
        MM = '0' + ( d.getMonth() + 1 ),
        DD = '0' + d.getDate(),
        hh = '0' + d.getHours(),
        mm = '0' + d.getMinutes();
    
    return YY + '年' + MM.substr( MM.length - 2 ) + '月' + DD.substr( DD.length - 2 ) + '日' +
           '日月火水木金土'.charAt( d.getDay() ) + '曜日 ' +
           hh.substr( hh.length - 2 ) + ':' + mm.substr( mm.length - 2 );
};

//  2021年12月07日火曜日 4時45分
function toLocalARIAString( unixtime ){
    var d = new Date( unixtime ),
        YY = d.getFullYear(),
        MM = ( d.getMonth() + 1 ),
        DD = d.getDate(),
        hh = d.getHours(),
        mm = d.getMinutes();
    
    return YY + '年' + MM + '月' + DD + '日' +
           '日月火水木金土'.charAt( d.getDay() ) + '曜日 ' +
           hh + '時' + mm + '分';
};