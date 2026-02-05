/**
 * TEOREMA DAS COISAS - SCRIPT DE MENU DINÂMICO
 * Desenvolvido para André Melhor Miranda.
 * * Este script garante que os links funcionem em 3 ambientes sem alteração manual:
 * 1. Local (VS Code - Live Server)
 * 2. GitHub Pages (Pasta /teorema-das-coisas/)
 * 3. Domínio Próprio (teoremadascoisas.com.br)
 */

// 1. DETECÇÃO DO AMBIENTE
// Verificamos o nome da URL para decidir qual será o caminho base (raiz).
const hostname = window.location.hostname;
const isGithub = hostname.includes('github.io');
const isLocal = hostname === "127.0.0.1" || hostname === "localhost";

// 2. DEFINIÇÃO DA RAIZ (ROOT)
// Se for GitHub, precisamos incluir o nome do repositório.
// Se for local ou domínio próprio, usamos apenas a barra "/".
let rootPath = "/";

if (isGithub) {
    rootPath = "/teorema-das-coisas/";
}

// 3. CONTEÚDO DO MENU
// Usamos a variável ${rootPath} em todos os links para que eles sejam absolutos
// em relação à raiz do site, evitando o erro "Cannot GET" ao navegar entre pastas.
const menuHTML = `
<div class="container nav-container">
    <div class="logo">
        <img src="${rootPath}Imagens/logo-teorema-das-coisas.png" alt="Logo" class="logo-img"> 
        Teorema das Coisas
    </div>
    
    <button class="menu-toggle" id="mobile-menu" aria-label="Abrir menu">
        <i class="fa-solid fa-bars"></i>
    </button>

    <nav id="nav-menu">
        <ul>
            <li><a href="${rootPath}index.html">Início</a></li>
      
            <li class="dropdown">
                <a href="#">Biologia <i class="fa-solid fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="${rootPath}Biologia/Modulos-aula-1ano-biologia.html">1º Ano Biologia</a></li>
                </ul>
            </li> 

            <li class="dropdown">
                <a href="#">Química <i class="fa-solid fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="${rootPath}Quimica/quimica-geral.html">1º Ano Química</a></li>
                </ul>
            </li> 

            <li class="dropdown">
                <a href="#">Física <i class="fa-solid fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="${rootPath}Fisica/fisica-geral.html">1º Ano Física</a></li>
                </ul>
            </li> 
           
            <li><a href="https://www.youtube.com/@TeoremadasCoisas/" target="_blank">Nosso Canal</a></li>                
            <li><a href="https://www.xmath.com.br/p/apoie-o-canal-x-math-com-pix.html" target="_blank">Apoie Pix</a></li>
        </ul>
    </nav>
    <a href="#" class="btn-primary desktop-only">Inscreva-se</a>
</div>
`;

// 4. INJEÇÃO DO MENU E LÓGICA DO BOTÃO MOBILE
document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.querySelector("header");
    
    if (headerElement) {
        headerElement.innerHTML = menuHTML;

        const menuBtn = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');

        if (menuBtn && navMenu) {
            menuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                const icon = menuBtn.querySelector('i');
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.replace('fa-bars', 'fa-xmark');
                } else {
                    icon.classList.replace('fa-xmark', 'fa-bars');
                }
            });
        }
    }
});