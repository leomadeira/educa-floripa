// Obter o elemento do cabeçalho
var header = document.querySelector('header');

// Obter a posição inicial do cabeçalho
var headerOffset = header.offsetTop;

// Função para fazer o menu fixo
function fixarMenu() {
    if (window.pageYOffset >= headerOffset) {
        header.classList.add('menu-fixo');
    } else {
        header.classList.remove('menu-fixo');
    }
}

// Anexar um ouvinte de rolagem para chamar a função de fixação
window.addEventListener('scroll', fixarMenu);

// Abrir o modal ao clicar em "Registrar/Login"
document.getElementById("openModal").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("modal").style.display = "block";
});

// Fechar o modal ao clicar no botão "Fechar" (X)
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

// Fechar o modal ao clicar fora da área do modal
window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
});

// Adicione ação para o botão de Registro
document.getElementById("registerBtn").addEventListener("click", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Realize a lógica de registro aqui
    if (username && password) {
        alert("Registro realizado com sucesso para o usuário: " + username);
        document.getElementById("modal").style.display = "none";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Adicione ação para o botão de Login
document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Realize a lógica de login aqui
    if (username && password) {
        alert("Login realizado com sucesso para o usuário: " + username);
        document.getElementById("modal").style.display = "none";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Adicione ação para o link "Esqueci a senha"
document.getElementById("forgotPassword").addEventListener("click", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;

    // Realize a lógica de recuperação de senha aqui
    if (username) {
        alert("Instruções de recuperação de senha foram enviadas para o email associado a: " + username);
    } else {
        alert("Por favor, insira seu nome de usuário.");
    }
});
