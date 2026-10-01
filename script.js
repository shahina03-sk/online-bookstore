const books=[
{id:1,title:"The Silent Garden",author:"Maya Reed",price:399,cat:"Fiction",emoji:"🌿",desc:"A quiet story about memory, family and new beginnings."},
{id:2,title:"Java in Practice",author:"Daniel Stone",price:649,cat:"Technology",emoji:"☕",desc:"Practical patterns for writing clean Java applications."},
{id:3,title:"Design Your Days",author:"Nora Wells",price:499,cat:"Self Help",emoji:"☀️",desc:"Simple systems for focus, habits and meaningful work."},
{id:4,title:"Midnight Letters",author:"Ari Blake",price:449,cat:"Fiction",emoji:"✉️",desc:"An atmospheric collection of letters and hidden stories."},
{id:5,title:"Spring Essentials",author:"Leo Carter",price:699,cat:"Technology",emoji:"🌱",desc:"Build maintainable Spring MVC applications step by step."},
{id:6,title:"The Small Start",author:"Isha Ray",price:359,cat:"Self Help",emoji:"🚀",desc:"A practical guide to starting before you feel ready."}
];
let cart=JSON.parse(localStorage.bookCart||"[]"); const $=id=>document.getElementById(id);
function render(){let q=$('search').value.toLowerCase(),c=$('category').value;let list=books.filter(b=>(b.title.toLowerCase().includes(q)||b.author.toLowerCase().includes(q))&&(c==='all'||b.cat===c));$('count').textContent=`${list.length} books`;$('booksGrid').innerHTML=list.map(b=>`<article class="card book-card"><div class="book-cover">${b.emoji}</div><span class="pill">${b.cat}</span><h3>${b.title}</h3><p class="muted">by ${b.author}</p><p class="muted">${b.desc}</p><div><span class="price">₹${b.price}</span> <button class="btn btn-primary" onclick="add(${b.id})">Add to cart</button></div></article>`).join('');renderCart()}
function add(id){cart.push(id);save();toast('Book added to cart');openCart()}
function save(){localStorage.bookCart=JSON.stringify(cart);renderCart()}
function renderCart(){let groups=[...new Set(cart)];$('cartCount').textContent=cart.length;let total=0;$('cartItems').innerHTML=groups.map(id=>{let b=books.find(x=>x.id===id),qty=cart.filter(x=>x===id).length;total+=b.price*qty;return `<div class="drawer-item"><div class="mini-cover">${b.emoji}</div><div><b>${b.title}</b><div class="muted">₹${b.price} × ${qty}</div></div><button class="btn btn-light" onclick="removeOne(${id})">−</button></div>`}).join('')||'<div class="empty">Your cart is empty.</div>';$('total').textContent='₹'+total}
function removeOne(id){let i=cart.lastIndexOf(id);if(i>=0)cart.splice(i,1);save()}
function openCart(){$('drawer').classList.add('open');$('overlay').classList.add('show')}function closeCart(){$('drawer').classList.remove('open');$('overlay').classList.remove('show')}
$('search').oninput=render;$('category').onchange=render;$('cartBtn').onclick=openCart;$('close').onclick=closeCart;$('overlay').onclick=closeCart;
$('checkout').onclick=()=>{if(!cart.length)return toast('Your cart is empty');cart=[];save();closeCart();toast('Order placed successfully!')};
function toast(t){$('toast').textContent=t;$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),2200)}render();
