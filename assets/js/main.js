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
                    $('[name="vdownlink"]').removeClass("border-danger")
                    return true
                }else{
                    $('[name="vdownlink"]').addClass("border-danger")  
                    return false
                }
            }else{
                $('[name="vuplink"]').addClass("border-danger")  
                return false
            }
        }
        const _checkuserdatarate = () => {
            if($('[name="ruplink"]').val().length > 0){
                $('[name="ruplink"]').removeClass("border-danger") 
                if($('[name="rdownlink"]').val().length > 0){
                    $('[name="rdownlink"]').removeClass("border-danger")
                    return true
                }else{
                    $('[name="rdownlink"]').addClass("border-danger")  
                    return false
                }
            }else{
                $('[name="ruplink"]').addClass("border-danger")  
                return false
            }
        }
        const _checkchiprate = () => {
            if($('[name="wuplink"]').val().length > 0){
                $('[name="wuplink"]').removeClass("border-danger") 
                if($('[name="wdownlink"]').val().length > 0){
                    $('[name="wdownlink"]').removeClass("border-danger")
                    return true
                }else{
                    $('[name="wdownlink"]').addClass("border-danger")  
                    return false
                }
            }else{
                $('[name="wuplink"]').addClass("border-danger")  
                return false
            }
        }
        const _checken = () => {
            if($('[name="enuplink"]').val().length > 0){
                $('[name="enuplink"]').removeClass("border-danger") 
                if($('[name="endownlink"]').val().length > 0){
                    $('[name="endownlink"]').removeClass("border-danger")
                    return true
                }else{
                    $('[name="endownlink"]').addClass("border-danger")  
                    return false
                }
            }else{
                $('[name="enuplink"]').addClass("border-danger")  
                return false
            }
        }
        const _checkloadfatory = () => {
            if($('[name="lduplink"]').val().length > 0){
                $('[name="lduplink"]').removeClass("border-danger") 
                if($('[name="lddownlink"]').val().length > 0){
                    $('[name="lddownlink"]').removeClass("border-danger")
                    return true
                }else{
                    $('[name="lddownlink"]').addClass("border-danger")  
                    return false
                }
            }else{
                $('[name="lduplink"]').addClass("border-danger")  
                return false
            }
        }
        // _checkbstype() && _checkvoicefactor() && _checkchiprate() && _checkuserdatarate && _checken() && _checkloadfatory()
        if(_checkbstype() && _checkvoicefactor() && _checkchiprate() && _checkuserdatarate && _checken() && _checkloadfatory()){
            return {
                bs: {
                    name: "bs type",
                    type: $("#bs").val(),
                    vals: {
                        iup: $('[name="iuplink"]').val(),
                        idw: $('[name="idownlink"]').val(),
                        adw: $('[name="adownlink"]').val(),
                    }
                },
                va: {
                    name: "voice activity",
                    vals: {
                       aup: $('[name="vuplink"]').val(),
                       adw: $('[name="vdownlink"]').val()
                    }
                },
                ur: {
                    name: "user rate",
                    vals: {
                        rup: $('[name="ruplink"]').val(),
                        rdw: $('[name="rdownlink"]').val()
                    }
                },
                cr: {
                    name: "chip rate",
                    vals: {
                        wup: $('[name="wuplink"]').val(),
                        wdw: $('[name="wdownlink"]').val()
                    }
                },
                eb: {
                    name: "eb / no",
                    vals: {
                        ebup: $('[name="enuplink"]').val(),
                        ebdw: $('[name="endownlink"]').val()
                    }
                },
                lb: {
                    name: "load factor",
                    vals: {
                        lbup: $('[name="lduplink"]').val(),
                        lbdw: $('[name="lddownlink"]').val()
                    }
                }
            }
        }else return false;
    } 
    const _calcNumSubscribesUPLINK = (params) => {
        const { i = new Number(), w = new Number(), r = new Number(), v = new Number(), l = new Number(), n = new Number(), a = new Number() , e = new Number()} = params;
        // i = new Number(), w = new Number(), r = new Number(), v = new Number(), N = new Number()
        // i : rapprt de l'interferance intra cellulaire sur l'interferance inter cellulaire
        // W : chip rate en kcps
        // R : débit pour un seul utilisateur
        // V : voice factor
        // N : nombre d'utilisateur actif dans une cellule
        if(i && w && r && v && n){
            // console.log(e);
            const loadfactoruplink = ( 1 + i ) * (1 / ( 1 + w / (Math.pow(10, e / 10) * r * v)))
            const loadfactoruplinkpercent = loadfactoruplink * 100;
            console.log(loadfactoruplinkpercent);
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
        if(_checked() instanceof Object){
            const infos = _checked();
            $(e.target).prop("disabled", true).html(span)
            // for downlink
            _calcNumSubscribesUPLINK({
                i: infos['bs']['type'] === "omni" ? infos['bs']['vals']['iup'] : undefined,
                w: infos['cr']['vals']['wup'],
                r: infos['ur']['vals']['rup'],
                v: infos['va']['vals']['aup'],
                l: infos['lb']['vals']['lbup'],
                e: infos['eb']['vals']['ebup']
            })
        }
    })
})()