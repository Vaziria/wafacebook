
// bagian fungsi md5
var MD5=function(r){function n(r,n){return r<<n|r>>>32-n}function t(r,n){var t,o,e,u,f;return e=2147483648&r,u=2147483648&n,f=(1073741823&r)+(1073741823&n),(t=1073741824&r)&(o=1073741824&n)?2147483648^f^e^u:t|o?1073741824&f?3221225472^f^e^u:1073741824^f^e^u:f^e^u}function o(r,o,e,u,f,i,a){return t(n(r=t(r,t(t(function(r,n,t){return r&n|~r&t}(o,e,u),f),a)),i),o)}function e(r,o,e,u,f,i,a){return t(n(r=t(r,t(t(function(r,n,t){return r&t|n&~t}(o,e,u),f),a)),i),o)}function u(r,o,e,u,f,i,a){return t(n(r=t(r,t(t(function(r,n,t){return r^n^t}(o,e,u),f),a)),i),o)}function f(r,o,e,u,f,i,a){return t(n(r=t(r,t(t(function(r,n,t){return n^(r|~t)}(o,e,u),f),a)),i),o)}function i(r){var n,t="",o="";for(n=0;n<=3;n++)t+=(o="0"+(r>>>8*n&255).toString(16)).substr(o.length-2,2);return t}var a,c,C,g,h,d,v,S,m,l=Array();for(l=function(r){for(var n,t=r.length,o=t+8,e=16*((o-o%64)/64+1),u=Array(e-1),f=0,i=0;i<t;)f=i%4*8,u[n=(i-i%4)/4]=u[n]|r.charCodeAt(i)<<f,i++;return f=i%4*8,u[n=(i-i%4)/4]=u[n]|128<<f,u[e-2]=t<<3,u[e-1]=t>>>29,u}(r=function(r){r=r.replace(/\r\n/g,"\n");for(var n="",t=0;t<r.length;t++){var o=r.charCodeAt(t);o<128?n+=String.fromCharCode(o):o>127&&o<2048?(n+=String.fromCharCode(o>>6|192),n+=String.fromCharCode(63&o|128)):(n+=String.fromCharCode(o>>12|224),n+=String.fromCharCode(o>>6&63|128),n+=String.fromCharCode(63&o|128))}return n}(r)),d=1732584193,v=4023233417,S=2562383102,m=271733878,a=0;a<l.length;a+=16)c=d,C=v,g=S,h=m,v=f(v=f(v=f(v=f(v=u(v=u(v=u(v=u(v=e(v=e(v=e(v=e(v=o(v=o(v=o(v=o(v,S=o(S,m=o(m,d=o(d,v,S,m,l[a+0],7,3614090360),v,S,l[a+1],12,3905402710),d,v,l[a+2],17,606105819),m,d,l[a+3],22,3250441966),S=o(S,m=o(m,d=o(d,v,S,m,l[a+4],7,4118548399),v,S,l[a+5],12,1200080426),d,v,l[a+6],17,2821735955),m,d,l[a+7],22,4249261313),S=o(S,m=o(m,d=o(d,v,S,m,l[a+8],7,1770035416),v,S,l[a+9],12,2336552879),d,v,l[a+10],17,4294925233),m,d,l[a+11],22,2304563134),S=o(S,m=o(m,d=o(d,v,S,m,l[a+12],7,1804603682),v,S,l[a+13],12,4254626195),d,v,l[a+14],17,2792965006),m,d,l[a+15],22,1236535329),S=e(S,m=e(m,d=e(d,v,S,m,l[a+1],5,4129170786),v,S,l[a+6],9,3225465664),d,v,l[a+11],14,643717713),m,d,l[a+0],20,3921069994),S=e(S,m=e(m,d=e(d,v,S,m,l[a+5],5,3593408605),v,S,l[a+10],9,38016083),d,v,l[a+15],14,3634488961),m,d,l[a+4],20,3889429448),S=e(S,m=e(m,d=e(d,v,S,m,l[a+9],5,568446438),v,S,l[a+14],9,3275163606),d,v,l[a+3],14,4107603335),m,d,l[a+8],20,1163531501),S=e(S,m=e(m,d=e(d,v,S,m,l[a+13],5,2850285829),v,S,l[a+2],9,4243563512),d,v,l[a+7],14,1735328473),m,d,l[a+12],20,2368359562),S=u(S,m=u(m,d=u(d,v,S,m,l[a+5],4,4294588738),v,S,l[a+8],11,2272392833),d,v,l[a+11],16,1839030562),m,d,l[a+14],23,4259657740),S=u(S,m=u(m,d=u(d,v,S,m,l[a+1],4,2763975236),v,S,l[a+4],11,1272893353),d,v,l[a+7],16,4139469664),m,d,l[a+10],23,3200236656),S=u(S,m=u(m,d=u(d,v,S,m,l[a+13],4,681279174),v,S,l[a+0],11,3936430074),d,v,l[a+3],16,3572445317),m,d,l[a+6],23,76029189),S=u(S,m=u(m,d=u(d,v,S,m,l[a+9],4,3654602809),v,S,l[a+12],11,3873151461),d,v,l[a+15],16,530742520),m,d,l[a+2],23,3299628645),S=f(S,m=f(m,d=f(d,v,S,m,l[a+0],6,4096336452),v,S,l[a+7],10,1126891415),d,v,l[a+14],15,2878612391),m,d,l[a+5],21,4237533241),S=f(S,m=f(m,d=f(d,v,S,m,l[a+12],6,1700485571),v,S,l[a+3],10,2399980690),d,v,l[a+10],15,4293915773),m,d,l[a+1],21,2240044497),S=f(S,m=f(m,d=f(d,v,S,m,l[a+8],6,1873313359),v,S,l[a+15],10,4264355552),d,v,l[a+6],15,2734768916),m,d,l[a+13],21,1309151649),S=f(S,m=f(m,d=f(d,v,S,m,l[a+4],6,4149444226),v,S,l[a+11],10,3174756917),d,v,l[a+2],15,718787259),m,d,l[a+9],21,3951481745),d=t(d,c),v=t(v,C),S=t(S,g),m=t(m,h);return(i(d)+i(v)+i(S)+i(m)).toLowerCase()};


alert('activate');

const interval = 5;
let hash =  '';
const endpoint = 'http://bimakampret.test/kampret.php';


function get_hash(data){
    const text = JSON.stringify(data);
    return MD5(text);
}

function handler(){
    let datas = document.getElementsByClassName('_2aBzC');
    datas = [].slice.call(datas);

    let users = datas.map((data)=>{
        let user = data.innerText.split(/\r?\n/);

        let userobj = {
            user: user[0],
            time: user[1],
            msg: user[2],
        }



        return userobj;
    })

    let has = get_hash(users);
    
    if(hash != has){
        // console.log('changed running handle');
        update(users);
    } else {
        console.log('not change');
    }
    
    hash = has
}


function update(users){
    console.log('changed running update');
    let xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint);
    xhr.send(JSON.stringify(users));
}

setInterval(handler, interval*1000);



