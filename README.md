# Jogo da Memória - CCIPRA 2023

Um jogo interativo da memória desenvolvido para o evento **CCIPRA 2023**, projetado para rodar em um telão touchscreen de 40 polegadas com o objetivo de divulgar e engajar o público nos próximos eventos.

## 📋 Sobre o Projeto

Este projeto foi criado como uma ferramenta de marketing interativo e entretenimento para o evento CCIPRA 2023. O jogo foi otimizado para funcionar em telas sensíveis ao toque de grande formato, oferecendo uma experiência imersiva e divertida para todos os visitantes.

## ✨ Funcionalidades

- **Jogo Interativo**: Encontre todos os 5 pares de cartas para vencer
- **Sistema de Pontuação**: 
  - Contador de movimentos em tempo real
  - Sistema de estrelas (até 3 ⭐) baseado no desempenho
  - Cronômetro para rastrear o tempo de jogo
- **Modal de Vitória**: Exibe estatísticas finais com parabéns personalizados
- **Reinicialização Dinâmica**: Botão para reiniciar o jogo a qualquer momento
- **Shuffle Inteligente**: Algoritmo Fisher-Yates para embaralhamento justo das cartas
- **Responsivo**: Otimizado para diferentes tamanhos de tela (mobile, tablet e desktop)

## 🛠️ Stack Tecnológico

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: 
  - Flexbox para layout responsivo
  - Animações e transições (flip de cartas, pulse)
  - Media queries para diferentes dispositivos
- **JavaScript (Vanilla)**: 
  - Lógica de jogo sem dependências externas
  - Event listeners para interatividade
  - Manipulação do DOM

## 📁 Estrutura do Projeto

```
jogo-da-memoria-ccipra/
├── index.html       # Estrutura HTML principal
├── script.js        # Lógica do jogo em JavaScript
├── style.css        # Estilos CSS com responsividade
└── img/             # Imagens e assets do jogo
    ├── 1.png
    ├── 2.png
    ├── 3.png
    ├── 4.png
    ├── 5.png
    ├── bg-memory-game.webp
    └── Vault-Boy-Thumb-Up.jpg
```

## 🎮 Como Jogar

1. **Clique nas cartas** para revelá-las
2. **Encontre os pares** clicando em duas cartas com a mesma imagem
3. **Complete todos os 5 pares** para vencer o jogo
4. **Observe sua pontuação**:
   - Movimentos realizados
   - Tempo decorrido
   - Classificação em estrelas

## ⚙️ Principais Funções

| Função | Descrição |
|--------|-----------|
| `shuffle(array)` | Embaralha as cartas usando o algoritmo Fisher-Yates |
| `startGame()` | Inicializa o tabuleiro com cartas embaralhadas |
| `compareTwo()` | Compara duas cartas abertas para verificar correspondência |
| `match()` | Manipula cartas que correspondem |
| `noMatch()` | Manipula cartas que não correspondem |
| `timer()` | Controla o cronômetro do jogo |
| `starRating()` | Atualiza a classificação de estrelas baseada nos movimentos |
| `winGame()` | Verifica se todas as cartas foram encontradas |

## 📊 Sistema de Estrelas

- **3 Estrelas**: Até 13 movimentos
- **2 Estrelas**: 14-17 movimentos
- **1 Estrela**: 18+ movimentos

## 🎨 Design Responsivo

O jogo é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Mobile**: Layout otimizado para telas pequenas
- **Tablet**: Tabuleiro ajustado para 50em
- **Desktop**: Experiência expandida em telas grandes

## 🖥️ Requisitos

- Navegador web moderno com suporte a:
  - ES6 JavaScript
  - CSS Flexbox
  - CSS3 Animations

## 🚀 Como Usar

1. Clone o repositório
2. Abra `index.html` em seu navegador
3. Aproveite o jogo!

## 📝 Notas

- O jogo foi otimizado para telões touchscreen
- Sem dependências externas - funciona com JavaScript puro
- Totalmente personalizável (cores, imagens, número de pares)

## 🎯 Objetivo do Evento

Divulgar os próximos eventos do CCIPRA de forma interativa e memorável, proporcionando uma experiência imersiva que engaja os visitantes.

---

**Desenvolvido para CCIPRA 2023 por Everton Vasconcelos** 🎉
