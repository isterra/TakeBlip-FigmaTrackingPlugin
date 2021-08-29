const constants={

    DEFAULT_COLOR:{ r: 0.93, g: 0.65, b: 0 },
    ERROS_COLOR:{ r: 0.83, g: 0, b: 0 },
    VALIDADED_COLOR:{ r: 0.12, g: 0.58, b: 0.32 },
    SUCESS_COLOR:{ r: 0.20, g: 0.71, b: 0.94 },
    
    ORIGEM_ORIGEM_CATEGORIA:"origem",
    ORIGEM_ORIGEM_ACAO:"[[Bot de origem]] | [[bloco de origem]]",
    
    ORIGEM_EXCECAO_CATEGORIA:"origem",
    ORIGEM_EXCECAO_ACAO:"[[Bot de origem]] | [[bloco de origem]] | [[Input do usuario na origem]]",
    
    EXIBICAO_CATEGORIA:"exibicao",
    EXIBICAO_ACAO:"Exibicao",
    
    SELECAO_CATEGORIA:"selecao",
    SELECAO_ACAO:"[[Opcoes do menu]]; input inesperado",
    
    INESPERADO_CATEGORIA:"inesperado",
    INESPERADO_ACAO:"[[Input inesperado]]",
    
    INPUT_CATEGORIA:"input",
    INPUT_ACAO:"[[Input do usuario]] | invalido;valido",

    VALIDACAO_CATEGORIA:"validacao",
    VALIDACAO_ACAO:"Sim; nao",
    
    ST_QUESTION_CATEGORY:"ST survey question",
    ST_ANSWER_CATEGORY:"ST survey answer",
    ST_REASON_CATEGORY:"ST survey reason",

    ST_P1:"CSAT",
    ST_P2:"CES",
    ST_P3:"NPS",

    ST_HUMAN:"Human",
    ST_BOT:"Bot",

    ST_QUESTION_ACTION:"Count",
    ST_CSAT_ANSWER_ACTION:"Very dissatisfied, Dissatisfied, Neutral, Satisfied, Very satisfied",
    ST_CES_ANSWER_ACTION:"Very difficult, Difficult, Neutral, Easy, Very easy ",
    ST_NPS_ANSWER_ACTION:"Detractors, Passives or Promoters",

    ST_REASON_ACTION:"Score (survey answer)|User input"

}
export default constants