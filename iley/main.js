const icon = document.querySelector('#container .icon');
const text = document.querySelector('#container h1');
const icon2 = document.querySelector('#container .surat .icon2');
const surat = document.querySelector('#container .surat');
const buton = document.querySelector('#container .main .btn-danger');
const buton2 = document.querySelector('#container .main .btn-success');
const mian = document.querySelector('#container .main');
const title = document.querySelector('#container .main h1');
const last = document.querySelector('#container .last');
let teks = ['are you sure?', 'say yes!', 'pweaseeeeee :(', 'why you do this to me?!', 'okey im sad', 'still no?!', 'okey, i will disable the button!'];

let teks2 = ['yesss, yuhuuuuuuuw', 'thank you baby <3!', 'i love youuuu <3'];

const gambarno = document.querySelector('#container .main img');
let size = 100;
let pencet = 0;
let index = 0;
let indgambar = 2;
let indyes = 10;
let index2 = 0;


icon.addEventListener('click', () =>{
    if(pencet < 7){
        size += 80;
        pencet++;
        icon.style.fontSize = size +'px';
    }

    if(pencet == 7){
        icon.style.display = 'none';
        text.style.display = 'none';
        surat.style.display = 'flex';

        setInterval(() => {
            surat.style.opacity = '1';
        }, 100);
    }
}) 


icon2.addEventListener('click', () => {
    icon2.classList.remove('fa-envelope');
    icon2.classList.add('fa-envelope-open');
    
    setTimeout(() => {
        surat.style.display = 'none';
    }, 1000)

    setTimeout(() => {
        mian.style.display = 'flex';
    }, 1000)
   
    
})

buton.addEventListener('click', () => {
    buton.innerHTML = teks[index];
    index++;
    gambarno.setAttribute('src', 'img' + indgambar +'.gif');
    indgambar++;

    if(index > teks.length){
        buton.style.display = 'none';
    }
    
});

buton2.addEventListener('click', () => {
    buton2.innerHTML = teks2[index2];
    index2++;
    gambarno.setAttribute('src', 'img' + indyes + '.gif');
    indyes++;

    if(index2 > teks2.length){
        buton2.style.display = 'none';
        buton.style.display = 'none';
        document.querySelector('#container .main').style.display = 'none';
        last.style.display ='flex';
    }
})


