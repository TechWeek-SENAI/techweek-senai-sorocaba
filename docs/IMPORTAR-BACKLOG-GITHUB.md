# Importar backlog para o GitHub Project

O script [`scripts/import-github-project.sh`](../scripts/import-github-project.sh) transforma cada tarefa macro de `docs/BACKLOG.md` em uma issue do repositório e adiciona a issue ao projeto organizacional **TechWeek Board** (`TechWeek-SENAI/projects/4`).

## Pré-requisitos

- `bash`
- `curl`
- `jq`
- Token do GitHub com permissão para criar issues no repositório e administrar itens do Project.
- As colunas abaixo criadas no campo `Status` do projeto:

  - `To Do`
  - `In Progress`
  - `Testing`
  - `Blocked`
  - `Done`

O script verifica as colunas antes de importar. Se alguma não existir, ele encerra sem criar tarefas.

## Configuração

Crie ou complete o arquivo `.env` na raiz:

```env
TOKEN=seu_token_do_github
```

O destino padrão é o remoto deste projeto:

```text
TechWeek-SENAI/techweek-senai-sorocaba
```

Para usar outro repositório ou arquivo de backlog:

```bash
REPOSITORY=TechWeek-SENAI/outro-repositorio \
BACKLOG_FILE=/caminho/docs/BACKLOG.md \
bash scripts/import-github-project.sh
```

## Execução

Primeiro faça uma simulação sem criar nada:

```bash
DRY_RUN=true bash scripts/import-github-project.sh
```

Depois execute a importação:

```bash
bash scripts/import-github-project.sh
```

O script:

1. Localiza o projeto organizacional número 4.
2. Valida as cinco opções do campo `Status`.
3. Cria/atualiza labels no repositório.
4. Cria uma issue por tarefa macro.
5. Usa labels de backlog, épico e prioridade.
6. Adiciona cada issue ao Project.
7. Define inicialmente a coluna `To Do`.

## Labels criadas

- `backlog`
- `epic:governance`
- `epic:speakers`
- `epic:schedule`
- `epic:even3`
- `epic:site`
- `epic:certificates`
- `epic:qa`
- `epic:communication`
- `epic:event`
- `epic:post-event`
- `priority:p0`
- `priority:p1`
- `priority:p2`

As labels representam classificação. As colunas `To Do`, `In Progress`, `Testing`, `Blocked` e `Done` são valores do campo de status do GitHub Project.

## Idempotência e segurança

- O script procura uma issue existente pelo título `[ID] tarefa` antes de criar outra.
- Reexecutar pode tentar adicionar novamente uma issue já existente ao projeto; o GitHub normalmente retorna o item já existente ou uma mensagem tratável.
- O token não é impresso.
- Não commite `.env` no repositório; mantenha-o no `.gitignore`.

## Observação sobre as colunas

O script não cria opções do campo `Status`, pois o GitHub administra essas opções dentro da configuração do Project. Crie as cinco colunas uma vez na interface do board antes da execução.

