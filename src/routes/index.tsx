import { createFileRoute } from "@tanstack/react-router";

import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Mail,
  MapPin,
  Network,
  Users,
  Wrench,
  Lightbulb,
  Plus,
  Minus,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SpeakerCard } from "@/components/SpeakerCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import antonyPhoto from "@/assets/antony.jpeg";
import jonathanPhoto from "@/assets/JonathanOliveiraBergamo - Jonathan Bergamo.jpg";
import michelePhoto from "@/assets/michele.jpeg";
import ericPhoto from "@/assets/eric.jpg";
import leticiaPhoto from "@/assets/leticia.jpeg";
import humbertoPhoto from "@/assets/humberto.jpeg";
import laorPhoto from "@/assets/laor.jpg";
import brunoPhoto from "@/assets/bruno.jpg";
import palestrantePhoto from "@/assets/palestrante.jpg";
import renePhoto from "@/assets/rene.jpg";
import joaoPhoto from "@/assets/joao.jpg";
import facultyPhoto from "@/assets/senai1.jpg";
import usinagemPhoto1 from "@/assets/gallery/usinagem-1.webp";
import usinagemPhoto2 from "@/assets/gallery/usinagem-2.webp";
import carreiraPhoto1 from "@/assets/gallery/carreira-1.webp";
import carreiraPhoto2 from "@/assets/gallery/carreira-2.webp";
import manufaturaPhoto1 from "@/assets/gallery/manufatura-1.webp";
import manufaturaPhoto2 from "@/assets/gallery/manufatura-2.webp";
import iaDevPhoto1 from "@/assets/gallery/ia-dev-1.webp";
import iaDevPhoto2 from "@/assets/gallery/ia-dev-2.webp";
import michelePhoto1 from "@/assets/gallery/michele-1.webp";
import michelePhoto2 from "@/assets/gallery/michele-2.webp";
import jonathanGalleryPhoto1 from "@/assets/gallery/jonathan-1.webp";
import jonathanGalleryPhoto2 from "@/assets/gallery/jonathan-2.webp";
import brunoGalleryPhoto1 from "@/assets/gallery/bruno-1.webp";
import brunoGalleryPhoto2 from "@/assets/gallery/bruno-2.webp";
import reneGalleryPhoto1 from "@/assets/gallery/rene-1.webp";
import reneGalleryPhoto2 from "@/assets/gallery/rene-2.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Semana de Tecnologia 2026 | SENAI Sorocaba" },
      {
        name: "description",
        content:
          "De 14 a 16 de outubro: três dias de palestras, minicursos e conexões na Semana de Tecnologia SENAI Sorocaba.",
      },
      { property: "og:title", content: "Semana de Tecnologia 2026 | SENAI Sorocaba" },
      {
        property: "og:description",
        content: "Tecnologia, inovação e oportunidades para construir o futuro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Inovação",
    text: "Descubra tecnologias de ponta e tendências emergentes em software e mecatrônica.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Oficinas",
    text: "Experiências práticas com especialistas, conectando ideias, habilidades e novas ferramentas.",
  },
  {
    icon: Network,
    number: "03",
    title: "Conexões",
    text: "Encontre profissionais, estudantes e empresas que estão transformando o futuro da tecnologia.",
  },
];

const schedule = [
  {
    weekday: "QUARTA-FEIRA",
    date: "14 OUT",
    tracks: [
      {
        category: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
        activities: [
          {
            time: "19:30 — 20:30",
            type: "PALESTRA",
            title: "Navegando pela Tecnologia: Liderando Projetos, Pessoas e Desafios",
            speaker: "Letícia Fernanda Anhaia Perosa · Analista de Projetos",
            place: "Auditório Bloco B - Andar Superior",
            text: "Uma jornada pelos bastidores da carreira em tecnologia, abordando os desafios da transição da área técnica para a liderança e as principais lições aprendidas na gestão de projetos e equipes.",
          },
          {
            time: "21:00 — 22:00",
            type: "PALESTRA",
            title: "A Evolução da Função do Desenvolvedor na Era da IA",
            speaker: "Humberto Cornia · Sr. Delivery Consultant",
            place: "Auditório Bloco B - Andar Superior",
            text: "Uma reflexão sobre como a inteligência artificial está transformando o papel do desenvolvedor, tornando o julgamento técnico, a resolução de problemas e a capacidade de avaliar soluções geradas por IA habilidades cada vez mais importantes.",
          },
        ],
      },

      {
        category: "MECATRÔNICA",
        activities: [
          {
            time: "19:30 — 20:30",
            type: "PALESTRA",
            title: "A Usinagem na Cadeia de Valor",
            speaker: "André Alves · Gestor de Contas",
            place: "Auditório Bloco B - Térreo",
            text: "Uma abordagem sobre ferramentas de usinagem, classificação ISO, escolha e aplicação de pastilhas e o uso de softwares da Indústria 4.0 para aumentar a eficiência e a competitividade dos processos industriais.",
          },
          {
            time: "21:00 — 22:00",
            type: "PALESTRA",
            title: "Manufatura Aditiva: Desmistificando a Impressão 3D em Resina",
            speaker: "Antoni Dalmatti Alves Lima Frigério · Faber",
            place: "Auditório Bloco B - Térreo",
            text: "Uma introdução prática aos fundamentos da impressão 3D em resina, abordando funcionamento, preparação dos modelos, impressão, pós-processamento, aplicações e possibilidades dentro da manufatura aditiva.",
          },
        ],
      },
    ],
  },

  {
    weekday: "QUINTA-FEIRA",
    date: "15 OUT",
    tracks: [
      {
        category: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
        activities: [
          {
            time: "19:30 — 20:30",
            type: "PALESTRA",
            title: "Carreira Global: O Mercado Internacional de Trabalho em Tecnologia",
            speaker: "Jonathan Oliveira Bergamo · Engenheiro de Software",
            place: "Auditório Bloco B - Andar Superior",
            text: "Guia prático para profissionais brasileiros ingressarem no mercado global de tecnologia, explorando preparação técnica, inglês, contratação remota e trabalho internacional.",
          },
          {
            time: "21:00 — 22:00",
            type: "PALESTRA",
            title: "Lego4Scrum",
            speaker: "Rene Esteves · CTO",
            place: "Auditório Bloco B - Andar Superior",
            text: "Lego4Scrum é uma simulação prática e imersiva criada para ensinar os princípios do Scrum e do pensamento ágil usando blocos de LEGO. Em vez de apenas ouvir teorias, os participantes formam times multifuncionais e constroem uma cidade (ou produto complexo) ao longo de múltiplos ciclos curtos. Na prática, eles vivenciam todos os papéis, cerimônias, entregas incrementais e a evolução contínua guiada por feedback do Product Owner.",
          },
        ],
      },

      {
        category: "MECATRÔNICA",
        activities: [
          {
            time: "19:30 — 20:30",
            type: "PALESTRA",
            title: "E quando não tem manual?",
            speaker: "Michele da Rocha Moreira · Psicanalista",
            place: "Auditório Bloco B - Térreo",
            text: "Uma reflexão sobre resiliência e inteligência emocional diante de situações com informações insuficientes, variáveis fora do nosso controle e respostas que ainda não existem.",
          },
          {
            time: "21:00 — 22:00",
            type: "PALESTRA",
            title: "Manutenção Produtiva da Mente: Prevenindo o Overload no Chão de Fábrica",
            speaker: "Bruno Souza · Psicólogo",
            place: "Auditório Bloco B - Térreo",
            text: "Uma abordagem acessível sobre estresse e burnout no ambiente de trabalho, discutindo seus impactos na saúde mental e apresentando estratégias terapêuticas e preventivas para lidar com a sobrecarga.",
          },
        ],
      },
    ],
  },

  {
    weekday: "SEXTA-FEIRA",
    date: "16 OUT",
    tracks: [
      {
        category: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
        activities: [
          {
            time: "19:30 — 20:30",
            type: "PALESTRA",
            title: "Geração Z não rejeita trabalho, mas redefine carreiras",
            speaker: "Laôr Fernandes de Oliveira · Gerente de Projetos Educacionais",
            place: "Auditório Bloco B - Andar Superior",
            text: "Uma reflexão sobre a relação da Geração Z com o trabalho, abordando construção de carreira, culturas profissionais, impacto da inteligência artificial nas vagas de entrada e desenvolvimento de liderança com autonomia e equilíbrio.",
          },
          {
            time: "21:00 — 22:00",
            type: "PALESTRA",
            title: "Seu comportamento fala antes de você",
            speaker: "Eric Garcia · Treinador Comportamental",
            place: "Auditório Bloco B - Andar Superior",
            text: "Uma reflexão sobre comportamento e autoconhecimento, incentivando cada aluno a analisar como suas atitudes são percebidas pelas pessoas ao seu redor e como elas se refletem na vida real.",
          },
        ],
      },

      {
        category: "MECATRÔNICA",
        activities: [
          {
            time: "19:30 — 20:30",
            type: "PALESTRA",
            title: "Seu comportamento fala antes de você",
            speaker: "Eric Garcia · Treinador Comportamental",
            place: "Auditório Bloco B - Térreo",
            text: "Uma reflexão sobre comportamento e autoconhecimento, incentivando cada aluno a analisar como suas atitudes são percebidas pelas pessoas ao seu redor e como elas se refletem na vida real.",
          },
          {
            time: "21:00 — 22:00",
            type: "PALESTRA",
            title:
              "Automação Inteligente na Indústria 4.0: Como as Soluções Proauto Elevam a Eficiência, Confiabilidade e Competitividade Industrial",
            speaker: "João Vitor Souza de Messias · Executivo de Projetos",
            place: "Auditório Bloco B - Térreo",
            text: "A palestra abordará como as tecnologias de automação inteligente e os conceitos da Indústria 4.0 contribuem para aumentar a eficiência operacional, a confiabilidade e a competitividade industrial. Serão apresentadas soluções Proauto, incluindo automação, acionamentos, robótica e conectividade, com foco em aplicações práticas e resultados para a indústria.",
          },
        ],
      },
    ],
  },
];

const trackFilters = [
  { id: "", label: "Todas as categorias" },
  { id: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS", label: "Análise e Desenvolvimento de Sistemas" },
  { id: "MECATRÔNICA", label: "Mecatrônica" },
];

function activitiesIn(filter: string) {
  return schedule.reduce(
    (total, day) =>
      total +
      day.tracks
        .filter((track) => !filter || track.category === filter)
        .reduce((count, track) => count + track.activities.length, 0),
    0,
  );
}

const speakers = [
  {
    image: jonathanPhoto,
    name: "Jonathan Oliveira Bergamo",
    role: "Engenheiro de Software",
    company: "Natoora",
    bio: "Engenheiro de Software Full-Stack com experiência internacional, especializado no desenvolvimento de soluções web e mobile para o mercado global de tecnologia.",
  },
  {
    image: antonyPhoto,
    name: "Antoni Dalmatti Alves Lima Frigério",
    role: "Faber — Técnico de Laboratório",
    company: "SESI Sorocaba",
    bio: "Profissional de fabricação digital, robótica educacional e cultura maker, com experiência em impressão 3D, prototipagem, eletrônica, programação e automação aplicadas ao desenvolvimento de projetos.",
  },
  {
    image: michelePhoto,
    name: "Michele da Rocha Moreira",
    role: "Psicanalista e Assessora Especial I",
    company: "Centro Paula Souza",
    bio: "Psicanalista clínica, palestrante de inteligência emocional e coordenadora do Programa SER CPS, com atuação em escuta, acolhimento e desenvolvimento da inteligência emocional dos estudantes.",
  },
  {
    image: ericPhoto,
    name: "Eric Garcia",
    role: "Treinador Comportamental e Personal Trainer",
    company: "Profissional Autônomo",
    bio: "Profissional com quase 10 anos de experiência em comportamento humano, atuando com palestras, treinamentos e atendimentos individuais voltados ao desenvolvimento pessoal, autoconsciência e mudança de comportamento.",
  },
  {
    image: leticiaPhoto,
    name: "Letícia Fernanda Anhaia Perosa",
    role: "Analista de Projetos",
    company: "T4E GROUP",
    bio: "Profissional de tecnologia com formação em desenvolvimento de software e atuação na gestão de projetos, fazendo a interface entre demandas de clientes e equipes de desenvolvimento. Iniciou sua transição de carreira pelo SENAI e hoje é responsável pela carteira de soluções tecnológicas da empresa.",
  },
  {
    image: humbertoPhoto,
    name: "Humberto Cornia",
    role: "Sr. Delivery Consultant",
    company: "AWS",
    bio: "Especialista em arquitetura em nuvem e transformação tecnológica, com quase 7 anos de atuação na AWS. Possui experiência como Tech Lead, 7 certificações AWS e atuação com ferramentas de desenvolvimento assistido por inteligência artificial.",
  },
  {
    image: laorPhoto,
    name: "Laôr Fernandes de Oliveira",
    role: "Gerente de Projetos Educacionais",
    company: "SESI",
    bio: "Profissional da área de gestão da educação, com atuação em projetos educacionais e foco no desenvolvimento de carreira, liderança, autonomia e preparação dos jovens para os novos desafios do mercado de trabalho.",
  },
  {
    image: brunoPhoto,
    name: "Bruno Souza",
    role: "Psicólogo",
    company: "Psicologia Clínica",
    bio: "Psicólogo clínico com trajetória multidisciplinar, tendo atuado por quase uma década como Técnico em Eletrotécnica no setor de manutenção. Há quase 7 anos dedica-se à área clínica, com formação complementar e mestrado pela Universidade de São Paulo (USP).",
  },
  {
    image: palestrantePhoto,
    name: "André Alves",
    role: "Gestor de Contas",
    company: "Produs Ferramentas (Sandvik)",
    bio: "Engenheiro de Produção com mais de 20 anos de experiência no setor industrial, atuando em engenharia e vendas técnicas de ferramentas para usinagem. É sócio-proprietário da Produs Ferramentas, distribuidora autorizada Sandvik Coromant, com foco em produtividade, tecnologia e melhoria dos processos industriais.",
  },
  {
    image: renePhoto,
    name: "Rene Esteves",
    role: "CTO",
    company: "Tech",
    bio: "CTO com atuação na área de tecnologia. Conduz a simulação Lego4Scrum, uma vivência prática para aprender os princípios do Scrum e do pensamento ágil com blocos de LEGO.",
  },
  {
    image: joaoPhoto,
    name: "João Vitor Souza de Messias",
    role: "Executivo de Projetos",
    company: "Proauto Electric",
    bio: "Engenheiro eletricista formado pela FACENS, com trajetória em automação industrial: manutenção, software para CLPs, integração de sistemas, projetos e comissionamento. Atuou com tecnologias Siemens, Rockwell, B&R e Schneider Electric e fez treinamento na China com a Inovance. Hoje, como Executivo de Projetos, aproxima a tecnologia das aplicações práticas da indústria.",
  },
];

const gallery = [
  {
    src: usinagemPhoto1,
    track: "Mecatrônica",
    talk: "A Usinagem na Cadeia de Valor",
    alt: "André Alves apresentando a palestra A Usinagem na Cadeia de Valor",
  },
  {
    src: usinagemPhoto2,
    track: "Mecatrônica",
    talk: "A Usinagem na Cadeia de Valor",
    alt: "Plateia assistindo à palestra A Usinagem na Cadeia de Valor",
  },
  {
    src: carreiraPhoto1,
    track: "ADS",
    talk: "Navegando pela Tecnologia: Liderando Projetos, Pessoas e Desafios",
    alt: "Letícia Fernanda Anhaia Perosa apresentando a palestra sobre liderança em projetos de tecnologia",
  },
  {
    src: carreiraPhoto2,
    track: "ADS",
    talk: "Navegando pela Tecnologia: Liderando Projetos, Pessoas e Desafios",
    alt: "Plateia assistindo à palestra Navegando pela Tecnologia",
  },
  {
    src: manufaturaPhoto1,
    track: "Mecatrônica",
    talk: "Manufatura Aditiva: Desmistificando a Impressão 3D em Resina",
    alt: "Antoni Dalmatti apresentando a palestra sobre impressão 3D em resina",
  },
  {
    src: manufaturaPhoto2,
    track: "Mecatrônica",
    talk: "Manufatura Aditiva: Desmistificando a Impressão 3D em Resina",
    alt: "Plateia assistindo à palestra sobre impressão 3D em resina",
  },
  {
    src: iaDevPhoto1,
    track: "ADS",
    talk: "A Evolução da Função do Desenvolvedor na Era da IA",
    alt: "Humberto Cornia apresentando a palestra sobre a função do desenvolvedor na era da IA",
  },
  {
    src: iaDevPhoto2,
    track: "ADS",
    talk: "A Evolução da Função do Desenvolvedor na Era da IA",
    alt: "Plateia assistindo à palestra sobre a função do desenvolvedor na era da IA",
  },
  {
    src: michelePhoto1,
    track: "Mecatrônica",
    talk: "E quando não tem manual?",
    alt: "Michele da Rocha Moreira apresentando a palestra E quando não tem manual?",
  },
  {
    src: michelePhoto2,
    track: "Mecatrônica",
    talk: "E quando não tem manual?",
    alt: "Plateia assistindo à palestra E quando não tem manual?",
  },
  {
    src: jonathanGalleryPhoto1,
    track: "ADS",
    talk: "Carreira Global: O Mercado Internacional de Trabalho em Tecnologia",
    alt: "Jonathan Oliveira Bergamo apresentando a palestra sobre carreira global em tecnologia",
  },
  {
    src: jonathanGalleryPhoto2,
    track: "ADS",
    talk: "Carreira Global: O Mercado Internacional de Trabalho em Tecnologia",
    alt: "Plateia assistindo à palestra sobre carreira global em tecnologia",
  },
  {
    src: brunoGalleryPhoto1,
    track: "Mecatrônica",
    talk: "Manutenção Produtiva da Mente: Prevenindo o Overload no Chão de Fábrica",
    alt: "Bruno Souza ao lado da programação do evento exibida na TV",
  },
  {
    src: brunoGalleryPhoto2,
    track: "Mecatrônica",
    talk: "Manutenção Produtiva da Mente: Prevenindo o Overload no Chão de Fábrica",
    alt: "Bruno Souza apresentando a palestra sobre saúde mental no trabalho",
  },
  {
    src: reneGalleryPhoto1,
    track: "ADS",
    talk: "Lego4Scrum",
    alt: "Rene Esteves apresentando a palestra Lego4Scrum",
  },
  {
    src: reneGalleryPhoto2,
    track: "ADS",
    talk: "Lego4Scrum",
    alt: "Plateia assistindo à palestra Lego4Scrum",
  },
];

const nav = [
  ["Sobre", "sobre"],
  ["Agenda", "agenda"],
  ["Palestrantes", "palestrantes"],
  ["Galeria", "galeria"],
];

function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span>{index}</span>
      <h2>{children}</h2>
    </div>
  );
}

function EventGallery() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = gallery.length;

  useEffect(() => {
    if (paused) return;
    const timeout = window.setTimeout(() => setSlide((current) => (current + 1) % total), 6000);
    return () => window.clearTimeout(timeout);
  }, [slide, paused, total]);

  const photo = gallery[slide];
  if (!photo) return null;

  return (
    <div
      className="gallery-stage"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        key={slide}
        className="gallery-frame"
        style={{ "--gallery-bg": `url(${photo.src})` } as React.CSSProperties}
      >
        <img
          className="gallery-image"
          src={photo.src}
          alt={photo.alt}
          width={1500}
          height={1125}
          decoding="async"
        />
      </div>
      <div className="gallery-caption">
        <span>{photo.track}</span>
        <strong>{photo.talk}</strong>
      </div>
      <span className="gallery-count">
        {String(slide + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <div className="gallery-controls">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSlide((slide + total - 1) % total)}
          aria-label="Foto anterior"
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="event"
          size="icon"
          onClick={() => setSlide((slide + 1) % total)}
          aria-label="Próxima foto"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

function Index() {
  useScrollReveal();
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [trackFilter, setTrackFilter] = useState("");
  const [selectedSpeaker, setSelectedSpeaker] = useState("");

  useEffect(() => {
    if (!selectedSpeaker) return;
    const timeout = window.setTimeout(() => {
      setSelectedSpeaker("");
      const focused = document.activeElement;
      if (focused instanceof HTMLElement && focused.id.startsWith("atividade-")) focused.blur();
    }, 5000);
    return () => window.clearTimeout(timeout);
  }, [selectedSpeaker]);

  const activityId = (dayIndex: number, trackIndex: number, activityIndex: number) =>
    `atividade-${dayIndex}-${trackIndex}-${activityIndex}`;

  function navigateToTalk(name: string, targetId: string) {
    setTrackFilter("");
    setShowFullSchedule(true);
    setSelectedSpeaker(name);
    window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (!target) return;
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "center",
      });
      target.focus({ preventScroll: true });
      window.history.replaceState(null, "", `#${targetId}`);
    });
  }

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  }, []);

  return (
    <main className="bg-background text-foreground">
      <div
        className="intro-shell"
        style={{ "--hero-image": `url(${facultyPhoto})` } as React.CSSProperties}
      >
        <header className="site-header">
          <a href="#inicio" className="brand" aria-label="SENAI Sorocaba — início">
            <span>SENAI</span>
            <small>SOROCABA</small>
          </a>
          <nav className={menuOpen ? "nav-open" : ""} aria-label="Navegação principal">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </header>

        <section id="inicio" className="hero-section">
          <div className="hero-copy">
            <p className="hero-kicker">SENAI SOROCABA APRESENTA</p>
            <h1>
              SEMANA DE
              <br />
              <strong>TECNOLOGIA</strong>
              <br />
              <span>2026</span>
            </h1>
            <p className="hero-description">
              Educação que transforma. Tecnologia que conecta. Três dias para experimentar o futuro
              em movimento.
            </p>
            <div className="hero-actions">
              <Button variant="event" size="event" asChild>
                <a href="#agenda">
                  VER PROGRAMAÇÃO <ArrowDown />
                </a>
              </Button>
              <span>
                <CalendarDays /> 14 A 16 OUT 2026
              </span>
            </div>
          </div>
        </section>
      </div>

      <section id="sobre" className="page-section">
        <div className="section-shell">
          <SectionHeading index="01">
            POR QUE VIVER A<br />
            <em>SEMANA DE TECNOLOGIA?</em>
          </SectionHeading>
          <div className="feature-list">
            {highlights.map(({ icon: Icon, number, title, text }) => (
              <article key={title}>
                <span className="feature-number">{number}</span>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="page-section">
        <div className="section-shell">
          <SectionHeading index="02">
            AGENDA DO <em>EVENTO</em>
          </SectionHeading>
          <div className="track-filter" role="group" aria-label="Filtrar agenda por categoria">
            {trackFilters.map((filter) => {
              const active = trackFilter === filter.id;
              return (
                <button
                  key={filter.id || "todas"}
                  type="button"
                  className={active ? "is-active" : ""}
                  aria-pressed={active}
                  onClick={() => setTrackFilter(filter.id)}
                >
                  <span>{filter.label}</span>
                  <small>{activitiesIn(filter.id)}</small>
                </button>
              );
            })}
          </div>
          <p className="track-filter-note" aria-live="polite">
            {trackFilter
              ? `Mostrando ${trackFilters.find((filter) => filter.id === trackFilter)?.label ?? trackFilter} · ${activitiesIn(trackFilter)} atividades nos três dias`
              : `Mostrando todas as categorias · ${activitiesIn("")} atividades nos três dias`}
          </p>
          {selectedSpeaker && (
            <p className="speaker-agenda-notice" role="status">
              Atividades de <strong>{selectedSpeaker}</strong> destacadas abaixo.
            </p>
          )}
          {schedule.map((day, dayIndex) => {
            const tracks = trackFilter
              ? day.tracks.filter((track) => track.category === trackFilter)
              : day.tracks;
            if (!tracks.length) return null;
            return (
              <div
                key={day.date}
                className={
                  dayIndex > 0 && !showFullSchedule
                    ? "schedule-day schedule-day-hidden"
                    : "schedule-day"
                }
              >
                <div className="agenda-date">
                  <CalendarDays />
                  <span>{day.weekday}</span>
                  <strong>{day.date}</strong>
                </div>
                {tracks.map((track) => (
                  <div key={track.category} className="schedule-track">
                    <b className="track-label">{track.category}</b>
                    <div className="schedule-list">
                      {track.activities.map((item, activityIndex) => (
                        <article
                          key={`${item.title}-${activityIndex}`}
                          id={activityId(dayIndex, day.tracks.indexOf(track), activityIndex)}
                          tabIndex={-1}
                          className={
                            selectedSpeaker && item.speaker.startsWith(`${selectedSpeaker} ·`)
                              ? "activity-highlighted"
                              : ""
                          }
                        >
                          <time>{item.time}</time>
                          <div>
                            <b className="activity-type">{item.type}</b>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <span>
                              <Users /> {item.speaker}
                            </span>
                            <span>
                              <MapPin /> {item.place}
                            </span>
                          </div>
                          <Button
                            variant="outline"
                            className="signup-button"
                            asChild
                            aria-label={`Inscreva-se em ${item.title}`}
                          >
                            <a
                              href="https://www.even3.com.br/semana-de-tecnologia-faculdade-senai-sorocaba-789762/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>INSCREVA-SE</span>
                              <ArrowUpRight />
                            </a>
                          </Button>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
          <Button
            variant="event"
            size="event"
            className="schedule-toggle"
            onClick={() => setShowFullSchedule((current) => !current)}
            aria-expanded={showFullSchedule}
          >
            {showFullSchedule ? <Minus /> : <Plus />}{" "}
            {showFullSchedule ? "VER MENOS" : "VER A AGENDA COMPLETA"}
          </Button>
        </div>
      </section>

      <section id="palestrantes" className="page-section">
        <div className="section-shell">
          <SectionHeading index="03">
            CONHEÇA OS <em>PALESTRANTES</em>
          </SectionHeading>
          <div className="speaker-grid">
            {speakers.map((speaker) => {
              const dayIndex = schedule.findIndex((day) =>
                day.tracks.some((track) =>
                  track.activities.some((activity) =>
                    activity.speaker.startsWith(`${speaker.name} ·`),
                  ),
                ),
              );
              const day = schedule[dayIndex];
              if (!day) return null;
              const trackIndex = day.tracks.findIndex((track) =>
                track.activities.some((activity) =>
                  activity.speaker.startsWith(`${speaker.name} ·`),
                ),
              );
              const track = day.tracks[trackIndex];
              if (!track) return null;
              const activityIndex = track.activities.findIndex((activity) =>
                activity.speaker.startsWith(`${speaker.name} ·`),
              );
              const activity = track.activities[activityIndex];
              if (!activity) return null;
              const targetId = activityId(dayIndex, trackIndex, activityIndex);
              return (
                <SpeakerCard
                  key={speaker.name}
                  speaker={speaker}
                  talkTitle={activity.title}
                  targetId={targetId}
                  onNavigate={() => navigateToTalk(speaker.name, targetId)}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section id="galeria" className="page-section">
        <div className="section-shell">
          <SectionHeading index="04">
            GALERIA DO <em>EVENTO</em>
          </SectionHeading>
          <EventGallery />
        </div>
      </section>

      <footer>
        <div>
          <strong>SENAI</strong>
          <span>SEMANA DE TECNOLOGIA 2026</span>
        </div>
        <p>EDUCAÇÃO QUE PREPARA PESSOAS PARA TRANSFORMAR O MUNDO.</p>
        <div className="footer-links">
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://www.instagram.com/senaisorocaba/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:eventos@senaisorocaba.org.br" aria-label="E-mail">
              <Mail />
            </a>
          </Button>
        </div>
        <nav className="past-editions" aria-labelledby="past-editions-title">
          <h4 id="past-editions-title">EDIÇÕES ANTERIORES</h4>
          <ul>
            <li>
              <a
                href="/2025"
                target="_blank"
                rel="noreferrer"
              >
                EDIÇÃO 2025 <ArrowUpRight />
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer-credits">
          <p>© 2026 SENAI Sorocaba. Todos os direitos reservados.</p>
          <p>
            Feito por{" "}
            <a
              href="https://www.linkedin.com/in/marco-s-25b4b5358/"
              target="_blank"
              rel="noreferrer"
            >
              Marco
            </a>{" "}
            e{" "}
            <a
              href="https://www.linkedin.com/in/julio-cesar-botaccio/"
              target="_blank"
              rel="noreferrer"
            >
              Júlio
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
