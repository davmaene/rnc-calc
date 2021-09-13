const _calcNumSubscribes = (params) => {
    const { i = new Number(), w = new Number(), r = new Number(), v = new Number(), l = new Number(), n = new Number(), } = params;
    // i = new Number(), w = new Number(), r = new Number(), v = new Number(), N = new Number()
    // i : rapprt de l'interferance intra cellulaire sur l'interferance inter cellulaire
    // W : chip rate en kcps
    // R : débit pour un seul utilisateur
    // V : voice factor
    // N : nombre d'utilisateur actif dans une cellule
    if(i && w && r && v && n){

    }else return {
        code : 401,
        message : "il ya des paramètres qui manquent"
    }
}