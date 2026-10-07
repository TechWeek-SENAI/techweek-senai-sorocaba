import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Users,
  Wrench,
  Lightbulb,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

type Talk = {
  title: string;
  speaker: string;
  company: string;
  location: string;
  description: string;
  registrationLink: string;
};

type EventData = {
  event: { title: string; subtitle: string; description: string; date: string; location: string };
  schedule: Array<{ date: string; talks: Talk[] }>;
  speakers: Array<{ name: string; company: string; photo: string; bio: string }>;
  gallery: Array<{ image: string; caption: string }>;
};

function event2025Asset(path: string) {
  if (path.startsWith("/")) return path;
  if (path.startsWith("gallery/")) return `/${path}`;
  return path.startsWith("assets/") ? `/${path}` : `/assets/${path}`;
}

export const Route = createFileRoute("/2025")({
  head: () => ({
    meta: [
      { title: "Semana de Tecnologia 2025 | SENAI Sorocaba" },
      {
        name: "description",
        content: "Três dias de inovação, aprendizado e networking para estudantes de Software e Mecatrônica.",
      },
    ],
  }),
  component: Event2025,
});

function Event2025() {
  const [data, setData] = useState<EventData | null>(null);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/data/event.json")
      .then((response) => {
        if (!response.ok) throw new Error("Não foi possível carregar o evento.");
        return response.json() as Promise<EventData>;
      })
      .then(setData)
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const sections = ["about", "schedule", "speakers", "gallery"]
      .map((id) => document.getElementById(`event-2025-${id}`))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id.replace("event-2025-", ""))),
      { rootMargin: "-25% 0px -65%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [data]);

  if (!data) return <div className="event-2025-loading">Carregando a Semana de Tecnologia 2025…</div>;

  const goTo = (id: string) => {
    document.getElementById(`event-2025-${id}`)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="event-2025-page">
      <header className="event-2025-header">
        <a className="event-2025-brand" href="#event-2025-hero" onClick={() => setMenuOpen(false)}>
          <span>SENAI</span><small>SOROCABA</small>
        </a>
        <button className="event-2025-menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Abrir menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "event-2025-nav is-open" : "event-2025-nav"}>
          {[
            ["about", "Sobre"],
            ["schedule", "Programação"],
            ["speakers", "Palestrantes"],
            ["gallery", "Galeria"],
          ].map(([id, label]) => (
            <button key={id} className={activeSection === id ? "is-active" : ""} onClick={() => goTo(id)} type="button">{label}</button>
          ))}
        </nav>
      </header>

      <main>
        <section id="event-2025-hero" className="event-2025-hero">
          <div className="event-2025-hero-content">
            <p className="event-2025-eyebrow"><CalendarDays /> {data.event.date}</p>
            <h1>{data.event.title}<strong>{data.event.subtitle}</strong></h1>
            <p className="event-2025-lead">{data.event.description}</p>
            <p className="event-2025-location"><MapPin /> {data.event.location}</p>
            <button className="event-2025-primary-button" onClick={() => goTo("schedule")} type="button">Veja a programação <ArrowDown /></button>
          </div>
          <div className="event-2025-grid" aria-hidden="true" />
        </section>

        <section id="event-2025-about" className="event-2025-section event-2025-about">
          <SectionHeading number="01" title="Por que participar da Semana de Tecnologia?" />
          <p className="event-2025-intro">Uma experiência imersiva aberta ao público pensada para a próxima geração de profissionais de tecnologia.</p>
          <div className="event-2025-features">
            <Feature icon={<Lightbulb />} title="Inovação" text="Descubra tecnologias de ponta e tendências emergentes em software e mecatrônica." />
            <Feature icon={<Wrench />} title="Workshops" text="Sessões práticas com especialistas da indústria, abordando habilidades e ferramentas essenciais." />
            <Feature icon={<Users />} title="Networking" text="Conecte-se com profissionais, colegas e empresas que estão moldando o futuro da tecnologia." />
          </div>
        </section>

        <section id="event-2025-schedule" className="event-2025-section">
          <SectionHeading number="02" title="Agenda do evento" />
          <p className="event-2025-intro">Três dias repletos de palestras inspiradoras, workshops práticos e oportunidades de networking.</p>
          <div className="event-2025-days">
            {data.schedule.map((day) => <ScheduleDay key={day.date} day={day} />)}
          </div>
        </section>

        <section id="event-2025-speakers" className="event-2025-section event-2025-speakers">
          <SectionHeading number="03" title="Conheça nossos palestrantes" />
          <p className="event-2025-intro">Aprenda com líderes e inovadores da indústria que estão moldando o futuro da tecnologia.</p>
          <div className="event-2025-speaker-grid">{data.speakers.map((speaker) => <article className="event-2025-speaker" key={speaker.name}><img src={event2025Asset(speaker.photo)} alt={speaker.name} loading="lazy" /><div><h3>{speaker.name}</h3><p className="event-2025-company"><Building2 /> {speaker.company}</p><p>{speaker.bio}</p></div></article>)}</div>
        </section>

        <Gallery gallery={data.gallery} />
      </main>

      <footer className="event-2025-footer"><div><div className="event-2025-footer-brand">SENAI <small>SOROCABA</small></div><p>Capacitando a próxima geração de profissionais de tecnologia.</p></div><div className="event-2025-social"><span>Conecte-se conosco</span><div><a href="https://www.instagram.com/senaisorocaba" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a href="mailto:andre.souza@sp.senai.br" aria-label="Email"><Mail /></a></div></div><nav className="event-2025-past-editions" aria-labelledby="event-2025-past-editions-title"><h4 id="event-2025-past-editions-title">OUTRAS EDIÇÕES</h4><ul><li><a href="/" target="_blank" rel="noreferrer">EDIÇÃO 2026 <ArrowUpRight /></a></li></ul></nav><p className="event-2025-copyright">© {new Date().getFullYear()} SENAI Sorocaba. Todos direitos reservados.</p></footer>
    </div>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) { return <div className="event-2025-heading"><span>{number}</span><h2>{title}</h2><i /></div>; }
function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) { return <article className="event-2025-feature"><div>{icon}</div><h3>{title}</h3><p>{text}</p></article>; }
function ScheduleDay({ day }: { day: { date: string; talks: Talk[] } }) { return <article className="event-2025-day"><h3><CalendarDays /> {day.date}</h3><div className="event-2025-talk-grid">{day.talks.map((talk, index) => <div className="event-2025-talk" key={`${day.date}-${index}`}><span className="event-2025-talk-type">{talk.title.split(" - ")[0]}</span><h4>{talk.title.replace(/^\w+ - /, "")}</h4><p className="event-2025-meta"><Users /> {talk.speaker}</p><p className="event-2025-meta"><Building2 /> {talk.company}</p><p className="event-2025-meta"><MapPin /> {talk.location}</p><p>{talk.description}</p><a href={talk.registrationLink} target="_blank" rel="noreferrer">Faça a inscrição <ArrowUpRight /></a></div>)}</div></article>; }
function Gallery({ gallery }: { gallery: Array<{ image: string; caption: string }> }) { const [index, setIndex] = useState(0); const current = gallery[index]; const next = () => setIndex((value) => (value + 1) % gallery.length); const previous = () => setIndex((value) => (value - 1 + gallery.length) % gallery.length); return <section id="event-2025-gallery" className="event-2025-section event-2025-gallery"><SectionHeading number="04" title="Galeria do evento" /><p className="event-2025-intro">Destaques da Semana de Tecnologia.</p>{current && <div className="event-2025-gallery-frame"><img src={event2025Asset(current.image)} alt={current.caption || "Registro da Semana de Tecnologia"} /><button onClick={previous} type="button" aria-label="Imagem anterior"><ChevronLeft /></button><button onClick={next} type="button" aria-label="Próxima imagem"><ChevronRight /></button><span>{index + 1} / {gallery.length}</span></div>}</section>; }
