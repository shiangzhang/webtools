function isWeWork() {
    return /(wxwork)/i.test(navigator.userAgent);
}
function isWeWorkMacOrWin() {
    return /(wxwork)/i.test(navigator.userAgent) && /(Windows)|(Macintosh)/i.test(navigator.userAgent);
}
function isSafari() {
    return /safari/i.test(navigator.userAgent);
}

function isMobile() {
    return /(mobile)/i.test(navigator.userAgent);
}

function isAndroid() {
    return /(android)/i.test(navigator.userAgent);
}

function isIOS() {
    return /(iphone|ipad|ipod)/i.test(navigator.userAgent);
}

function isIPad() {
    return /(ipad)/i.test(navigator.userAgent);
}

function isMac() {
    return !isMobile() && /Mac OS X/i.test(navigator.userAgent);
}

// --------------   浏览器   ------------------
function isIE() {
    return (/msie/i.test(navigator.userAgent) && !this.isOpera()) || /trident/i.test(navigator.userAgent);
}

function isIE9() {
    if (this.isIE()) {
        const version = navigator.appVersion.split(';');
        const trimVersion = version[1].replace(/[ ]/g, '');
        return trimVersion === 'MSIE9.0';
    }
    return false;
}

function isIE10() {
    if (this.isIE()) {
        const version = navigator.appVersion.split(';');
        const trimVersion = version[1].replace(/[ ]/g, '');
        return trimVersion === 'MSIE10.0';
    }
    return false;
}

function isIE11() {
    return window.ActiveXObject;
}

function isEdge() {
    return /edge/i.test(navigator.userAgent);
}

function isChrome() {
    return /chrome/i.test(navigator.userAgent);
}

function getChromeVersion() {     
    let raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : 0;
}

function isFireFox() {
    return /firefox/i.test(navigator.userAgent);
}

function isOpera() {
    return /opera/i.test(navigator.userAgent);
}

function isSafari() {
    return /safari/i.test(navigator.userAgent);
}

function isQBFamily() {
    // 包含 MQQBrowser
    return /QQBrowser/i.test(navigator.userAgent);
}

function isMQB() {
    // 包含 MQBHD ipad:MQBHD
    return /MQB/i.test(navigator.userAgent);
}

function isMQBFamily() {
    // 注意：Android QQ/TIM/WeChat/WeWork 都带了 'MQQBrowser' 和 'TBS'
    return /MQQBrowser/i.test(navigator.userAgent);
}

