# Planejamento — próxima edição da Semana de Tecnologia

## 1. Objetivo

Atualizar o site da Semana de Tecnologia do SENAI Sorocaba para uma nova edição, com novos palestrantes, novo formulário de coleta de dados, novos dias e horários, além de organizar a operação do evento no Even3.

Este documento separa as entregas entre duas pessoas e considera dois fluxos que precisam permanecer alinhados:

1. **Site público:** divulgação do evento, agenda, palestrantes e links de inscrição.
2. **Operação do evento:** cadastro de alunos e palestrantes, atividades, presença e certificados no Even3.

## 2. Diagnóstico do projeto atual

| Área | Situação encontrada | Impacto |
|---|---|---|
| Conteúdo | `public/data/event.json` ainda descreve a edição de 2025 | Textos, datas e chamada principal ficarão desatualizados |
| Agenda | Existe `date`, mas não existe horário, duração, tipo ou capacidade | Não é possível comunicar a programação completa nem validar conflitos |
| Inscrição | Todas as atividades apontam para o mesmo link do Even3 | O participante não é direcionado para a atividade correta |
| Cursos | Minicursos aparecem apenas como texto dentro da agenda | Não há diferenciação de inscrição, vagas, pré-requisitos ou presença |
| Palestrantes | Lista baseada em nome, empresa, foto e biografia | Falta formulário operacional com contatos, autorização de imagem e dados fiscais/logísticos |
| Alunos | Não há cadastro local nem fluxo de confirmação | A operação depende integralmente do Even3 e de conferências manuais |
| Certificados | Não há dados, página ou regra no site | A emissão precisa ser configurada e validada no Even3 |
| Modelo de dados | Tipos TypeScript estão duplicados em `Index.tsx` e `Schedule.tsx` | Alterações de schema podem gerar inconsistências |
| Agenda visual | `Schedule.tsx` exibe título, palestrante, empresa e local | Será necessário exibir horário, tipo, duração e status/vagas |
| Rodapé | Texto e copyright mencionam 2025 de forma fixa | Precisa acompanhar a nova edição |
| Idioma/UX | Mensagens de carregamento e erro estão em inglês | Inconsistência com o público em português |
| Galeria | O conteúdo é pós-evento e contém referências já existentes | Deve ser revisada para não misturar edições |

## 3. Escopo recomendado

### Incluído

- Atualizar identidade e conteúdo da nova edição.
- Criar um formulário único para coleta e validação dos novos palestrantes.
- Modelar dias, horários, duração, tipo de atividade, sala, capacidade e link individual de inscrição.
- Diferenciar palestra, curso/minicurso, workshop e atividade institucional.
- Configurar o evento, participantes, atividades, palestrantes, presença e certificados no Even3.
- Cadastrar/validar alunos e palestrantes conforme o processo definido pela organização.
- Revisar responsividade, acessibilidade, links e textos.

### Fora do escopo inicial

- Criar um sistema próprio de inscrições, banco de dados ou emissão de certificados.
- Substituir o Even3 como sistema oficial de inscrições.
- Alterar a identidade visual sem aprovação da organização.
- Publicar fotos de participantes sem autorização de uso de imagem.

## 4. Divisão entre duas pessoas

### Pessoa 1 — Produto, conteúdo e operação Even3

Responsável por transformar as informações do evento em dados aprovados e configurar o processo operacional.

- **P1-01 — Formulário de palestrantes:** criar formulário para nome completo, nome público, e-mail, telefone, empresa, cargo, mini bio, tema, resumo, foto, necessidades técnicas, disponibilidade, autorização de imagem e observações.
- **P1-02 — Coleta e validação:** consolidar respostas, eliminar duplicidades, confirmar grafia, bio, empresa, fotos e autorizações.
- **P1-03 — Matriz da programação:** montar planilha com dia, início, fim, tipo, título, descrição, sala, capacidade, palestrante(s), recursos e status de aprovação.
- **P1-04 — Cadastro do evento no Even3:** revisar dados gerais, período, local, política de inscrição e identidade do evento.
- **P1-05 — Cadastro de atividades:** criar cada palestra, curso e workshop como atividade/ingresso adequado, com vagas, horários, salas, descrição e regras de inscrição.
- **P1-06 — Cadastro de palestrantes:** cadastrar os novos palestrantes no Even3 e associá-los às atividades correspondentes.
- **P1-07 — Cadastro de alunos:** importar ou cadastrar os alunos conforme a lista oficial, deduplicando por e-mail e conferindo turma/curso quando necessário.
- **P1-08 — Presença e certificados:** definir regra de elegibilidade, configurar certificado(s), testar nomes, carga horária e atividades concluídas.
- **P1-09 — Homologação operacional:** executar inscrição de teste, cancelamento/alteração, check-in, presença e emissão de certificado de ponta a ponta.

### Pessoa 2 — Desenvolvimento, dados e publicação do site

Responsável por adaptar a aplicação ao novo conteúdo e garantir a experiência pública.

- **P2-01 — Novo schema:** ampliar `event.json` com `id`, datas completas, horários, duração, tipo, status, capacidade, sala, palestrantes e link individual.
- **P2-02 — Tipagem compartilhada:** criar tipos/interfaces em arquivo próprio e reutilizá-los em `Index.tsx`, `Schedule.tsx` e `Speakers.tsx`.
- **P2-03 — Agenda:** exibir data, início/fim, duração, tipo de atividade, sala e ação de inscrição; ordenar cronologicamente.
- **P2-04 — Cursos e palestras:** destacar visualmente cursos/minicursos e permitir que cada atividade tenha informações próprias.
- **P2-05 — Palestrantes:** inserir novos palestrantes, validar caminhos das fotos e revisar nomes/bios no site.
- **P2-06 — Conteúdo institucional:** atualizar Hero, About, Footer, mensagens de carregamento/erro, ano da edição e links sociais/e-mail.
- **P2-07 — Validações de conteúdo:** criar validação para campos obrigatórios, links válidos, horários sem conflito e imagens existentes.
- **P2-08 — QA técnico:** executar lint, build, teste manual em desktop/mobile, acessibilidade básica e conferência de links do Even3.
- **P2-09 — Publicação:** preparar a versão final e publicar somente após aprovação da matriz e da homologação operacional.

## 5. Sequência e dependências

```text
P1-01 → P1-02 → P1-03 ─┬→ P1-04/P1-05/P1-06/P1-07/P1-08
                       └→ P2-01/P2-03/P2-04/P2-05

P1-09 + P2-08 → aprovação final → P2-09
```

O desenvolvimento pode começar com dados de exemplo, mas a publicação depende da matriz aprovada e dos links reais do Even3.

## 6. Critérios de aceite

- [ ] A edição exibida no site é a nova edição, sem referências indevidas a 2025.
- [ ] Todos os dias e horários publicados foram aprovados pela organização.
- [ ] Cada atividade possui um link correto para sua inscrição no Even3.
- [ ] Palestras, cursos e workshops estão claramente diferenciados.
- [ ] Todos os palestrantes novos têm cadastro, foto autorizada, bio revisada e vínculo com suas atividades.
- [ ] Alunos e palestrantes estão cadastrados no fluxo operacional definido.
- [ ] A regra de presença e emissão de certificados foi testada com dados fictícios.
- [ ] O site funciona em celular e desktop, sem erros no console, lint ou build.
- [ ] Um responsável da organização aprovou conteúdo, operação e publicação.

## 7. Riscos e decisões pendentes

| Risco/decisão | Responsável pela decisão | Quando resolver |
|---|---|---|
| Datas, horários e salas finais | Organização do evento | Antes de configurar atividades |
| Limite de vagas por atividade | Coordenação | Antes de abrir inscrições |
| Curso com uma inscrição única ou módulos separados | Coordenação + Pessoa 1 | Antes do cadastro no Even3 |
| Carga horária e regra de presença do certificado | Coordenação | Antes dos testes de certificado |
| Dados mínimos dos alunos | Organização/secretaria | Antes da importação |
| Autorização de imagem e publicação de bio | Palestrantes/organização | Antes de publicar |
| Quem terá acesso administrativo ao Even3 | Organização | Antes da configuração |
| Data de abertura e encerramento das inscrições | Coordenação | Antes da divulgação |

