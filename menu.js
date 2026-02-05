/**
 * TEOREMA DAS COISAS - SCRIPT DE MENU DINÂMICO
 * Este script identifica o ambiente (Local vs GitHub) e injeta o HTML do menu.
 */

// 1. LÓGICA DE REFERENCIAL (O "CÉREBRO" DO LINK)
// Verificamos se o nome do domínio contém 'github.io'.
// Se sim, o baseURL será o nome da subpasta do repositório.
// Se não (estamos no VS Code ou num domínio próprio), o baseURL fica vazio.


// Como funciona a "equação" agora (no GitHub):
// O domínio é andremelhor.github.io.
// A condição isGithub é Verdadeira.
// Resultado: baseURL = "/teorema-das-coisas".
// Os links ficam: /teorema-das-coisas/index.html.
// Como funcionará no futuro (domínio próprio):
// O domínio será teoremadascoisas.com.br.
// A condição isGithub será Falsa (pois não tem "github.io" no nome).
// Resultado: baseURL = "" (vazio).
// Os links ficam automaticamente: /index.html.
// Por que isso é bom para você?
// Zero Manutenção: Você não precisa abrir o VS Code e editar link por link quando o domínio novo estiver no ar.
// Consistência: O seu logótipo, os links de Biologia, Química e Física continuarão a funcionar no primeiro segundo em que o site mudar de endereço.
// Escalabilidade: Se você decidir criar outro canal (como o MakerJogos ou o Unissonos) e usar essa mesma estrutura, já sabe como organizar os caminhos sem dar erro.
// Uma pequena observação de "segurança":
// A única coisa que você deve garantir quando mudar para o domínio próprio é que todos os seus arquivos (pastas Biologia, Imagens, etc.) continuem na raiz do repositório do GitHub. Se a estrutura de pastas não mudar, o código cuidará do resto.


const isGithub = window.location.hostname.includes('github.io');
const baseURL = isGithub ? '/teorema-das-coisas' : '';

// 2. DEFINIÇÃO DO CONTEÚDO (HTML DO MENU)
// Usamos a crase (`) para criar uma "Template String", que permite usar variáveis com ${}.
const menuHTML = `
<div class="container nav-container">
    <div class="logo">
        <img src="${baseURL}/Imagens/logo-teorema-das-coisas.png" alt="Logo" class="logo-img"> 
        Teorema das Coisas
    </div>
    
    <button class="menu-toggle" id="mobile-menu" aria-label="Abrir menu">
        <i class="fa-solid fa-bars"></i>
    </button>

    <nav id="nav-menu">
        <ul>
            <li><a href="${baseURL}/index.html">Início</a></li>
      
            <li class="dropdown">
                <a href="#">Biologia <i class="fa-solid fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="${baseURL}/Biologia/Modulos-aula-1ano-biologia.html">1º Ano Biologia</a></li>
                </ul>
            </li> 

            <li class="dropdown">
                <a href="#">Química <i class="fa-solid fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="#">1º Ano Química</a></li>
                </ul>
            </li> 

            <li class="dropdown">
                <a href="#">Física <i class="fa-solid fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="#">1º Ano Física</a></li>
                </ul>
            </li> 

            <li class="dropdown">
                <a href="#">Matemática <i class="fa-solid fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                    <li class="has-submenu">                           
                        <a href="#">Ensino Fundamental <i class="fa-solid fa-chevron-right"></i></a>                        
                        <ul class="submenu">
                            <li><a href="#">6º Ano</a></li>
                        </ul>
                    </li>
                </ul>
            </li> 
           
            <li><a href="https://www.youtube.com/@TeoremadasCoisas/" target="_blank">Nosso Canal</a></li>                
            <li><a href="https://www.xmath.com.br/2025/10/blog-post_0.html" target="_blank">Contato</a></li>    
            <li><a href="https://www.xmath.com.br/p/apoie-o-canal-x-math-com-pix.html" target="_blank">Apoie Pix</a></li>
        </ul>
    </nav>
    <a href="#" class="btn-primary desktop-only">Inscreva-se</a>
</div>
`;

// 3. INJEÇÃO E INTERATIVIDADE
// O código abaixo só roda quando o navegador terminar de carregar o HTML básico.
document.addEventListener("DOMContentLoaded", function() {
    
    // Selecionamos a tag <header> que existe no seu HTML
    const headerElement = document.querySelector("header");
    
    // Se o header existir, "injetamos" o menuHTML lá dentro
    if (headerElement) {
        headerElement.innerHTML = menuHTML;

        // Pegamos os elementos do menu mobile para fazer o "clique" funcionar
        const menuBtn = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');

        // Se o botão e o menu existirem na página, ativamos o evento de clique
        if (menuBtn && navMenu) {
            menuBtn.addEventListener('click', function() {
                // Alterna a classe 'active' (abre e fecha visualmente)
                navMenu.classList.toggle('active');
                
                // Troca o ícone de "barras" para o "X" quando o menu abre
                const icon = menuBtn.querySelector('i');
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        }
    }
});