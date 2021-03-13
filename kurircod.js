form = document.getElementsByName('courier')[0]

let kurir = {
    "sicepat": 20,
    "J&T": 20
}

let kurirkey = Object.keys(kurir)

form.dataset.prev

form.onchange = function(){
    let key = form.dataset.prev
    if(kurirkey.includes(key)){
        myProduct["shipping"]["cod"]["percentage"] = kurir[key];
        console.log('custom trigger cod ongkir');
    }

}