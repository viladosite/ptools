const eixos = {
    eixo1:[
        {x: 428.2, y: 268.2},
        {x: 428.2, y: 236.6},
        {x: 428.2, y: 200.4},
        {x: 428.2, y: 171.8},
        {x: 428.2, y: 140.4}
    ],
    eixo2:[
        {x: 451.4, y: 278},
        {x: 473.8, y: 255.7},
        {x: 499.5, y: 230.7},
        {x: 519.6, y: 209.5},
        {x: 541.4, y: 187.6}
    ],
    eixo3: [
        {x: 461.4, y: 301.7},
        {x: 492.9, y: 301.7},
        {x: 528.6, y: 301.7},
        {x: 557.5, y: 301.7},
        {x: 588.8, y: 301.7}
    ],
    eixo4: [
        {x: 451.7, y: 325.3},
        {x: 473.9, y: 347.4},
        {x: 498.9, y: 372.8},
        {x: 519.6, y: 393.3},
        {x: 541.1, y: 416.2}
    ],
    eixo5: [
        {x: 428.2, y: 335.5},
        {x: 428.2, y: 366.3},
        {x: 428.2, y: 402},
        {x: 428.2, y: 431.5},
        {x: 428.2, y: 462}
    ],
    eixo6: [
        {x: 404.5, y: 325.5},
        {x: 382.4, y: 347.4},
        {x: 356.9, y: 373},
        {x: 336, y: 393.3},
        {x: 314, y: 415.9}
    ],
    eixo7: [
        {x: 394.7, y: 301.7},
        {x: 363.1, y: 301.7},
        {x: 327.1, y: 301.7},
        {x: 298.1, y: 301.7},
        {x: 267.1, y: 301.7}
    ],
    eixo8: [
        {x: 404.6, y: 278.2},
        {x: 382.2, y: 255.9},
        {x: 356.8, y: 229.6},
        {x: 335.6, y: 209.1},
        {x: 314, y: 187}
    ]
}

eixolabels = {
    label1:{x: 425, y: 100},
    label2:{x: 525, y: 150},
    label3:{x: 630, y: 285},
    label4:{x: 573, y: 425},
    label5:{x: 432, y: 499},
    label6:{x: 280, y: 442},
    label7:{x: 221, y: 302},
    label8:{x: 277, y: 161}
}

function avaliarTudo(nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8){
    let notaEixo1 = eixos['eixo1'][nota1-1];
    let notaEixo2 = eixos['eixo2'][nota2-1];
    let notaEixo3 = eixos['eixo3'][nota3-1];
    let notaEixo4 = eixos['eixo4'][nota4-1];
    let notaEixo5 = eixos['eixo5'][nota5-1];
    let notaEixo6 = eixos['eixo6'][nota6-1];
    let notaEixo7 = eixos['eixo7'][nota7-1];
    let notaEixo8 = eixos['eixo8'][nota8-1];

    document.getElementById('wheel-line1').setAttribute('x1', notaEixo1.x)
    document.getElementById('wheel-line1').setAttribute('y1', notaEixo1.y)
    document.getElementById('wheel-line1').setAttribute('x2', notaEixo2.x)
    document.getElementById('wheel-line1').setAttribute('y2', notaEixo2.y)

    document.getElementById('wheel-line2').setAttribute('x1', notaEixo2.x)
    document.getElementById('wheel-line2').setAttribute('y1', notaEixo2.y)
    document.getElementById('wheel-line2').setAttribute('x2', notaEixo3.x)
    document.getElementById('wheel-line2').setAttribute('y2', notaEixo3.y)

    document.getElementById('wheel-line3').setAttribute('x1', notaEixo3.x)
    document.getElementById('wheel-line3').setAttribute('y1', notaEixo3.y)
    document.getElementById('wheel-line3').setAttribute('x2', notaEixo4.x)
    document.getElementById('wheel-line3').setAttribute('y2', notaEixo4.y)

    document.getElementById('wheel-line4').setAttribute('x1', notaEixo4.x)
    document.getElementById('wheel-line4').setAttribute('y1', notaEixo4.y)
    document.getElementById('wheel-line4').setAttribute('x2', notaEixo5.x)
    document.getElementById('wheel-line4').setAttribute('y2', notaEixo5.y)

    document.getElementById('wheel-line5').setAttribute('x1', notaEixo5.x)
    document.getElementById('wheel-line5').setAttribute('y1', notaEixo5.y)
    document.getElementById('wheel-line5').setAttribute('x2', notaEixo6.x)
    document.getElementById('wheel-line5').setAttribute('y2', notaEixo6.y)

    document.getElementById('wheel-line6').setAttribute('x1', notaEixo6.x)
    document.getElementById('wheel-line6').setAttribute('y1', notaEixo6.y)
    document.getElementById('wheel-line6').setAttribute('x2', notaEixo7.x)
    document.getElementById('wheel-line6').setAttribute('y2', notaEixo7.y)

    document.getElementById('wheel-line7').setAttribute('x1', notaEixo7.x)
    document.getElementById('wheel-line7').setAttribute('y1', notaEixo7.y)
    document.getElementById('wheel-line7').setAttribute('x2', notaEixo8.x)
    document.getElementById('wheel-line7').setAttribute('y2', notaEixo8.y)

    document.getElementById('wheel-line8').setAttribute('x1', notaEixo8.x)
    document.getElementById('wheel-line8').setAttribute('y1', notaEixo8.y)
    document.getElementById('wheel-line8').setAttribute('x2', notaEixo1.x)
    document.getElementById('wheel-line8').setAttribute('y2', notaEixo1.y)

    localStorage.setItem("axis1-value", nota1);
    localStorage.setItem("axis2-value", nota2);
    localStorage.setItem("axis3-value", nota3);
    localStorage.setItem("axis4-value", nota4);
    localStorage.setItem("axis5-value", nota5);
    localStorage.setItem("axis6-value", nota6);
    localStorage.setItem("axis7-value", nota7);
    localStorage.setItem("axis8-value", nota8);
}

function avaliarEixo(eixonum, nota){
    let eixoatual = 'eixo'.concat(eixonum);
    let eixoanterior
    let notaEixo = eixos[eixoatual][nota-1]
    if (eixonum == 1){ eixoanterior = 8 }
    else { eixoanterior = eixonum-1 }

    document.getElementById(`wheel-line${+eixonum}`).setAttribute('x1', notaEixo.x)
    document.getElementById(`wheel-line${+eixonum}`).setAttribute('y1', notaEixo.y)
    document.getElementById(`wheel-line${+eixoanterior}`).setAttribute('x2', notaEixo.x)
    document.getElementById(`wheel-line${+eixoanterior}`).setAttribute('y2', notaEixo.y)

    localStorage.setItem(`axis${eixonum}-value`, nota);
}

function colorizar(color){
    document.getElementById('wheel-line1').setAttribute('stroke', color)
    document.getElementById('wheel-line2').setAttribute('stroke', color)
    document.getElementById('wheel-line3').setAttribute('stroke', color)
    document.getElementById('wheel-line4').setAttribute('stroke', color)
    document.getElementById('wheel-line5').setAttribute('stroke', color)
    document.getElementById('wheel-line6').setAttribute('stroke', color)
    document.getElementById('wheel-line7').setAttribute('stroke', color)
    document.getElementById('wheel-line8').setAttribute('stroke', color)

    return console.log('Gráfico colorizado de acordo com a cor informada')
}

function nomearEixo(eixonum, nome) {
    let labelExists = document.getElementById(`axis${eixonum}.label`);
    let label = document.createElementNS('http://www.w3.org/2000/svg','text');
    let labelText = document.createTextNode(nome);
    let labelNum = 'label'.concat(eixonum);

    if (labelExists) { labelExists.parentNode.removeChild(labelExists); }
    label.setAttributeNS(null,"id",`axis${eixonum}.label`);
    label.setAttributeNS(null,"x",`${eixolabels[labelNum].x}`);
    label.setAttributeNS(null,"y",`${eixolabels[labelNum].y}`);
    if (eixonum == 6 || eixonum == 7 || eixonum == 8 ) {
        label.setAttributeNS(null,"text-anchor",'end');
    }
    document.getElementById('svg-wheel').appendChild(label);
    label.appendChild(labelText);

    localStorage.setItem(`axis${eixonum}-name`, nome);
}

function resetarWheel() {
    avaliarTudo(1,1,1,1,1,1,1,1);
    return console.log('Wheel initializated')
}

function recuperarWheel() {
    let axis1Value = localStorage.getItem("axis1-value");
    let axis2Value = localStorage.getItem("axis2-value");
    let axis3Value = localStorage.getItem("axis3-value");
    let axis4Value = localStorage.getItem("axis4-value");
    let axis5Value = localStorage.getItem("axis5-value");
    let axis6Value = localStorage.getItem("axis6-value");
    let axis7Value = localStorage.getItem("axis7-value");
    let axis8Value = localStorage.getItem("axis8-value");

    let axis1Name = localStorage.getItem("axis1-name");
    let axis2Name = localStorage.getItem("axis2-name");
    let axis3Name = localStorage.getItem("axis3-name");
    let axis4Name = localStorage.getItem("axis4-name");
    let axis5Name = localStorage.getItem("axis5-name");
    let axis6Name = localStorage.getItem("axis6-name");
    let axis7Name = localStorage.getItem("axis7-name");
    let axis8Name = localStorage.getItem("axis8-name");



    if (axis1Value) {avaliarEixo(1, axis1Value); document.getElementById('axis1value').value = axis1Value;}
    if (axis2Value) {avaliarEixo(2, axis2Value); document.getElementById('axis2value').value = axis2Value;}
    if (axis3Value) {avaliarEixo(3, axis3Value); document.getElementById('axis3value').value = axis3Value;}
    if (axis4Value) {avaliarEixo(4, axis4Value); document.getElementById('axis4value').value = axis4Value;}
    if (axis5Value) {avaliarEixo(5, axis5Value); document.getElementById('axis5value').value = axis5Value;}
    if (axis6Value) {avaliarEixo(6, axis6Value); document.getElementById('axis6value').value = axis6Value;}
    if (axis7Value) {avaliarEixo(7, axis7Value); document.getElementById('axis7value').value = axis7Value;}
    if (axis8Value) {avaliarEixo(8, axis8Value); document.getElementById('axis8value').value = axis8Value;}

    if (axis1Name) {nomearEixo(1, axis1Name); document.getElementById('axis1name').value = axis1Name;}
    if (axis2Name) {nomearEixo(2, axis2Name); document.getElementById('axis2name').value = axis2Name;}
    if (axis3Name) {nomearEixo(3, axis3Name); document.getElementById('axis3name').value = axis3Name;}
    if (axis4Name) {nomearEixo(4, axis4Name); document.getElementById('axis4name').value = axis4Name;}
    if (axis5Name) {nomearEixo(5, axis5Name); document.getElementById('axis5name').value = axis5Name;}
    if (axis6Name) {nomearEixo(6, axis6Name); document.getElementById('axis6name').value = axis6Name;}
    if (axis7Name) {nomearEixo(7, axis7Name); document.getElementById('axis7name').value = axis7Name;}
    if (axis8Name) {nomearEixo(8, axis8Name); document.getElementById('axis8name').value = axis8Name;}
}