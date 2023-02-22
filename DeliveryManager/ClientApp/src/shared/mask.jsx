import React, { Component } from 'react';


export const cpfMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export const telephoneMask = value => {
    let r = value.replace(/\D/g, "");
    r = r.replace(/^0/, "");

    if (r.length > 11) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 7) {
        r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else if (value.trim() !== "") {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;   
}

export const birthDateMask = value => {
    var pass = value;
    var expr = /[0123456789]/;

    for (var i = 0; i < pass.length; i++) {
        // charAt -> retorna o caractere posicionado no índice especificado
        var lchar = value.charAt(i);
        var nchar = value.charAt(i + 1);

        if (i == 0) {
            // search -> retorna um valor inteiro, indicando a posição do inicio da primeira
            // ocorrência de expReg dentro de instStr. Se nenhuma ocorrencia for encontrada o método retornara -1
            // instStr.search(expReg);
            if ((lchar.search(expr) != 0) || (lchar > 3)) {
                value = "";
            }

        } else if (i == 1) {

            if (lchar.search(expr) != 0) {
                // substring(indice1,indice2)
                // indice1, indice2 -> será usado para delimitar a string
                var tst1 = value.substring(0, (i));
                value = tst1;
                continue;
            }

            if ((nchar != '/') && (nchar != '')) {
                var tst1 = value.substring(0, (i) + 1);

                if (nchar.search(expr) != 0)
                    var tst2 = value.substring(i + 2, pass.length);
                else
                    var tst2 = value.substring(i + 1, pass.length);

                value = tst1 + '/' + tst2;
            }

        } else if (i == 4) {

            if (lchar.search(expr) != 0) {
                var tst1 = value.substring(0, (i));
                value = tst1;
                continue;
            }

            if ((nchar != '/') && (nchar != '')) {
                var tst1 = value.substring(0, (i) + 1);

                if (nchar.search(expr) != 0)
                    var tst2 = value.substring(i + 2, pass.length);
                else
                    var tst2 = value.substring(i + 1, pass.length);

                value = tst1 + '/' + tst2;
            }
        }

        if (i >= 6) {
            if (lchar.search(expr) != 0) {
                var tst1 = value.substring(0, (i));
                value = tst1;
            }
        }
    }

    if (pass.length > 10)
        value = value.substring(0, 10);
    return value;
}