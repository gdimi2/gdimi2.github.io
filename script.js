function calcularRV() {
    let tpv = parseFloat(document.getElementById("tpv").value) || 0;
    let clientes = parseInt(document.getElementById("clientes").value) || 0;
    let vendas = parseInt(document.getElementById("vendas").value) || 0;
    let t3_smart = parseInt(document.getElementById("t3_smart").value) || 0;
    let cnpj = parseInt(document.getElementById("cnpj").value) || 0;
    let visitas = parseInt(document.getElementById("visitas").value) || 0;
    let migracao = parseFloat(document.getElementById("migracao").value) || 0;
    
    let valorComissao = 0;

    // Definição do valor comissão 
    if (clientes < 7 || vendas < 7 || tpv < 5000) {
        valorComissao = 0;
    } else if (tpv >= 5000 && tpv < 6500) {
        if (vendas >= 7 && vendas <= 9) valorComissao = 135;
        else if (vendas >= 10 && vendas <= 12) valorComissao = 135;
        else if (vendas >= 13) valorComissao = 180;
    } else if (tpv >= 6500 && tpv < 7500) {
        if (vendas >= 7 && vendas <= 9) valorComissao = 180;
        else if (vendas >= 10 && vendas <= 12) valorComissao = 225;
        else if (vendas >= 13) valorComissao = 450;
    } else if (tpv >= 7500) {
        if (vendas >= 7 && vendas <= 9) valorComissao = 180;
        else if (vendas >= 10 && vendas <= 12) valorComissao = 225;
        else if (vendas >= 13) valorComissao = 450;

        // Acrescenta 10% ao valor final
        valorComissao *= 1.1;
    }

    // Definição do valor base para premiação
    let valorBase = 0;
    if (valorComissao >= 135 && valorComissao < 220) {
        valorBase = 200;
    } else if (valorComissao >= 220 && valorComissao < 450) {
        valorBase = 400;
    } else if (valorComissao >= 450) {
        valorBase = 600;
    }

    // Cálculo do percentual de T3_Smart e CNPJ sobre as vendas
    let percT3Smart = vendas > 0 ? (t3_smart / vendas) * 100 : 0;
    let percCNPJ = vendas > 0 ? (cnpj / vendas) * 100 : 0;

    function calcularBonus(percentual) {
        if (percentual >= 50 && percentual < 70) {
            return 0.1 * valorBase;
        } else if (percentual >= 70) {
            return 0.2 * valorBase;
        }
        return 0;
    }

    let bonusT3Smart = calcularBonus(percT3Smart);
    let bonusCNPJ = calcularBonus(percCNPJ);

    // Cálculo da premiação por Visitas por DU
    let bonusVisitas = 0;
    if (visitas < 15) {
        bonusVisitas = -0.1 * valorBase; // Redução de 10% se visitas < 15
    } else {
        bonusVisitas = 0.05 * valorBase; // Acréscimo de 5% se visitas >= 15
    }

    // Cálculo da premiação por Migração
    let fatorMigracao = (migracao / 50) * 100; // Transforma a migração no percentual correto

    if (migracao >= 60 && tpv >=6500) {
        fatorMigracao *= 1.5; // Multiplica por 1,5 se acima de 60%
    }

    // Tabela de fatores de multiplicação para cada percentual
    const tabelaFatores = {
        0: 0, 50: 0, 60: 0, 70: 0.3, 80: 0.4, 90: 0.5, 100: 1, 101: 1.01, 102: 1.02, 103: 1.03, 104: 1.04, 105: 1.05, 106: 1.06, 107: 1.07, 
        108: 1.08, 109: 1.09, 110: 1.10, 111: 1.11, 112: 1.12, 113: 1.13, 114: 1.14, 115: 1.15, 116: 1.16, 117: 1.17, 118: 1.18, 119: 1.19, 
 	120: 1.30, 121: 1.31, 122: 1.32, 123: 1.33, 124: 1.34, 125: 1.35, 126: 1.36, 127: 1.37, 128: 1.38, 129: 1.39, 130: 1.40, 131: 1.41, 
	132: 1.42, 133: 1.43, 134: 1.44, 135: 1.45, 136: 1.46, 137: 1.47, 138: 1.48, 139: 1.49, 140: 1.50, 141: 1.51, 142: 1.52, 143: 1.53, 
	144: 1.54, 145: 1.55, 146: 1.56, 147: 1.57, 148: 1.58, 149: 1.59, 150: 1.70, 151: 1.71, 152: 1.72, 153: 1.73, 154: 1.74, 155: 1.75,
	156: 1.76, 157: 1.77, 158: 1.78, 159: 1.79, 160: 1.80, 161: 1.81, 162: 1.82, 163: 1.83, 164: 1.84, 165: 1.85, 166: 1.86, 167: 1.87,
	168: 1.88, 169: 1.89, 170: 1.90, 171: 1.91, 172: 1.92, 173: 1.93, 174: 1.94, 175: 1.95, 176: 1.96, 177: 1.97, 178: 1.98, 179: 1.99,
	180: 2.00, 181: 2.01, 182: 2.02, 183: 2.03, 184: 2.04, 185: 2.05, 186: 2.06, 187: 2.07, 188: 2.08, 189: 2.09, 190: 2.10, 191: 2.11,
	192: 2.12, 193: 2.13, 194: 2.14, 195: 2.15, 196: 2.16, 197: 2.17, 198: 2.18, 199: 2.19, 200: 2.20, 201: 2.21, 202: 2.22, 203: 2.23,
	204: 2.24, 205: 2.25, 206: 2.26, 207: 2.27, 208: 2.28, 209: 2.29, 210: 2.30, 211: 2.31, 212: 2.32, 213: 2.33, 214: 2.34, 215: 2.35,
	216: 2.36, 217: 2.37, 218: 2.38, 219: 2.39, 220: 2.40, 221: 2.41, 222: 2.42, 223: 2.43, 224: 2.44, 225: 2.45, 226: 2.46, 227: 2.47,
	228: 2.48, 229: 2.49, 230: 2.50, 231: 2.51, 232: 2.52, 233: 2.53, 234: 2.54, 235: 2.55, 236: 2.56, 237: 2.57, 238: 2.58, 239: 2.59,
	240: 2.60, 241: 2.61, 242: 2.62, 243: 2.63, 244: 2.64, 245: 2.65, 246: 2.66, 247: 2.67, 248: 2.68, 249: 2.69, 250: 2.70, 300: 3.00
    };

    // Função para encontrar o fator de multiplicação mais próximo
    function getFatorTabela(valor) {
        let chaves = Object.keys(tabelaFatores).map(Number).sort((a, b) => a - b);
        for (let i = chaves.length - 1; i >= 0; i--) {
            if (valor >= chaves[i]) {
                return tabelaFatores[chaves[i]];
            }
        }
        return 0;
    }

    let fatorMultiplicador = getFatorTabela(fatorMigracao);
    let bonusMigracao = valorBase * fatorMultiplicador;

    // Cálculo do Valor Premiação
    let valorPremiacao = bonusT3Smart + bonusCNPJ + bonusVisitas + bonusMigracao;
    
    // Verificar se migração é menor que 35%
    if (migracao < 35 || tpv < 5000 || clientes < 7 || vendas < 7) {
	valorPremiacao = 0;
    } 
    
    // Verificar se o tpv é maior que 10000
    if (tpv >= 10000) {
	valorPremiacao *= 1.1;
    }

    // Valores do TPV Trimestral
    const tpvTotal = parseFloat(document.getElementById('tpv-total').value) || 0;
    const tpvMedio = parseFloat(document.getElementById('tpv-medio').value) || 0;
    const qualidade = parseFloat(document.getElementById('qualidade-cadastro').value) || 0;
    const migracaoTrimestre = parseFloat(document.getElementById('migracao-trimestre').value) || 0;
    const ativacao = parseFloat(document.getElementById('ativacao').value) || 0;

    // Determinação das faixas do TPV Médio
    let percentualTPV = 0;
    if (tpvMedio < 4000) {
	percentualTPV = 0;
    } else if (tpvMedio >= 4000 && tpvMedio < 6000) {
        percentualTPV = 0.00025;
    } else if (tpvMedio >= 6000 && tpvMedio < 11000) {
        percentualTPV = 0.0005;
    } else if (tpvMedio >= 11000 && tpvMedio < 15000) {
        percentualTPV = 0.00075;
    } else if (tpvMedio >= 15000) {
        percentualTPV = 0.0015;
    }

    // Determinação das faixas de qualidade, migração e ativação
    function calcularFaixa(percentual) {
    	if (percentual < 40) {
		return 0;
    	} else if (percentual >= 40 && percentual < 60) {
        	return 0.1;
    	} else if (percentual >= 60 && percentual < 80) {
        	return 0.25;
    	} else if (percentual >= 80) {
        	return 0.5;
    	}
        return 0;
    }

    const faixaQualidade = calcularFaixa(qualidade);
    const faixaMigracao = calcularFaixa(migracaoTrimestre);
    const faixaAtivacao = calcularFaixa(ativacao);

    // Cálculo do valor X
    const valorX = tpvTotal * percentualTPV;

    // Cálculo do valor final trimestral
    const valorTrimestral = valorX * (1 + (faixaQualidade + faixaMigracao + faixaAtivacao));

    // Salário fixo e ajuda de custo
    const salarioFixo = 1602.79;
    const ajudaCusto = 850.00;
	
    // Soma final
    let totalRV = salarioFixo + ajudaCusto + valorComissao + valorPremiacao + valorTrimestral;

    // Exibição dos resultados separados
    document.getElementById("resultado").innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>Salário Fixo:</strong> <span>R$ ${salarioFixo.toFixed(2)}</span></p>
        <p><strong>Ajuda de Custo:</strong> <span>R$ ${ajudaCusto.toFixed(2)}</span></p>
        <p><strong>Valor Comissão:</strong> <span>R$ ${valorComissao.toFixed(2)}</span></p>
        <p><strong>Valor Premiação:</strong> <span>R$ ${valorPremiacao.toFixed(2)}</span></p>
        <p><strong>Valor Trimestral:</strong> <span>R$ ${valorTrimestral.toFixed(2)}</span></p>
        <p><strong>Total Final:</strong> <span>R$ ${totalRV.toFixed(2)}</span></p>
    `;
}
