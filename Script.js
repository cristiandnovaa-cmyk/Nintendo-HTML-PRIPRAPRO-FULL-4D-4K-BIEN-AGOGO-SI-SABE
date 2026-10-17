/* Lógica de index.html - maqueta inspirada en nintendo.com/es-co */

/* ---------- Datos ---------- */
const BASE = "https://www.nintendo.com/es-co/";
const slides = [
  {t:"Nintendo Switch Sports Resort", d:"Compite en 12 deportes distintos, solo o con un amigo. Disponible el 22 de octubre en Nintendo Switch 2.", cta:"Más información", href:"store/products/nintendo-switch-sports-resort-switch-2/", c:["#0077c8","#00294d"], s:"Sports"},
  {t:"The Legend of Zelda: Ocarina of Time", d:"Exclusivo para la consola Nintendo Switch 2. Disponible el 5 de noviembre.", cta:"Más información", href:"store/products/the-legend-of-zelda-ocarina-of-time-switch-2/", c:["#2e8b57","#0d2f1c"], s:"Zelda"},
  {t:"Fire Emblem: Fortune's Weave", d:"Cuatro héroes y un destino por tejer. Ya disponible, con Pase de expansión.", cta:"Más información", href:"store/products/fire-emblem-fortunes-weave-switch-2/", c:["#6a3fb5","#1c0f3d"], s:"FE"},
  {t:"Bluey's Happy Snaps", d:"¡Juega, toma fotos de divertidos recuerdos y explora el mundo de Bluey como nunca antes!", cta:"Más información", href:"store/products/blueys-happy-snaps-switch-2/", c:["#f59e0b","#7c3a00"], s:"Bluey"}
];

const featured = [
  ["Call of Duty: Modern Warfare 4","Acceso anticipado a Campaña, ya disponible","Nintendo Switch 2","store/products/call-of-duty-modern-warfare-4-standard-edition-switch-2/"],
  ["Colección Halloween","Desde dulces banquetes hasta tenebrosos aullidos, celebra esta temporada","Más información","store/showroom/halloween-collection/"],
  ["Fire Emblem: Fortune's Weave – Pase de expansión","Disponible ya","Nintendo Switch 2","store/products/fire-emblem-fortunes-weave-expansion-pass-70070000041191-switch-2/"],
  ["Íconos de usuario de Halloween","¿Quieres renovar tu ícono de usuario?","Noticias y eventos","whatsnew/los-elementos-iconicos-inspirados-en-halloween-estan-aqui-por-tiempo-limitado/"],
  ["Pikmin 4 – Switch 2 Edition + Dandori Academy","Paquete de mejora","Nintendo Switch 2","store/products/pikmin-4-nintendo-switch-2-edition-plus-dandori-academy-upgrade-pack-switch-2/"],
  ["Minecraft","Reserva ya","Nintendo Switch 2","store/products/minecraft-switch-2/"],
  ["KINGDOM HEARTS Collection [I～III]","Disponible ya","Nintendo Switch 2","store/products/kingdom-hearts-collection-i-iii-switch-2/"],
  ["Resident Evil 2 Deluxe Edition","Reserva ya","Nintendo Switch 2","store/products/resident-evil-2-deluxe-edition-switch-2/"],
  ["Xenoblade Chronicles 3 – Switch 2 Edition","Paquete de mejora","Nintendo Switch 2","store/products/xenoblade-chronicles-3-nintendo-switch-2-edition-upgrade-pack-switch-2/"]
];

const news = [
  ["16/10/26","¡Entra en calor con algunos deportes nuevos y conocidos en Nintendo Switch Sports Resort!","El 22 de octubre podrás competir en 12 deportes distintos, ya sea en el modo para un solo jugador o con un amigo.","whatsnew/entra-en-calor-con-algunos-deportes-nuevos-y-conocidos-en-nintendo-switch-sports-resort/"],
  ["15/10/26","¡Llega contenido descargable de pago a Fire Emblem: Fortune's Weave! ¡La oleada 1 ya está disponible!","Mira el video para ver un adelanto del contenido descargable de pago Pase de expansión.","whatsnew/llega-contenido-descargable-de-pago-a-fire-emblem-fortunes-weave-la-oleada-1-ya-esta-disponible/"],
  ["15/10/26","Los elementos icónicos inspirados en Halloween están aquí por tiempo limitado","Renueva tu ícono de usuario con la temporada más tenebrosa del año.","whatsnew/los-elementos-iconicos-inspirados-en-halloween-estan-aqui-por-tiempo-limitado/"],
  ["15/10/26","¡Ya está disponible Bluey's Happy Snaps!","¡Juega, toma fotos de divertidos recuerdos y explora el mundo de Bluey como nunca antes!","whatsnew/ya-esta-disponible-blueys-happy-snaps-juega-toma-fotos-de-divertidos-recuerdos-y-explora-el-mundo-de-bluey-como-nunca-antes-en-blueys-happy-snaps/"],
  ["14/10/26","¡Este es el último adelanto de The Legend of Zelda: Ocarina of Time!","Disponible el 5 de noviembre.","whatsnew/este-es-el-ultimo-adelanto-de-the-legend-of-zelda-ocarina-of-time-disponible-el-5-de-noviembre/"],
  ["13/10/26","¡Adéntrate en una experiencia Just Dance totalmente nueva!","Celebra las canciones, los estilos y los recuerdos que marcaron a generaciones.","whatsnew/adentrate-en-una-experiencia-just-dance-totalmente-nueva-que-celebra-las-canciones-los-estilos-y-los-recuerdos-que-marcaron-a-generaciones/"]
];

// [título, fecha, precio, precioAnterior|null, flag|null, demo?]
const best = [
  ["Hogwarts Legacy","14/11/23",219999],
  ["The Witcher 3: Wild Hunt — Remastered","29/9/26",177999],
  ["Minecraft Dungeons II","29/9/26",119900],
  ["Minecraft","1/9/21",91900],
  ["ASSASSIN'S CREED THE EZIO COLLECTION","17/2/22",152900],
  ["Fire Emblem: Fortune's Weave","17/9/26",279900],
  ["Pokémon Edición Rojo Fuego (Inglés)","27/2/26",79900],
  ["LEGO Superhéroes de Marvel","5/10/21",152990],
  ["Middle-earth: Shadow of Mordor GOTY","30/9/26",91900],
  ["Castlevania Dominus Collection","27/8/24",79900],
  ["LEGO Harry Potter Colección","7/9/22",82999],
  ["Mario + Rabbids Sparks of Hope","20/10/22",229900,null,null,true],
  ["Gang Beasts","7/10/21",74999],
  ["Castlevania Advance Collection","23/9/21",79000],
  ["Stardew Valley","2/5/19",32000]
];
const fresh = [
  ["Fire Emblem: Fortune's Weave","17/9/26",279900],
  ["Xenoblade Chronicles 2 – Switch 2 Edition","30/7/26",279900],
  ["Splatoon Raiders","23/7/26",199900],
  ["CRISIS CORE –FINAL FANTASY VII– REUNION","9/9/26",204000],
  ["Rhythm Heaven Groove","2/7/26",159900,null,null,true],
  ["Star Fox","25/6/26",199900,null,null,true],
  ["Yoshi and the Mysterious Book","21/5/26",239900,null,null,true],
  ["KINGDOM HEARTS Collection [I～III]","8/10/26",277400,null,"¡Nuevo!"],
  ["KINGDOM HEARTS III + Re Mind (DLC)","8/10/26",148000,null,"¡Nuevo!"],
  ["Hell is Us","8/10/26",182900,null,"¡Nuevo!"],
  ["Disney Epic Mickey: Rebrushed","6/10/26",121900,null,"¡Nuevo!"],
  ["Octopath Traveler","1/10/26",328600],
  ["OCTOPATH TRAVELER II","1/10/26",238000],
  ["EA SPORTS FC 27","25/9/26",299999],
  ["RuneScape: Dragonwilds","15/9/26",80000],
  ["Diablo IV: Age of Hatred Collection","15/9/26",296900],
  ["DRAGON QUEST XI S – Definitive Edition","24/9/26",165000],
  ["SHINOBI: Art of Vengeance","24/9/26",115990],
  ["LEGO Batman: El Legado del Caballero de la Noche","18/9/26",234999],
  ["Woodo – Switch 2 Edition","16/9/26",51592,64490,"-20%"],
  ["NBA 2K27","4/9/26",188789,269699,"-30%"],
  ["Onimusha: Way of the Sword","4/9/26",249000,null,null,true],
  ["ELDEN RING Tarnished Edition","28/8/26",239900],
  ["The Elder Scrolls IV: Oblivion Remastered","11/8/26",199900],
  ["Lies of P: Complete Edition","5/8/26",189900]
];

/* ---------- Utilidades ---------- */
const cop = n => "$ " + n.toLocaleString("es-CO");
const hue = s => { let h=0; for(const ch of s) h=(h*31+ch.charCodeAt(0))%360; return h; };
const grad = s => { const h=hue(s); return `linear-gradient(145deg,hsl(${h} 65% 45%),hsl(${(h+40)%360} 70% 25%))`; };
const $ = id => document.getElementById(id);
const toast = (msg) => { const t=$("toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove("show"),2200); };

/* ---------- Hero ---------- */
let cur = 0, timer;
$("slides").innerHTML = slides.map((s,i)=>`
  <div class="slide ${i===0?"active":""}" style="--bg-slide:linear-gradient(120deg,${s.c[0]},${s.c[1]})" role="group" aria-label="${i+1} de ${slides.length}">
    <div class="wrap">
      <h1>${s.t}</h1><p>${s.d}</p>
      <a class="btn white" href="${BASE+s.href}" target="_blank" rel="noopener">${s.cta}</a>
    </div>
  </div>`).join("");
$("thumbs").innerHTML = slides.map((s,i)=>`<button class="${i===0?"on":""}" style="background:linear-gradient(135deg,${s.c[0]},${s.c[1]})" aria-label="Ir a ${s.t}">${s.s}</button>`).join("");
function go(i){
  cur = (i+slides.length)%slides.length;
  document.querySelectorAll(".slide").forEach((el,k)=>el.classList.toggle("active",k===cur));
  document.querySelectorAll("#thumbs button").forEach((el,k)=>el.classList.toggle("on",k===cur));
}
function auto(){ clearInterval(timer); if(!matchMedia("(prefers-reduced-motion:reduce)").matches) timer=setInterval(()=>go(cur+1),6000); }
$("prev").onclick=()=>{go(cur-1);auto()};
$("next").onclick=()=>{go(cur+1);auto()};
document.querySelectorAll("#thumbs button").forEach((b,i)=>b.onclick=()=>{go(i);auto()});
$("hero").addEventListener("mouseenter",()=>clearInterval(timer));
$("hero").addEventListener("mouseleave",auto);
auto();

/* ---------- Destacados ---------- */
$("featured").innerHTML = featured.map(([t,sub,tag,href])=>`
  <a class="tile" href="${BASE+href}" target="_blank" rel="noopener">
    <div class="art" style="background:${grad(t)}">${t}</div>
    <div class="body"><span class="tag">${tag}</span><span>${sub}</span><span class="cta">Más información</span></div>
  </a>`).join("");

/* ---------- Novedades ---------- */
$("news").innerHTML = news.map(([d,t,p,href])=>`
  <article><time>${d}</time><h3>${t}</h3><p>${p}</p>
  <a class="more" href="${BASE+href}" target="_blank" rel="noopener">Leer más</a></article>`).join("");

/* ---------- Juegos ---------- */
function gameCard([t,date,price,old,flag,demo]){
  return `<div class="game">
    <div class="cover" style="background:${grad(t)}">${flag?`<span class="flag ${old?"off":""}">${flag}</span>`:""}${t}</div>
    <div class="info">
      <span class="date">${date}</span>
      ${demo?'<span class="demo">Demo gratuito</span>':""}
      <span class="price">${cop(price)}${old?`<s>${cop(old)}</s>`:""}</span>
      <button class="btn ghost add" style="margin-top:8px;padding:6px 12px;font-size:13px" data-t="${t.replace(/"/g,"&quot;")}">Añadir</button>
    </div></div>`;
}
$("best").innerHTML  = best.map(gameCard).join("");
$("fresh").innerHTML = fresh.map(gameCard).join("");

/* ---------- Carrito (simulado) ---------- */
let cart = 0;
document.addEventListener("click",e=>{
  const add = e.target.closest(".add");
  if(add){ cart++; $("cartCount").textContent=cart; toast(`Añadido: ${add.dataset.t}`); }
  const tt = e.target.closest("[data-toast]");
  if(tt){ e.preventDefault(); toast(tt.dataset.toast); }
});
$("cartBtn").onclick=()=>toast(cart?`Tienes ${cart} artículo(s) en el carrito`:"Tu carrito está vacío");

/* ---------- Menú móvil ---------- */
$("burger").onclick=()=>{
  const open=$("menu").classList.toggle("open");
  $("burger").setAttribute("aria-expanded",open);
};