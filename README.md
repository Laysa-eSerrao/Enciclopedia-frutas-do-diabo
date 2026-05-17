# 🍎 Enciclopédia das Frutas do Diabo
### Grand Line Archives — One Piece Fan Project

Um site interativo para explorar e pesquisar as frutas do diabo do universo de One Piece, com filtros por tipo, busca em tempo real e fichas detalhadas de cada fruta.

---

## ✨ Funcionalidades

- **Busca em tempo real** — filtra por nome da fruta, nome em português, usuário ou descrição
- **Filtros por tipo** — Paramecia, Zoan e Logia com cores distintas
- **Cards interativos** — clique em qualquer fruta para abrir a ficha completa
- **Fichas detalhadas** — habilidade completa, barras de estatísticas animadas e fraquezas
- **Design responsivo** — funciona em desktop e celular
- **Zero dependências** — HTML, CSS e JavaScript puros; nenhuma instalação necessária

---

## 🚀 Como usar

### Opção 1 — Abrir localmente

Basta baixar o arquivo e abrir no navegador:

```bash
# Clique duas vezes no arquivo ou abra via terminal:
open enciclopedia-frutas-diabo.html        # macOS
start enciclopedia-frutas-diabo.html       # Windows
xdg-open enciclopedia-frutas-diabo.html    # Linux
```

### Opção 2 — Hospedar online (Netlify Drop)

1. Acesse [netlify.com/drop](https://netlify.com/drop)
2. Arraste o arquivo `enciclopedia-frutas-diabo.html` para a página
3. Pronto — você receberá um link público em segundos, sem precisar de conta

### Opção 3 — GitHub Pages

```bash
git init
git add enciclopedia-frutas-diabo.html
git commit -m "feat: enciclopédia das frutas do diabo"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main
```

Ative o GitHub Pages em **Settings → Pages → Branch: main** e renomeie o arquivo para `index.html`.

---

## 🍇 Frutas catalogadas (44)

| Fruta | Tipo | Usuário |
|-------|------|---------|
| Gomu Gomu no Mi | Paramecia | Monkey D. Luffy |
| Mera Mera no Mi | Logia | Portgas D. Ace / Sabo |
| Hie Hie no Mi | Logia | Aokiji / Kuzan |
| Gura Gura no Mi | Paramecia | Barba Branca / Barba Negra |
| Ope Ope no Mi | Paramecia | Trafalgar D. Water Law |
| Yami Yami no Mi | Logia | Marshall D. Teach |
| Pika Pika no Mi | Logia | Kizaru / Borsalino |
| Magu Magu no Mi | Logia | Akainu / Sakazuki |
| Tori Tori no Mi: Fênix | Zoan Mítico | Marco o Fênix |
| Ito Ito no Mi | Paramecia | Donquixote Doflamingo |
| Nikyu Nikyu no Mi | Paramecia | Bartholomew Kuma |
| Suna Suna no Mi | Logia | Sir Crocodile |
| Hana Hana no Mi | Paramecia | Nico Robin |
| Bari Bari no Mi | Paramecia | Bartolomeo |
| Mochi Mochi no Mi | Paramecia Especial | Charlotte Katakuri |
| Zou Zou no Mi: Mamute | Zoan Antigo | Jack o Calamidade |
| Wara Wara no Mi | Paramecia | Basil Hawkins |
| Noro Noro no Mi | Paramecia | Foxy o Raposo Prateado |
| Doku Doku no Mi | Paramecia | Magellan |
| Horo Horo no Mi | Paramecia | Perona |
| Uo Uo no Mi: Dragão | Zoan Mítico | Kaidou dos Cem Feras |
| Soru Soru no Mi | Paramecia | Charlotte Linlin (Big Mom) |
| Fuwa Fuwa no Mi | Paramecia | Shiki o Leão Dourado |
| Jiku Jiku no Mi | Paramecia | Scratchmen Apoo |
| Bomu Bomu no Mi | Paramecia | Mr. 5 |
| Kilo Kilo no Mi | Paramecia | Miss Valentine |
| Sube Sube no Mi | Paramecia | Alvida |
| Bara Bara no Mi | Paramecia | Buggy o Palhaço |
| Toge Toge no Mi | Paramecia | Miss Doublefinger |
| Kama Kama no Mi | Paramecia | Eric the Whirlwind |
| Ori Ori no Mi | Paramecia | Hina a Preta |
| Nagi Nagi no Mi | Paramecia | Corazon / Rosinante Donquixote |
| Chiyu Chiyu no Mi | Paramecia | Mansherry |
| Beta Beta no Mi | Paramecia | Trebol |
| Inu Inu no Mi: Modelo Lobo | Zoan | Jabra |
| Neko Neko no Mi: Modelo Leopardo | Zoan | Rob Lucci |
| Uma Uma no Mi: Modelo Pegasus | Zoan Mítico | Stronger |
| Hebi Hebi no Mi: Modelo Anaconda | Zoan | Boa Sandersonia |
| Hebi Hebi no Mi: Modelo King Cobra | Zoan | Boa Marigold |
| Tori Tori no Mi: Modelo Falcão | Zoan | Pell |
| Guru Guru no Mi | Paramecia | Buffalo |
| Ryu Ryu no Mi: Modelo Brachiosaurus | Zoan Antigo | Queen a Calamidade |
| Ryu Ryu no Mi: Modelo Spinossauro | Zoan Antigo | King a Calamidade |
| Memo Memo no Mi | Paramecia | Charlotte Pudding |
| Netsu Netsu no Mi | Paramecia | Charlotte Oven |

---

## 🛠️ Estrutura do projeto

```
enciclopedia-frutas-diabo.html   # arquivo único com HTML + CSS + JS
README.md                        # este arquivo
```

O projeto é intencionalmente um arquivo único para máxima portabilidade — sem pastas, sem build, sem servidor.

---

## 🎨 Design

- **Tema:** dark, inspirado no visual misterioso do Grand Line
- **Paleta:** roxo (Paramecia), laranja (Zoan), azul (Logia)
- **Tipografia:** Cinzel (títulos) + Crimson Pro (corpo)
- **Animações:** entrada em cascata dos cards, barras de poder animadas no modal

---

## 📌 Como adicionar mais frutas

Abra o arquivo HTML e localize o array `const fruits = [...]`. Adicione um novo objeto seguindo o padrão:

```javascript
{
  name: "Nome no Mi",           // nome japonês
  pt: "Fruta do Nome",          // tradução
  type: "Paramecia",            // Paramecia | Zoan | Logia | Zoan Mítico | etc.
  icon: "🍊",                   // emoji representativo
  user: "Nome do Usuário",
  desc: "Descrição curta para o card.",
  ability: "Descrição detalhada da habilidade para o modal.",
  powers: {
    Força: 80,         // 0–100
    Velocidade: 70,
    Defesa: 60,
    Versatilidade: 75
  },
  weakness: ["Água do mar", "Seastone", "Fraqueza específica"]
}
```

---

## ⚠️ Aviso

Este é um projeto de fã sem fins lucrativos. One Piece é propriedade de **Eiichiro Oda** e **Shueisha**. Nenhum conteúdo oficial (imagens, mangá, anime) foi utilizado ou reproduzido.

---

*"Eu vou me tornar o Rei dos Piratas!" — Monkey D. Luffy*