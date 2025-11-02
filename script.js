
const phrases = [
  "Full-stack Developer",
  "AI & NLP Enthusiast",
  "Flask • PostgreSQL • RSA",
  "Open to Internships & Roles"
];
const typingEl = document.querySelector('.typing');

let idx = 0, char = 0, forward = true;
function typeLoop(){
  const current = phrases[idx];
  if(forward){
    char++;
    if(char <= current.length) typingEl.textContent = current.slice(0,char);
    else { forward = false; setTimeout(typeLoop, 900); return; }
  } else {
    char--;
    typingEl.textContent = current.slice(0,char);
    if(char === 0){ forward = true; idx = (idx+1)%phrases.length; }
  }
  setTimeout(typeLoop, forward ? 80 : 40);
}
typeLoop();

// reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:0.12});
revealEls.forEach(el=>observer.observe(el));

// set year
document.getElementById('year').textContent = new Date().getFullYear();
