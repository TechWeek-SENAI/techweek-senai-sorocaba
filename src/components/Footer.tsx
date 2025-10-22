import { Instagram, Mail } from "lucide-react";


export const Footer = () => {
  return (
    <footer className="bg-secondary/50 backdrop-blur-sm border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading">SENAI Sorocaba</h3>
                <p className="text-sm text-muted-foreground">Semana de tecnologia 2025</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Capacitando a próxima geração de profissionais de tecnologia.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Conecte Conosco
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/senaisorocaba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card hover:bg-accent flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
              </a>
              <a
                href="mailto:andre.souza@sp.senai.br"
                className="w-10 h-10 rounded-full bg-card hover:bg-accent flex items-center justify-center transition-colors group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SENAI Sorocaba. Todos direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Desenvolvido por 
              {" "}
              <a href="https://www.linkedin.com/in/luciano-j%C3%BAnior-89b6b7211/"  className="hover:underline">Luciano Jr</a>
              {" & "}
               
              <a href="https://www.linkedin.com/in/victortoledo28/"  className="hover:underline">Victor Geroto</a>
              {" "}
               – SENAI Sorocaba
          </p>

        </div>
      </div>
    </footer>
  );
};
