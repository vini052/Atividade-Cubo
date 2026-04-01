# 🧊 Cubo Mágico 3D com Three.js

## 📌 Descrição do Projeto

Este projeto consiste na criação de uma cena 3D interativa utilizando a biblioteca Three.js.

A aplicação apresenta um **cubo mágico (Rubik’s Cube)** composto por 27 cubos menores organizados em uma estrutura 3x3x3, permitindo visualização tridimensional realista com profundidade.

O usuário pode interagir livremente com a cena, manipulando a câmera para observar o objeto sob diferentes ângulos.

---

## 🎯 Objetivos do Projeto

* Construir uma cena 3D com renderização em tempo real
* Utilizar uma câmera com projeção em perspectiva
* Representar um objeto tridimensional (cubo mágico)
* Permitir interação com o usuário via mouse
* Garantir responsividade ao redimensionamento da tela

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Three.js

---

## ⚙️ Funcionalidades

* Exibição de um cubo mágico 3D na tela
* Câmera em perspectiva (`PerspectiveCamera`)
* Interação com o mouse:

  * Rotação da cena
  * Zoom (aproximação e afastamento)
  * Movimentação lateral (pan)
* Iluminação tridimensional com múltiplas fontes de luz
* Ajuste automático da cena ao redimensionar a janela
* Renderização contínua da cena

---

## 🧠 Conceitos Aplicados

### 🎬 Estrutura de uma Cena 3D

A aplicação segue a estrutura fundamental de renderização:

* **Cena (Scene):** onde os objetos são armazenados
* **Câmera (PerspectiveCamera):** define o ponto de visualização
* **Renderizador (WebGLRenderer):** responsável por desenhar a cena no navegador

---

### 👁️ Projeção em Perspectiva

Foi utilizada uma câmera do tipo perspectiva, que simula a visão humana.

Nesse modelo:

* Objetos mais próximos parecem maiores
* Objetos mais distantes parecem menores

Isso cria uma percepção realista de profundidade.

---

### 🧊 Representação do Cubo Mágico

O cubo mágico foi construído a partir de:

* 27 cubos menores (`BoxGeometry`)
* Organização em grade 3x3x3
* Aplicação de cores diferentes em cada face externa
* Faces internas com cor escura para maior contraste

---

### 🎮 Interação com a Câmera

A interação é realizada com `OrbitControls`, permitindo:

* Rotação ao redor do objeto
* Zoom com scroll do mouse
* Movimentação lateral da câmera

Isso possibilita ao usuário explorar a cena livremente.

---

### 💡 Iluminação

A cena utiliza múltiplas fontes de luz para melhorar a percepção tridimensional:

* Luz ambiente (suave)
* Luz principal (direcional)
* Luz de preenchimento
* Luz traseira (recorte)

Essa combinação cria sombras suaves e destaca melhor as cores do cubo.

---

## 🚀 Como Executar o Projeto

### 🔹 Opção 1: Execução direta

1. Baixe ou clone o repositório
2. Abra o arquivo `index.html` em um navegador moderno

---

### 🔹 Opção 2: Usando Live Server (recomendado)

1. Abra o projeto no VS Code
2. Instale a extensão **Live Server**
3. Clique com o botão direito em `index.html`
4. Selecione **Open with Live Server**

---

## 📱 Responsividade

O projeto detecta automaticamente o redimensionamento da janela e ajusta:

* Proporção da câmera (`aspect`)
* Matriz de projeção
* Tamanho do renderizador

Isso garante que a cena permaneça correta em qualquer tamanho de tela.

---

## 📁 Estrutura do Projeto

```
cubo-magico-3d/
├── index.html
├── style.css
├── main.js
└── README.md
```

---

## 🧪 Critérios Atendidos

✅ Cubo 3D visível e bem posicionado
✅ Uso de câmera em perspectiva
✅ Interação completa com o mouse
✅ Renderização correta da cena
✅ Responsividade ao redimensionamento
✅ Código organizado e funcional
✅ README completo e explicativo

---

## 👩‍💻 Autor

Projeto desenvolvido para fins acadêmicos utilizando Three.js.

---

## ✨ Considerações Finais

Este projeto demonstra a aplicação prática dos conceitos fundamentais de computação gráfica em ambiente web, incluindo renderização 3D, manipulação de câmera e interação com o usuário.

A utilização do Three.js simplifica o desenvolvimento, permitindo foco na estrutura da cena e na experiência visual.

---
