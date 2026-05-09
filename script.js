<script>
document.addEventListener('DOMContentLoaded', () => {
    
    const overlay = document.createElement('div');
    overlay.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:9999; display:flex; flex-direction:column; justify-content:center; align-items:center; color:white; font-family:Arial; transition: 0.5s;";
    overlay.innerHTML = `<h1 style="font-size:50px; color:yellow;">FLASHCARD GAME</h1><button id='startBtn' style='padding:20px 40px; font-size:24px; cursor:pointer; border-radius:10px; background:blue; color:white; border:none;'>CHALLENGE START</button>`;
    document.body.appendChild(overlay);

    document.getElementById('startBtn').onclick = () => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 500);
        
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.style.transform = "rotateY(180deg)";
                setTimeout(() => card.style.transform = "rotateY(0deg)", 1000);
            }, i * 150);
        });
    };

    const scoreBox = document.createElement('div');
    scoreBox.innerHTML = "SCORE: <span id='pts'>0</span>";
    scoreBox.style.cssText = "position:fixed; top:10px; left:10px; background:red; color:white; padding:15px; font-weight:bold; font-size:25px; border-radius:50%; border:3px solid white; box-shadow: 0 0 15px black;";
    document.body.appendChild(scoreBox);

    let score = 0;
    const cards = document.querySelectorAll('td');

    cards.forEach(card => {
        card.onclick = function() {
            score += 10;
            document.getElementById('pts').innerText = score;
            
            this.style.transition = "0.3s";
            this.style.transform = "translateY(-20px) rotateY(180deg)";
            setTimeout(() => {
                this.style.transform = "translateY(0) rotateY(180deg)";
            }, 300);
        };
    });
});
</script>
