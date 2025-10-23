# 🚀 Semana de Tecnologia – SENAI Sorocaba 2025

Landing page oficial da **Semana de Tecnologia do SENAI Sorocaba 2025**, um evento de três dias focado em inovação, tecnologia e capacitação profissional.  
O site é totalmente dinâmico, consumindo informações de um arquivo JSON, garantindo fácil atualização de agenda, palestrantes e galeria de fotos.

---

## 📌 Visão Geral

A página tem como objetivo apresentar o evento de forma clara e interativa, permitindo aos visitantes:

- 📅 Conhecer a programação completa do evento, organizada por data.  
- 🎤 Visualizar informações detalhadas sobre cada palestra e palestrante.  
- 📝 Realizar inscrições nas palestras através do **Even3**.  
- 📸 Acompanhar a galeria de fotos pós-evento em carrossel responsivo.  
- 💻 Navegar de forma fluida e intuitiva em qualquer dispositivo, graças ao design responsivo.

---

## 🧠 Funcionalidades

- ⚡ **Carregamento dinâmico via JSON:** todo o conteúdo do evento é atualizado automaticamente a partir de um único arquivo JSON.  
- 📋 **Agenda interativa:** cada palestra apresenta título, descrição, palestrante e link direto para inscrição.  
- 👥 **Sessão de palestrantes:** exibição em grid com foto, cargo e mini biografia.  
- 🖼️ **Galeria de fotos pós-evento:** carrossel responsivo implementado com Swiper.js.  
- ✨ **Navegação e UX modernas:** scroll suave, animações discretas e elementos de destaque para melhor experiência.  
- 📱 **Mobile First:** totalmente responsivo, adaptando-se a desktops, tablets e smartphones.

---

## 🎨 Design

O layout combina modernidade e sofisticação, com foco em tecnologia e inovação:

- **Paleta de cores:**  
  - 🔴 Primária: #E30613 (vermelho SENAI)  
  - ⚫ Secundária: #1A1A1A (escuro)  
  - 💚 Destaque: #00C9A7 (verde tecnológico)  
- **Tipografia:** Poppins/Inter para títulos e Roboto para textos.  
- **Estilo:** minimalista, com elementos de glassmorphism e sombras suaves.  
- **Animações:** transições e interações sutis com Framer Motion.

---

## ⚙️ Tecnologias

- **Framework:** React (Vite ou Next.js)  
- **Estilização:** TailwindCSS  
- **Animações:** Framer Motion  
- **Carrossel de fotos:** Swiper.js  
- **Hospedagem:** Vercel

---

## 🧩 Estrutura de Dados (JSON)

O site consome informações de um arquivo `event.json`, que deve conter:

- Dados gerais do evento (título, descrição, datas, local)  
- Agenda completa (palestras, horários, palestrantes, links de inscrição)  
- Lista de palestrantes (nome, foto, empresa, biografia)  
- Galeria de fotos pós-evento (URL da imagem, legenda)

Esse modelo garante que qualquer atualização seja feita de forma simples, sem necessidade de alterações no código.

---
