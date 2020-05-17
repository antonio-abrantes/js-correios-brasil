const { CepBrasil, CorreiosBrasil, RastreioBrasil } = require('correios-brasil');

// Como consultar o CEP
const cep = new CepBrasil('58800005');
cep.consultarCEP().then(res =>{
  console.log(res);
});

// Como calcular preços e prazos
let args = {
  sCepOrigem: "21770200",
  sCepDestino: "58800005",
  nVlPeso: "1",
  nCdFormato: "1",
  nVlComprimento: "20",
  nVlAltura: "20",
  nVlLargura : "20",
  nCdServico: "04014",
  nVlDiametro: "0"
}

const correios = new CorreiosBrasil(args);
correios.CalcPrecoPrazo().then(res => {
  console.log(res);
});

// Como rastrear encomendas
const rastreio = new RastreioBrasil('PW639018542BR');
rastreio.rastrearEncomendas().then(res => {
  console.log(res);
});