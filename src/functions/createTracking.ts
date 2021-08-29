import * as supp from './supportFunctions';

import constants from "../constants";
var lastFrame

const createTrackings = async function (trackData) {
    var positionX = figma.viewport.center.x
    var positionYCategory = figma.viewport.center.y
    var components: Array<ComponentNode> = []
    var color = supp.trackingColor(trackData.trackColor)
    var trackCategory = trackData.category

    //OrigeTrack
    if (trackData.origin) {
        var categoryName = trackData.originCategory ? constants.ORIGEM_ORIGEM_CATEGORIA : constants.ORIGEM_EXCECAO_CATEGORIA
        var actionName = trackData.originCategory ? constants.ORIGEM_ORIGEM_ACAO : constants.ORIGEM_EXCECAO_ACAO
        var category: TextNode = await supp.createText(trackCategory, categoryName, positionX, positionYCategory, color)
        var action: TextNode = await supp.createSubText(actionName, positionX, positionYCategory + 15)
        components.push(supp.createComponent([category, action], positionX, positionYCategory, "Tracking"))
        positionYCategory += 65
        if (trackData.isRigth)
            supp.changeDirection([category, action])
    }

    //Menu Trackings
    if (trackData.principal) {
        var optMenu = trackData.principal
        var optCategory = [constants.EXIBICAO_CATEGORIA, constants.SELECAO_CATEGORIA, constants.INESPERADO_CATEGORIA, constants.INPUT_CATEGORIA]
        var optAction = [constants.EXIBICAO_ACAO, constants.SELECAO_ACAO, constants.INESPERADO_ACAO, constants.INPUT_ACAO]
        var optMenuCreate: Array<TextNode> = [];

        for (var i = 0, j = 0; i < optMenu.length; i++, j++) {
            if (optMenu[i]) {
                var category = await supp.createText(trackCategory, optCategory[j], positionX, positionYCategory, color)
                var action = await supp.createSubText(optAction[j], positionX, positionYCategory + 15)
                if (!trackData.isRigth)
                    components.push(supp.createComponent([category, action], positionX, positionYCategory, "Tracking"))
                else {
                    optMenuCreate.push(category)
                    optMenuCreate.push(action)
                }
                positionYCategory += 40
            }
        }
        if (trackData.isRigth) {
            if (optMenuCreate.length > 0) {
                supp.changeDirection(optMenuCreate)
                for (var i = 0; i < optMenuCreate.length; i += 2) {
                    components.push(supp.createComponent([optMenuCreate[i], optMenuCreate[i + 1]], optMenuCreate[i].x < optMenuCreate[i + 1].x ? optMenuCreate[i].x : optMenuCreate[i + 1].x, optMenuCreate[i].y, "Track"))
                }
            }

        }

    }

    //Validation Track
    if (trackData.validation) {
        positionYCategory += 35
        var category: TextNode = await supp.createText(trackCategory, constants.VALIDACAO_CATEGORIA, positionX, positionYCategory,color)
        var action: TextNode = await supp.createSubText(constants.VALIDACAO_ACAO, positionX, positionYCategory + 15)
        action.x = (category.x + category.width / 2) - (action.width / 2)
        components.push(supp.createComponent([category, action], positionX, positionYCategory, "Tracking"))
        positionYCategory += 65
    }
    //Sucess track
    if (trackData.sucess) {
        var optTrackinsSucesso = [constants.ST_QUESTION_CATEGORY, constants.ST_ANSWER_CATEGORY, constants.ST_REASON_CATEGORY]
        var attendantAction = trackData.sucessFlow ? constants.ST_BOT : constants.ST_HUMAN
        var optTK;
        var actionAnswer;
        optMenuCreate = []
        if (trackData.sucessSearch == "CSAT") {
            actionAnswer = constants.ST_CSAT_ANSWER_ACTION
            optTK = constants.ST_P1
        }
        else if (trackData.sucessSearch == "CES") {
            actionAnswer = constants.ST_CES_ANSWER_ACTION
            optTK = constants.ST_P2
        }
        else {
            actionAnswer = constants.ST_NPS_ANSWER_ACTION
            optTK = constants.ST_P3
        }
        var actionsTK = [`${optTK} ${attendantAction}|Count`, `${optTK} ${attendantAction}|${actionAnswer}`, `${optTK} ${attendantAction}|${constants.ST_REASON_ACTION}`]
        for (var i = 0; i < optTrackinsSucesso.length; i++) {

            var category = await supp.createSucessText(optTrackinsSucesso[i], positionX, positionYCategory, color)
            var action = await supp.createSubText(actionsTK[i], positionX, positionYCategory + 15)
            if (!trackData.isRigth)
                components.push(supp.createComponent([category, action], positionX, positionYCategory, "Tracking"))
            else {
                optMenuCreate.push(category)
                optMenuCreate.push(action)
            }
            positionYCategory += 40

        }
        if (trackData.isRigth) {
            supp.changeDirection(optMenuCreate)
            for (var i = 0; i < optMenuCreate.length; i += 2) {
                components.push(supp.createComponent([optMenuCreate[i], optMenuCreate[i + 1]], optMenuCreate[i].x < optMenuCreate[i + 1].x ? optMenuCreate[i].x : optMenuCreate[i + 1].x, optMenuCreate[i].y, "Track"))
            }
        }
    }
    lastFrame = supp.addNodesToFrame(components, lastFrame)
    figma.currentPage.selection = components
}

export default createTrackings