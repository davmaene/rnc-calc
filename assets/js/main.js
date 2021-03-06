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
                        alpdw: $('[name="adownlink"]').val(),
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
        // R : d??bit pour un seul utilisateur
        // V : voice factor
        // N : nombre d'utilisateur actif dans une cellule
        if(i && w && r && v && n){
            const loadfactoruplink = ( 1 + parseFloat(i) ) * (1 / ( 1 + parseFloat(w) / ( Math.pow(10, parseFloat(e) / 10) * parseFloat(r) * parseFloat(v) )))
            const nbuser = parseFloat(l) / (loadfactoruplink * 100);

            $('.outputloadfactorperuser').html(loadfactoruplink * 100);
            $('.converloadfac').html(Math.floor(loadfactoruplink * 100));
            $('.outpnbuser').html(nbuser);
            $('.convertnbuser').html(Math.round(nbuser));
            setTimeout(() => {
                $('#loader').remove()
                $('.calc').removeAttr("disabled").html("<span><b>Calculer</b></span>")
            }, 300)
        }else return {
            code : 401,
            message : "il ya des param??tres qui manquent"
        }
    };
    const _calcNumSubscribesDOWNLINK = (params) => {
        const { i = new Number(), w = new Number(), r = new Number(), v = new Number(), l = new Number(), n = new Number(), a = new Number() , e = new Number()} = params;
        const loadfactordownlink = (v) * (1 - parseFloat(a) + parseFloat(i)) * ((Math.pow(10, e / 10)) / (parseFloat(w) / parseFloat(r)));
        const nbuser = parseFloat(l) / (loadfactordownlink * 100)
        $('.outputloadfactorperuserdw').html(loadfactordownlink * 100)
        $('.outpnbuserdw').html(nbuser)
        $('.convertnbuserdw').html(Math.round(nbuser))
        setTimeout(() => {
            $('#loader').remove()
            $('.calc').removeAttr("disabled").html("<span><b>Calculer</b></span>")
        }, 300)
    };
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
        e.preventDefault();
        const span = document.createElement("span");
        $(span).attr(
            {
                id: "loader",
                class: "spinner-border spinner-border-sm"
            }
        )

        if(_checked() instanceof Object){
            const infos = _checked();
            $(e.target).prop("disabled", "disabled").html(span)
            // for downlink
            if(infos['bs']['type'] === "omni"){
                _calcNumSubscribesUPLINK({
                    i: infos['bs']['type'] === "omni" ? infos['bs']['vals']['iup'] : undefined,
                    w: infos['cr']['vals']['wup'],
                    r: infos['ur']['vals']['rup'],
                    v: infos['va']['vals']['aup'],
                    l: infos['lb']['vals']['lbup'],
                    e: infos['eb']['vals']['ebup']
                })
                _calcNumSubscribesDOWNLINK({
                    i: infos['bs']['vals']['idw'],
                    a: infos['bs']['vals']['alpdw'],
                    w: infos['cr']['vals']['wup'],
                    r: infos['ur']['vals']['rdw'],
                    v: infos['va']['vals']['adw'],
                    l: infos['lb']['vals']['lbdw'],
                    e: infos['eb']['vals']['ebdw']
                })
            }else{
                $('.outputloadfactorperuser').html(null);
                $('.converloadfac').html(null);
                $('.outpnbuser').html(null);
                $('.convertnbuser').html(null);
                _calcNumSubscribesDOWNLINK({
                    i: infos['bs']['vals']['idw'],
                    a: infos['bs']['vals']['alpdw'],
                    w: infos['cr']['vals']['wup'],
                    r: infos['ur']['vals']['rdw'],
                    v: infos['va']['vals']['adw'],
                    l: infos['lb']['vals']['lbdw'],
                    e: infos['eb']['vals']['ebdw']
                })
            }
        }
    });
})()