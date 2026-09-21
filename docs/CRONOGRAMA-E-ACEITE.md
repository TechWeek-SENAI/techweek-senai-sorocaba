# Cronograma sugerido, controle e aceite

## Fases

| Fase | Entrega principal | Pessoa 1 | Pessoa 2 |
|---|---|---|---|
| 1. Descoberta | Datas, regras, formulário e matriz vazia | Lidera | Apoia com campos necessários ao site |
| 2. Conteúdo | Respostas validadas e programação aprovada | Lidera | Prepara dados de exemplo |
| 3. Construção | Configuração inicial do Even3 e atualização do JSON/UI | Lidera Even3 | Lidera código |
| 4. Integração | Links individuais, palestrantes e atividades conectados | Confere | Implementa |
| 5. Homologação | Inscrição, presença e certificados de teste | Executa operação | Executa QA do site |
| 6. Publicação | Evento e site liberados | Aprova operação | Publica versão final |
| 7. Pós-evento | Presença final, certificados e galeria | Fecha operação | Atualiza conteúdo pós-evento |

## Quadro de tarefas

| ID | Tarefa | Dono | Dependência | Saída/aceite |
|---|---|---|---|---|
| P1-01 | Criar formulário de palestrantes | Pessoa 1 | — | Link e campos aprovados |
| P1-02 | Validar novos palestrantes | Pessoa 1 | P1-01 | Cadastro final revisado |
| P1-03 | Aprovar matriz de horários | Pessoa 1 | Definição da organização | Agenda sem conflitos |
| P1-04 | Configurar evento no Even3 | Pessoa 1 | Dados gerais | Evento criado e revisado |
| P1-05 | Criar atividades e links | Pessoa 1 | P1-03/P1-04 | Um link correto por atividade |
| P1-06 | Cadastrar alunos | Pessoa 1 | Regra de inscrição | Lista sem duplicidades |
| P1-07 | Configurar presença/certificados | Pessoa 1 | Atividades | Teste aprovado |
| P2-01 | Atualizar schema e tipos | Pessoa 2 | P1-03 parcial | Build tipado |
| P2-02 | Atualizar agenda | Pessoa 2 | P2-01 | Horário/tipo/local visíveis |
| P2-03 | Atualizar palestrantes | Pessoa 2 | P1-02 | Cards corretos e imagens válidas |
| P2-04 | Atualizar textos institucionais | Pessoa 2 | Conteúdo aprovado | Sem referências antigas |
| P2-05 | Validar links e conteúdo | Pessoa 2 | P1-05 | Links abrindo corretamente |
| P2-06 | Executar lint/build/QA | Pessoa 2 | P2-02/P2-04 | Sem falhas bloqueadoras |
| P2-07 | Publicar site | Pessoa 2 | Aceite final | Versão nova disponível |

## Checklist final antes de divulgar

- [ ] Datas completas, horários e fuso conferidos.
- [ ] Salas e capacidades conferidas.
- [ ] Todos os palestrantes aprovados e autorizados.
- [ ] Todos os cursos e palestras aparecem no site.
- [ ] Todos os links direcionam para a atividade correta.
- [ ] Inscrição de teste concluída.
- [ ] Certificado de teste aprovado.
- [ ] Site testado em celular e desktop.
- [ ] `npm run lint` concluído sem erro.
- [ ] `npm run build` concluído sem erro.
- [ ] Responsável da organização deu aceite por escrito.

## Critério de pronto

A entrega está pronta quando a pessoa visitante consegue descobrir o evento, escolher uma atividade, abrir a inscrição correta e entender dia, horário, local e palestrante; e quando a equipe consegue identificar o participante, controlar presença e emitir o certificado conforme a regra aprovada.

