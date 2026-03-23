// Lista de temas
const temas = [
    "A importância da educação financeira nas escolas públicas",
  "Desafios da educação inclusiva no Brasil",
  "O papel da educação ambiental na formação dos jovens",
  "A influência da tecnologia na educação contemporânea",
  "A educação socioemocional como ferramenta para o desenvolvimento integral",
  "A desigualdade no acesso à educação pública de qualidade",
  "A formação continuada de professores para a melhoria da educação",
  "Os impactos da educação à distância no processo de ensino-aprendizagem",
  "A educação de crianças em situação de vulnerabilidade social",
  "A relação entre saúde mental e educação escolar",
  "A importância da educação para o combate ao racismo",
  "Educação infantil: fundamentos para o desenvolvimento cognitivo",
  "A valorização da educação artística nas escolas",
  "O papel da educação física na promoção da saúde dos estudantes",
  "A inclusão digital como parte da educação moderna",
  "A educação como instrumento de transformação social",
  "Os desafios da educação em comunidades rurais",
  "A educação sexual nas escolas públicas e sua importância",
  "A educação cidadã e o desenvolvimento da consciência crítica",
  "Políticas públicas para a melhoria da educação básica no Brasil",
    "O impacto da automação na geração de empregos",
  "Desafios da educação bilíngue no Brasil",
  "A importância da preservação das florestas tropicais",
  "Como a cultura digital transforma as relações sociais",
  "O papel da ciência na prevenção de pandemias",
  "Inclusão social por meio do esporte",
  "Os efeitos do urbanismo sustentável nas cidades modernas",
  "A evolução dos direitos trabalhistas na era digital",
  "A valorização dos povos tradicionais no Brasil",
  "O combate ao desperdício de água em ambientes urbanos",
  "O papel da arte na formação da identidade cultural",
  "Os desafios do ensino remoto na educação básica",
  "A influência das fake news na saúde pública",
  "A importância da alfabetização digital para idosos",
  "O aumento da violência contra idosos e políticas de proteção",
  "O uso da biotecnologia para o desenvolvimento sustentável",
  "A crise dos oceanos e a poluição plástica",
  "O impacto do comércio eletrônico na economia local",
  "Desafios da mobilidade sustentável nas grandes metrópoles",
  "A importância do voluntariado para a transformação social",
  "A influência da mídia na percepção dos problemas ambientais",
  "A ética no uso de dados pessoais na era digital",
  "A reinserção social de pessoas em situação de rua",
  "A importância da educação sexual nas escolas",
  "Os desafios da segurança cibernética na vida cotidiana",
  "O papel das energias limpas na matriz energética mundial",
  "O impacto da globalização na diversidade cultural",
  "A valorização da cultura afro-brasileira no ensino básico",
  "Desafios da sustentabilidade na indústria da moda",
  "O papel da inovação tecnológica na agricultura familiar",
  "A importância da proteção aos direitos dos animais",
  "A influência dos movimentos sociais na política brasileira",
  "O combate ao trabalho escravo no século XXI",
  "A educação financeira como ferramenta de inclusão social",
  "Os desafios da prevenção do suicídio entre jovens",
  "A valorização da literatura regional brasileira",
  "O papel do jornalismo na defesa da democracia",
  "Desafios do acesso à saúde mental na rede pública",
  "O impacto do turismo sustentável no meio ambiente",
  "A importância da preservação dos rios brasileiros",
  "O papel da tecnologia na acessibilidade para pessoas com deficiência",
  "A influência da globalização no consumo de alimentos",
  "O combate ao racismo no ambiente escolar",
  "A importância do desenvolvimento da inteligência emocional",
  "Os desafios do envelhecimento populacional no Brasil",
  "O papel das bibliotecas na promoção da leitura",
  "A inclusão de pessoas com deficiência no mercado de trabalho",
  "A relação entre violência doméstica e pandemia",
  "O uso da inteligência artificial para a educação personalizada",
  "Os impactos da poluição sonora na saúde pública",
  "A importância da ética no desenvolvimento científico",
  "O papel da música na educação infantil",
  "A valorização dos pequenos produtores rurais",
  "Desafios do combate à fome no mundo contemporâneo",
  "O impacto das mudanças climáticas na agricultura",
  "A importância da educação ambiental nas escolas",
  "Os efeitos do sedentarismo na saúde dos jovens",
  "A influência das redes sociais na política",
  "O papel da mulher na liderança empresarial",
  "Desafios da preservação do patrimônio cultural brasileiro",
  "A importância do lazer na qualidade de vida",
  "O impacto das fake news nas eleições democráticas",
  "O papel da tecnologia na inclusão social de minorias",
  "Os desafios da segurança pública em áreas rurais",
  "A crise dos recursos naturais e o consumo consciente",
  "A valorização da diversidade linguística no Brasil",
  "O papel das cooperativas na economia solidária",
  "A importância do combate ao trabalho infantil",
  "Os desafios da mobilidade urbana para pessoas com deficiência",
  "A influência da cultura digital na educação contemporânea",
  "O impacto do uso excessivo de tecnologia na saúde mental",
  "A importância da educação para a cidadania",
  "Desafios para a proteção dos direitos humanos na era digital",
  "O papel da ciência na sustentabilidade dos oceanos",
  "A valorização da agricultura orgânica no Brasil",
  "O combate ao preconceito contra pessoas com doenças mentais",
  "A importância do acesso à internet para o desenvolvimento social",
  "Desafios da inclusão de refugiados na sociedade brasileira",
  "O impacto das redes sociais na autoestima dos adolescentes",
  "Os desafios da mobilidade urbana sustentável no Brasil",
  "A influência da cultura pop na formação de valores sociais",
  "O papel do esporte na inclusão social de crianças e jovens",
  "A crise hídrica e as soluções para o uso racional da água",
  "Os efeitos do aquecimento global nas regiões costeiras",
  "A importância da leitura para o desenvolvimento cognitivo",
  "Desafios da acessibilidade em espaços públicos urbanos",
  "O papel da mulher na ciência e tecnologia",
  "A violência no trânsito e as políticas de prevenção",
  "Os impactos da globalização na identidade cultural regional",
  "A relação entre saúde mental e uso das redes sociais",
  "A importância da preservação das espécies ameaçadas de extinção",
  "O uso da tecnologia para a conservação ambiental",
  "Os efeitos do consumo exagerado de plástico na natureza",
  "A participação juvenil na política brasileira",
  "O papel da educação no combate à desigualdade social",
  "Os desafios do ensino técnico e profissionalizante no Brasil",
  "A influência dos meios de comunicação na opinião pública",
  "O impacto das fake news nas campanhas eleitorais",
  "A valorização da cultura indígena nas escolas",
  "Desafios da integração cultural em sociedades multiculturais",
  "O papel da música na inclusão social e cultural",
  "A crise dos refugiados e a solidariedade internacional",
  "O impacto das mudanças climáticas na produção agrícola",
  "A importância do sono para a saúde dos jovens",
  "Desafios do combate à violência doméstica no ambiente digital",
  "O papel dos parques urbanos na qualidade de vida",
  "A importância do voluntariado no desenvolvimento comunitário",
  "Os efeitos da poluição atmosférica na saúde pública",
  "A influência da publicidade no comportamento infantil",
  "Desafios da segurança alimentar no século XXI",
  "O uso de energias renováveis na redução dos gases do efeito estufa",
  "A crise do lixo eletrônico e soluções sustentáveis",
  "A valorização da diversidade religiosa na sociedade brasileira",
  "O impacto do sedentarismo na saúde cardiovascular",
  "Desafios da educação inclusiva para pessoas com deficiências",
  "O papel do teatro na formação crítica dos jovens",
  "A importância da mediação de conflitos nas escolas",
  "Os efeitos do bullying e as estratégias de combate",
  "O impacto das fake news na saúde pública durante pandemias",
  "A influência das redes sociais na propagação de movimentos sociais",
  "Desafios da mobilidade para idosos em centros urbanos",
  "O papel dos museus na preservação da memória histórica",
  "A importância da empatia na construção de relações sociais",
  "Os desafios do trabalho remoto para a saúde mental",
  "A valorização da cultura local em tempos de globalização",
  "O papel da tecnologia assistiva para pessoas com deficiência",
  "Desafios da segurança no uso de inteligência artificial",
  "A crise dos combustíveis fósseis e alternativas sustentáveis",
  "A importância do ensino de programação nas escolas",
  "O impacto do racismo estrutural na educação",
  "Desafios da preservação das florestas urbanas",
  "O papel do cinema na crítica social contemporânea",
  "A influência da moda sustentável no consumo consciente",
  "A importância do diálogo intercultural na sociedade global",
  "Os efeitos do estresse no desempenho escolar",
  "O combate à discriminação de gênero no ambiente de trabalho",
  "Desafios da saúde pública para populações indígenas",
  "O impacto do turismo cultural no desenvolvimento econômico",
  "A importância da educação financeira para jovens adultos",
  "O papel da literatura na formação da identidade nacional",
  "A crise dos sistemas públicos de saúde no Brasil",
  "Os desafios do envelhecimento ativo e saudável",
  "A influência das redes sociais na democracia",
  "O impacto da tecnologia na privatização da informação",
  "Desafios do acesso à água potável em comunidades rurais",
  "A valorização das línguas indígenas brasileiras",
  "O papel da educação para o desenvolvimento sustentável",
  "Os efeitos da obesidade infantil na saúde pública",
  "A importância do ensino de cidadania digital",
  "O impacto do racismo na saúde mental de populações vulneráveis"
];
  
  // Lista exclusiva para outras sugestões (pelo menos 50 temas diferentes, não repetidos na lista de temasSemana)
const temasSugestoes = [
    "A importância da educação financeira nas escolas públicas",
    "Os desafios da mobilidade urbana nas grandes cidades brasileiras",
    "A influência das redes sociais na saúde mental dos jovens",
    "O papel da tecnologia na inclusão de pessoas com deficiência",
    "O impacto da cultura de consumo no meio ambiente",
    "Desafios do combate à violência contra a mulher",
    "A valorização da cultura indígena no Brasil contemporâneo",
    "A crise hídrica e a gestão sustentável dos recursos naturais",
    "O papel do jornalismo na disseminação da informação verdadeira",
    "A importância do incentivo à leitura na formação cidadã",
    "O avanço da inteligência artificial e seus impactos éticos",
    "A preservação do patrimônio histórico e cultural no Brasil",
    "Desafios do ensino remoto e a inclusão digital no país",
    "O impacto das fake news no comportamento eleitoral",
    "O combate ao racismo institucional no sistema educacional",
    "A relação entre saúde mental e qualidade do sono",
    "A importância da ciência cidadã na conservação ambiental",
    "Desafios da segurança alimentar em tempos de crise",
    "A valorização dos povos quilombolas na cultura brasileira",
    "O papel da ética na pesquisa científica",
    "O combate ao trabalho infantil no Brasil contemporâneo",
    "A importância da educação ambiental nas escolas rurais",
    "Os impactos da poluição do ar na saúde infantil",
    "A influência da mídia na percepção sobre deficiências",
    "Desafios da inclusão digital em comunidades remotas",
    "O papel das cooperativas na economia solidária",
    "A importância do apoio psicológico para vítimas de violência",
    "O impacto do aquecimento global na biodiversidade",
    "Desafios da preservação de parques nacionais",
    "A crise da água e alternativas para o uso sustentável",
    "O papel das tecnologias assistivas na educação inclusiva",
    "A valorização da cultura afro-brasileira na mídia",
    "Desafios da segurança pública em zonas rurais",
    "A influência da música na reabilitação social",
    "O papel da agricultura familiar na segurança alimentar",
    "O impacto da poluição sonora nas grandes cidades",
    "Desafios da mobilidade para pessoas com deficiência",
    "A importância do ensino de ética nas escolas",
    "O combate à desigualdade social por meio da tecnologia",
    "A valorização da cultura local em comunidades indígenas",
    "Os efeitos da pandemia na saúde mental dos profissionais da saúde",
    "Desafios da implementação de políticas públicas ambientais",
    "O papel do esporte na prevenção do uso de drogas",
    "A influência das redes sociais na propagação de fake news",
    "A importância do acesso à cultura para populações vulneráveis",
    "Desafios do envelhecimento da população mundial",
    "O impacto da globalização na diversidade linguística",
    "O papel da leitura na inclusão social",
    "A importância da alimentação saudável para o desempenho escolar",
    "Desafios da preservação dos oceanos",
    "O combate à violência contra a comunidade LGBTQIA+",
    "A influência do voluntariado no desenvolvimento social",
    "O papel da ciência na mitigação das mudanças climáticas",
    "A valorização do artesanato como patrimônio cultural",
    "Desafios da educação inclusiva para alunos com necessidades especiais",
    "O impacto do trabalho remoto na qualidade de vida",
    "A importância da mediação escolar para a resolução de conflitos",
    "O papel das bibliotecas comunitárias no incentivo à leitura",
    "Desafios do saneamento básico em áreas urbanas",
    "A influência da tecnologia no mercado de trabalho",
    "O combate à pobreza extrema no Brasil",
    "A importância do cuidado com a saúde mental na adolescência",
    "Desafios do acesso à educação superior em regiões periféricas",
    "O papel das redes sociais na mobilização social",
    "A valorização da cultura regional no turismo",
    "O impacto da poluição da água na saúde pública",
    "Desafios da inclusão de refugiados no mercado de trabalho",
    "O papel do ensino técnico na redução do desemprego",
    "A importância da educação para a sustentabilidade",
    "Desafios do combate à violência nas escolas",
    "O impacto das tecnologias digitais na saúde",
    "A influência da publicidade na alimentação infantil",
    "O papel da música na promoção da saúde mental",
    "A valorização do patrimônio arquitetônico",
    "Desafios da mobilidade urbana para ciclistas",
    "O combate à desigualdade racial no acesso à educação",
    "A importância do esporte para a inclusão social",
    "Desafios do combate à evasão escolar",
    "O impacto da cultura pop na identidade dos jovens",
    "O papel da educação digital na preparação para o futuro",
    "A valorização da agricultura sustentável",
    "Desafios do acesso à cultura digital",
    "O impacto do uso de combustíveis fósseis",
    "A importância do ensino da história indígena",
    "Desafios da segurança no uso de drones",
    "O papel da educação financeira na prevenção do endividamento",
    "A influência das redes sociais na saúde pública",
    "O combate à violência contra crianças e adolescentes",
    "A evolução das redes sociais e seu impacto na comunicação",
    "A importância da biodiversidade para o equilíbrio ecológico",
    "Desafios da mobilidade urbana para pessoas com deficiência",
    "O papel das startups na inovação tecnológica",
    "A influência da inteligência artificial no mercado de trabalho",
    "O impacto das mudanças climáticas na agricultura familiar",
    "A importância da cultura maker na educação moderna",
    "Desafios do saneamento básico em comunidades rurais",
    "O papel da ética no desenvolvimento tecnológico",
    "A valorização da cultura regional através do turismo sustentável",
    "O impacto do home office na qualidade de vida dos trabalhadores",
    "A influência das fake news na saúde pública",
    "Desafios da inclusão digital em escolas públicas",
    "O papel das energias renováveis no combate ao aquecimento global",
    "A importância da leitura na formação cidadã",
    "O uso de drones para fiscalização ambiental",
    "O impacto da globalização nas culturas locais",
    "A crise da água e soluções inovadoras",
    "O papel da música na reabilitação social",
    "A influência do cinema na formação de opinião",
    "Desafios do combate à violência doméstica",
    "A importância do esporte para inclusão social",
    "O avanço da robótica e a substituição do trabalho humano",
    "A preservação das línguas indígenas",
    "O impacto dos videogames na cognição dos jovens",
    "A importância do voluntariado para o desenvolvimento comunitário",
    "Desafios da segurança cibernética no mundo atual",
    "O papel das bibliotecas digitais na democratização do acesso à informação",
    "A valorização da agricultura orgânica",
    "O impacto do turismo sustentável em áreas protegidas",
    "A influência da publicidade na alimentação infantil",
    "Desafios da educação para pessoas com deficiências múltiplas",
    "O papel do jornalismo na defesa da democracia",
    "A importância do ensino de programação para crianças",
    "O impacto do sedentarismo na saúde pública",
    "A valorização da cultura afro-brasileira nas escolas",
    "Desafios do envelhecimento da população brasileira",
    "O papel das cooperativas no desenvolvimento econômico local",
    "A influência das redes sociais em movimentos sociais",
    "O combate à poluição do ar nas grandes cidades",
    "A importância da ética nas pesquisas científicas",
    "O impacto do aquecimento global nos ecossistemas marinhos",
    "Desafios do transporte público sustentável",
    "O papel da arte na inclusão social",
    "A influência do consumo consciente na preservação ambiental",
    "O impacto da pandemia no ensino à distância",
    "Desafios da preservação dos patrimônios históricos",
    "A importância da educação sexual nas escolas",
    "O uso de tecnologias para acessibilidade",
    "A valorização da cultura popular brasileira",
    "Desafios do combate à corrupção no Brasil",
    "O papel da inteligência emocional na vida profissional",
    "A influência dos influencers digitais no comportamento dos jovens",
    "O impacto das mudanças climáticas nas populações indígenas",
    "A importância da proteção aos direitos dos animais",
    "Desafios do combate ao racismo estrutural",
    "O papel do teatro na formação crítica dos jovens",
    "A valorização do artesanato regional",
    "O impacto do uso excessivo de tecnologia na saúde mental",
    "Desafios da segurança alimentar em comunidades vulneráveis",
    "O papel do design sustentável na moda",
    "A influência da literatura na formação da identidade cultural",
    "O combate à evasão escolar",
    "A importância do lazer para a qualidade de vida",
    "O papel dos museus na preservação da memória",
    "Desafios da inclusão de refugiados",
    "O impacto das políticas públicas ambientais",
    "A influência da cultura pop na construção social da identidade",
    "O combate à discriminação de gênero no ambiente de trabalho",
    "A importância da alfabetização digital para idosos",
    "Desafios do acesso à saúde mental",
    "O papel da tecnologia assistiva",
    "A valorização das tradições culturais no mundo globalizado",
    "O impacto do plástico nos oceanos",
    "Desafios do combate ao trabalho infantil",
    "A importância do ensino da história afro-brasileira",
    "O papel da ciência na mitigação dos desastres naturais",
    "A influência da mídia na percepção dos problemas sociais",
    "Desafios da mobilidade sustentável",
    "O impacto da globalização na produção cultural local",
    "A valorização do cooperativismo no desenvolvimento sustentável",
    "O papel do esporte para a promoção da saúde mental",
    "Desafios da segurança pública no meio digital",
    "A importância da preservação dos biomas brasileiros",
    "O combate ao desperdício de alimentos",
    "A influência da tecnologia na democratização do ensino",
    "Desafios do desenvolvimento urbano sustentável",
    "O impacto das redes sociais na autoestima dos jovens",
    "A valorização da cultura indígena nas escolas",
    "O papel das políticas públicas na inclusão social",
    "Desafios do uso responsável da internet",
    "O impacto da poluição sonora na saúde",
    "A importância da educação financeira para jovens",
    "O papel do cinema na crítica social",
    "Desafios da conservação da fauna brasileira",
    "A influência das redes sociais na política",
    "O combate à violência contra a mulher",
    "A valorização da cultura local para o turismo",
    "Desafios da alimentação saudável em escolas públicas",
    "O papel da inteligência artificial na saúde",
    "O impacto do trabalho remoto na vida familiar",
    "A importância do desenvolvimento sustentável nas empresas",
    "Desafios do ensino técnico profissionalizante",
    "O combate ao preconceito nas escolas",
    "A influência da música na educação infantil",
    "O papel da ética na inteligência artificial",
    "Desafios do combate à pobreza urbana",
    "A importância do ensino de línguas estrangeiras",
    "O impacto do aquecimento global na saúde pública",
    "A valorização da agricultura familiar",
    "Desafios do transporte público acessível",
    "O papel das redes sociais na mobilização popular",
    "A influência dos jogos digitais na educação",
    "O combate à desigualdade social por meio da tecnologia",
    "A importância do apoio psicológico para adolescentes",
    "Desafios da gestão de resíduos sólidos",
    "O impacto da crise hídrica na produção agrícola",
    "A valorização do patrimônio cultural imaterial",
    "O papel das cooperativas na inclusão social",
    "Desafios do combate à desinformação",
    "A influência da tecnologia na acessibilidade",
    "O combate à violência escolar",
    "A importância da mediação de conflitos nas escolas",
    "Desafios da saúde mental no ambiente de trabalho",
    "O impacto do uso excessivo de telas em crianças",
    "A valorização do turismo sustentável",
    "O papel da leitura na formação da cidadania",
    "Desafios do combate ao racismo nas instituições",
    "A influência da cultura digital na educação",
    "O combate à fome no mundo contemporâneo",
    "A importância da educação ambiental nas escolas urbanas",
    "Desafios do ensino inclusivo",
    "O impacto das fake news na democracia",
    "A valorização das línguas indígenas",
    "O papel do voluntariado na transformação social",
    "Desafios da preservação da fauna marinha",
    "A influência da globalização na diversidade cultural",
    "O combate ao trabalho escravo contemporâneo",
    "A importância do ensino da história regional",
    "Desafios do saneamento básico em áreas urbanas",
    "O impacto da tecnologia no mercado de trabalho",
    "A valorização da cultura afro-brasileira na mídia",
    "O papel da ética no jornalismo",
    "Desafios da mobilidade urbana para idosos",
    "A influência das redes sociais na saúde pública",
    "O combate à poluição ambiental",
    "A importância da educação para a cidadania digital",
    "Desafios do combate à violência doméstica",
    "O impacto do turismo cultural na economia local",
    "A valorização da cultura tradicional nas cidades",
    "O papel do esporte na prevenção da obesidade infantil",
    "Desafios da segurança alimentar nas regiões rurais",
    "A influência da mídia na percepção da ciência",
    "O combate ao preconceito contra pessoas com deficiência",
    "A importância do ensino da ética nas escolas",
    "Desafios da conservação dos recursos hídricos",
    "O impacto da agricultura sustentável no meio ambiente",
    "A valorização da arte contemporânea brasileira",
    "O papel da tecnologia na inclusão social de minorias",
    "Desafios do acesso à internet nas comunidades isoladas",
    "A influência do cinema na construção de identidades culturais"
  ];
 
// Aplica tema escuro se estiver salvo
      const temaSalvo = localStorage.getItem("theme");
      if (temaSalvo === "dark") {
        document.body.classList.add("dark-mode");
      };

  // Função para descobrir a semana do ano
function getSemanaDoAno() {
  const hoje = new Date();
  const primeiroDia = new Date(hoje.getFullYear(), 0, 1);
  const diffDias = Math.floor((hoje - primeiroDia) / (1000 * 60 * 60 * 24));
  return Math.floor(diffDias / 7);
}

document.addEventListener("DOMContentLoaded", () => {
  // === Aplica o tema salvo no localStorage ===
  const temaSalvo = localStorage.getItem("theme") || "light";
  if (temaSalvo === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  const semanaAtual = getSemanaDoAno();

  // Tema da semana baseado na lista 'temas'
  const temaIndex = semanaAtual % temas.length;
  const temaDaSemana = temas[temaIndex];

  // Atualiza o tema da semana no HTML
  const temaElemento = document.getElementById("tema-semana-texto");
  if (temaElemento) {
    temaElemento.innerText = temaDaSemana;
    // Salva no localStorage como tema inicial
    localStorage.setItem("temaEscolhido", temaDaSemana);
  }

  // Preenche a lista de temas semanais (se existir)
  const listaTemas = document.getElementById("lista-temas");
  if (listaTemas) {
    listaTemas.innerHTML = ""; // limpa antes de adicionar
    temas.forEach(tema => {
      const li = document.createElement("li");
      li.textContent = tema;
      li.style.cursor = "pointer";
      li.addEventListener("click", () => {
        if (temaElemento) {
          temaElemento.innerText = li.textContent;
          localStorage.setItem("temaEscolhido", li.textContent); // <-- SALVA TEMA CLICADO
        }
      });
      listaTemas.appendChild(li);
    });
  }

  // Preenche lista de outras sugestões
  const sugestoesElemento = document.querySelector(".outras-sugestoes ul");
  if (sugestoesElemento) {
    sugestoesElemento.innerHTML = ""; // limpa lista

    const quantidadeSugestoes = Math.min(13, temasSugestoes.length);
    const totalSugestoes = temasSugestoes.length;
    let idxSugestoes = (semanaAtual * quantidadeSugestoes) % totalSugestoes;

    for (let i = 0; i < quantidadeSugestoes; i++) {
      const tema = temasSugestoes[(idxSugestoes + i) % totalSugestoes];
      const li = document.createElement("li");
      li.textContent = tema;
      li.style.cursor = "pointer";

      li.addEventListener("click", () => {
        if (temaElemento) {
          temaElemento.innerText = li.innerText;
          localStorage.setItem("temaEscolhido", li.textContent); // <-- SALVA SUGESTÃO CLICADA
        }
      });

      sugestoesElemento.appendChild(li);
    }
  }

  // BARRA DE PESQUISA
  const inputBusca = document.getElementById("busca-temas");
  const resultadosBusca = document.getElementById("resultados-busca");

  function mostrarResultados(filtrados) {
    if (filtrados.length === 0) {
      resultadosBusca.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    } else {
      resultadosBusca.innerHTML = "<ul>" +
        filtrados.map(item => `<li>${item}</li>`).join('') +
        "</ul>";
    }
  }

  if (inputBusca) {
    inputBusca.addEventListener("input", () => {
      const filtro = inputBusca.value.toLowerCase().trim();

      if (filtro.length === 0) {
        resultadosBusca.style.display = "none";
        resultadosBusca.innerHTML = "";
        return;
      }

      const todosTemas = [...temas, ...temasSugestoes];
      const filtrados = todosTemas.filter(tema => tema.toLowerCase().includes(filtro));

      mostrarResultados(filtrados);
      resultadosBusca.style.display = "block";

      const itens = resultadosBusca.querySelectorAll("li");
      itens.forEach(li => {
        li.style.cursor = "pointer";
        li.addEventListener("click", () => {
          if (temaElemento) {
            temaElemento.innerText = li.textContent;
            localStorage.setItem("temaEscolhido", li.textContent); // <-- SALVA PESQUISA ESCOLHIDA
          }
          resultadosBusca.style.display = "none";
          inputBusca.value = "";
        });
      });
    });
  }
});