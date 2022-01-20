const constantsBR = {
    ORIGEM_ORIGEM_CATEGORIA: "origem",
    ORIGEM_ORIGEM_ACAO: "[[Bot de origem]] | [[bloco de origem]]",
    ORIGEM_EXCECAO_CATEGORIA: "origem",
    ORIGEM_EXCECAO_ACAO: "[[Bot de origem]] | [[bloco de origem]] | [[Input do usuario na origem]]",
    EXIBICAO_CATEGORIA: "exibicao",
    EXIBICAO_ACAO: "Exibicao",
    SELECAO_CATEGORIA: "selecao",
    SELECAO_ACAO: "[[Opcoes do menu]]; input inesperado",
    INESPERADO_CATEGORIA: "inesperado",
    INESPERADO_ACAO: "[[Input inesperado]]",
    INPUT_CATEGORIA: "input",
    INPUT_ACAO: "[[Input do usuario]] | invalido;valido",
    VALIDACAO_CATEGORIA: "validacao",
    VALIDACAO_ACAO: "Sim; nao",
    ST_QUESTION_CATEGORY: "ST survey question",
    ST_ANSWER_CATEGORY: "ST survey answer",
    ST_REASON_CATEGORY: "ST survey reason",
    ST_P1: "CSAT",
    ST_P2: "CES",
    ST_P3: "NPS",
    ST_HUMAN: "Human",
    ST_BOT: "Bot",
    ST_QUESTION_ACTION: "Count",
    ST_CSAT_ANSWER_ACTION: "Very dissatisfied, Dissatisfied, Neutral, Satisfied, Very satisfied",
    ST_CES_ANSWER_ACTION: "Very difficult, Difficult, Neutral, Easy, Very easy ",
    ST_NPS_ANSWER_ACTION: "Detractors, Passives or Promoters",
    ST_REASON_ACTION: "Score (survey answer)|User input"
};
const constantsEN = {
    ORIGEM_ORIGEM_CATEGORIA: "source",
    ORIGEM_ORIGEM_ACAO: "[[Bot source]] | [[block source]]",
    ORIGEM_EXCECAO_CATEGORIA: "source",
    ORIGEM_EXCECAO_ACAO: "[[Bot source]] | [[block source]] | [[user input]]",
    EXIBICAO_CATEGORIA: "display",
    EXIBICAO_ACAO: "Display",
    SELECAO_CATEGORIA: "selection",
    SELECAO_ACAO: "[[Menu options]]; unexpected answer",
    INESPERADO_CATEGORIA: "unexpected",
    INESPERADO_ACAO: "[[Unexpected answer]]",
    INPUT_CATEGORIA: "input",
    INPUT_ACAO: "[[User input]] | invalid;valid",
    VALIDACAO_CATEGORIA: "validation",
    VALIDACAO_ACAO: "True; false",
    ST_QUESTION_CATEGORY: "ST survey question",
    ST_ANSWER_CATEGORY: "ST survey answer",
    ST_REASON_CATEGORY: "ST survey reason",
    ST_P1: "CSAT",
    ST_P2: "CES",
    ST_P3: "NPS",
    ST_HUMAN: "Human",
    ST_BOT: "Bot",
    ST_QUESTION_ACTION: "Count",
    ST_CSAT_ANSWER_ACTION: "Very dissatisfied, Dissatisfied, Neutral, Satisfied, Very satisfied",
    ST_CES_ANSWER_ACTION: "Very difficult, Difficult, Neutral, Easy, Very easy ",
    ST_NPS_ANSWER_ACTION: "Detractors, Passives or Promoters",
    ST_REASON_ACTION: "Score (survey answer)|User input"
};
const constantsES = {
    ORIGEM_ORIGEM_CATEGORIA: "origen",
    ORIGEM_ORIGEM_ACAO: "[[Bot de origen]] | [[bloque de origen]]",
    ORIGEM_EXCECAO_CATEGORIA: "origen",
    ORIGEM_EXCECAO_ACAO: "[[Bot de origen]] | [[bloque de origen]] | [[mensaje del usuario]]",
    EXIBICAO_CATEGORIA: "exposicion",
    EXIBICAO_ACAO: "Exposicion",
    SELECAO_CATEGORIA: "seleccion",
    SELECAO_ACAO: "[[Opciones del menu]]; Input inesperado",
    INESPERADO_CATEGORIA: "inesperado",
    INESPERADO_ACAO: "[[Input inesperado]]",
    INPUT_CATEGORIA: "mensaje",
    INPUT_ACAO: "[[Mensaje del usuario]] | valido;invalido",
    VALIDACAO_CATEGORIA: "validación",
    VALIDACAO_ACAO: "Si;no",
    ST_QUESTION_CATEGORY: "ST survey question",
    ST_ANSWER_CATEGORY: "ST survey answer",
    ST_REASON_CATEGORY: "ST survey reason",
    ST_P1: "CSAT",
    ST_P2: "CES",
    ST_P3: "NPS",
    ST_HUMAN: "Human",
    ST_BOT: "Bot",
    ST_QUESTION_ACTION: "Count",
    ST_CSAT_ANSWER_ACTION: "Very dissatisfied, Dissatisfied, Neutral, Satisfied, Very satisfied",
    ST_CES_ANSWER_ACTION: "Very difficult, Difficult, Neutral, Easy, Very easy ",
    ST_NPS_ANSWER_ACTION: "Detractors, Passives or Promoters",
    ST_REASON_ACTION: "Score (survey answer)|User input"
};
function retrieveLanguage(lenguage) {
    switch (lenguage) {
        case "BR":
            return constantsBR;
        case "EN":
            return constantsEN;
        case "ES":
            return constantsES;
        default:
            break;
    }
}
export default retrieveLanguage;
//# sourceMappingURL=constants.js.map