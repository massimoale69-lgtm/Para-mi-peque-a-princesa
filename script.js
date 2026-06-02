
function startJourney(){document.getElementById('story').classList.remove('hidden');document.getElementById('story').scrollIntoView({behavior:'smooth'});}
const reunion=new Date('2027-04-01');
setInterval(()=>{let d=reunion-new Date();document.getElementById('countdown').innerText=Math.max(0,Math.floor(d/86400000))+' días';},1000);

function unlock(){
let v=document.getElementById('pw').value.trim().toLowerCase();
if(v==='risk it all'||v==='riskitall'){
document.getElementById('secret').classList.remove('hidden');
writeLetter();
}else alert('Pista: nuestra primera canción 🎵');
}

let started=false;
function writeLetter(){
if(started)return; started=true;
let txt=`Mi Princesa Nahiara:

Todo comenzó en un live de TikTok.

Una invitación a Minecraft.

Luego llegaron las partidas de Free Fire.

Los celos que ninguno admitía.

Y aquella primera llamada que hizo que todo se sintiera diferente.

Cuando veo tulipanes blancos y amarillos pienso en ti.
Cuando veo el color verde pienso en ti.
Cuando veo a Nala pienso en ti.

Y cuando pienso en el 1 de abril de 2027, pienso en el día en que por fin podré verte por primera vez.

Gracias por existir.

Te amo muchísimo.

Con amor,
Aleksandr 💚`;
let i=0,el=document.getElementById('letter');
let t=setInterval(()=>{el.textContent+=txt[i]||'';i++;if(i>txt.length){clearInterval(t);document.getElementById('proposal').classList.remove('hidden');}},20);
}

const no=document.getElementById('no');
['mouseover','touchstart'].forEach(e=>no.addEventListener(e,()=>{no.style.left=Math.random()*250+'px';no.style.top=Math.random()*80+'px';}));

document.getElementById('yes').onclick=()=>{
document.getElementById('ending').classList.remove('hidden');
for(let i=0;i<120;i++){setTimeout(()=>{
let x=document.createElement('div');x.className='item';x.innerHTML=Math.random()>.5?'🌷':'💚';
x.style.left=Math.random()*100+'vw';x.style.top=Math.random()*100+'vh';x.style.fontSize='30px';
document.body.appendChild(x);setTimeout(()=>x.remove(),4000);
},i*30)}
};

setInterval(()=>{
let p=document.createElement('div');p.className='item';p.innerHTML=Math.random()>.5?'🌷':'✨';
p.style.left=Math.random()*100+'vw';p.style.top='-20px';
document.getElementById('petals').appendChild(p);
let y=0;let t=setInterval(()=>{y+=2;p.style.transform=`translateY(${y}px)`;if(y>innerHeight){clearInterval(t);p.remove();}},20);
},400);
