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
    user:"Monkey D. Luffy",
    desc:"Transforma o corpo em borracha, tornando o usuário imune a impactos físicos e relâmpagos.",
    ability:"Corpo completamente elástico e resistente a projéteis. Com domínio do Haki, desperta o Gear 5, transformando o usuário no Guerreiro da Libertação.",
    powers:{Força:95, Velocidade:80, Defesa:90, Versatilidade:98},
    weakness:["Água do mar","Seastone","Impacto direto em Seastone"]
  },
  {
    name:"Mera Mera no Mi", pt:"Fruta da Chama", type:"Logia", icon:"🔥",
    user:"Portgas D. Ace / Sabo",
    desc:"Permite ao usuário criar, controlar e se transformar em fogo livremente.",
    ability:"Domínio total sobre o fogo. Ataques como Hiken e Fire Fist incendiam tudo ao redor. Corpo intangível de chamas.",
    powers:{Força:90, Velocidade:85, Defesa:75, Versatilidade:88},
    weakness:["Água do mar","Seastone","Magma (supera o fogo)"]
  },
  {
    name:"Hie Hie no Mi", pt:"Fruta do Gelo", type:"Logia", icon:"❄️",
    user:"Aokiji / Kuzan",
    desc:"Transforma o usuário em gelo, capaz de congelar o próprio oceano num raio imenso.",
    ability:"Pode congelar tudo que toca, incluindo o ar e a água do mar. Criou pontes de gelo permanentes entre ilhas.",
    powers:{Força:88, Velocidade:80, Defesa:85, Versatilidade:92},
    weakness:["Água do mar","Seastone","Fogo intenso"]
  },
  {
    name:"Gura Gura no Mi", pt:"Fruta do Tremor", type:"Paramecia", icon:"⚡",
    user:"Edward Newgate (Barba Branca) / Marshall D. Teach",
    desc:"Considerada a fruta Paramecia mais poderosa — capaz de destruir o mundo com terremotos e tsunamis.",
    ability:"Gera vibrações e terremotos devastadores no ar e no chão. Pode criar tsunamis e rachar o próprio ar.",
    powers:{Força:100, Velocidade:60, Defesa:70, Versatilidade:85},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ope Ope no Mi", pt:"Fruta da Operação", type:"Paramecia", icon:"💊",
    user:"Trafalgar D. Water Law",
    desc:"Cria uma 'sala de operações' onde o usuário controla espaço e matéria livremente dentro de uma esfera.",
    ability:"ROOM: separa e reposiciona corpos e objetos sem causar dano. Pode conceder imortalidade a outra pessoa ao custo da própria vida do usuário.",
    powers:{Força:75, Velocidade:70, Defesa:65, Versatilidade:100},
    weakness:["Água do mar","Seastone","Limite de espaço do ROOM"]
  },
  {
    name:"Yami Yami no Mi", pt:"Fruta das Trevas", type:"Logia", icon:"🌑",
    user:"Marshall D. Teach (Barba Negra)",
    desc:"A mais misteriosa fruta Logia — absorve tudo e neutraliza poderes de outras frutas do diabo.",
    ability:"Cria escuridão que absorve ataques e tudo ao redor. Única fruta capaz de anular o poder de outras frutas do diabo pelo toque.",
    powers:{Força:92, Velocidade:55, Defesa:60, Versatilidade:95},
    weakness:["Água do mar","Seastone","Não deflecte dano como outras Logia"]
  },
  {
    name:"Pika Pika no Mi", pt:"Fruta da Luz", type:"Logia", icon:"✨",
    user:"Borsalino (Kizaru)",
    desc:"Transforma o usuário em luz pura, tornando-o o ser mais veloz já visto no Grand Line.",
    ability:"Velocidade da luz absoluta. Lasers de alta potência e capacidade de movimento instantâneo a qualquer ponto iluminado.",
    powers:{Força:88, Velocidade:100, Defesa:72, Versatilidade:85},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Magu Magu no Mi", pt:"Fruta do Magma", type:"Logia", icon:"🌋",
    user:"Sakazuki (Akainu)",
    desc:"O poder ofensivo mais destrutivo dentre todas as frutas Logia. Magma que corrói e supera o próprio fogo.",
    ability:"Magma derrete tudo que toca, incluindo outras Logia. Seu calor derreteu boa parte de Marineford durante a Grande Guerra.",
    powers:{Força:100, Velocidade:60, Defesa:80, Versatilidade:82},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Fênix", pt:"Fruta Pássaro: Fênix", type:"Zoan Mítico", icon:"🦅",
    user:"Marco o Fênix",
    desc:"Fruta Zoan Mítica que transforma em fênix, com chamas azuis que possuem propriedades regenerativas únicas.",
    ability:"Regeneração ilimitada através das chamas da fênix. Voo em alta velocidade e chamas azuis que curam aliados ao toque.",
    powers:{Força:85, Velocidade:90, Defesa:98, Versatilidade:90},
    weakness:["Água do mar","Seastone","Dano excessivo pode temporariamente impedir a regeneração"]
  },
  {
    name:"Ito Ito no Mi", pt:"Fruta das Linhas", type:"Paramecia", icon:"🕸️",
    user:"Donquixote Doflamingo",
    desc:"Gera fios de aço inquebrável que podem cortar cidades ao meio e controlar humanos como marionetes.",
    ability:"Fios que cortam o aço. Controla humanos como marionetes. Pode cobrir cidades inteiras com uma gaiola de fios chamada Birdcage.",
    powers:{Força:85, Velocidade:80, Defesa:75, Versatilidade:93},
    weakness:["Água do mar","Seastone","Chamas extremas"]
  },
  {
    name:"Nikyu Nikyu no Mi", pt:"Fruta das Patas", type:"Paramecia", icon:"🐾",
    user:"Bartholomew Kuma",
    desc:"Repele qualquer coisa — dor, ar, pessoas — com patas que atingem velocidade de repulsão insana.",
    ability:"Pode repelir até o ar comprimido como canhões e remover fisicamente a dor de uma pessoa. Movimento por repulsão ao solo alcança velocidades próximas da luz.",
    powers:{Força:78, Velocidade:95, Defesa:70, Versatilidade:87},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Suna Suna no Mi", pt:"Fruta da Areia", type:"Logia", icon:"🏜️",
    user:"Sir Crocodile",
    desc:"Controle total sobre a areia — pode desidratar qualquer ser vivo pelo simples toque.",
    ability:"Absorve umidade de pessoas e objetos matando pelo toque direto. Cria tempestades de areia de alcance continental.",
    powers:{Força:82, Velocidade:75, Defesa:78, Versatilidade:86},
    weakness:["Água do mar","Seastone","Qualquer líquido solidifica a areia"]
  },
  {
    name:"Hana Hana no Mi", pt:"Fruta da Flor", type:"Paramecia", icon:"🌸",
    user:"Nico Robin",
    desc:"Faz brotar cópias dos membros do corpo em qualquer superfície vista pelo usuário, em qualquer lugar.",
    ability:"Pode criar múltiplos braços, olhos ou pernas em qualquer superfície — incluindo os corpos de inimigos para imobilizá-los ou quebrá-los.",
    powers:{Força:65, Velocidade:60, Defesa:55, Versatilidade:97},
    weakness:["Água do mar","Seastone","Dano nos membros reflete no usuário"]
  },
  {
    name:"Bari Bari no Mi", pt:"Fruta da Barreira", type:"Paramecia", icon:"🛡️",
    user:"Bartolomeo",
    desc:"Cria barreiras invisíveis absolutamente indestrutíveis — nenhuma força conhecida pode quebrá-las.",
    ability:"Barreiras que bloquearam ataques dos Yonkou. Pode moldar em qualquer forma, incluindo plataformas, lâminas e escudos.",
    powers:{Força:50, Velocidade:45, Defesa:100, Versatilidade:72},
    weakness:["Água do mar","Seastone","Apenas um conjunto de barreiras por vez"]
  },
  {
    name:"Mochi Mochi no Mi", pt:"Fruta do Mochi", type:"Paramecia Especial", icon:"🍡",
    user:"Charlotte Katakuri",
    desc:"Fruta Paramecia que age como Logia — controla mochi com velocidade e precisão sobrehumana.",
    ability:"Cria e controla mochi. Combinada com Haki da Observação avançado permite prever o futuro próximo, tornando Katakuri quase invencível.",
    powers:{Força:92, Velocidade:88, Defesa:85, Versatilidade:91},
    weakness:["Água do mar","Seastone","Fogo / água dissolvem o mochi"]
  },
  {
    name:"Zou Zou no Mi: Modelo Mamute", pt:"Fruta Elefante: Mamute", type:"Zoan Antigo", icon:"🦣",
    user:"Jack 'o Calamidade'",
    desc:"Transforma em um mamute gigantesco pré-histórico de força e resistência colossal.",
    ability:"Força bruta devastadora em forma de mamute lanudo. Resistência extrema que permite manter combate por dias seguidos.",
    powers:{Força:95, Velocidade:40, Defesa:92, Versatilidade:55},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Wara Wara no Mi", pt:"Fruta da Palha", type:"Paramecia", icon:"🌾",
    user:"Basil Hawkins",
    desc:"Transfere dano recebido para bonecas de palha previamente ligadas a outras pessoas.",
    ability:"Dano que mataria o usuário é redistribuído às vítimas das bonecas. Também pode transformar parcialmente o corpo em um espantalho de palha.",
    powers:{Força:70, Velocidade:65, Defesa:88, Versatilidade:82},
    weakness:["Água do mar","Seastone","Fogo"]
  },
  {
    name:"Noro Noro no Mi", pt:"Fruta da Lentidão", type:"Paramecia", icon:"⏳",
    user:"Foxy o Raposo Prateado",
    desc:"Dispara raios de Noroma que retardam tudo que tocam a um trezentos avos da velocidade normal.",
    ability:"Raios de desaceleração que paralisam alvos por 30 segundos sem impedir dano físico. Pode afetar múltiplos alvos simultaneamente.",
    powers:{Força:40, Velocidade:50, Defesa:45, Versatilidade:80},
    weakness:["Água do mar","Seastone","O próprio usuário pode ser atingido"]
  },
  {
    name:"Doku Doku no Mi", pt:"Fruta do Veneno", type:"Paramecia", icon:"☠️",
    user:"Magellan",
    desc:"Produz e controla venenos de qualquer tipo e toxicidade — desde paralisantes até letais instantâneos.",
    ability:"Corpo imune a qualquer veneno. Pode produzir Hydra, veneno capaz de dissolver navios, e Venom Demon, que cobre ilhas inteiras.",
    powers:{Força:85, Velocidade:55, Defesa:88, Versatilidade:90},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Horo Horo no Mi", pt:"Fruta do Fantasma", type:"Paramecia", icon:"👻",
    user:"Perona",
    desc:"Cria fantasmas espectrais negativos que sugam toda a vontade de lutar das vítimas.",
    ability:"Fantasmas Negativos que causam depressão profunda instantânea. Pode projetar a consciência para fora do corpo em forma astral.",
    powers:{Força:45, Velocidade:60, Defesa:50, Versatilidade:83},
    weakness:["Água do mar","Seastone","Pessoas naturalmente negativas são imunes"]
  },
  {
    name:"Uo Uo no Mi: Modelo Dragão Celestial", pt:"Fruta Peixe: Dragão Celestial", type:"Zoan Mítico", icon:"🐉",
    user:"Kaidou dos Cem Feras",
    desc:"A fruta mais poderosa do mundo, transformando o usuário no ser mais forte da história.",
    ability:"Transforma em dragão colossal capaz de voar, criar tempestades e disparar Boro Breath destruindo ilhas. Despertar permite transformações parciais híbridas.",
    powers:{Força:100, Velocidade:85, Defesa:100, Versatilidade:95},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Soru Soru no Mi", pt:"Fruta da Alma", type:"Paramecia", icon:"💀",
    user:"Charlotte Linlin (Big Mom)",
    desc:"Manipula almas de seres humanos — extrai, transfere e infunde vida em objetos inanimados.",
    ability:"Cria Homies ao infundir almas em objetos e animais. Pode roubar anos de vida pelo medo das vítimas, tornando-se mais forte com cada alma absorvida.",
    powers:{Força:96, Velocidade:70, Defesa:85, Versatilidade:97},
    weakness:["Água do mar","Seastone","Não funciona em quem não sente medo"]
  },
  {
    name:"Fuwa Fuwa no Mi", pt:"Fruta da Flutuação", type:"Paramecia", icon:"☁️",
    user:"Shiki o Leão Dourado",
    desc:"Confere ao usuário a habilidade de fazer objetos inanimados flutuarem e se moverem pelo ar.",
    ability:"Pode fazer flotar ilhas inteiras, navios e partes de cidades. Os objetos flutuantes obedecerão o usuário enquanto ele estiver consciente.",
    powers:{Força:82, Velocidade:75, Defesa:65, Versatilidade:92},
    weakness:["Água do mar","Seastone","Não funciona em pessoas vivas"]
  },
  {
    name:"Jiku Jiku no Mi", pt:"Fruta da Dimensão", type:"Paramecia", icon:"🎵",
    user:"Scratchmen Apoo",
    desc:"Transforma partes do corpo em instrumentos musicais e sons em ataques físicos.",
    ability:"Converte notas musicais em ondas de choque e cortes físicos. Som que se ouve causa dano real — difícil de bloquear pois age diretamente sobre o ouvido.",
    powers:{Força:72, Velocidade:68, Defesa:55, Versatilidade:85},
    weakness:["Água do mar","Seastone","Tampar os ouvidos anula os ataques"]
  },
  {
    name:"Bomu Bomu no Mi", pt:"Fruta da Bomba", type:"Paramecia", icon:"💣",
    user:"Mr. 5",
    desc:"Torna qualquer parte do corpo — inclusive o hálito e os narizes — explosiva.",
    ability:"Explosões controláveis em qualquer secreção corporal. O usuário é completamente imune a explosões, incluindo as mais poderosas.",
    powers:{Força:75, Velocidade:55, Defesa:65, Versatilidade:78},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Kilo Kilo no Mi", pt:"Fruta do Quilograma", type:"Paramecia", icon:"⚖️",
    user:"Miss Valentine",
    desc:"Permite alterar o próprio peso entre 1 e 10.000 quilogramas instantaneamente.",
    ability:"Pode esmagar inimigos com pressão de 10 toneladas ou flutuar levíssima como uma pena para planar pelo ar.",
    powers:{Força:65, Velocidade:60, Defesa:55, Versatilidade:70},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Sube Sube no Mi", pt:"Fruta do Deslize", type:"Paramecia", icon:"🧴",
    user:"Alvida",
    desc:"Torna a pele do usuário completamente lisa e escorregadia, deflectindo qualquer ataque físico.",
    ability:"Ataques deslizam pelo corpo sem causar dano. O usuário também desliza sobre qualquer superfície com velocidade aumentada.",
    powers:{Força:50, Velocidade:72, Defesa:80, Versatilidade:60},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Bara Bara no Mi", pt:"Fruta da Separação", type:"Paramecia", icon:"✂️",
    user:"Buggy o Palhaço",
    desc:"Fragmenta o corpo em pedaços independentes que flutuam e se movem separadamente.",
    ability:"Partes do corpo voam de forma autônoma e são completamente invulneráveis a ataques de corte. Pode lançar punhos e pés a distância.",
    powers:{Força:55, Velocidade:65, Defesa:70, Versatilidade:75},
    weakness:["Água do mar","Seastone","Não pode nadar — pés ficam presos na água"]
  },
  {
    name:"Toge Toge no Mi", pt:"Fruta dos Espinhos", type:"Paramecia", icon:"🌵",
    user:"Miss Doublefinger",
    desc:"Faz brotar espinhos afiados como lâminas em qualquer parte do corpo.",
    ability:"Espinhos extensíveis que perfuram qualquer material. Pode usá-los como lanças, escudos e até propelir o corpo como foguete.",
    powers:{Força:70, Velocidade:65, Defesa:72, Versatilidade:68},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Kama Kama no Mi", pt:"Fruta da Foice", type:"Paramecia", icon:"🌪️",
    user:"Eric the Whirlwind",
    desc:"Gera lâminas de vento cortante a partir dos braços que podem fatiar até o aço.",
    ability:"Redemoinhos de ar comprimido invisíveis que cortam à distância. Alcance quase ilimitado e difícil de bloquear.",
    powers:{Força:68, Velocidade:75, Defesa:50, Versatilidade:72},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ori Ori no Mi", pt:"Fruta da Gaiola", type:"Paramecia", icon:"⛓️",
    user:"Hina a Preta",
    desc:"Cria grilhões e grades de ferro ao redor de qualquer ser que atravesse o corpo do usuário.",
    ability:"Quem passa pelo usuário fica automaticamente aprisionado em barras de aço que crescem do contato. Impossível de escapar sem força bruta extrema.",
    powers:{Força:65, Velocidade:55, Defesa:60, Versatilidade:73},
    weakness:["Água do mar","Seastone","Força bruta suficiente pode romper as barras"]
  },
  {
    name:"Nagi Nagi no Mi", pt:"Fruta do Silêncio", type:"Paramecia", icon:"🔇",
    user:"Corazon / Rosinante Donquixote",
    desc:"Cria bolhas de silêncio absoluto ao redor do usuário ou de áreas específicas.",
    ability:"Sons dentro da bolha não saem e sons externos não entram. Permite operações completamente silenciosas e protege aliados de ataques sonoros.",
    powers:{Força:45, Velocidade:55, Defesa:60, Versatilidade:82},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Chiyu Chiyu no Mi", pt:"Fruta da Cura", type:"Paramecia", icon:"💚",
    user:"Mansherry",
    desc:"Cura ferimentos de outras pessoas com lágrimas que possuem propriedades regenerativas sobrenaturais.",
    ability:"Lágrimas curam ferimentos físicos instantaneamente. Com esforço maior, pode até restaurar objetos quebrados e revitalizar plantas mortas.",
    powers:{Força:20, Velocidade:40, Defesa:30, Versatilidade:88},
    weakness:["Água do mar","Seastone","Não cura o próprio usuário"]
  },
  {
    name:"Beta Beta no Mi", pt:"Fruta do Muco", type:"Paramecia", icon:"🟢",
    user:"Trebol",
    desc:"Produz quantidades ilimitadas de muco extremamente pegajoso e inflamável.",
    ability:"Muco que cola qualquer coisa imobilizando inimigos e pode ser incendiado. Trebol usou para fingir ter Haki da Observação disfarçando os fios com muco.",
    powers:{Força:60, Velocidade:45, Defesa:75, Versatilidade:78},
    weakness:["Água do mar","Seastone","Fogo próprio pode incendiar o muco"]
  },
  {
    name:"Inu Inu no Mi: Modelo Lobo", pt:"Fruta Cão: Lobo", type:"Zoan", icon:"🐺",
    user:"Jabra",
    desc:"Transforma o usuário em lobo ou forma híbrida lobo-humano com velocidade e agilidade superiores.",
    ability:"Velocidade e instintos predatórios de um lobo. Forma híbrida combina destreza humana com força animal para combate corpo a corpo devastador.",
    powers:{Força:82, Velocidade:88, Defesa:70, Versatilidade:65},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Neko Neko no Mi: Modelo Leopardo", pt:"Fruta Gato: Leopardo", type:"Zoan", icon:"🐆",
    user:"Rob Lucci",
    desc:"A fruta Zoan mais poderosa da Marinha — transforma no felino mais veloz e letal da natureza.",
    ability:"Velocidade e agilidade felina extremas. Forma híbrida de leopardo-humano combina a força dos CP9 com reflexos sobrenaturais.",
    powers:{Força:93, Velocidade:97, Defesa:78, Versatilidade:85},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Uma Uma no Mi: Modelo Pegasus", pt:"Fruta Cavalo: Pégaso", type:"Zoan Mítico", icon:"🦄",
    user:"Stronger (cavalo de Doc Q)",
    desc:"Transforma em pégaso, o cavalo alado da mitologia, concedendo voo e força sobre-humana.",
    ability:"Voo rápido com asas poderosas. Combina a resistência de um cavalo com a liberdade do céu, sendo um dos raros Zoan Míticos animais.",
    powers:{Força:78, Velocidade:82, Defesa:70, Versatilidade:68},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Hebi Hebi no Mi: Modelo Anaconda", pt:"Fruta Cobra: Anaconda", type:"Zoan", icon:"🐍",
    user:"Boa Sandersonia",
    desc:"Transforma em anaconda gigante, a maior cobra do mundo, com força constritora devastadora.",
    ability:"Constrição que esmaga armaduras. Forma híbrida mantém as habilidades de Haki das Kuja, amplificadas pela força da cobra.",
    powers:{Força:80, Velocidade:70, Defesa:72, Versatilidade:65},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Hebi Hebi no Mi: Modelo King Cobra", pt:"Fruta Cobra: King Cobra", type:"Zoan", icon:"🐉",
    user:"Boa Marigold",
    desc:"Transforma em king cobra gigante, cujo veneno é poderoso o suficiente para matar em segundos.",
    ability:"Veneno paralisante instantâneo aliado à força da cobra. Forma híbrida combina estatura colossal com presas letais.",
    powers:{Força:82, Velocidade:65, Defesa:75, Versatilidade:68},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Falcão", pt:"Fruta Pássaro: Falcão", type:"Zoan", icon:"🦅",
    user:"Pell",
    desc:"Transforma no único ser vivo capaz de voar entre as cinco espécies de Alabasta — o falcão sagrado.",
    ability:"Voo em alta velocidade com visão aguçada. Considerado um dos cinco tesouros nacionais de Alabasta por sua lealdade e poder.",
    powers:{Força:75, Velocidade:85, Defesa:60, Versatilidade:70},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Guru Guru no Mi", pt:"Fruta da Rotação", type:"Paramecia", icon:"🔄",
    user:"Buffalo",
    desc:"Faz girar qualquer parte do corpo como hélice, gerando propulsão e força rotacional.",
    ability:"Rotação de membros cria propulsão para voo, ataques centrífugos devastadores e pode ser usada para escapar de prisões.",
    powers:{Força:65, Velocidade:80, Defesa:50, Versatilidade:72},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Brachiosaurus", pt:"Fruta Dragão: Braquiossauro", type:"Zoan Antigo", icon:"🦕",
    user:"Queen a Calamidade",
    desc:"Transforma no maior dinossauro herbívoro — mas Queen o usa de forma brutal e letal.",
    ability:"Pescoço extensível como chicote de aço. Transformação híbrida combina a tecnologia cyborg de Queen com a força colossal do braquiossauro.",
    powers:{Força:92, Velocidade:55, Defesa:88, Versatilidade:70},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Spinossauro", pt:"Fruta Dragão: Espinossauro", type:"Zoan Antigo", icon:"🦖",
    user:"King a Calamidade",
    desc:"Transforma no maior predador terrestre já existente, o espinossauro — fruta do mais forte All-Star de Kaidou.",
    ability:"Força e tamanho avassaladores. Forma híbrida com asas de pterodáctilo permite voo. Capacidade de gerar chamas negras únicas de sua raça.",
    powers:{Força:97, Velocidade:78, Defesa:90, Versatilidade:80},
    weakness:["Água do mar","Seastone","Remover a máscara expõe sua fraqueza racial"]
  },
  {
    name:"Memo Memo no Mi", pt:"Fruta da Memória", type:"Paramecia", icon:"🎞️",
    user:"Charlotte Pudding",
    desc:"Extrai, edita e insere memórias em qualquer pessoa como se fossem fitas de filme.",
    ability:"Pode remover memórias específicas ou alterar como eventos foram recordados. Ferramenta de espionagem e manipulação sem igual.",
    powers:{Força:30, Velocidade:40, Defesa:35, Versatilidade:92},
    weakness:["Água do mar","Seastone","Requer contato visual direto com a vítima"]
  },
  {
    name:"Netsu Netsu no Mi", pt:"Fruta do Calor", type:"Paramecia", icon:"🌡️",
    user:"Charlotte Oven",
    desc:"Eleva a temperatura do corpo a níveis extremos, aquecendo tudo que toca e o ar ao redor.",
    ability:"Corpo que derrete o aço pelo toque. Pode aquecer o próprio oceano ao redor, tornando a fuga por mar impossível para inimigos.",
    powers:{Força:85, Velocidade:65, Defesa:80, Versatilidade:78},
    weakness:["Água do mar","Seastone","Frio intenso reduz sua eficácia"]
  },
  {
    name:"Horu Horu no Mi", pt:"Fruta do Hormônio", type:"Paramecia", icon:"💉",
    user:"Emporio Ivankov",
    desc:"Produz e injeta hormônios especiais no corpo de qualquer pessoa, alterando metabolismo e biologia.",
    ability:"Pode mudar o sexo de uma pessoa, curar doenças quase fatais injetando energia vital e aumentar força e velocidade com hormônios especiais.",
    powers:{Força:60, Velocidade:65, Defesa:55, Versatilidade:95},
    weakness:["Água do mar","Seastone","Encurta a vida do receptor"]
  },
  {
    name:"Choki Choki no Mi", pt:"Fruta da Tesoura", type:"Paramecia", icon:"✂️",
    user:"Inazuma",
    desc:"Transforma partes do corpo em tesouras gigantes capazes de cortar qualquer material como se fosse papel.",
    ability:"Corta o próprio terreno, metais e pedras como papel e pode dobrar os recortes em qualquer forma — incluindo escadas, escudos e pontes.",
    powers:{Força:72, Velocidade:65, Defesa:60, Versatilidade:85},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Baku Baku no Mi", pt:"Fruta da Mastigação", type:"Paramecia", icon:"🦷",
    user:"Wapol",
    desc:"Permite comer e digerir qualquer material — metais, madeira, canhões — e incorporar suas propriedades.",
    ability:"Absorve propriedades de tudo que come. Pode fundir objetos ingeridos no próprio corpo ou criar novos objetos ao cuspir a mistura.",
    powers:{Força:70, Velocidade:45, Defesa:78, Versatilidade:80},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Mane Mane no Mi", pt:"Fruta da Imitação", type:"Paramecia", icon:"🎭",
    user:"Mr. 2 Bon Kurei",
    desc:"Permite copiar a aparência facial e corporal de qualquer pessoa tocada com a mão direita.",
    ability:"Transformação perfeita em qualquer pessoa já tocada. Pode alternar entre múltiplas formas memorizadas instantaneamente, enganando até aliados próximos.",
    powers:{Força:68, Velocidade:70, Defesa:55, Versatilidade:90},
    weakness:["Água do mar","Seastone","Não copia poderes de frutas do diabo"]
  },
  {
    name:"Bisu Bisu no Mi", pt:"Fruta do Biscoito", type:"Paramecia", icon:"🍪",
    user:"Charlotte Cracker",
    desc:"Cria e controla biscoitos praticamente indestrutíveis que podem ser moldados em guerreiros de armadura.",
    ability:"Soldados de biscoito com armaduras de dureza extrema. Pode regenerar infinitamente os biscoitos destruídos e criar exércitos inteiros.",
    powers:{Força:88, Velocidade:65, Defesa:95, Versatilidade:82},
    weakness:["Água do mar","Seastone","Biscoito molhado amolece"]
  },
  {
    name:"Shiro Shiro no Mi", pt:"Fruta do Castelo", type:"Paramecia", icon:"🏰",
    user:"Capone Bege",
    desc:"Transforma o próprio corpo em um castelo fortificado onde pessoas podem entrar e viver.",
    ability:"Interior com exércitos, veículos e canhões. Pode expandir e encolher o castelo e disparar tropas como projéteis humanos.",
    powers:{Força:80, Velocidade:45, Defesa:97, Versatilidade:88},
    weakness:["Água do mar","Seastone","Dano no castelo reflete no usuário"]
  },
  {
    name:"Gasu Gasu no Mi", pt:"Fruta do Gás", type:"Logia", icon:"💨",
    user:"Caesar Clown",
    desc:"Transforma o usuário em gás e permite controlar e criar qualquer tipo de gás ao redor.",
    ability:"Corpo de gás intangível. Pode criar gases venenosos, inflamáveis e explosivos. Absorve o oxigênio ao redor asfixiando inimigos.",
    powers:{Força:82, Velocidade:85, Defesa:78, Versatilidade:92},
    weakness:["Água do mar","Seastone","Fogo pode detonar seus próprios gases"]
  },
  {
    name:"Yuki Yuki no Mi", pt:"Fruta da Neve", type:"Logia", icon:"🌨️",
    user:"Monet",
    desc:"Transforma o usuário em neve e permite criar e controlar nevasca ao redor.",
    ability:"Corpo de neve que envolve inimigos congelando membros. Pode criar tempestades de neve e visibilidade zero numa área ampla.",
    powers:{Força:72, Velocidade:78, Defesa:70, Versatilidade:80},
    weakness:["Água do mar","Seastone","Calor derrete o corpo de neve"]
  },
  {
    name:"Numa Numa no Mi", pt:"Fruta do Pântano", type:"Logia", icon:"🟫",
    user:"Caribou",
    desc:"Transforma o usuário em lama de pântano — um Logia capaz de absorver e armazenar objetos no interior do corpo.",
    ability:"Absorve pessoas e objetos dentro do próprio corpo pantanoso. Único Logia com capacidade de armazenamento interno de seres vivos.",
    powers:{Força:75, Velocidade:55, Defesa:80, Versatilidade:83},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Sui Sui no Mi", pt:"Fruta da Natação", type:"Paramecia", icon:"🏊",
    user:"Senor Pink",
    desc:"Permite nadar e mergulhar em qualquer superfície sólida como se fosse água.",
    ability:"Atravessa o chão, paredes e tetos como se fossem líquidos. Emerge de qualquer ângulo para ataques surpresa impossíveis de prever.",
    powers:{Força:78, Velocidade:82, Defesa:65, Versatilidade:80},
    weakness:["Água do mar","Seastone","Não pode carregar outros ao nadar no sólido"]
  },
  {
    name:"Ton Ton no Mi", pt:"Fruta da Tonelada", type:"Paramecia", icon:"🏋️",
    user:"Machvise",
    desc:"Aumenta o próprio peso em múltiplos de toneladas, podendo atingir 10.000 toneladas.",
    ability:"Mergulhos de 10.000 toneladas que destroem o chão e qualquer coisa abaixo. Quanto mais peso, mais destrutivo o impacto.",
    powers:{Força:90, Velocidade:30, Defesa:85, Versatilidade:55},
    weakness:["Água do mar","Seastone","Lento demais para acertar alvos ágeis"]
  },
  {
    name:"Hobi Hobi no Mi", pt:"Fruta do Hobby", type:"Paramecia", icon:"🧸",
    user:"Sugar",
    desc:"Transforma qualquer pessoa tocada em brinquedo e apaga sua existência da memória de todos.",
    ability:"Toque transforma em brinquedo controlável com contrato obrigatório. A vítima some da memória coletiva instantaneamente — o poder mais silencioso do mundo.",
    powers:{Força:25, Velocidade:40, Defesa:30, Versatilidade:100},
    weakness:["Água do mar","Seastone","Usuário desmaiar desfaz todas as transformações"]
  },
  {
    name:"Nui Nui no Mi", pt:"Fruta da Costura", type:"Paramecia", icon:"🪡",
    user:"Leo",
    desc:"Costura e une qualquer coisa com linhas mágicas — pessoas ao chão, objetos entre si, feridas fechadas.",
    ability:"Costura inimigos ao solo sem dano. Pode fechar ferimentos costurando pele e também prender armas às mãos de aliados permanentemente.",
    powers:{Força:45, Velocidade:55, Defesa:50, Versatilidade:88},
    weakness:["Água do mar","Seastone","Força bruta pode romper as costuras"]
  },
  {
    name:"Giro Giro no Mi", pt:"Fruta da Visão", type:"Paramecia", icon:"👁️",
    user:"Viola",
    desc:"Concede visão sobrenatural que enxerga através de qualquer material e lê os pensamentos de outros.",
    ability:"Vê através de paredes, detecta mentiras lendo corações e pode projetar memórias como imagens visíveis para todos ao redor.",
    powers:{Força:35, Velocidade:45, Defesa:40, Versatilidade:95},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ato Ato no Mi", pt:"Fruta da Arte", type:"Paramecia", icon:"🎨",
    user:"Giolla",
    desc:"Transforma qualquer coisa ou pessoa em obra de arte abstrata e inoperante.",
    ability:"Pessoas transformadas em pinturas não conseguem se mover nem usar poderes. Objetos viram esculturas inúteis. Área de efeito ampla.",
    powers:{Força:40, Velocidade:45, Defesa:35, Versatilidade:88},
    weakness:["Água do mar","Seastone","Requer que a vítima esteja ao alcance"]
  },
  {
    name:"Jake Jake no Mi", pt:"Fruta do Casaco", type:"Paramecia", icon:"🧥",
    user:"Kelly Funk",
    desc:"Transforma o usuário num casaco que pode ser vestido por outra pessoa, controlando-a por dentro.",
    ability:"Controla completamente os movimentos de quem o veste, potencializando a força do hospedeiro. Difícil de remover uma vez vestido.",
    powers:{Força:75, Velocidade:65, Defesa:60, Versatilidade:72},
    weakness:["Água do mar","Seastone","Inútil sem um hospedeiro"]
  },
  {
    name:"Pamu Pamu no Mi", pt:"Fruta da Explosão", type:"Paramecia", icon:"💥",
    user:"Gladius",
    desc:"Infla e explode qualquer objeto inorgânico ou parte do próprio corpo ao toque.",
    ability:"Faz pedras, metal e até o próprio corpo explodirem como bombas. Pode inflar o chão inteiro criando campo minado de rocha.",
    powers:{Força:80, Velocidade:60, Defesa:65, Versatilidade:78},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Oshi Oshi no Mi", pt:"Fruta do Empurrão", type:"Paramecia", icon:"👐",
    user:"Yamato",
    desc:"Empurra e molda qualquer material sólido com as mãos como se fosse argila mole.",
    ability:"Deforma pedra e metal empurrando com força sobrenatural. Pode abrir passagens em muros sólidos e esculpir o terreno em batalha.",
    powers:{Força:88, Velocidade:70, Defesa:72, Versatilidade:75},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Inu Inu no Mi: Modelo Tanuki", pt:"Fruta Cão: Tanuki", type:"Zoan Mítico", icon:"🦝",
    user:"Catarina Devon",
    desc:"Transforma no tanuki mítico japonês, mestre da ilusão capaz de assumir a aparência de qualquer pessoa.",
    ability:"Cópia perfeita de qualquer pessoa — ao contrário do Mane Mane, copia também o cheiro, a voz e os poderes de fruta do diabo aparentes.",
    powers:{Força:78, Velocidade:72, Defesa:65, Versatilidade:97},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Harpia", pt:"Fruta Pássaro: Harpia", type:"Zoan Mítico", icon:"🦉",
    user:"Black Maria",
    desc:"Transforma na harpia da mitologia grega, criatura alada metade mulher metade ave de rapina.",
    ability:"Voo, garras letais e grito ensurdecedor. A harpia da mitologia era mensageira dos deuses — Black Maria usa para sedução e captura.",
    powers:{Força:80, Velocidade:85, Defesa:68, Versatilidade:78},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Alossauro", pt:"Fruta Dragão: Alossauro", type:"Zoan Antigo", icon:"🦖",
    user:"X Drake",
    desc:"Transforma no alossauro, o predador terrestre mais temido do Jurássico.",
    ability:"Mordida que parte navios ao meio. Forma híbrida mantém a destreza humana com força e mandíbulas de dinossauro de 3 toneladas.",
    powers:{Força:90, Velocidade:72, Defesa:82, Versatilidade:60},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Mushi Mushi no Mi: Modelo Kabutomushi", pt:"Fruta Inseto: Besouro", type:"Zoan", icon:"🪲",
    user:"Kabu",
    desc:"Transforma em kabutomushi, o besouro rinoceronte sagrado do Japão, símbolo de força inabalável.",
    ability:"Chifre que perfura armaduras e escudos. Forma híbrida mantém exoesqueleto natural altamente resistente a golpes físicos.",
    powers:{Força:75, Velocidade:55, Defesa:85, Versatilidade:55},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Sara Sara no Mi: Modelo Axolotl", pt:"Fruta Salamandra: Axolotl", type:"Zoan", icon:"🦎",
    user:"Smiley (criatura de Caesar)",
    desc:"Transforma numa axolotl gigante — criatura com regeneração quase ilimitada de membros.",
    ability:"Regeneração corporal extrema. Como massa de veneno viva criada por Caesar, o Smiley usava para espalhar o gás Shinokuni ao se decompor.",
    powers:{Força:65, Velocidade:40, Defesa:88, Versatilidade:70},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Zou Zou no Mi: Modelo Mastodon", pt:"Fruta Elefante: Mastodonte", type:"Zoan Antigo", icon:"🦏",
    user:"Dalton",
    desc:"Transforma no mastodonte pré-histórico, ancestral do elefante com força bruta colossal.",
    ability:"Carga devastadora que destrói fortalezas. Presas gigantescas e massa corporal que esmaga qualquer resistência no caminho.",
    powers:{Força:88, Velocidade:45, Defesa:90, Versatilidade:52},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Tori Tori no Mi: Modelo Garuda", pt:"Fruta Pássaro: Garuda", type:"Zoan Mítico", icon:"🦚",
    user:"Shanks (mencionado) / Conceito mítico",
    desc:"Transforma na Garuda, a ave divina da mitologia hindu e budista — mensageira dos deuses.",
    ability:"Voo supersônico e garras que perfuram qualquer armadura. Considerada uma das frutas Zoan Míticas mais raras e reverenciadas.",
    powers:{Força:90, Velocidade:95, Defesa:75, Versatilidade:85},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Inu Inu no Mi: Modelo Kyubi no Kitsune", pt:"Fruta Cão: Raposa de Nove Caudas", type:"Zoan Mítico", icon:"🦊",
    user:"Catarina Devon (segunda fruta / rumor)",
    desc:"Transforma na lendária raposa de nove caudas da mitologia japonesa, mestre supremo da ilusão.",
    ability:"Ilusões absolutamente indistinguíveis da realidade. Pode enganar os sentidos de qualquer ser, incluindo usuários de Haki avançado.",
    powers:{Força:72, Velocidade:88, Defesa:65, Versatilidade:100},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Hito Hito no Mi: Modelo Daibutsu", pt:"Fruta Humana: Grande Buda", type:"Zoan Mítico", icon:"🗿",
    user:"Sengoku o Buda",
    desc:"Transforma no Grande Buda dourado, uma das raras frutas Zoan Míticas de um Almirante da Frota.",
    ability:"Transforma em gigante dourado que dispara ondas de choque devastadoras. Pode afetar uma área inteira simultaneamente.",
    powers:{Força:96, Velocidade:50, Defesa:88, Versatilidade:80},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Hito Hito no Mi", pt:"Fruta Humana", type:"Zoan", icon:"🧠",
    user:"Tony Tony Chopper",
    desc:"Permite que um animal se transforme em humano — no caso de Chopper, um rena que ganhou consciência humana.",
    ability:"Sete formas de transformação via Rumble Ball. Walk Point, Brain Point, Heavy Point, Horn Point, Arm Point, Guard Point e Kung Fu Point.",
    powers:{Força:75, Velocidade:78, Defesa:72, Versatilidade:100},
    weakness:["Água do mar","Seastone","Overdose de Rumble Ball causa perda de controle"]
  },
  {
    name:"Yomi Yomi no Mi", pt:"Fruta da Ressurreição", type:"Paramecia", icon:"💀",
    user:"Brook",
    desc:"Permite ao usuário retornar da morte uma única vez, vinculando a alma ao esqueleto permanentemente.",
    ability:"Ressurreição única garantida. Alma livre do corpo pode percorrer longas distâncias. Habilidades de gelo da alma que congelam o ar ao redor.",
    powers:{Força:70, Velocidade:82, Defesa:60, Versatilidade:85},
    weakness:["Água do mar","Seastone","Ressurreição só funciona uma vez"]
  },
  {
    name:"Shari Shari no Mi", pt:"Fruta da Roda", type:"Paramecia", icon:"⚙️",
    user:"Sharinguru",
    desc:"Transforma membros do corpo em rodas giratórias de corte e propulsão.",
    ability:"Braços e pernas giram a velocidades devastadoras cortando aço. Propulsão de veículo e ataques centrífugos de longo alcance.",
    powers:{Força:70, Velocidade:80, Defesa:55, Versatilidade:65},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Kage Kage no Mi", pt:"Fruta da Sombra", type:"Paramecia", icon:"🌚",
    user:"Gecko Moria",
    desc:"Manipula sombras — pode roubá-las de pessoas, inserindo-as em cadáveres para criar guerreiros.",
    ability:"Cria um exército de zumbis com sombras roubadas. Quem perde a sombra fraqueja à luz do sol. Controla a própria sombra como guerreiro autônomo.",
    powers:{Força:85, Velocidade:55, Defesa:70, Versatilidade:95},
    weakness:["Água do mar","Seastone","Luz do sol destrói zumbis e devolve sombras"]
  },
  {
    name:"Horo Horo no Mi", pt:"Fruta do Fantasma", type:"Paramecia", icon:"👾",
    user:"Perona",
    desc:"Projeta fantasmas negativos que drenam a vontade de lutar — e permite projeção astral da consciência.",
    ability:"Fantasmas Negativos causam depressão instantânea. Corpo astral pode viajar longe enquanto o físico permanece inerte e invulnerável.",
    powers:{Força:45, Velocidade:65, Defesa:55, Versatilidade:85},
    weakness:["Água do mar","Seastone","Pessoas naturalmente pessimistas são imunes"]
  },
  {
    name:"Awa Awa no Mi", pt:"Fruta da Bolha", type:"Paramecia", icon:"🫧",
    user:"Kalifa",
    desc:"Cria bolhas de sabão que limpam qualquer coisa — inclusive a força e energia de combatentes.",
    ability:"Bolhas que ao tocar um oponente removem toda a sua força muscular, deixando-o indefeso. Transforma superfícies em escorregadias.",
    powers:{Força:45, Velocidade:60, Defesa:50, Versatilidade:78},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Doa Doa no Mi", pt:"Fruta da Porta", type:"Paramecia", icon:"🚪",
    user:"Blueno",
    desc:"Cria portas em qualquer superfície — paredes, ar, e até no próprio corpo dos inimigos.",
    ability:"Portais instantâneos em qualquer material. Pode abrir uma porta no ar para teletransporte e criar compartimentos no corpo de adversários.",
    powers:{Força:72, Velocidade:85, Defesa:68, Versatilidade:90},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Nami Nami no Mi", pt:"Fruta da Onda", type:"Paramecia", icon:"🌊",
    user:"Charlotte Smoothie",
    desc:"Espreme qualquer coisa — pessoas, objetos, ambientes — extraindo líquidos e energia vital.",
    ability:"Espreme humanos e absorve seus líquidos aumentando o próprio tamanho e força. Pode fazer objetos e pessoas encolherem ao serem torcidas.",
    powers:{Força:90, Velocidade:68, Defesa:80, Versatilidade:82},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Pero Pero no Mi", pt:"Fruta da Bala", type:"Paramecia", icon:"🍭",
    user:"Charlotte Perospero",
    desc:"Cria e controla candy — doce sólido que pode imobilizar e encapsular qualquer coisa.",
    ability:"Armadilhas e prisões de doce cristalizado. Pode criar estruturas inteiras e revestir superfícies com candy praticamente indestrutível.",
    powers:{Força:82, Velocidade:65, Defesa:88, Versatilidade:85},
    weakness:["Água do mar","Seastone","Calor e água dissolvem o candy"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Pteranodonte", pt:"Fruta Dragão: Pteranodonte", type:"Zoan Antigo", icon:"🦇",
    user:"Page One",
    desc:"Transforma no pteranodonte, o maior réptil voador já existente — ágil e letal.",
    ability:"Velocidade de mergulho e bico que perfura navios. Forma híbrida mantém agilidade aérea com força de dinossauro para combate terrestre.",
    powers:{Força:85, Velocidade:88, Defesa:70, Versatilidade:65},
    weakness:["Água do mar","Seastone"]
  },
  {
    name:"Ryu Ryu no Mi: Modelo Parasaurolophus", pt:"Fruta Dragão: Parasaurolopho", type:"Zoan Antigo", icon:"🦴",
    user:"Ulti",
    desc:"Transforma no parasaurolopho, dinossauro com crista craniana que amplifica ataques de cabeçada.",
    ability:"Cabeçadas que destroem estruturas inteiras. A crista óssea da forma híbrida concentra força em impactos frontais devastadores.",
    powers:{Força:88, Velocidade:75, Defesa:85, Versatilidade:60},
    weakness:["Água do mar","Seastone"]
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
    return `
      <div class="card ${typeClass(f.type)}"
           onclick="openModal(${idx})"
           style="animation-delay:${i * 0.04}s"
           role="button"
           tabindex="0"
           onkeydown="if(event.key==='Enter') openModal(${idx})">

        <div class="card-top">
          <div class="fruit-icon">${f.icon}</div>
          <span class="type-badge">${typeLabel(f.type)}</span>
        </div>

        <div class="fruit-name">${f.name}</div>
        <div class="fruit-name-pt">${f.pt}</div>

        <div class="user-row">
          <span class="user-dot"></span>
          <span class="user-name">Usuário: <strong>${f.user.split('/')[0].trim()}</strong></span>
        </div>

        <div class="desc">${f.desc}</div>
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

    <div class="modal-icon">${f.icon}</div>
    <h2>${f.name}</h2>
    <div class="modal-pt">${f.pt}</div>

    <div class="modal-badge-row">
      <span class="type-badge ${tc}">${typeLabel(f.type)}</span>
    </div>

    <div class="divider"></div>

    <div class="modal-section">
      <div class="modal-label">Usuário(s) Conhecido(s)</div>
      <div class="modal-text">${f.user}</div>
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

  // Anima as barras de poder após um breve delay
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
