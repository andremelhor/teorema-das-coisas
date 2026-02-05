


// 1. Definimos o conteúdo do Menu
const menuHTML = `


<div class="container nav-container">
        <div class="logo">
            <img src="../Imagens/logo-teorema-das-coisas.png" alt="Logo" class="logo-img"> 
            Teorema das Coisas
        </div>
        
        <button class="menu-toggle" id="mobile-menu" aria-label="Abrir menu">
            <i class="fa-solid fa-bars"></i>
        </button>

        <nav id="nav-menu">
            <ul>
                <li><a href="../index.html">Início</a></li>
          
                <li class="dropdown">
                    <a href="#">Biologia<i class="fa-solid fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                       <li><a href="teorema-das-coisas/Biologias/Modulos-aula-1ano-biologia.html">1º Ano Biologia</a></li>
                <!--   <li><a href="#">2º Ano Biologia</a></li>
                       <li><a href="#">3º Ano Biologia</a></li> -->
                    </ul>
                </li> 
                    <li class="dropdown">
                    <a href="#">Química<i class="fa-solid fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                       <li><a href="#">1º Ano Química</a></li>
                <!--   <li><a href="#">2º Ano Química</a></li>
                        <li><a href="#">3º Ano Química</a></li> -->
                    </ul>
                </li> 
                    <li class="dropdown">
                    <a href="#">Física<i class="fa-solid fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                       <li><a href="#">1º Ano Física</a></li>
                <!--   <li><a href="#">2º Ano Física</a></li>
                       <li><a href="#">3º Ano Física</a></li> -->
                    </ul>
                </li> 
                </li> 
                    <li class="dropdown">
                    <a href="#">Matemática<i class="fa-solid fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                      
                            <li class="has-submenu">                           
                               <a href="#">Ensino Fundamental<i class="fa-solid fa-chevron-right"></i></a>                        
                                 <ul class="submenu">
                                    <li><a href="#">6º Ano</a></li>
                            <!--       <li><a href="#">7º Ano</a></li>
                                    <li><a href="#">8º Ano</a></li>
                                    <li><a href="#">9º Ano</a></li> -->
                                 </ul>
                            </li>
              <!--    <li class="has-submenu">                           
                             <a href="#">Ensino Médio<i class="fa-solid fa-chevron-right"></i></a>                        
                                 <ul class="submenu">
                                     <li><a href="#">1º Ano</a></li>
                                     <li><a href="#">2º Ano</a></li>
                                     <li><a href="#">3º Ano</a></li>
                                 </ul>
                         </li> 
                        <li><a href="#">Ensino Superior</a></li>
                        <li><a href="#">Concurso</a></li> -->
                    </ul>
                   </li> 
               
                <li><a href="https://www.youtube.com/@TeoremadasCoisas/">Nosso Canal</a></li>                
                <li><a href="https://www.xmath.com.br/2025/10/blog-post_0.html">Contato</a></li>    
                <li><a href="https://www.xmath.com.br/p/apoie-o-canal-x-math-com-pix.html">Apoie Pix</a></li>
            </ul>
        </nav>
        <a href="#" class="btn-primary desktop-only">Inscreva-se</a>
    </div>


`;

// 2. Injeta o menu e ativa a inteligência de clique
document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.querySelector("header");
    if (headerElement) {
        headerElement.innerHTML = menuHTML;

        const menuBtn = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');

        // Função que abre/fecha ao clicar
        menuBtn.addEventListener('click', function() {
            // Liga/Desliga a visibilidade do menu
            navMenu.classList.toggle('active');
            
            // Pega o ícone dentro do botão
            const icon = menuBtn.querySelector('i');
            
            // Lógica: Se tem bars, troca por xmark. Se tem xmark, troca por bars.
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }
});