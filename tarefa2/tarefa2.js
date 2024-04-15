const nome = "Maria"
const nivelAcesso = "visitante"
const horarioAcesso = { inicio: 8, fim: 22 };
const horarioVisitas = { inicio: 9, fim: 18 }; 

    
    if (horarioAcesso < horarioVisitas || horarioAcesso > horarioVisitas) {
        console.log(`${nome}, o prédio está fechado no momento.`) ;
    }

    
    if (nivelAcesso === "visitante" && (horarioAcesso < horarioVisitas || horarioAcesso > horarioVisitas)) {
        console.log(`${nome}, visitantes só são permitidos entre ${horarioVisitas.inicio}h e ${horarioVisitas.fim}h.`) ;
    }
    
    if (nivelAcesso === "visitante") {
        console.log(`Oieee, ${nome}, seja bem-vindo! A entrada está permitida.`);
    } else if (nivelAcesso === "funcionario" && horarioAcesso >= horarioVisitas) {
        console.log(`Oieee, ${nome}, seja  bem-vindo! A entrada está permitida.`);
    } else if (nivelAcesso === "gerente" && horarioAcesso >= horarioVisitas) {
        console.log(`Oieee, ${nome}, seja bem-vindo! A entrada está permitida.`);
    } else if (nivelAcesso === "administrador") {
        console.log(`Oieee, ${nome}, seja  bem-vindo! A entrada está permitida.`);
    } else {
        console.log(`Desculpe, ${nome}, mas você não tem permissão para entrar neste horário.`);
    }



