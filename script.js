function sim() {
    alert("Sempre soube kkkkkkk");
    // redireciona para um URL apos aceitar
    location.href="https://www.youtube.com/watch?v=hvL1339luv0";
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei...");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
