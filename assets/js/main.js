(() => {
    const _checked = () => {
        return true;
    } 
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
    $('#bs').on("change", (e) => {
        e.preventDefault()
        switch (e.target.value) {
            case "macrocells":
                $(".case-omni").addClass("d-none");
                $(".case-macrocells").removeClass("d-none");
                break;
            case "omni":
                $(".case-macrocells").addClass("d-none");
                $(".case-omni").removeClass("d-none");
                break;
            default:
                $(".case-macrocells").addClass("d-none");
                $(".case-omni").addClass("d-none");
                break;
        }
    });

    $(".btn btn-primary col-lg-4 btn-md").on('click', (e) => {
        const span = document.createElement("span");
        $(span).attr(
            {
                id: "loader",
                class: "spinner-grow spinner-grow-md"
            }
        )
        e.preventDefault();
        $(e).addAttr("disabled").html(span)
        if(_checked()){

        }
    })
})()