import constants from "../constants";

function editTrackColor(nodes: ComponentNode, color) {

}

function valueBasedOnRcolor(color) {    
    switch (color) {
        case constants.DEFAULT_COLOR.r: return "new"
        case constants.ERROS_COLOR.r: return "error"
        case constants.VALIDADED_COLOR.r: return "validaded"
        case constants.SUCESS_COLOR.r: return "sucess"
        default: return "new"
    }
}

export {editTrackColor}
export{valueBasedOnRcolor}
