/* ================================================
   Enciclopédia das Frutas do Diabo — script.js
   Grand Line Archives
   ================================================
   Índice:
   01. Dados — Frutas do Diabo
   02. Estado da UI
   03. Funções Utilitárias
   04. Filtros e Busca
   05. Render — Grid de Cards
   06. Render — Modal
   07. Eventos Globais
   08. Inicialização
================================================ */


/* ─── 01. DADOS — FRUTAS DO DIABO ───────────────── */

const fruits = [
  {
    name:"Gomu Gomu no Mi", pt:"Fruta da Borracha", type:"Paramecia", icon:"🌀",
    fruitImg:"", userImg:"",
    user:"Monkey D. Luffy",
    desc:"Transforma o corpo em borracha, tornando o usuário imune a impactos físicos e relâmpagos.",
    ability:"Corpo completamente elástico e resistente a projéteis. Com domínio do Haki, desperta o Gear 5, transformando o usuário no Guerreiro da Libertação.",
    powers:{Força:95, Velocidade:80, Defesa:90, Versatilidade:98},
    weakness:["Água do mar","Seastone","Impacto direto em Seastone"]
  },
  {
    name:"Mera Mera no Mi", pt:"Fruta da Chama", type:"Logia", icon:"🔥",
    fruitImg:"", userImg:"",
    user:"Portgas D. Ace / Sabo",
    desc:"Permite ao usuário criar, controlar e se transformar em fogo livremente.",
    ability:"Domínio total sobre o fogo. Ataques como Hiken e Fire Fist incendiam tudo ao redor. Corpo intangível de chamas.",
    powers:{Força:90, Velocidade:85, Defesa:75, Versatilidade:88},
    weakness:["Água do mar","Seastone","Magma (supera o fogo)"]
  },
  {
    name:"Hie Hie no Mi", pt:"Fruta do Gelo", type:"Logia", icon:"❄️",
    fruitImg:"", userImg:"",
    user:"Aokiji / Kuzan",
    desc:"Transforma o usuário em gelo, capaz de congelar o próprio oceano num raio imenso.",
    ability:"Pode congelar tudo que toca, incluindo o ar e a água do mar. Criou pontes de gelo permanentes entre ilhas.",
    powers:{Força:88, Velocidade:80, Defesa:85, Versatilidade:92},
    weakness:["Água do mar","Seastone","Fogo intenso"]
  },
  {
    name:"Gura Gura no Mi", pt:"Fruta do Tremor", type:"Paramecia", icon:"⚡",
    fruitImg:"", userImg:"",
    user:"Edward Newgate (Barba Branca) / Marshall D. Teach",
    desc:"Considerada a fruta Paramecia mais poderosa — capaz de destruir o mundo com terremotos e tsunamis.",
    ability:"Gera vibrações e terremotos devastadores no ar e no chão. Pode criar tsunamis e rachar o próprio ar.",
    powers:{Força:100, Velocidade:60, Defesa:70, Versatilidade:85},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ope Ope no Mi", pt:"Fruta da Operação", type:"Paramecia", icon:"💊",
    fruitImg:"", userImg:"",
    user:"Trafalgar D. Water Law",
    desc:"Cria uma 'sala de operações' onde o usuário controla espaço e matéria livremente dentro de uma esfera.",
    ability:"ROOM: separa e reposiciona corpos e objetos sem causar dano. Pode conceder imortalidade a outra pessoa ao custo da própria vida do usuário.",
    powers:{Força:75, Velocidade:70, Defesa:65, Versatilidade:100},
    weakness:["Água do mar","Seastone","Limite de espaço do ROOM"]
  },
  {
    name:"Yami Yami no Mi", pt:"Fruta das Trevas", type:"Logia", icon:"🌑",
    fruitImg:"", userImg:"",
    user:"Marshall D. Teach (Barba Negra)",
    desc:"A mais misteriosa fruta Logia — absorve tudo e neutraliza poderes de outras frutas do diabo.",
    ability:"Cria escuridão que absorve ataques e tudo ao redor. Única fruta capaz de anular o poder de outras frutas do diabo pelo toque.",
    powers:{Força:92, Velocidade:55, Defesa:60, Versatilidade:95},
    weakness:["Água do mar","Seastone","Não deflecte dano como outras Logia"]
  },
  {
    name:"Pika Pika no Mi", pt:"Fruta da Luz", type:"Logia", icon:"✨",
    fruitImg:"", userImg:"",
    user:"Borsalino (Kizaru)",
    desc:"Transforma o usuário em luz pura, tornando-o o ser mais veloz já visto no Grand Line.",
    ability:"Velocidade da luz absoluta. Lasers de alta potência e capacidade de movimento instantâneo a qualquer ponto iluminado.",
    powers:{Força:88, Velocidade:100, Defesa:72, Versatilidade:85},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Magu Magu no Mi", pt:"Fruta do Magma", type:"Logia", icon:"🌋",
    fruitImg:"", userImg:"",
    user:"Sakazuki (Akainu)",
    desc:"O poder ofensivo mais destrutivo dentre todas as frutas Logia. Magma que corrói e supera o próprio fogo.",
    ability:"Magma derrete tudo que toca, incluindo outras Logia. Seu calor derreteu boa parte de Marineford durante a Grande Guerra.",
    powers:{Força:100, Velocidade:60, Defesa:80, Versatilidade:82},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Fênix", pt:"Fruta Pássaro: Fênix", type:"Zoan Mítico", icon:"🦅",
    fruitImg:"", userImg:"",
    user:"Marco o Fênix",
    desc:"Fruta Zoan Mítica que transforma em fênix, com chamas azuis que possuem propriedades regenerativas únicas.",
    ability:"Regeneração ilimitada através das chamas da fênix. Voo em alta velocidade e chamas azuis que curam aliados ao toque.",
    powers:{Força:85, Velocidade:90, Defesa:98, Versatilidade:90},
    weakness:["Água do mar","Seastone","Dano excessivo pode temporariamente impedir a regeneração"]
  },
  {
    name:"Ito Ito no Mi", pt:"Fruta das Linhas", type:"Paramecia", icon:"🕸️",
    fruitImg:"", userImg:"",
    user:"Donquixote Doflamingo",
    desc:"Gera fios de aço inquebrável que podem cortar cidades ao meio e controlar humanos como marionetes.",
    ability:"Fios que cortam o aço. Controla humanos como marionetes. Pode cobrir cidades inteiras com uma gaiola de fios chamada Birdcage.",
    powers:{Força:85, Velocidade:80, Defesa:75, Versatilidade:93},
    weakness:["Água do mar","Seastone","Chamas extremas"]
  },
  {
    name:"Nikyu Nikyu no Mi", pt:"Fruta das Patas", type:"Paramecia", icon:"🐾",
    fruitImg:"", userImg:"",
    user:"Bartholomew Kuma",
    desc:"Repele qualquer coisa — dor, ar, pessoas — com patas que atingem velocidade de repulsão insana.",
    ability:"Pode repelir até o ar comprimido como canhões e remover fisicamente a dor de uma pessoa. Movimento por repulsão ao solo alcança velocidades próximas da luz.",
    powers:{Força:78, Velocidade:95, Defesa:70, Versatilidade:87},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Suna Suna no Mi", pt:"Fruta da Areia", type:"Logia", icon:"🏜️",
    fruitImg:"", userImg:"",
    user:"Sir Crocodile",
    desc:"Controle total sobre a areia — pode desidratar qualquer ser vivo pelo simples toque.",
    ability:"Absorve umidade de pessoas e objetos matando pelo toque direto. Cria tempestades de areia de alcance continental.",
    powers:{Força:82, Velocidade:75, Defesa:78, Versatilidade:86},
    weakness:["Água do mar","Seastone","Qualquer líquido solidifica a areia"]
  },
  {
    name:"Hana Hana no Mi", pt:"Fruta da Flor", type:"Paramecia", icon:"🌸",
    fruitImg:"", userImg:"",
    user:"Nico Robin",
    desc:"Faz brotar cópias dos membros do corpo em qualquer superfície vista pelo usuário, em qualquer lugar.",
    ability:"Pode criar múltiplos braços, olhos ou pernas em qualquer superfície — incluindo os corpos de inimigos para imobilizá-los ou quebrá-los.",
    powers:{Força:65, Velocidade:60, Defesa:55, Versatilidade:97},
    weakness:["Água do mar","Seastone","Dano nos membros reflete no usuário"]
  },
  {
    name:"Bari Bari no Mi", pt:"Fruta da Barreira", type:"Paramecia", icon:"🛡️",
    fruitImg:"", userImg:"",
    user:"Bartolomeo",
    desc:"Cria barreiras invisíveis absolutamente indestrutíveis — nenhuma força conhecida pode quebrá-las.",
    ability:"Barreiras que bloquearam ataques dos Yonkou. Pode moldar em qualquer forma, incluindo plataformas, lâminas e escudos.",
    powers:{Força:50, Velocidade:45, Defesa:100, Versatilidade:72},
    weakness:["Água do mar","Seastone","Apenas um conjunto de barreiras por vez"]
  },
  {
    name:"Mochi Mochi no Mi", pt:"Fruta do Mochi", type:"Paramecia Especial", icon:"🍡",
    fruitImg:"", userImg:"",
    user:"Charlotte Katakuri",
    desc:"Fruta Paramecia que age como Logia — controla mochi com velocidade e precisão sobrehumana.",
    ability:"Cria e controla mochi. Combinada com Haki da Observação avançado permite prever o futuro próximo, tornando Katakuri quase invencível.",
    powers:{Força:92, Velocidade:88, Defesa:85, Versatilidade:91},
    weakness:["Água do mar","Seastone","Fogo / água dissolvem o mochi"]
  },
  {
    name:"Zou Zou no Mi: Modelo Mamute", pt:"Fruta Elefante: Mamute", type:"Zoan Antigo", icon:"🦣",
    fruitImg:"", userImg:"",
    user:"Jack 'o Calamidade'",
    desc:"Transforma em um mamute gigantesco pré-histórico de força e resistência colossal.",
    ability:"Força bruta devastadora em forma de mamute lanudo. Resistência extrema que permite manter combate por dias seguidos.",
    powers:{Força:95, Velocidade:40, Defesa:92, Versatilidade:55},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Wara Wara no Mi", pt:"Fruta da Palha", type:"Paramecia", icon:"🌾",
    fruitImg:"", userImg:"",
    user:"Basil Hawkins",
    desc:"Transfere dano recebido para bonecas de palha previamente ligadas a outras pessoas.",
    ability:"Dano que mataria o usuário é redistribuído às vítimas das bonecas. Também pode transformar parcialmente o corpo em um espantalho de palha.",
    powers:{Força:70, Velocidade:65, Defesa:88, Versatilidade:82},
    weakness:["Água do mar","Seastone","Fogo"]
  },
  {
    name:"Noro Noro no Mi", pt:"Fruta da Lentidão", type:"Paramecia", icon:"⏳",
    fruitImg:"", userImg:"",
    user:"Foxy o Raposo Prateado",
    desc:"Dispara raios de Noroma que retardam tudo que tocam a um trezentos avos da velocidade normal.",
    ability:"Raios de desaceleração que paralisam alvos por 30 segundos sem impedir dano físico. Pode afetar múltiplos alvos simultaneamente.",
    powers:{Força:40, Velocidade:50, Defesa:45, Versatilidade:80},
    weakness:["Água do mar","Seastone","O próprio usuário pode ser atingido"]
  },
  {
    name:"Doku Doku no Mi", pt:"Fruta do Veneno", type:"Paramecia", icon:"☠️",
    fruitImg:"", userImg:"",
    user:"Magellan",
    desc:"Produz e controla venenos de qualquer tipo e toxicidade — desde paralisantes até letais instantâneos.",
    ability:"Corpo imune a qualquer veneno. Pode produzir Hydra, veneno capaz de dissolver navios, e Venom Demon, que cobre ilhas inteiras.",
    powers:{Força:85, Velocidade:55, Defesa:88, Versatilidade:90},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Horo Horo no Mi", pt:"Fruta do Fantasma", type:"Paramecia", icon:"👻",
    fruitImg:"", userImg:"",
    user:"Perona",
    desc:"Cria fantasmas espectrais negativos que sugam toda a vontade de lutar das vítimas.",
    ability:"Fantasmas Negativos que causam depressão profunda instantânea. Pode projetar a consciência para fora do corpo em forma astral.",
    powers:{Força:45, Velocidade:60, Defesa:50, Versatilidade:83},
    weakness:["Água do mar","Seastone","Pessoas naturalmente negativas são imunes"]
  },
  {
    name:"Uo Uo no Mi: Modelo Dragão Celestial", pt:"Fruta Peixe: Dragão Celestial", type:"Zoan Mítico", icon:"🐉",
    fruitImg:"", userImg:"",
    user:"Kaidou dos Cem Feras",
    desc:"A fruta mais poderosa do mundo, transformando o usuário no ser mais forte da história.",
    ability:"Transforma em dragão colossal capaz de voar, criar tempestades e disparar Boro Breath destruindo ilhas. Despertar permite transformações parciais híbridas.",
    powers:{Força:100, Velocidade:85, Defesa:100, Versatilidade:95},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Soru Soru no Mi", pt:"Fruta da Alma", type:"Paramecia", icon:"💀",
    fruitImg:"", userImg:"",
    user:"Charlotte Linlin (Big Mom)",
    desc:"Manipula almas de seres humanos — extrai, transfere e infunde vida em objetos inanimados.",
    ability:"Cria Homies ao infundir almas em objetos e animais. Pode roubar anos de vida pelo medo das vítimas, tornando-se mais forte com cada alma absorvida.",
    powers:{Força:96, Velocidade:70, Defesa:85, Versatilidade:97},
    weakness:["Água do mar","Seastone","Não funciona em quem não sente medo"]
  },
  {
    name:"Fuwa Fuwa no Mi", pt:"Fruta da Flutuação", type:"Paramecia", icon:"☁️",
    fruitImg:"", userImg:"",
    user:"Shiki o Leão Dourado",
    desc:"Confere ao usuário a habilidade de fazer objetos inanimados flutuarem e se moverem pelo ar.",
    ability:"Pode fazer flotar ilhas inteiras, navios e partes de cidades. Os objetos flutuantes obedecerão o usuário enquanto ele estiver consciente.",
    powers:{Força:82, Velocidade:75, Defesa:65, Versatilidade:92},
    weakness:["Água do mar","Seastone","Não funciona em pessoas vivas"]
  },
  {
    name:"Jiku Jiku no Mi", pt:"Fruta da Dimensão", type:"Paramecia", icon:"🎵",
    fruitImg:"", userImg:"",
    user:"Scratchmen Apoo",
    desc:"Transforma partes do corpo em instrumentos musicais e sons em ataques físicos.",
    ability:"Converte notas musicais em ondas de choque e cortes físicos. Som que se ouve causa dano real — difícil de bloquear pois age diretamente sobre o ouvido.",
    powers:{Força:72, Velocidade:68, Defesa:55, Versatilidade:85},
    weakness:["Água do mar","Seastone","Tampar os ouvidos anula os ataques"]
  },
  {
    name:"Bomu Bomu no Mi", pt:"Fruta da Bomba", type:"Paramecia", icon:"💣",
    fruitImg:"", userImg:"",
    user:"Mr. 5",
    desc:"Torna qualquer parte do corpo — inclusive o hálito e os narizes — explosiva.",
    ability:"Explosões controláveis em qualquer secreção corporal. O usuário é completamente imune a explosões, incluindo as mais poderosas.",
    powers:{Força:75, Velocidade:55, Defesa:65, Versatilidade:78},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Kilo Kilo no Mi", pt:"Fruta do Quilograma", type:"Paramecia", icon:"⚖️",
    fruitImg:"", userImg:"",
    user:"Miss Valentine",
    desc:"Permite alterar o próprio peso entre 1 e 10.000 quilogramas instantaneamente.",
    ability:"Pode esmagar inimigos com pressão de 10 toneladas ou flutuar levíssima como uma pena para planar pelo ar.",
    powers:{Força:65, Velocidade:60, Defesa:55, Versatilidade:70},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Sube Sube no Mi", pt:"Fruta do Deslize", type:"Paramecia", icon:"🧴",
    fruitImg:"", userImg:"",
    user:"Alvida",
    desc:"Torna a pele do usuário completamente lisa e escorregadia, deflectindo qualquer ataque físico.",
    ability:"Ataques deslizam pelo corpo sem causar dano. O usuário também desliza sobre qualquer superfície com velocidade aumentada.",
    powers:{Força:50, Velocidade:72, Defesa:80, Versatilidade:60},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Bara Bara no Mi", pt:"Fruta da Separação", type:"Paramecia", icon:"✂️",
    fruitImg:"", userImg:"",
    user:"Buggy o Palhaço",
    desc:"Fragmenta o corpo em pedaços independentes que flutuam e se movem separadamente.",
    ability:"Partes do corpo voam de forma autônoma e são completamente invulneráveis a ataques de corte. Pode lançar punhos e pés a distância.",
    powers:{Força:55, Velocidade:65, Defesa:70, Versatilidade:75},
    weakness:["Água do mar","Seastone","Não pode nadar — pés ficam presos na água"]
  },
  {
    name:"Toge Toge no Mi", pt:"Fruta dos Espinhos", type:"Paramecia", icon:"🌵",
    fruitImg:"", userImg:"",
    user:"Miss Doublefinger",
    desc:"Faz brotar espinhos afiados como lâminas em qualquer parte do corpo.",
    ability:"Espinhos extensíveis que perfuram qualquer material. Pode usá-los como lanças, escudos e até propelir o corpo como foguete.",
    powers:{Força:70, Velocidade:65, Defesa:72, Versatilidade:68},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Kama Kama no Mi", pt:"Fruta da Foice", type:"Paramecia", icon:"🌪️",
    fruitImg:"", userImg:"",
    user:"Eric the Whirlwind",
    desc:"Gera lâminas de vento cortante a partir dos braços que podem fatiar até o aço.",
    ability:"Redemoinhos de ar comprimido invisíveis que cortam à distância. Alcance quase ilimitado e difícil de bloquear.",
    powers:{Força:68, Velocidade:75, Defesa:50, Versatilidade:72},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ori Ori no Mi", pt:"Fruta da Gaiola", type:"Paramecia", icon:"⛓️",
    fruitImg:"", userImg:"",
    user:"Hina a Preta",
    desc:"Cria grilhões e grades de ferro ao redor de qualquer ser que atravesse o corpo do usuário.",
    ability:"Quem passa pelo usuário fica automaticamente aprisionado em barras de aço que crescem do contato. Impossível de escapar sem força bruta extrema.",
    powers:{Força:65, Velocidade:55, Defesa:60, Versatilidade:73},
    weakness:["Água do mar","Seastone","Força bruta suficiente pode romper as barras"]
  },
  {
    name:"Nagi Nagi no Mi", pt:"Fruta do Silêncio", type:"Paramecia", icon:"🔇",
    fruitImg:"", userImg:"",
    user:"Corazon / Rosinante Donquixote",
    desc:"Cria bolhas de silêncio absoluto ao redor do usuário ou de áreas específicas.",
    ability:"Sons dentro da bolha não saem e sons externos não entram. Permite operações completamente silenciosas e protege aliados de ataques sonoros.",
    powers:{Força:45, Velocidade:55, Defesa:60, Versatilidade:82},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Chiyu Chiyu no Mi", pt:"Fruta da Cura", type:"Paramecia", icon:"💚",
    fruitImg:"", userImg:"",
    user:"Mansherry",
    desc:"Cura ferimentos de outras pessoas com lágrimas que possuem propriedades regenerativas sobrenaturais.",
    ability:"Lágrimas curam ferimentos físicos instantaneamente. Com esforço maior, pode até restaurar objetos quebrados e revitalizar plantas mortas.",
    powers:{Força:20, Velocidade:40, Defesa:30, Versatilidade:88},
    weakness:["Água do mar","Seastone","Não cura o próprio usuário"]
  },
  {
    name:"Beta Beta no Mi", pt:"Fruta do Muco", type:"Paramecia", icon:"🟢",
    fruitImg:"", userImg:"",
    user:"Trebol",
    desc:"Produz quantidades ilimitadas de muco extremamente pegajoso e inflamável.",
    ability:"Muco que cola qualquer coisa imobilizando inimigos e pode ser incendiado. Trebol usou para fingir ter Haki da Observação disfarçando os fios com muco.",
    powers:{Força:60, Velocidade:45, Defesa:75, Versatilidade:78},
    weakness:["Água do mar","Seastone","Fogo próprio pode incendiar o muco"]
  },
  {
    name:"Inu Inu no Mi: Modelo Lobo", pt:"Fruta Cão: Lobo", type:"Zoan", icon:"🐺",
    fruitImg:"", userImg:"",
    user:"Jabra",
    desc:"Transforma o usuário em lobo ou forma híbrida lobo-humano com velocidade e agilidade superiores.",
    ability:"Velocidade e instintos predatórios de um lobo. Forma híbrida combina destreza humana com força animal para combate corpo a corpo devastador.",
    powers:{Força:82, Velocidade:88, Defesa:70, Versatilidade:65},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Neko Neko no Mi: Modelo Leopardo", pt:"Fruta Gato: Leopardo", type:"Zoan", icon:"🐆",
    fruitImg:"", userImg:"",
    user:"Rob Lucci",
    desc:"A fruta Zoan mais poderosa da Marinha — transforma no felino mais veloz e letal da natureza.",
    ability:"Velocidade e agilidade felina extremas. Forma híbrida de leopardo-humano combina a força dos CP9 com reflexos sobrenaturais.",
    powers:{Força:93, Velocidade:97, Defesa:78, Versatilidade:85},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Uma Uma no Mi: Modelo Pegasus", pt:"Fruta Cavalo: Pégaso", type:"Zoan Mítico", icon:"🦄",
    fruitImg:"", userImg:"",
    user:"Stronger (cavalo de Doc Q)",
    desc:"Transforma em pégaso, o cavalo alado da mitologia, concedendo voo e força sobre-humana.",
    ability:"Voo rápido com asas poderosas. Combina a resistência de um cavalo com a liberdade do céu, sendo um dos raros Zoan Míticos animais.",
    powers:{Força:78, Velocidade:82, Defesa:70, Versatilidade:68},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Hebi Hebi no Mi: Modelo Anaconda", pt:"Fruta Cobra: Anaconda", type:"Zoan", icon:"🐍",
    fruitImg:"", userImg:"",
    user:"Boa Sandersonia",
    desc:"Transforma em anaconda gigante, a maior cobra do mundo, com força constritora devastadora.",
    ability:"Constrição que esmaga armaduras. Forma híbrida mantém as habilidades de Haki das Kuja, amplificadas pela força da cobra.",
    powers:{Força:80, Velocidade:70, Defesa:72, Versatilidade:65},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Hebi Hebi no Mi: Modelo King Cobra", pt:"Fruta Cobra: King Cobra", type:"Zoan", icon:"🐉",
    fruitImg:"", userImg:"",
    user:"Boa Marigold",
    desc:"Transforma em king cobra gigante, cujo veneno é poderoso o suficiente para matar em segundos.",
    ability:"Veneno paralisante instantâneo aliado à força da cobra. Forma híbrida combina estatura colossal com presas letais.",
    powers:{Força:82, Velocidade:65, Defesa:75, Versatilidade:68},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Falcão", pt:"Fruta Pássaro: Falcão", type:"Zoan", icon:"🦅",
    fruitImg:"", userImg:"",
    user:"Pell",
    desc:"Transforma no único ser vivo capaz de voar entre as cinco espécies de Alabasta — o falcão sagrado.",
    ability:"Voo em alta velocidade com visão aguçada. Considerado um dos cinco tesouros nacionais de Alabasta por sua lealdade e poder.",
    powers:{Força:75, Velocidade:85, Defesa:60, Versatilidade:70},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Guru Guru no Mi", pt:"Fruta da Rotação", type:"Paramecia", icon:"🔄",
    fruitImg:"", userImg:"",
    user:"Buffalo",
    desc:"Faz girar qualquer parte do corpo como hélice, gerando propulsão e força rotacional.",
    ability:"Rotação de membros cria propulsão para voo, ataques centrífugos devastadores e pode ser usada para escapar de prisões.",
    powers:{Força:65, Velocidade:80, Defesa:50, Versatilidade:72},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Brachiosaurus", pt:"Fruta Dragão: Braquiossauro", type:"Zoan Antigo", icon:"🦕",
    fruitImg:"", userImg:"",
    user:"Queen a Calamidade",
    desc:"Transforma no maior dinossauro herbívoro — mas Queen o usa de forma brutal e letal.",
    ability:"Pescoço extensível como chicote de aço. Transformação híbrida combina a tecnologia cyborg de Queen com a força colossal do braquiossauro.",
    powers:{Força:92, Velocidade:55, Defesa:88, Versatilidade:70},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Spinossauro", pt:"Fruta Dragão: Espinossauro", type:"Zoan Antigo", icon:"🦖",
    fruitImg:"", userImg:"",
    user:"King a Calamidade",
    desc:"Transforma no maior predador terrestre já existente, o espinossauro — fruta do mais forte All-Star de Kaidou.",
    ability:"Força e tamanho avassaladores. Forma híbrida com asas de pterodáctilo permite voo. Capacidade de gerar chamas negras únicas de sua raça.",
    powers:{Força:97, Velocidade:78, Defesa:90, Versatilidade:80},
    weakness:["Água do mar","Seastone","Remover a máscara expõe sua fraqueza racial"]
  },
  {
    name:"Memo Memo no Mi", pt:"Fruta da Memória", type:"Paramecia", icon:"🎞️",
    fruitImg:"", userImg:"",
    user:"Charlotte Pudding",
    desc:"Extrai, edita e insere memórias em qualquer pessoa como se fossem fitas de filme.",
    ability:"Pode remover memórias específicas ou alterar como eventos foram recordados. Ferramenta de espionagem e manipulação sem igual.",
    powers:{Força:30, Velocidade:40, Defesa:35, Versatilidade:92},
    weakness:["Água do mar","Seastone","Requer contato visual direto com a vítima"]
  },
  {
    name:"Netsu Netsu no Mi", pt:"Fruta do Calor", type:"Paramecia", icon:"🌡️",
    fruitImg:"", userImg:"",
    user:"Charlotte Oven",
    desc:"Eleva a temperatura do corpo a níveis extremos, aquecendo tudo que toca e o ar ao redor.",
    ability:"Corpo que derrete o aço pelo toque. Pode aquecer o próprio oceano ao redor, tornando a fuga por mar impossível para inimigos.",
    powers:{Força:85, Velocidade:65, Defesa:80, Versatilidade:78},
    weakness:["Água do mar","Seastone","Frio intenso reduz sua eficácia"]
  },
  {
    name:"Horu Horu no Mi", pt:"Fruta do Hormônio", type:"Paramecia", icon:"💉",
    fruitImg:"", userImg:"",
    user:"Emporio Ivankov",
    desc:"Produz e injeta hormônios especiais no corpo de qualquer pessoa, alterando metabolismo e biologia.",
    ability:"Pode mudar o sexo de uma pessoa, curar doenças quase fatais injetando energia vital e aumentar força e velocidade com hormônios especiais.",
    powers:{Força:60, Velocidade:65, Defesa:55, Versatilidade:95},
    weakness:["Água do mar","Seastone","Encurta a vida do receptor"]
  },
  {
    name:"Choki Choki no Mi", pt:"Fruta da Tesoura", type:"Paramecia", icon:"✂️",
    fruitImg:"", userImg:"",
    user:"Inazuma",
    desc:"Transforma partes do corpo em tesouras gigantes capazes de cortar qualquer material como se fosse papel.",
    ability:"Corta o próprio terreno, metais e pedras como papel e pode dobrar os recortes em qualquer forma — incluindo escadas, escudos e pontes.",
    powers:{Força:72, Velocidade:65, Defesa:60, Versatilidade:85},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Baku Baku no Mi", pt:"Fruta da Mastigação", type:"Paramecia", icon:"🦷",
    fruitImg:"", userImg:"",
    user:"Wapol",
    desc:"Permite comer e digerir qualquer material — metais, madeira, canhões — e incorporar suas propriedades.",
    ability:"Absorve propriedades de tudo que come. Pode fundir objetos ingeridos no próprio corpo ou criar novos objetos ao cuspir a mistura.",
    powers:{Força:70, Velocidade:45, Defesa:78, Versatilidade:80},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Mane Mane no Mi", pt:"Fruta da Imitação", type:"Paramecia", icon:"🎭",
    fruitImg:"", userImg:"",
    user:"Mr. 2 Bon Kurei",
    desc:"Permite copiar a aparência facial e corporal de qualquer pessoa tocada com a mão direita.",
    ability:"Transformação perfeita em qualquer pessoa já tocada. Pode alternar entre múltiplas formas memorizadas instantaneamente, enganando até aliados próximos.",
    powers:{Força:68, Velocidade:70, Defesa:55, Versatilidade:90},
    weakness:["Água do mar","Seastone","Não copia poderes de frutas do diabo"]
  },
  {
    name:"Bisu Bisu no Mi", pt:"Fruta do Biscoito", type:"Paramecia", icon:"🍪",
    fruitImg:"", userImg:"",
    user:"Charlotte Cracker",
    desc:"Cria e controla biscoitos praticamente indestrutíveis que podem ser moldados em guerreiros de armadura.",
    ability:"Soldados de biscoito com armaduras de dureza extrema. Pode regenerar infinitamente os biscoitos destruídos e criar exércitos inteiros.",
    powers:{Força:88, Velocidade:65, Defesa:95, Versatilidade:82},
    weakness:["Água do mar","Seastone","Biscoito molhado amolece"]
  },
  {
    name:"Shiro Shiro no Mi", pt:"Fruta do Castelo", type:"Paramecia", icon:"🏰",
    fruitImg:"", userImg:"",
    user:"Capone Bege",
    desc:"Transforma o próprio corpo em um castelo fortificado onde pessoas podem entrar e viver.",
    ability:"Interior com exércitos, veículos e canhões. Pode expandir e encolher o castelo e disparar tropas como projéteis humanos.",
    powers:{Força:80, Velocidade:45, Defesa:97, Versatilidade:88},
    weakness:["Água do mar","Seastone","Dano no castelo reflete no usuário"]
  },
  {
    name:"Gasu Gasu no Mi", pt:"Fruta do Gás", type:"Logia", icon:"💨",
    fruitImg:"", userImg:"",
    user:"Caesar Clown",
    desc:"Transforma o usuário em gás e permite controlar e criar qualquer tipo de gás ao redor.",
    ability:"Corpo de gás intangível. Pode criar gases venenosos, inflamáveis e explosivos. Absorve o oxigênio ao redor asfixiando inimigos.",
    powers:{Força:82, Velocidade:85, Defesa:78, Versatilidade:92},
    weakness:["Água do mar","Seastone","Fogo pode detonar seus próprios gases"]
  },
  {
    name:"Yuki Yuki no Mi", pt:"Fruta da Neve", type:"Logia", icon:"🌨️",
    fruitImg:"", userImg:"",
    user:"Monet",
    desc:"Transforma o usuário em neve e permite criar e controlar nevasca ao redor.",
    ability:"Corpo de neve que envolve inimigos congelando membros. Pode criar tempestades de neve e visibilidade zero numa área ampla.",
    powers:{Força:72, Velocidade:78, Defesa:70, Versatilidade:80},
    weakness:["Água do mar","Seastone","Calor derrete o corpo de neve"]
  },
  {
    name:"Numa Numa no Mi", pt:"Fruta do Pântano", type:"Logia", icon:"🟫",
    fruitImg:"", userImg:"",
    user:"Caribou",
    desc:"Transforma o usuário em lama de pântano — um Logia capaz de absorver e armazenar objetos no interior do corpo.",
    ability:"Absorve pessoas e objetos dentro do próprio corpo pantanoso. Único Logia com capacidade de armazenamento interno de seres vivos.",
    powers:{Força:75, Velocidade:55, Defesa:80, Versatilidade:83},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Sui Sui no Mi", pt:"Fruta da Natação", type:"Paramecia", icon:"🏊",
    fruitImg:"", userImg:"",
    user:"Senor Pink",
    desc:"Permite nadar e mergulhar em qualquer superfície sólida como se fosse água.",
    ability:"Atravessa o chão, paredes e tetos como se fossem líquidos. Emerge de qualquer ângulo para ataques surpresa impossíveis de prever.",
    powers:{Força:78, Velocidade:82, Defesa:65, Versatilidade:80},
    weakness:["Água do mar","Seastone","Não pode carregar outros ao nadar no sólido"]
  },
  {
    name:"Ton Ton no Mi", pt:"Fruta da Tonelada", type:"Paramecia", icon:"🏋️",
    fruitImg:"", userImg:"",
    user:"Machvise",
    desc:"Aumenta o próprio peso em múltiplos de toneladas, podendo atingir 10.000 toneladas.",
    ability:"Mergulhos de 10.000 toneladas que destroem o chão e qualquer coisa abaixo. Quanto mais peso, mais destrutivo o impacto.",
    powers:{Força:90, Velocidade:30, Defesa:85, Versatilidade:55},
    weakness:["Água do mar","Seastone","Lento demais para acertar alvos ágeis"]
  },
  {
    name:"Hobi Hobi no Mi", pt:"Fruta do Hobby", type:"Paramecia", icon:"🧸",
    fruitImg:"", userImg:"",
    user:"Sugar",
    desc:"Transforma qualquer pessoa tocada em brinquedo e apaga sua existência da memória de todos.",
    ability:"Toque transforma em brinquedo controlável com contrato obrigatório. A vítima some da memória coletiva instantaneamente — o poder mais silencioso do mundo.",
    powers:{Força:25, Velocidade:40, Defesa:30, Versatilidade:100},
    weakness:["Água do mar","Seastone","Usuário desmaiar desfaz todas as transformações"]
  },
  {
    name:"Nui Nui no Mi", pt:"Fruta da Costura", type:"Paramecia", icon:"🪡",
    fruitImg:"", userImg:"",
    user:"Leo",
    desc:"Costura e une qualquer coisa com linhas mágicas — pessoas ao chão, objetos entre si, feridas fechadas.",
    ability:"Costura inimigos ao solo sem dano. Pode fechar ferimentos costurando pele e também prender armas às mãos de aliados permanentemente.",
    powers:{Força:45, Velocidade:55, Defesa:50, Versatilidade:88},
    weakness:["Água do mar","Seastone","Força bruta pode romper as costuras"]
  },
  {
    name:"Giro Giro no Mi", pt:"Fruta da Visão", type:"Paramecia", icon:"👁️",
    fruitImg:"", userImg:"",
    user:"Viola",
    desc:"Concede visão sobrenatural que enxerga através de qualquer material e lê os pensamentos de outros.",
    ability:"Vê através de paredes, detecta mentiras lendo corações e pode projetar memórias como imagens visíveis para todos ao redor.",
    powers:{Força:35, Velocidade:45, Defesa:40, Versatilidade:95},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ato Ato no Mi", pt:"Fruta da Arte", type:"Paramecia", icon:"🎨",
    fruitImg:"", userImg:"",
    user:"Giolla",
    desc:"Transforma qualquer coisa ou pessoa em obra de arte abstrata e inoperante.",
    ability:"Pessoas transformadas em pinturas não conseguem se mover nem usar poderes. Objetos viram esculturas inúteis. Área de efeito ampla.",
    powers:{Força:40, Velocidade:45, Defesa:35, Versatilidade:88},
    weakness:["Água do mar","Seastone","Requer que a vítima esteja ao alcance"]
  },
  {
    name:"Jake Jake no Mi", pt:"Fruta do Casaco", type:"Paramecia", icon:"🧥",
    fruitImg:"", userImg:"",
    user:"Kelly Funk",
    desc:"Transforma o usuário num casaco que pode ser vestido por outra pessoa, controlando-a por dentro.",
    ability:"Controla completamente os movimentos de quem o veste, potencializando a força do hospedeiro. Difícil de remover uma vez vestido.",
    powers:{Força:75, Velocidade:65, Defesa:60, Versatilidade:72},
    weakness:["Água do mar","Seastone","Inútil sem um hospedeiro"]
  },
  {
    name:"Pamu Pamu no Mi", pt:"Fruta da Explosão", type:"Paramecia", icon:"💥",
    fruitImg:"", userImg:"",
    user:"Gladius",
    desc:"Infla e explode qualquer objeto inorgânico ou parte do próprio corpo ao toque.",
    ability:"Faz pedras, metal e até o próprio corpo explodirem como bombas. Pode inflar o chão inteiro criando campo minado de rocha.",
    powers:{Força:80, Velocidade:60, Defesa:65, Versatilidade:78},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Oshi Oshi no Mi", pt:"Fruta do Empurrão", type:"Paramecia", icon:"👐",
    fruitImg:"", userImg:"",
    user:"Yamato",
    desc:"Empurra e molda qualquer material sólido com as mãos como se fosse argila mole.",
    ability:"Deforma pedra e metal empurrando com força sobrenatural. Pode abrir passagens em muros sólidos e esculpir o terreno em batalha.",
    powers:{Força:88, Velocidade:70, Defesa:72, Versatilidade:75},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Inu Inu no Mi: Modelo Tanuki", pt:"Fruta Cão: Tanuki", type:"Zoan Mítico", icon:"🦝",
    fruitImg:"", userImg:"",
    user:"Catarina Devon",
    desc:"Transforma no tanuki mítico japonês, mestre da ilusão capaz de assumir a aparência de qualquer pessoa.",
    ability:"Cópia perfeita de qualquer pessoa — ao contrário do Mane Mane, copia também o cheiro, a voz e os poderes de fruta do diabo aparentes.",
    powers:{Força:78, Velocidade:72, Defesa:65, Versatilidade:97},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Harpia", pt:"Fruta Pássaro: Harpia", type:"Zoan Mítico", icon:"🦉",
    fruitImg:"", userImg:"",
    user:"Black Maria",
    desc:"Transforma na harpia da mitologia grega, criatura alada metade mulher metade ave de rapina.",
    ability:"Voo, garras letais e grito ensurdecedor. A harpia da mitologia era mensageira dos deuses — Black Maria usa para sedução e captura.",
    powers:{Força:80, Velocidade:85, Defesa:68, Versatilidade:78},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Alossauro", pt:"Fruta Dragão: Alossauro", type:"Zoan Antigo", icon:"🦖",
    fruitImg:"", userImg:"",
    user:"X Drake",
    desc:"Transforma no alossauro, o predador terrestre mais temido do Jurássico.",
    ability:"Mordida que parte navios ao meio. Forma híbrida mantém a destreza humana com força e mandíbulas de dinossauro de 3 toneladas.",
    powers:{Força:90, Velocidade:72, Defesa:82, Versatilidade:60},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Mushi Mushi no Mi: Modelo Kabutomushi", pt:"Fruta Inseto: Besouro", type:"Zoan", icon:"🪲",
    fruitImg:"", userImg:"",
    user:"Kabu",
    desc:"Transforma em kabutomushi, o besouro rinoceronte sagrado do Japão, símbolo de força inabalável.",
    ability:"Chifre que perfura armaduras e escudos. Forma híbrida mantém exoesqueleto natural altamente resistente a golpes físicos.",
    powers:{Força:75, Velocidade:55, Defesa:85, Versatilidade:55},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Sara Sara no Mi: Modelo Axolotl", pt:"Fruta Salamandra: Axolotl", type:"Zoan", icon:"🦎",
    fruitImg:"", userImg:"",
    user:"Smiley (criatura de Caesar)",
    desc:"Transforma numa axolotl gigante — criatura com regeneração quase ilimitada de membros.",
    ability:"Regeneração corporal extrema. Como massa de veneno viva criada por Caesar, o Smiley usava para espalhar o gás Shinokuni ao se decompor.",
    powers:{Força:65, Velocidade:40, Defesa:88, Versatilidade:70},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Zou Zou no Mi: Modelo Mastodon", pt:"Fruta Elefante: Mastodonte", type:"Zoan Antigo", icon:"🦏",
    fruitImg:"", userImg:"",
    user:"Dalton",
    desc:"Transforma no mastodonte pré-histórico, ancestral do elefante com força bruta colossal.",
    ability:"Carga devastadora que destrói fortalezas. Presas gigantescas e massa corporal que esmaga qualquer resistência no caminho.",
    powers:{Força:88, Velocidade:45, Defesa:90, Versatilidade:52},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Garuda", pt:"Fruta Pássaro: Garuda", type:"Zoan Mítico", icon:"🦚",
    fruitImg:"", userImg:"",
    user:"Shanks (mencionado) / Conceito mítico",
    desc:"Transforma na Garuda, a ave divina da mitologia hindu e budista — mensageira dos deuses.",
    ability:"Voo supersônico e garras que perfuram qualquer armadura. Considerada uma das frutas Zoan Míticas mais raras e reverenciadas.",
    powers:{Força:90, Velocidade:95, Defesa:75, Versatilidade:85},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Inu Inu no Mi: Modelo Kyubi no Kitsune", pt:"Fruta Cão: Raposa de Nove Caudas", type:"Zoan Mítico", icon:"🦊",
    fruitImg:"", userImg:"",
    user:"Catarina Devon (segunda fruta / rumor)",
    desc:"Transforma na lendária raposa de nove caudas da mitologia japonesa, mestre supremo da ilusão.",
    ability:"Ilusões absolutamente indistinguíveis da realidade. Pode enganar os sentidos de qualquer ser, incluindo usuários de Haki avançado.",
    powers:{Força:72, Velocidade:88, Defesa:65, Versatilidade:100},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Hito Hito no Mi: Modelo Daibutsu", pt:"Fruta Humana: Grande Buda", type:"Zoan Mítico", icon:"🗿",
    fruitImg:"", userImg:"",
    user:"Sengoku o Buda",
    desc:"Transforma no Grande Buda dourado, uma das raras frutas Zoan Míticas de um Almirante da Frota.",
    ability:"Transforma em gigante dourado que dispara ondas de choque devastadoras. Pode afetar uma área inteira simultaneamente.",
    powers:{Força:96, Velocidade:50, Defesa:88, Versatilidade:80},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Hito Hito no Mi", pt:"Fruta Humana", type:"Zoan", icon:"🧠",
    fruitImg:"", userImg:"",
    user:"Tony Tony Chopper",
    desc:"Permite que um animal se transforme em humano — no caso de Chopper, um rena que ganhou consciência humana.",
    ability:"Sete formas de transformação via Rumble Ball. Walk Point, Brain Point, Heavy Point, Horn Point, Arm Point, Guard Point e Kung Fu Point.",
    powers:{Força:75, Velocidade:78, Defesa:72, Versatilidade:100},
    weakness:["Água do mar","Seastone","Overdose de Rumble Ball causa perda de controle"]
  },
  {
    name:"Yomi Yomi no Mi", pt:"Fruta da Ressurreição", type:"Paramecia", icon:"💀",
    fruitImg:"", userImg:"",
    user:"Brook",
    desc:"Permite ao usuário retornar da morte uma única vez, vinculando a alma ao esqueleto permanentemente.",
    ability:"Ressurreição única garantida. Alma livre do corpo pode percorrer longas distâncias. Habilidades de gelo da alma que congelam o ar ao redor.",
    powers:{Força:70, Velocidade:82, Defesa:60, Versatilidade:85},
    weakness:["Água do mar","Seastone","Ressurreição só funciona uma vez"]
  },
  {
    name:"Shari Shari no Mi", pt:"Fruta da Roda", type:"Paramecia", icon:"⚙️",
    fruitImg:"", userImg:"",
    user:"Sharinguru",
    desc:"Transforma membros do corpo em rodas giratórias de corte e propulsão.",
    ability:"Braços e pernas giram a velocidades devastadoras cortando aço. Propulsão de veículo e ataques centrífugos de longo alcance.",
    powers:{Força:70, Velocidade:80, Defesa:55, Versatilidade:65},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Kage Kage no Mi", pt:"Fruta da Sombra", type:"Paramecia", icon:"🌚",
    fruitImg:"", userImg:"",
    user:"Gecko Moria",
    desc:"Manipula sombras — pode roubá-las de pessoas, inserindo-as em cadáveres para criar guerreiros.",
    ability:"Cria um exército de zumbis com sombras roubadas. Quem perde a sombra fraqueja à luz do sol. Controla a própria sombra como guerreiro autônomo.",
    powers:{Força:85, Velocidade:55, Defesa:70, Versatilidade:95},
    weakness:["Água do mar","Seastone","Luz do sol destrói zumbis e devolve sombras"]
  },
  {
    name:"Awa Awa no Mi", pt:"Fruta da Bolha", type:"Paramecia", icon:"🫧",
    fruitImg:"", userImg:"",
    user:"Kalifa",
    desc:"Cria bolhas de sabão que limpam qualquer coisa — inclusive a força e energia de combatentes.",
    ability:"Bolhas que ao tocar um oponente removem toda a sua força muscular, deixando-o indefeso. Transforma superfícies em escorregadias.",
    powers:{Força:45, Velocidade:60, Defesa:50, Versatilidade:78},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Doa Doa no Mi", pt:"Fruta da Porta", type:"Paramecia", icon:"🚪",
    fruitImg:"", userImg:"",
    user:"Blueno",
    desc:"Cria portas em qualquer superfície — paredes, ar, e até no próprio corpo dos inimigos.",
    ability:"Portais instantâneos em qualquer material. Pode abrir uma porta no ar para teletransporte e criar compartimentos no corpo de adversários.",
    powers:{Força:72, Velocidade:85, Defesa:68, Versatilidade:90},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Nami Nami no Mi", pt:"Fruta da Onda", type:"Paramecia", icon:"🌊",
    fruitImg:"", userImg:"",
    user:"Charlotte Smoothie",
    desc:"Espreme qualquer coisa — pessoas, objetos, ambientes — extraindo líquidos e energia vital.",
    ability:"Espreme humanos e absorve seus líquidos aumentando o próprio tamanho e força. Pode fazer objetos e pessoas encolherem ao serem torcidas.",
    powers:{Força:90, Velocidade:68, Defesa:80, Versatilidade:82},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Pero Pero no Mi", pt:"Fruta da Bala", type:"Paramecia", icon:"🍭",
    fruitImg:"", userImg:"",
    user:"Charlotte Perospero",
    desc:"Cria e controla candy — doce sólido que pode imobilizar e encapsular qualquer coisa.",
    ability:"Armadilhas e prisões de doce cristalizado. Pode criar estruturas inteiras e revestir superfícies com candy praticamente indestrutível.",
    powers:{Força:82, Velocidade:65, Defesa:88, Versatilidade:85},
    weakness:["Água do mar","Seastone","Calor e água dissolvem o candy"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Pteranodonte", pt:"Fruta Dragão: Pteranodonte", type:"Zoan Antigo", icon:"🦇",
    fruitImg:"", userImg:"",
    user:"Page One",
    desc:"Transforma no pteranodonte, o maior réptil voador já existente — ágil e letal.",
    ability:"Velocidade de mergulho e bico que perfura navios. Forma híbrida mantém agilidade aérea com força de dinossauro para combate terrestre.",
    powers:{Força:85, Velocidade:88, Defesa:70, Versatilidade:65},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Parasaurolophus", pt:"Fruta Dragão: Parasaurolopho", type:"Zoan Antigo", icon:"🦴",
    fruitImg:"", userImg:"",
    user:"Ulti",
    desc:"Transforma no parasaurolopho, dinossauro com crista craniana que amplifica ataques de cabeçada.",
    ability:"Cabeçadas que destroem estruturas inteiras. A crista óssea da forma híbrida concentra força em impactos frontais devastadores.",
    powers:{Força:88, Velocidade:75, Defesa:85, Versatilidade:60},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Buki Buki no Mi", pt:"Fruta da Arma", type:"Paramecia", icon:"⚔️",
    fruitImg:"", userImg:"",
    user:"Baby 5",
    desc:"Transforma qualquer parte do corpo em qualquer tipo de arma — espadas, canhões, mísseis.",
    ability:"Arsenal ilimitado integrado ao próprio corpo. Pode se transformar completamente em míssil de longo alcance ou em múltiplas armas simultâneas.",
    powers:{Força:80, Velocidade:72, Defesa:60, Versatilidade:95},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ishi Ishi no Mi", pt:"Fruta da Pedra", type:"Paramecia", icon:"🪨",
    fruitImg:"", userImg:"",
    user:"Pica",
    desc:"Permite ao usuário se fundir e manipular a pedra ao redor, tornando-se parte do próprio terreno.",
    ability:"Pode se tornar uma estátua de pedra gigantesca ou emergir de qualquer superfície pétrea. Criou um gigante de pedra que cobria Dressrosa inteira.",
    powers:{Força:88, Velocidade:35, Defesa:95, Versatilidade:80},
    weakness:["Água do mar","Seastone","Aço e metal não podem ser absorvidos"]
  },
  {
    name:"Bane Bane no Mi", pt:"Fruta da Mola", type:"Paramecia", icon:"🔩",
    fruitImg:"", userImg:"",
    user:"Bellamy o Manticora",
    desc:"Transforma as pernas em molas de aço que propulsionam o usuário a velocidades extremas.",
    ability:"Saltos que atingem velocidades de projétil. Impacto de queda acumula força cinética tornando os golpes devastadores após longa queda.",
    powers:{Força:82, Velocidade:90, Defesa:60, Versatilidade:65},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Toro Toro no Mi", pt:"Fruta da Fluidez", type:"Paramecia", icon:"💧",
    fruitImg:"", userImg:"",
    user:"Honey Queen",
    desc:"Torna o corpo completamente líquido e intangível, capaz de escorrer por qualquer abertura.",
    ability:"Corpo que passa por qualquer fenda. Pode engolir oponentes envolvendo-os com o próprio corpo líquido viscoso.",
    powers:{Força:50, Velocidade:75, Defesa:72, Versatilidade:80},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Sabi Sabi no Mi", pt:"Fruta da Ferrugem", type:"Paramecia", icon:"🔧",
    fruitImg:"", userImg:"",
    user:"Maynard",
    desc:"Enferruja instantaneamente qualquer metal tocado, tornando armas e armaduras completamente inúteis.",
    ability:"Toque que corrói aço e ferro em segundos. Espadas e canhões viram pó enferrujado ao contato. Inutiliza qualquer armamento metálico.",
    powers:{Força:60, Velocidade:55, Defesa:58, Versatilidade:82},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Mogu Mogu no Mi", pt:"Fruta da Toupeira", type:"Zoan", icon:"🦫",
    fruitImg:"", userImg:"",
    user:"Miss Merry Christmas",
    desc:"Transforma em toupeira gigante ou forma híbrida com capacidade de escavar o solo em alta velocidade.",
    ability:"Tunelagem subterrânea instantânea criando armadilhas. Pode emergir de qualquer ponto do solo para ataques surpresa.",
    powers:{Força:70, Velocidade:65, Defesa:72, Versatilidade:68},
    weakness:["Água do mar","Seastone","Ineficaz em superfícies duras como rocha"]
  },
  {
    name:"Ami Ami no Mi", pt:"Fruta da Rede", type:"Paramecia", icon:"🕸️",
    fruitImg:"", userImg:"",
    user:"Charlotte Katakuri (habilidade) / Net concept",
    desc:"Cria redes de fibras extremamente resistentes que capturam e imobilizam oponentes.",
    ability:"Redes lançadas a distância com fibras mais resistentes que o aço. Pode criar armadilhas invisíveis espalhadas por uma área ampla.",
    powers:{Força:55, Velocidade:60, Defesa:65, Versatilidade:80},
    weakness:["Água do mar","Seastone","Objetos cortantes destroem as fibras"]
  },
  {
    name:"Mira Mira no Mi", pt:"Fruta do Espelho", type:"Paramecia", icon:"🪞",
    fruitImg:"", userImg:"",
    user:"Charlotte Brulee",
    desc:"Controla espelhos — cria portais entre reflexos e aprisiona pessoas dentro do mundo dos espelhos.",
    ability:"Dimensão espelhada paralela à realidade. Portais instantâneos entre qualquer espelho do mundo. Pode criar cópias ilusórias de qualquer pessoa.",
    powers:{Força:45, Velocidade:80, Defesa:60, Versatilidade:95},
    weakness:["Água do mar","Seastone","Espelhos quebrados destroem os portais"]
  },
  {
    name:"Shibo Shibo no Mi", pt:"Fruta da Espremida", type:"Paramecia", icon:"🍋",
    fruitImg:"", userImg:"",
    user:"Charlotte Smoothie (variante)",
    desc:"Espreme qualquer material orgânico ou inorgânico extraindo sua essência concentrada.",
    ability:"Pode espremer até o ar extraindo umidade. Corpos espremidos ficam completamente desidratados e incapacitados permanentemente.",
    powers:{Força:85, Velocidade:62, Defesa:75, Versatilidade:80},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Triceratops", pt:"Fruta Dragão: Triceratops", type:"Zoan Antigo", icon:"🦕",
    fruitImg:"", userImg:"",
    user:"Sasaki",
    desc:"Transforma no triceratops, o dinossauro com três chifres mais reconhecível da história.",
    ability:"Carga com três chifres que perfuram o aço. Colar de ossos rotativo que cria propulsão como helicóptero para voo em forma híbrida.",
    powers:{Força:90, Velocidade:65, Defesa:88, Versatilidade:62},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Albatross", pt:"Fruta Pássaro: Albatroz", type:"Zoan", icon:"🦢",
    fruitImg:"", userImg:"",
    user:"Morgan (Capitão Axe-hand)",
    desc:"Transforma no albatroz, ave oceânica com a maior envergadura de asas do mundo aviário.",
    ability:"Voo de longuíssima distância sem pousar. Visão aguçada para navegar e detectar navios e ilhas a centenas de quilômetros.",
    powers:{Força:58, Velocidade:78, Defesa:52, Versatilidade:65},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Inu Inu no Mi: Modelo Corgi", pt:"Fruta Cão: Corgi", type:"Zoan", icon:"🐕",
    fruitImg:"", userImg:"",
    user:"Onigumo",
    desc:"Transforma em corgi ou forma híbrida com sentidos caninos extremamente aguçados.",
    ability:"Faro que rastreia qualquer pessoa pelo cheiro a quilômetros de distância. Velocidade de corrida aumentada em forma híbrida.",
    powers:{Força:62, Velocidade:75, Defesa:55, Versatilidade:65},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ushi Ushi no Mi: Modelo Girafa", pt:"Fruta Boi: Girafa", type:"Zoan", icon:"🦒",
    fruitImg:"", userImg:"",
    user:"Kaku",
    desc:"Transforma em girafa — considerada inicialmente inútil pelo próprio usuário, mas extremamente poderosa.",
    ability:"Pescoço extensível como lança. Pernas que se transformam em lâminas de vento. Forma híbrida cria ataques aerodinâmicos únicos.",
    powers:{Força:88, Velocidade:85, Defesa:75, Versatilidade:80},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Uma Uma no Mi", pt:"Fruta do Cavalo", type:"Zoan", icon:"🐴",
    fruitImg:"", userImg:"",
    user:"Stronger",
    desc:"Transforma em cavalo comum ou forma híbrida com resistência e velocidade equina aumentadas.",
    ability:"Velocidade e resistência de cavalo de corrida. Forma híbrida mantém agilidade para transporte rápido em terreno difícil.",
    powers:{Força:65, Velocidade:80, Defesa:60, Versatilidade:50},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Pássaro Flamingo", pt:"Fruta Pássaro: Flamingo", type:"Zoan", icon:"🦩",
    fruitImg:"", userImg:"",
    user:"Conceito / canon menor",
    desc:"Transforma no flamingo, ave com equilíbrio e agilidade extraordinários.",
    ability:"Equilíbrio perfeito em qualquer superfície. Forma híbrida é altamente ágil e usa os pés como armas contundentes poderosas.",
    powers:{Força:55, Velocidade:72, Defesa:50, Versatilidade:60},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Hana Hana no Mi — Gigante", pt:"Fruta da Flor (Despertar)", type:"Paramecia", icon:"🌺",
    fruitImg:"", userImg:"",
    user:"Nico Robin (Despertar)",
    desc:"Versão desperta da Hana Hana — Robin se transforma completamente em gigante feita de pétalas.",
    ability:"Transforma o próprio corpo em gigante de flores. Escala colossal para combate direto mantendo todas as habilidades da fruta original.",
    powers:{Força:90, Velocidade:55, Defesa:80, Versatilidade:97},
    weakness:["Água do mar","Seastone","Dano reflete no usuário"]
  },
  {
    name:"Gomu Gomu no Mi — Gear 5", pt:"Fruta da Borracha (Gear 5)", type:"Paramecia", icon:"☀️",
    fruitImg:"", userImg:"",
    user:"Monkey D. Luffy (Despertar)",
    desc:"O verdadeiro nome é Hito Hito no Mi: Modelo Nika — o Deus do Sol da Alegria. A fruta mais estranha do mundo.",
    ability:"Gear 5: corpo que age como cartoon, dobrando as regras da física. Pode tornar o ambiente ao redor em borracha e rir na face do perigo.",
    powers:{Força:100, Velocidade:100, Defesa:95, Versatilidade:100},
    weakness:["Água do mar","Seastone","Consome energia vital rapidamente"]
  },
  {
    name:"Neko Neko no Mi: Modelo Saber Tiger", pt:"Fruta Gato: Tigre Dente-de-Sabre", type:"Zoan Antigo", icon:"🐯",
    fruitImg:"", userImg:"",
    user:"Who's-Who",
    desc:"Transforma no tigre-dente-de-sabre pré-histórico, o felino mais letal já existente.",
    ability:"Presas de sabre que rasgam qualquer armadura. Forma híbrida combina velocidade felina com garras do tamanho de espadas.",
    powers:{Força:88, Velocidade:90, Defesa:72, Versatilidade:75},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Archaeopteryx", pt:"Fruta Pássaro: Archaeopteryx", type:"Zoan Antigo", icon:"🦅",
    fruitImg:"", userImg:"",
    user:"Gifters de Kaidou (unnamed)",
    desc:"Transforma na archaeopteryx, o elo evolutivo entre dinossauros e aves modernas.",
    ability:"Combina garras de dinossauro com asas primitivas. Velocidade de voo surpreendente aliada a força de réptil pré-histórico.",
    powers:{Força:78, Velocidade:82, Defesa:65, Versatilidade:68},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Mushi Mushi no Mi: Modelo Suzumebachi", pt:"Fruta Inseto: Vespa Gigante", type:"Zoan", icon:"🐝",
    fruitImg:"", userImg:"",
    user:"Bian",
    desc:"Transforma na suzumebachi, a vespa assassina japonesa com veneno paralisante.",
    ability:"Voo ágil e ferrão com veneno que paralisa o sistema nervoso em segundos. Pode comandar enxames de vespas menores.",
    powers:{Força:65, Velocidade:88, Defesa:55, Versatilidade:72},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Uo Uo no Mi: Modelo Yamata no Orochi", pt:"Fruta Peixe: Serpente de Oito Cabeças", type:"Zoan Mítico", icon:"🐍",
    fruitImg:"", userImg:"",
    user:"Kurozumi Orochi",
    desc:"Transforma na Yamata no Orochi da mitologia japonesa — serpente monstruosa de oito cabeças.",
    ability:"Oito cabeças independentes que atacam simultaneamente. Cabeças decepadas regeneram. Cada cabeça possui personalidade e estratégia própria.",
    powers:{Força:85, Velocidade:60, Defesa:90, Versatilidade:88},
    weakness:["Água do mar","Seastone","Cabeças podem ser destruídas permanentemente com Haki"]
  },
  {
    name:"Fude Fude no Mi", pt:"Fruta do Pincel", type:"Paramecia", icon:"🖌️",
    fruitImg:"", userImg:"",
    user:"Kurozumi Higurashi",
    desc:"Cria criaturas e objetos reais a partir de pinturas — tudo que é desenhado ganha vida.",
    ability:"Animais e humanos pintados tornam-se reais e obedecem ao criador. Ilusões perfeitas indistinguíveis da realidade para os cinco sentidos.",
    powers:{Força:50, Velocidade:55, Defesa:45, Versatilidade:97},
    weakness:["Água do mar","Seastone","Criaturas criadas voltam a ser pinturas se o usuário for incapacitado"]
  },
  {
    name:"Kibi Kibi no Mi", pt:"Fruta do Dango", type:"Paramecia", icon:"🍡",
    fruitImg:"", userImg:"",
    user:"Tama",
    desc:"Cria bolinhas de dango que domesticam animais SMILE e Zoan que as comem.",
    ability:"Qualquer Zoan ou SMILE que comer o dango obedece completamente. Pode converter exércitos inteiros de Gifters para o lado aliado.",
    powers:{Força:20, Velocidade:30, Defesa:25, Versatilidade:95},
    weakness:["Água do mar","Seastone","Só funciona em usuários de Zoan e SMILE"]
  },
  {
    name:"Mero Mero no Mi", pt:"Fruta do Amor", type:"Paramecia", icon:"💕",
    fruitImg:"", userImg:"",
    user:"Boa Hancock",
    desc:"Petrifica qualquer pessoa que sinta atração ou desejo pelo usuário com um único olhar.",
    ability:"Petrificação completa de quem sentir amor ou luxúria. Balas de amor que petrifcam em contato. A fruta mais temida por homens em todo o Grand Line.",
    powers:{Força:88, Velocidade:82, Defesa:85, Versatilidade:88},
    weakness:["Água do mar","Seastone","Quem não sente atração é imune"]
  },
  {
    name:"Woshu Woshu no Mi", pt:"Fruta da Lavagem", type:"Paramecia", icon:"🧺",
    fruitImg:"", userImg:"",
    user:"Tsuru",
    desc:"Lava e torce seres humanos como se fossem roupas, espremendo o mal de dentro deles.",
    ability:"Espreme criminosos removendo sua maldade temporariamente e os deixa pendurados como roupas lavadas. Habilidade única de 'purificação'.",
    powers:{Força:75, Velocidade:60, Defesa:65, Versatilidade:82},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Soku Soku no Mi", pt:"Fruta da Velocidade", type:"Paramecia", icon:"💨",
    fruitImg:"", userImg:"",
    user:"Charlotte Daifuku",
    desc:"Evoca um gênio imenso de uma garrafa mágica que obedece e ataca por conta própria.",
    ability:"Gênio colossal que emerge do ventre do usuário ao esfregar o estômago. Força devastadora e braços que varrem exércitos.",
    powers:{Força:88, Velocidade:55, Defesa:75, Versatilidade:72},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Vino Vino no Mi", pt:"Fruta do Vinho", type:"Paramecia", icon:"🍷",
    fruitImg:"", userImg:"",
    user:"Babe",
    desc:"Infla partes do corpo com pressão de vinho fermentado, criando explosões orgânicas.",
    ability:"Membros que incham e explodem com força de canhão. Pode direcionar a explosão com precisão cirúrgica em qualquer direção.",
    powers:{Força:72, Velocidade:55, Defesa:60, Versatilidade:68},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Toki Toki no Mi", pt:"Fruta do Tempo", type:"Paramecia", icon:"⏰",
    fruitImg:"", userImg:"",
    user:"Kozuki Toki",
    desc:"Envia pessoas para o futuro — um poder de viagem temporal unidirecional absolutamente único.",
    ability:"Envia pessoas para um ponto específico no futuro. Não pode retornar ao passado. Toki usou para enviar Momonosuke e os aliados 20 anos à frente.",
    powers:{Força:30, Velocidade:40, Defesa:35, Versatilidade:100},
    weakness:["Água do mar","Seastone","Só envia para o futuro, nunca para o passado"]
  },
  {
    name:"Zushi Zushi no Mi", pt:"Fruta da Gravidade", type:"Paramecia", icon:"🪐",
    fruitImg:"", userImg:"",
    user:"Admiral Fujitora / Issho",
    desc:"Controla a gravidade ao redor — pode aumentar, inverter ou direcionar a força gravitacional.",
    ability:"Meteoros puxados do céu. Gravidade invertida que levanta navios e ilhas. Pode esmagar oponentes com pressão gravitacional multiplicada.",
    powers:{Força:95, Velocidade:70, Defesa:85, Versatilidade:96},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Mori Mori no Mi", pt:"Fruta da Floresta", type:"Paramecia", icon:"🌳",
    fruitImg:"", userImg:"",
    user:"Admiral Ryokugyu / Aramaki",
    desc:"Controla e cria vegetação em qualquer superfície, absorvendo nutrientes e água de tudo ao redor.",
    ability:"Raízes que penetram e drenam vítimas. Pode criar florestas em segundos e se regenerar absorvendo a vida do ambiente. Imune a cortes.",
    powers:{Força:92, Velocidade:68, Defesa:95, Versatilidade:90},
    weakness:["Água do mar","Seastone","Fogo intenso queima a vegetação"]
  },
  {
    name:"Nito Nito no Mi", pt:"Fruta do Nitrogênio", type:"Logia", icon:"🧊",
    fruitImg:"", userImg:"",
    user:"Conceito / Vegapunk (teoria)",
    desc:"Transforma o usuário em nitrogênio líquido, o elemento mais frio alcançável naturalmente.",
    ability:"Temperatura próxima ao zero absoluto que congela instantaneamente qualquer matéria ao toque. Supera o gelo em destruição e velocidade de congelamento.",
    powers:{Força:85, Velocidade:80, Defesa:82, Versatilidade:88},
    weakness:["Água do mar","Seastone","Calor extremo reverte o nitrogênio a gás"]
  },
  {
    name:"Gol Gol no Mi", pt:"Fruta do Ouro", type:"Logia", icon:"🥇",
    fruitImg:"", userImg:"",
    user:"Gild Tesoro",
    desc:"Controla o ouro livremente — pode criar estruturas, aprisionar oponentes e manipular metais preciosos.",
    ability:"Ouro líquido que se solidifica ao contato, aprisionando qualquer pessoa coberta por ele. Pode criar construções e armas de ouro em fração de segundo.",
    powers:{Força:90, Velocidade:65, Defesa:88, Versatilidade:92},
    weakness:["Água do mar","Seastone","Água do mar dissolve o ouro do corpo das vítimas libertando-as"]
  },
  {
    name:"Gasha Gasha no Mi", pt:"Fruta da Montagem", type:"Paramecia", icon:"🔩",
    fruitImg:"", userImg:"",
    user:"Douglas Bullet",
    desc:"Desmonta e remonta qualquer objeto inorgânico ao redor, fundindo tudo em construções colossais.",
    ability:"Absorve navios, canhões e edifícios inteiros remontando-os em armadura ou arma gigantesca. Pode criar um gigante mecânico do tamanho de uma ilha.",
    powers:{Força:98, Velocidade:55, Defesa:96, Versatilidade:90},
    weakness:["Água do mar","Seastone","Objetos orgânicos não podem ser absorvidos"]
  },
  {
    name:"Moa Moa no Mi", pt:"Fruta do Aumento", type:"Paramecia", icon:"📈",
    fruitImg:"", userImg:"",
    user:"Byrnndi World",
    desc:"Aumenta a velocidade e o tamanho de qualquer objeto tocado em até cem vezes.",
    ability:"Projéteis lançados tornam-se enormes e velozes como meteoros. Pode aumentar o próprio corpo ou criar ondas de choque amplificadas.",
    powers:{Força:80, Velocidade:70, Defesa:65, Versatilidade:88},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Hisu Hisu no Mi", pt:"Fruta do Frio Extremo", type:"Paramecia", icon:"❄️",
    fruitImg:"", userImg:"",
    user:"Largo",
    desc:"Dispara jatos de gás criogênico que congelam instantaneamente qualquer alvo ao contato.",
    ability:"Congelamento instantâneo em temperaturas abissais. Pode criar barreiras de gelo sólido e imobilizar grupos inteiros em estátuas de gelo.",
    powers:{Força:72, Velocidade:68, Defesa:75, Versatilidade:80},
    weakness:["Água do mar","Seastone","Calor intenso reverte o congelamento"]
  },
  {
    name:"Mochi Mochi no Mi — Despertar", pt:"Fruta do Mochi (Despertar)", type:"Paramecia Especial", icon:"🌸",
    fruitImg:"", userImg:"",
    user:"Charlotte Katakuri (Despertar)",
    desc:"Versão desperta da Mochi Mochi — o ambiente ao redor se transforma em mochi.",
    ability:"Transforma o chão, paredes e teto em mochi controlável. Cria trampas de ambiente inteiro e projéteis de mochi em escala massiva.",
    powers:{Força:96, Velocidade:90, Defesa:92, Versatilidade:97},
    weakness:["Água do mar","Seastone","Fogo e água dissolvem o mochi do ambiente"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Styracosaurus", pt:"Fruta Dragão: Estiracossauro", type:"Zoan Antigo", icon:"🦕",
    fruitImg:"", userImg:"",
    user:"Black Maria (segunda forma)",
    desc:"Transforma no estiracossauro, ceratopsídeo com chifres longos e colarinho ósseo imponente.",
    ability:"Carga com chifres que atravessam cascos de navios. Colarinho ósseo cria escudo natural contra ataques frontais.",
    powers:{Força:86, Velocidade:68, Defesa:90, Versatilidade:58},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Inu Inu no Mi: Modelo Okuchi-no-Makami", pt:"Fruta Cão: Lobo Divino", type:"Zoan Mítico", icon:"🐺",
    fruitImg:"", userImg:"",
    user:"Yamato",
    desc:"Transforma no Okuchi-no-Makami, a divindade lobo protetora das montanhas na mitologia japonesa.",
    ability:"Lobo divino colossal com sopro congelante e força sobrenatural. Considerada a guardiã de Wano — poder sagrado raramente visto.",
    powers:{Força:94, Velocidade:88, Defesa:85, Versatilidade:88},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Nue", pt:"Fruta Pássaro: Nue", type:"Zoan Mítico", icon:"🦅",
    fruitImg:"", userImg:"",
    user:"Desconhecido",
    desc:"Transforma no Nue, a criatura quimérica japonesa — cabeça de macaco, corpo de tanuki, cauda de cobra e membros de tigre.",
    ability:"Grito que causa pesadelos e confusão mental em todos que ouvem. Voo e combate em múltiplas formas simultâneas únicas.",
    powers:{Força:84, Velocidade:82, Defesa:76, Versatilidade:92},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Horu Horu no Mi — Despertar", pt:"Fruta do Hormônio (Despertar)", type:"Paramecia", icon:"⚡",
    fruitImg:"", userImg:"",
    user:"Emporio Ivankov (Despertar)",
    desc:"Versão desperta da Horu Horu — pode injetar hormônios em distância sem contato.",
    ability:"Injeta hormônios a distância em área ampla. Pode afetar grupos inteiros simultaneamente, transformando exércitos ou curando aliados em massa.",
    powers:{Força:65, Velocidade:70, Defesa:60, Versatilidade:98},
    weakness:["Água do mar","Seastone","Encurta a vida do receptor"]
  },
  {
    name:"Suke Suke no Mi", pt:"Fruta da Invisibilidade", type:"Paramecia", icon:"👁️",
    fruitImg:"", userImg:"",
    user:"Absalom / Shiryu da Chuva",
    desc:"Torna o usuário e tudo que toca completamente invisível para qualquer olho.",
    ability:"Invisibilidade total incluindo roupas e objetos tocados. Shiryu do Barba Negra usa para assassinatos silenciosos imperceptíveis.",
    powers:{Força:65, Velocidade:85, Defesa:55, Versatilidade:92},
    weakness:["Água do mar","Seastone","Haki da Observação pode detectar a presença"]
  },
  {
    name:"Jara Jara no Mi", pt:"Fruta da Corrente", type:"Paramecia", icon:"⛓️",
    fruitImg:"", userImg:"",
    user:"Capitan Kidd / Hawkins (conceito)",
    desc:"Cria e controla correntes de metal que se estendem e se enrolam com força colossal.",
    ability:"Correntes extensíveis que imobilizam navios e grupos inteiros. Pode criar gaiolas de correntes e usar como chicotes ou lanças de aço.",
    powers:{Força:82, Velocidade:60, Defesa:75, Versatilidade:78},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Poke Poke no Mi", pt:"Fruta do Bolso", type:"Paramecia", icon:"👜",
    fruitImg:"", userImg:"",
    user:"Blamenco",
    desc:"Cria bolsos dimensionais no próprio corpo capazes de guardar qualquer objeto de qualquer tamanho.",
    ability:"Armazena objetos imensos em bolsos corporais. Pode sacar armas gigantes instantaneamente em combate surpreendendo qualquer oponente.",
    powers:{Força:78, Velocidade:60, Defesa:65, Versatilidade:85},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Anquilossauro", pt:"Fruta Dragão: Anquilossauro", type:"Zoan Antigo", icon:"🦕",
    fruitImg:"", userImg:"",
    user:"Hatcha",
    desc:"Transforma no anquilossauro, o dinossauro com armadura de placas ósseas e cauda em clava.",
    ability:"Armadura natural de osso impenetrável. Cauda em clava que destrói muralhas. O Zoan Antigo com maior defesa natural de Onigashima.",
    powers:{Força:90, Velocidade:38, Defesa:98, Versatilidade:50},
    weakness:["Água do mar","Seastone","Barriga exposta sem armadura"]
  },
  {
    name:"Fuku Fuku no Mi", pt:"Fruta da Roupa", type:"Paramecia", icon:"👘",
    fruitImg:"", userImg:"",
    user:"Kin'emon",
    desc:"Cria roupas e disfarces tocando pedras ou folhas — qualquer material vira roupa funcional.",
    ability:"Disfarces perfeitos em segundos para qualquer pessoa. Pode criar uniformes idênticos aos inimigos e disfarçar grandes grupos para infiltração.",
    powers:{Força:30, Velocidade:45, Defesa:35, Versatilidade:90},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Wapu Wapu no Mi", pt:"Fruta do Teletransporte", type:"Paramecia", icon:"🌀",
    fruitImg:"", userImg:"",
    user:"Paidain",
    desc:"Teletransporta o usuário e aliados tocados a qualquer local já visitado anteriormente.",
    ability:"Teletransporte instantâneo sem rastro visível. Pode levar grupos inteiros consigo e reaparecer em qualquer ponto memorizado.",
    powers:{Força:45, Velocidade:100, Defesa:50, Versatilidade:92},
    weakness:["Água do mar","Seastone","Só pode ir para lugares já visitados"]
  },
  {
    name:"Mato Mato no Mi", pt:"Fruta do Alvo", type:"Paramecia", icon:"🎯",
    fruitImg:"", userImg:"",
    user:"Vander Decken IX",
    desc:"Marca qualquer pessoa ou objeto tocado como alvo absoluto — tudo lançado vai diretamente ao alvo.",
    ability:"Qualquer projétil lançado após marcar um alvo vai inexoravelmente até ele. Pode lançar navios inteiros como mísseis contra o alvo marcado.",
    powers:{Força:70, Velocidade:65, Defesa:55, Versatilidade:85},
    weakness:["Água do mar","Seastone","Só pode marcar dois alvos simultaneamente — um por mão"]
  },
  {
    name:"Deri Deri no Mi", pt:"Fruta da Eletricidade", type:"Logia", icon:"⚡",
    fruitImg:"", userImg:"",
    user:"Hackett",
    desc:"Transforma o usuário em eletricidade pura, capaz de se mover na velocidade da corrente elétrica.",
    ability:"Corpo intangível de eletricidade que paralisa qualquer inimigo tocado. Pode viajar por superfícies condutoras e criar tempestades elétricas localizadas.",
    powers:{Força:85, Velocidade:95, Defesa:70, Versatilidade:85},
    weakness:["Água do mar","Seastone","Materiais isolantes bloqueiam o movimento"]
  },
];


/* ─── 02. ESTADO DA UI ──────────────────────────── */

let currentFilter = 'all';


/* ─── 03. FUNÇÕES UTILITÁRIAS ───────────────────── */

// Retorna a classe CSS baseada no tipo da fruta
function typeClass(t) {
  if (t.includes('Paramecia')) return 'paramecia';
  if (t.includes('Zoan'))      return 'zoan';
  return 'logia';
}

// Retorna o rótulo de exibição do tipo
function typeLabel(t) {
  if (t.includes('Paramecia')) return t;
  if (t.includes('Zoan'))      return t;
  return 'Logia';
}


/* ─── 04. FILTROS E BUSCA ───────────────────────── */

function setFilter(type) {
  currentFilter = type;

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.className = 'filter-btn';
    if (btn.dataset.type === type) {
      if      (type === 'all')      btn.classList.add('active-all');
      else if (type === 'Paramecia') btn.classList.add('active-param');
      else if (type === 'Zoan')      btn.classList.add('active-zoan');
      else if (type === 'Logia')     btn.classList.add('active-logia');
    }
  });

  render();
}

function getFiltered() {
  const q = document.getElementById('search').value.toLowerCase().trim();

  return fruits.filter(f => {
    const matchType   = currentFilter === 'all' || f.type.includes(currentFilter);
    const matchSearch = !q
      || f.name.toLowerCase().includes(q)
      || f.pt.toLowerCase().includes(q)
      || f.user.toLowerCase().includes(q)
      || f.desc.toLowerCase().includes(q)
      || f.ability.toLowerCase().includes(q);

    return matchType && matchSearch;
  });
}


/* ─── 05. RENDER — GRID DE CARDS ────────────────── */

function render() {
  const filtered = getFiltered();
  const total    = filtered.length;

  document.getElementById('count').textContent =
    `${total} fruta${total !== 1 ? 's' : ''} encontrada${total !== 1 ? 's' : ''} nas archives`;

  const grid = document.getElementById('grid');

  if (!total) {
    grid.innerHTML = '<div class="empty">Nenhuma fruta encontrada nas archives do Grand Line…</div>';
    return;
  }

  grid.innerHTML = filtered.map((f, i) => {
    const idx = fruits.indexOf(f);

    const coverHtml = f.fruitImg
      ? `<img class="card-cover" src="${f.fruitImg}" alt="${f.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      : '';
    const placeholderHtml = `<div class="card-cover-placeholder" ${f.fruitImg ? 'style="display:none"' : ''}>${f.icon}</div>`;

    return `
      <div class="card ${typeClass(f.type)}"
           onclick="openModal(${idx})"
           style="animation-delay:${i * 0.04}s"
           role="button"
           tabindex="0"
           onkeydown="if(event.key==='Enter') openModal(${idx})">

        ${coverHtml}${placeholderHtml}

        <div class="card-body">
          <div class="card-top">
            <div class="fruit-name">${f.name}</div>
            <span class="type-badge">${typeLabel(f.type)}</span>
          </div>

          <div class="fruit-name-pt">${f.pt}</div>

          <div class="user-row">
            <span class="user-dot"></span>
            <span class="user-name">Usuário: <strong>${f.user.split('/')[0].trim()}</strong></span>
          </div>

          <div class="desc">${f.desc}</div>
        </div>
      </div>
    `;
  }).join('');
}


/* ─── 06. RENDER — MODAL ────────────────────────── */

function openModal(idx) {
  const f         = fruits[idx];
  const tc        = typeClass(f.type);
  const fillClass = tc + '-fill';
  const modal     = document.getElementById('modal');

  // Imagem da fruta — real ou placeholder com emoji
  const fruitImgHtml = f.fruitImg
    ? `<img class="modal-fruit-img" src="${f.fruitImg}" alt="${f.name}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const fruitPlaceholder = `<div class="modal-fruit-placeholder" ${f.fruitImg ? 'style="display:none"' : ''}>${f.icon}</div>`;

  // Avatar do usuário — real ou placeholder com emoji 👤
  const userAvatarHtml = f.userImg
    ? `<img class="modal-user-avatar" src="${f.userImg}" alt="${f.user}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const userPlaceholder = `<div class="modal-user-avatar-placeholder" ${f.userImg ? 'style="display:none"' : ''}>👤</div>`;

  const powerBars = Object.entries(f.powers).map(([k, v]) => `
    <div class="power-row">
      <div class="power-label">${k}</div>
      <div class="power-track">
        <div class="power-fill ${fillClass}" style="width:0%" data-target="${v}"></div>
      </div>
      <div class="power-value">${v}</div>
    </div>
  `).join('');

  const weaknessPills = f.weakness
    .map(w => `<span class="weakness-pill">${w}</span>`)
    .join('');

  modal.innerHTML = `
    <button class="modal-close" onclick="closeModal()" aria-label="Fechar">×</button>

    ${fruitImgHtml}${fruitPlaceholder}

    <h2>${f.name}</h2>
    <div class="modal-pt">${f.pt}</div>

    <div class="modal-badge-row">
      <span class="type-badge ${tc}">${typeLabel(f.type)}</span>
    </div>

    <div class="divider"></div>

    <div class="modal-section">
      <div class="modal-label">Usuário(s) Conhecido(s)</div>
      <div class="modal-user-row">
        ${userAvatarHtml}${userPlaceholder}
        <div class="modal-user-info">
          <span class="modal-user-label">Usuário</span>
          <span class="modal-user-name">${f.user}</span>
        </div>
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-label">Descrição</div>
      <div class="modal-text" style="font-style:italic;color:var(--muted)">${f.desc}</div>
    </div>

    <div class="modal-section">
      <div class="modal-label">Habilidade Detalhada</div>
      <div class="modal-text">${f.ability}</div>
    </div>

    <div class="divider"></div>

    <div class="modal-section">
      <div class="modal-label">Estatísticas de Poder</div>
      <div class="power-bar">${powerBars}</div>
    </div>

    <div class="modal-section">
      <div class="modal-label">Fraquezas</div>
      <div style="margin-top:4px">${weaknessPills}</div>
    </div>
  `;

  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    modal.querySelectorAll('.power-fill').forEach(bar => {
      bar.style.width = bar.dataset.target + '%';
    });
  }, 150);
}

function closeModal() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('overlay')) closeModal();
}


/* ─── 07. EVENTOS GLOBAIS ───────────────────────── */

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});


/* ─── 08. INICIALIZAÇÃO ─────────────────────────── */

render();
