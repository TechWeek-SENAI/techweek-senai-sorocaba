# Backlog detalhado — descrição das tarefas macro

Este arquivo detalha os itens do [backlog macro](<BACKLOG.md>). O acompanhamento pode ser feito pelos IDs macro; as listas abaixo são o checklist de execução.

## GOV — Governança

### GOV-01 — Definir escopo, calendário, responsáveis e regras

- Confirmar edição, período, local, público e formato.
- Definir abertura/encerramento das inscrições, responsáveis e canal oficial.
- Definir capacidade das salas, política de inscrição/cancelamento e regras de presença/certificado.
- **Aceite:** decisões registradas e aprovadas pela organização.

### GOV-02 — Organizar acessos, documentos e versões

- Criar pasta oficial e conceder acessos autorizados ao Even3.
- Definir padrão de nomes, IDs, status e controle das versões da matriz, JSON e exportações.
- **Aceite:** equipe sabe onde consultar a versão vigente e quem pode alterá-la.

## PAL — Palestrantes

### PAL-01 — Criar e divulgar formulário

- Coletar identificação, contato, empresa, cargo, título, resumo, descrição, público, duração e disponibilidade.
- Coletar formato, necessidades técnicas, foto, biografia e autorização de imagem.
- Revisar campos, publicar e enviar aos convidados com prazo.
- **Aceite:** formulário aprovado e respostas acessíveis à equipe responsável.

### PAL-02 — Consolidar e validar cadastros

- Acompanhar respostas, cobrar pendências e eliminar duplicidades.
- Criar ID único e validar nome de exibição, empresa, cargo, foto e bio.
- Solicitar correções e fechar o cadastro mestre.
- **Aceite:** nenhum cadastro aprovado tem pendência crítica.

### PAL-03 — Finalizar conteúdo e logística

- Confirmar autorização de imagem, necessidades de acessibilidade, alimentação e acesso.
- Confirmar equipamentos, materiais, apoio técnico e contato do dia.
- Liberar apenas conteúdo aprovado para publicação.
- **Aceite:** cada palestrante tem conteúdo publicável e checklist logístico.

## PROG — Programação

### PROG-01 — Montar matriz oficial

- Criar uma linha por palestra, curso, minicurso, workshop ou painel.
- Preencher data completa, início, fim, duração, tipo, sala, palestrantes, capacidade, descrição e pré-requisitos.
- **Aceite:** todos os itens possuem os campos obrigatórios.

### PROG-02 — Validar conflitos e formato

- Verificar conflitos de palestrante e sala.
- Conferir capacidade, materiais e pré-requisitos.
- Definir se cursos terão inscrição única ou módulos.
- **Aceite:** conflitos resolvidos ou explicitamente aprovados.

### PROG-03 — Aprovar e congelar programação

- Submeter matriz à coordenação e registrar versão, data e aprovação.
- Criar IDs estáveis e versionar alterações posteriores.
- **Aceite:** existe uma matriz oficial para Even3 e site.

## EVEN — Even3

### EVEN-01 — Criar e configurar evento

- Criar evento independente da edição anterior.
- Atualizar nome, descrição, datas, local, identidade visual e período de inscrições.
- Configurar política, contato de suporte e campos obrigatórios.
- **Aceite:** página geral revisada e pronta para receber atividades.

### EVEN-02 — Cadastrar palestrantes

- Cadastrar nome, empresa, cargo, foto e bio.
- Conferir autorizações e associar cada palestrante às atividades corretas.
- **Aceite:** todos os palestrantes aprovados estão cadastrados e vinculados.

### EVEN-03 — Cadastrar atividades

- Criar palestras, cursos, workshops e demais atividades.
- Configurar título, descrição, tipo, data, horário, duração, sala, capacidade, materiais e pré-requisitos.
- **Aceite:** Even3 e matriz têm a mesma quantidade e os mesmos dados.

### EVEN-04 — Configurar inscrições

- Definir gratuidade, restrição, seleção, vagas e lista de espera.
- Configurar confirmação, lembretes e cancelamentos.
- **Aceite:** fluxo de participante definido e testável.

### EVEN-05 — Cadastrar/importar alunos

- Definir origem do cadastro e campos obrigatórios.
- Padronizar arquivo, deduplicar por e-mail, conferir nome de certificado e associar atividades.
- Tratar necessidades de acessibilidade com acesso restrito.
- **Aceite:** alunos sem duplicidade e com inscrições coerentes.

### EVEN-06 — Revisar links de inscrição

- Copiar link de cada atividade e testar em janela anônima.
- Confirmar o destino e registrar links na matriz para a Pessoa 2.
- **Aceite:** cada atividade divulgada tem link validado.

## DATA — Dados do site

### DATA-01 — Definir schema

- Modelar ID, datas ISO, rótulo, horários, duração, tipo, capacidade, status e relações entre atividades/palestrantes.
- Definir campos obrigatórios e valores controlados.
- **Aceite:** schema suporta a agenda sem texto duplicado.

### DATA-02 — Atualizar `event.json`

- Substituir dados de 2025 pelos aprovados.
- Inserir atividades, palestrantes, fotos, links finais e galeria revisada.
- Validar JSON e caminhos públicos.
- **Aceite:** nova edição carrega sem erro.

### DATA-03 — Criar tipagem compartilhada

- Criar interfaces/types em arquivo próprio.
- Remover tipos duplicados de `Index.tsx` e `Schedule.tsx`.
- **Aceite:** componentes usam a mesma tipagem e o build passa.

## SITE — Interface e conteúdo

### SITE-01 — Atualizar conteúdo institucional

- Atualizar Hero, período, local, descrição, rodapé, ano, e-mail e redes sociais.
- Traduzir mensagens de carregamento e erro para português.
- **Aceite:** não há referência indevida à edição anterior.

### SITE-02 — Atualizar agenda

- Exibir início, fim, duração, tipo, sala e link individual.
- Ordenar dias e atividades cronologicamente.
- **Aceite:** agenda pública coincide com a matriz.

### SITE-03 — Atualizar palestrantes

- Copiar fotos para `public/assets/speakers`.
- Atualizar nomes, cargos, empresas, bios, associações e `alt`.
- **Aceite:** todos aparecem sem imagens quebradas.

### SITE-04 — Diferenciar atividades e status

- Criar apresentação visual para palestra, curso, workshop e painel.
- Exibir pré-requisitos, vagas e status aberto/encerrado/lotado quando aplicável.
- **Aceite:** participante entende formato e situação de cada atividade.

### SITE-05 — Revisar galeria e pós-evento

- Identificar fotos por edição, remover duplicidades e excluir conteúdo sem autorização.
- Planejar atualização pós-evento.
- **Aceite:** galeria não mistura edições.

## CERT — Certificados e presença

### CERT-01 — Definir modelo e elegibilidade

- Escolher certificado único ou por atividade.
- Definir carga horária, presença mínima, texto, assinantes e prazo.
- **Aceite:** regra documentada antes da abertura.

### CERT-02 — Configurar check-in

- Definir método, responsáveis por sala, tolerância, correções e backup diário.
- **Aceite:** presença identifica participante e atividade corretamente.

### CERT-03 — Configurar e testar certificados

- Criar modelo da nova edição e revisar campos dinâmicos.
- Testar nome longo, carga horária, ausência e reemissão.
- **Aceite:** elegível recebe certificado correto; não elegível não recebe.

## QA — Homologação

### QA-01 — Validar conteúdo do site

- Conferir schema, campos obrigatórios, datas, ordem, links, imagens, textos e edição exibida.
- **Aceite:** nenhum erro de conteúdo P0/P1.

### QA-02 — Homologar inscrição e lotação

- Testar inscrição em palestra e curso.
- Testar encerramento, lista de espera, confirmação e lembrete.
- **Aceite:** fluxos funcionam conforme as regras.

### QA-03 — Homologar presença e certificados

- Testar participante presente, ausente e atividade com carga diferente.
- Conferir documento e dados do participante.
- **Aceite:** emissão respeita presença, carga e nome validado.

### QA-04 — Executar QA técnico

- Executar `npm run lint` e `npm run build`.
- Testar celular, tablet, desktop, teclado, foco, contraste e `alt`.
- **Aceite:** sem falha técnica bloqueadora.

### QA-05 — Corrigir bloqueadores e registrar aceite

- Registrar defeitos, corrigir P0/P1, repetir testes e obter aprovação da organização.
- **Aceite:** nenhum bloqueador aberto e aceite registrado.

## DIV — Divulgação

### DIV-01 — Preparar comunicação

- Criar textos, artes, chamadas e links.
- Conferir datas, horários, salas, público e aprovação institucional.
- **Aceite:** material sem link provisório e aprovado.

### DIV-02 — Publicar e abrir inscrições

- Publicar build aprovado, conferir URL e abrir Even3 na data definida.
- Fazer conferência final como visitante.
- **Aceite:** site e Even3 públicos e sincronizados.

### DIV-03 — Monitorar inscrições

- Monitorar ocupação, dúvidas e divergências.
- Atualizar status de lotação e registrar alterações.
- **Aceite:** informações públicas permanecem sincronizadas.

## EXEC — Execução

### EXEC-01 — Preparar operação presencial

- Exportar listas, definir equipe de recepção, conferir salas, equipamentos, materiais e acessibilidade.
- Confirmar chegada e necessidades dos palestrantes.
- **Aceite:** equipe e infraestrutura prontas antes do primeiro horário.

### EXEC-02 — Executar check-in e presença

- Fazer check-in por atividade, registrar exceções autorizadas e fechar listas.
- **Aceite:** presença associada à atividade correta.

### EXEC-03 — Acompanhar ocorrências

- Confirmar palestrantes, registrar atrasos, trocas, cancelamentos e comunicar participantes.
- **Aceite:** toda ocorrência tem registro e responsável.

### EXEC-04 — Fazer backups diários

- Exportar presenças ao fim de cada dia e armazenar na pasta oficial.
- **Aceite:** existe cópia recuperável e identificada por dia.

## POS — Pós-evento

### POS-01 — Consolidar presenças e elegíveis

- Unificar exportações, corrigir inconsistências autorizadas e aplicar regra de elegibilidade.
- **Aceite:** lista final aprovada.

### POS-02 — Emitir e enviar certificados

- Emitir certificados, enviar instruções e atender correções/reemissões.
- **Aceite:** certificados entregues e pendências controladas.

### POS-03 — Publicar galeria e retrospectiva

- Selecionar fotos autorizadas, otimizar arquivos, revisar legendas e publicar após aprovação.
- **Aceite:** conteúdo pós-evento aprovado e separado por edição.

### POS-04 — Fazer relatório e próxima versão do backlog

- Consolidar inscrições, presença, ocupação e feedback.
- Realizar retrospectiva e transformar melhorias em tarefas futuras.
- **Aceite:** relatório e backlog da próxima edição armazenados no local oficial.

