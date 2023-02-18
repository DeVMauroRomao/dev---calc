function calcular(tipo,valor){
    if(tipo === 'acao'){
        // - limpar  a tela ou o campo "resultado"
        if(valor === 'c'){
            document.getElementById('resultado').value = "";
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor;
        }
        if(valor === '='){
             let valo_campo = eval(document.getElementById('resultado').value);
            document.querySelector('#resultado').value = valo_campo;
        }
    }else if(tipo === 'valor'){
        document.querySelector('#resultado').value += valor;
}
}