# Formulários e dados da nova edição

## 1. Formulário de novos palestrantes

O formulário deve ser separado do cadastro de alunos. Ele deve coletar apenas o necessário para conteúdo, operação, comunicação e conformidade.

### Bloco A — Identificação

- Nome completo.
- Nome que deve aparecer no site e no certificado.
- E-mail e telefone.
- Empresa/instituição, cargo e cidade.
- LinkedIn ou página profissional, se aplicável.

### Bloco B — Atividade

- Tipo: palestra, curso, minicurso, workshop ou mesa-redonda.
- Título provisório.
- Resumo curto para divulgação.
- Descrição completa.
- Objetivos e público-alvo.
- Pré-requisitos e materiais necessários.
- Duração estimada.
- Quantidade máxima de participantes, se aplicável.
- Melhor faixa de horário e restrições de agenda.

### Bloco C — Logística

- Formato: presencial, remoto ou híbrido.
- Necessidades de projetor, áudio, internet, laboratório, software ou materiais.
- Necessidade de apoio técnico.
- Necessidade de estacionamento, alimentação ou acesso especial.
- Pessoa de contato no dia do evento.

### Bloco D — Mídia e autorização

- Foto em boa resolução.
- Mini biografia revisada.
- Autorização para uso de nome, imagem, foto e biografia no site e na divulgação do evento.
- Ciência sobre a publicação do certificado, quando aplicável.

## 2. Cadastro de alunos

Definir com a secretaria se o cadastro ocorrerá diretamente no Even3, por importação de lista ou por formulário integrado ao evento. Campos recomendados:

- Nome completo conforme documento/certificado.
- E-mail individual.
- Telefone, se necessário para comunicação.
- Curso, turma e vínculo institucional.
- Atividades escolhidas.
- Necessidades de acessibilidade.
- Consentimentos e aceite da política de privacidade.

Regras mínimas:

- Usar e-mail como chave de deduplicação inicial.
- Não compartilhar planilhas com dados pessoais fora do grupo autorizado.
- Validar a grafia do nome antes da emissão do certificado.
- Manter uma lista de alterações e a data da última conferência.

## 3. Estrutura de dados proposta para o site

```json
{
  "event": {
    "id": "semana-tecnologia-2026",
    "title": "Semana de Tecnologia",
    "subtitle": "Faculdade SENAI Sorocaba 2026",
    "description": "...",
    "startDate": "AAAA-MM-DD",
    "endDate": "AAAA-MM-DD",
    "dateLabel": "...",
    "location": "SENAI Sorocaba, Brasil",
    "registrationUrl": "https://www.even3.com.br/..."
  },
  "schedule": [
    {
      "date": "AAAA-MM-DD",
      "dateLabel": "...",
      "activities": [
        {
          "id": "atividade-001",
          "type": "talk",
          "title": "...",
          "startTime": "19:00",
          "endTime": "20:30",
          "durationMinutes": 90,
          "speakerIds": ["palestrante-001"],
          "location": "Auditório - Piso superior",
          "description": "...",
          "capacity": 200,
          "registrationLink": "https://www.even3.com.br/..."
        }
      ]
    }
  ],
  "speakers": [
    {
      "id": "palestrante-001",
      "name": "...",
      "company": "...",
      "role": "...",
      "photo": "assets/speakers/arquivo.jpg",
      "bio": "...",
      "activityIds": ["atividade-001"]
    }
  ]
}
```

### Observações de implementação

- Usar data ISO internamente e `dateLabel` para exibição evita problemas de ordenação e localização.
- `speakerIds` permite atividades com mais de um palestrante sem repetir texto manualmente.
- `type` deve ser um valor controlado, por exemplo `talk`, `course`, `workshop` ou `panel`.
- O link deve ser individual quando o Even3 disponibilizar inscrições por atividade; enquanto isso, a equipe deve confirmar se o link geral realmente leva o aluno à atividade correta.

