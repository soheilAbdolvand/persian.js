/**
* PersianJs v0.3.0
* https://github.com/usablica/persian.js
* MIT licensed
*
* Copyright (C) 2012 usabli.ca and other contributors
*/
!function(){function t(t){this._str=t}function n(t){if(t){for(var n=["ي","ك","‍","دِ","بِ","زِ","ذِ","ِشِ","ِسِ","‌","ى"],r=["ی","ک","","د","ب","ز","ذ","ش","س","","ی"],e=0,i=n.length;i>e;e++)t=t.replace(new RegExp(n[e],"g"),r[e]);return this._str=t,this}}function r(t){if(t){for(var n=["ض","ص","ث","ق","ف","غ","ع","ه","خ","ح","ج","چ","ش","س","ی","ب","ل","ا","ت","ن","م","ک","گ","ظ","ط","ز","ر","ذ","د","پ","و","؟"],r=["q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",","?"],e=0,i=n.length;i>e;e++)t=t.replace(new RegExp(n[e],"g"),r[e]);return this._str=t,this}}function e(t){if(t){for(var n=["١","٢","٣","٤","٥","٦","٧","٨","٩","٠"],r=["۱","۲","۳","۴","۵","۶","۷","۸","۹","۰"],e=0,i=n.length;i>e;e++)t=t.replace(new RegExp(n[e],"g"),r[e]);return this._str=t,this}}function i(t){if(t){for(var n=["1","2","3","4","5","6","7","8","9","0"],r=["۱","۲","۳","۴","۵","۶","۷","۸","۹","۰"],e=0,i=n.length;i>e;e++)t=t.replace(new RegExp(n[e],"g"),r[e]);return this._str=t,this}}function u(t){if(t){for(var n="";n!=t;)n=t,t=t.replace(/(http\S+?)\%20/g,"$1‌‌‌_‌‌‌");return t=t.replace(/(http\S+)/g,function(t,n){return decodeURI(n)}),t=t.replace(/\u200c\u200c\u200c_\u200c\u200c\u200c/g,"%20"),this._str=t,this}}var s="0.3.0",c="undefined"!=typeof module&&module.exports,o=function(n){if(!n||""===n)throw new Error("Input is null or empty.");return new t(n)};o.version=s,o.fn=t.prototype={clone:function(){return o(this)},value:function(){return this._str},toString:function(){return this._str.toString()},set:function(t){return this._str=String(t),this},arabicChar:function(){return n.call(this,this._str)},arabicNumber:function(){return e.call(this,this._str)},fixURL:function(){return u.call(this,this._str)},englishNumber:function(){return i.call(this,this._str)},switchKey:function(){return r.call(this,this._str)}},c&&(module.exports=o),"undefined"==typeof ender&&(this.persianJs=o),"function"==typeof define&&define.amd&&define("persianJs",[],function(){return o})}();
//# sourceMappingURL=./persian-min.map