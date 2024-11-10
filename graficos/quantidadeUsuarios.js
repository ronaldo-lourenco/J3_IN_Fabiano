import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/fabianoronobo/J3CienciasDeDados/refs/heads/main/dados.json'
    const rest = await fetch(url)
    const dados = await rest.json()

    const nomeDasRedes=["Youtube",
                        "Facebook",
                        "Instagram"
    ]  
    
    const quantidadedeUsuarios = [dados.youtube,
    dados.facebook,
    dados.instagram
    ]   
    
    var data = [
        {
            values: [dados.youtube,dados.facebook,dados.instagram],
            labels: ["Youtube", "Facebook", "Instagram"],
            type: 'pie'
         }
    ]
    
    var layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        legend: {
            x: 0.7, //posição da legenda em "x"
            y: 0.5, //posição da legenda em "y"
            font: {
              size: 36, // Aumente esse valor para aumentar o tamanho da fonte
              // color: 'darkblue', //para trocar a cor do texto
              // family: 'Arial', //para trocar o tipo de letra
              // bold: true //para destacar o texto
            }
          },
        showlegend: true,      
        title: {
            text: "Redes sociais utilizadas pelos estudantes",
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        }
}
   
  
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}
 
quantidadeUsuarios()
