(() => {
    const _checked = () => {
        const _checkbstype = () => {
            const tp = $("#bs").val()
            let m = false;
            switch (tp) {
                case "omni":
                    if($("[name='idownlink']").val().length > 0){
                        $("[name='idownlink']").removeClass("border-danger")
                        if($("[name='iuplink']").val().length > 0){
                            $("[name='iuplink']").removeClass("border-danger")
                            m = true;
                        }else{
                            $("[name='iuplink']").addClass("border-danger")
                            m = false;
                        }
                    }else{
                        m = false;
                        $("[name='idownlink']").addClass("border-danger")
                    }
                    break;
                case "macrocells":
                    if($('[name="adownlink"]').val().length > 0){
                        $("[name='adownlink']").removeClass("border-danger")
                        m = true;
                    }else{
                        $("[name='adownlink']").addClass("border-danger")
                        m = false;
                    }
                    break;
                default:
                    $("[name='idownlink']").addClass("border-danger")
                    $("[name='adownlink']").addClass("border-danger")
                    $("[name='iuplink']").addClass("border-danger")

                    m = false;
                    break;
            }
            return m;
        }
        const _checkvoicefactor = () => {
            if($('[name="vuplink"]').val().length > 0){
                $('[name="vuplink"]').removeClass("border-danger") 
                if($('[name="vdownlink"]').val().length > 0){
                    $('[name="vuplink"]').removeClass("border-danger")
                    return true
                }else{
                    $('[name="vuplink"]').addClass("border-danger")  
                    return false
                }
            }else{
                $('[name="vuplink"]').addClass("border-danger")  
                return false
            }
        }
        return _checkbstype() && _checkvoicefactor();
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

    $(".calc").on('click', (e) => {
        const span = document.createElement("span");
        $(span).attr(
            {
                id: "loader",
                class: "spinner-grow spinner-grow-sm"
            }
        )
        e.preventDefault();
        // $(e.target).prop("disabled", true).html(span)
        if(_checked()){

        }
    })
})()