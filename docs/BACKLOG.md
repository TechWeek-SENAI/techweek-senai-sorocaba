# Backlog macro — próxima edição da Semana de Tecnologia

Este é o backlog de acompanhamento. Cada item representa uma entrega macro. A descrição e o checklist de execução estão em [BACKLOG-DETALHADO.md](<BACKLOG-DETALHADO.md>).

## Responsáveis

- **Pessoa 1:** conteúdo, secretaria e operação do Even3.
- **Pessoa 2:** desenvolvimento, dados, experiência do site e publicação.
- **Organização:** decisões, aprovações e suporte institucional.

## Prioridades

- **P0:** bloqueia inscrições, evento ou publicação.
- **P1:** necessário para uma operação correta.
- **P2:** melhoria importante, sem bloquear a abertura.

## Backlog

| ID | Épico | Prioridade | Tarefa macro | Responsável | Dependência | Status |
|---|---|---:|---|---|---|---|
| GOV-01 | Governança | P0 | Definir escopo, calendário, responsáveis e regras do evento | Organização | — | A fazer |
| GOV-02 | Governança | P1 | Organizar acessos, documentos e controle de versões | P1 | GOV-01 | A fazer |
| PAL-01 | Palestrantes | P0 | Criar e divulgar o formulário de novos palestrantes | P1 | GOV-01 | A fazer |
| PAL-02 | Palestrantes | P0 | Consolidar e validar os cadastros recebidos | P1 | PAL-01 | A fazer |
| PAL-03 | Palestrantes | P1 | Finalizar conteúdo, autorizações e necessidades logísticas | P1 | PAL-02 | A fazer |
| PROG-01 | Programação | P0 | Montar a matriz oficial de dias, horários e salas | P1 + Organização | GOV-01 | A fazer |
| PROG-02 | Programação | P0 | Validar conflitos, capacidades e formato das atividades | P1 + Organização | PROG-01 | A fazer |
| PROG-03 | Programação | P0 | Aprovar e congelar a versão inicial da programação | Organização | PROG-02 | A fazer |
| EVEN-01 | Even3 | P0 | Criar e configurar o evento da nova edição | P1 | GOV-01 | A fazer |
| EVEN-02 | Even3 | P0 | Cadastrar palestrantes e associá-los às atividades | P1 | PAL-03 + EVEN-01 | A fazer |
| EVEN-03 | Even3 | P0 | Cadastrar palestras, cursos, workshops e demais atividades | P1 | PROG-03 + EVEN-01 | A fazer |
| EVEN-04 | Even3 | P0 | Configurar inscrições, vagas, lista de espera e comunicações | P1 | EVEN-03 | A fazer |
| EVEN-05 | Even3 | P1 | Cadastrar/importar alunos e validar inscrições | P1 | EVEN-04 | A fazer |
| EVEN-06 | Even3 | P0 | Gerar e revisar os links finais de inscrição | P1 | EVEN-03 + EVEN-04 | A fazer |
| DATA-01 | Dados do site | P0 | Definir e documentar o novo schema do evento | P2 | PROG-03 | A fazer |
| DATA-02 | Dados do site | P0 | Atualizar o `event.json` com a nova edição | P2 | DATA-01 + EVEN-06 | A fazer |
| DATA-03 | Dados do site | P1 | Criar tipagem compartilhada para os dados do evento | P2 | DATA-01 | A fazer |
| SITE-01 | Site | P0 | Atualizar Hero, textos institucionais, rodapé e contatos | P2 | DATA-02 | A fazer |
| SITE-02 | Site | P0 | Atualizar agenda com datas, horários, tipos, salas e links | P2 | DATA-02 + DATA-03 | A fazer |
| SITE-03 | Site | P1 | Atualizar cards e imagens dos novos palestrantes | P2 | PAL-03 + DATA-02 | A fazer |
| SITE-04 | Site | P1 | Diferenciar palestras, cursos, workshops e status de inscrição | P2 | SITE-02 | A fazer |
| SITE-05 | Site | P1 | Revisar galeria e conteúdo pós-evento | P2 + Organização | — | A fazer |
| CERT-01 | Certificados | P0 | Definir modelo, carga horária e regra de elegibilidade | P1 + Organização | PROG-03 | A fazer |
| CERT-02 | Certificados | P0 | Configurar presença e check-in por atividade | P1 | EVEN-03 + CERT-01 | A fazer |
| CERT-03 | Certificados | P0 | Configurar e testar emissão dos certificados | P1 | CERT-01 + CERT-02 | A fazer |
| QA-01 | Homologação | P0 | Validar dados, links, imagens e conteúdo do site | P2 | SITE-01 a SITE-04 | A fazer |
| QA-02 | Homologação | P0 | Homologar inscrição e lotação no Even3 | P1 | EVEN-04 a EVEN-06 | A fazer |
| QA-03 | Homologação | P0 | Homologar presença e certificados com participantes fictícios | P1 | CERT-03 | A fazer |
| QA-04 | Homologação | P0 | Executar lint, build, responsividade e acessibilidade básica | P2 | SITE-02 a SITE-04 | A fazer |
| QA-05 | Homologação | P0 | Corrigir bloqueadores e registrar o aceite final | P1 + P2 + Organização | QA-01 a QA-04 | A fazer |
| DIV-01 | Divulgação | P0 | Preparar textos, artes e links oficiais de divulgação | P1 + P2 | QA-05 | A fazer |
| DIV-02 | Divulgação | P0 | Publicar o site e abrir as inscrições | P1 + P2 | DIV-01 | A fazer |
| DIV-03 | Divulgação | P1 | Monitorar inscrições e corrigir divergências públicas | P1 + P2 | DIV-02 | A fazer |
| EXEC-01 | Execução | P0 | Preparar recepção, salas, equipamentos e listas de presença | P1 + Organização | DIV-02 | A fazer |
| EXEC-02 | Execução | P0 | Executar check-in e registrar presença por atividade | P1 | EXEC-01 | A fazer |
| EXEC-03 | Execução | P1 | Acompanhar palestrantes, ocorrências e alterações no evento | P1 | EXEC-01 | A fazer |
| EXEC-04 | Execução | P1 | Fazer backup diário de presenças e registros operacionais | P1 | EXEC-02 | A fazer |
| POS-01 | Pós-evento | P0 | Consolidar presenças e definir participantes elegíveis | P1 | EXEC-04 + CERT-01 | A fazer |
| POS-02 | Pós-evento | P0 | Emitir, enviar e corrigir certificados | P1 | POS-01 + CERT-03 | A fazer |
| POS-03 | Pós-evento | P1 | Publicar galeria e retrospectiva autorizadas | P2 | EXEC-03 | A fazer |
| POS-04 | Pós-evento | P1 | Fazer relatório, retrospectiva e backlog da próxima edição | P1 + P2 | POS-01 + POS-02 | A fazer |

## Fluxo recomendado

`GOV` → `PAL`/`PROG` → `EVEN` → `DATA`/`SITE` → `CERT` → `QA` → `DIV` → `EXEC` → `POS`

## Definition of Done

Uma tarefa macro pode ser marcada como concluída quando suas subtarefas no backlog detalhado foram executadas, as evidências foram registradas e, quando necessário, houve aprovação da organização.

