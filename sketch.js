let arapiraca_boletim = 'data/arapiraca.csv';
d3.csv(arapiraca_boletim).then(function(dados) {
  
  
  //console.log(dados);
  let info = [];
  let labels = [];
  let info2 = [];
  let labels2 = [];
  let labels3 = [];
  let info3 = [];
  let labels4 = [];
  let info4 = [];
  
  for(let i=0; i<dados.length; i++){
    
    let data = dados[i].date;
    labels.push(data);
    
    let novos_casos = dados[i].last_available_confirmed;
    info.push(novos_casos);
  }

  let configuracao = {
  
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Casos acumulados de COVID-19 por data de notificação',
            data: info,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
            borderColor: 
                'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            pointRadius: 1
        }]
    },
    
    options: {
      title: {
        display: false,
        text: 'Casos acumulados de COVID-19 por data de notificação'
      },
      
      legend: {
        display: false
      }   
    } 
  };
  
  let chart = new Chart(document.getElementById('canvas'), configuracao);
  
  for(let i=0; i<dados.length; i++){
    
    let data = dados[i].date;
    labels2.push(data);
    
    let obitos = dados[i].last_available_deaths;
    info2.push(obitos);
  }
  
  let configuracao2 = {
  
    type: 'line',
    data: {
        labels: labels2,
        datasets: [{
            label: 'Óbitos acumulados por data de notificação',
            data: info2,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
            borderColor: 
                'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            pointRadius: 1
        }]
    },
    
    options: {
      title: {
        display: false,
        text: 'Óbitos acumulados por data de notificação'
      },
      
      legend: {
        display: false
      }   
    } 
  };
  
  let chart2 = new Chart(document.getElementById('canvas2'), configuracao2);
  
  for(let i=0; i<7; i++){
    
    let data = dados[i].date;
    labels3.push(data);
    
    let ult_confirmados = dados[i].new_confirmed;
    info3.push(ult_confirmados);
  }
  
  let configuracao3 = {
  
    type: 'line',
    data: {
        labels: labels3,
        datasets: [{
            label: 'Número de casos confirmados registrados no dia',
            data: info3,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
            borderColor: 
                'rgba(255, 99, 132, 1)',
            borderWidth: 3,
            pointRadius: 3
        }]
    },
    
    options: {
      title: {
        display: false,
        text: ''
      },
      
      legend: {
        display: false
      }   
    } 
  };
  
  let chart3 = new Chart(document.getElementById('canvas3'), configuracao3);


  
  for(let i=0; i<7; i++){
    
    let data = dados[i].date;
    labels4.push(data);
    
    let ult_obitos = dados[i].new_deaths;
    info4.push(ult_obitos);
  }
  
  let configuracao4 = {
  
    type: 'line',
    data: {
        labels: labels4,
        datasets: [{
            label: 'Número de óbitos registrados no dia',
            data: info4,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
            borderColor: 
                'rgba(255, 99, 132, 1)',
            borderWidth: 3,
            pointRadius: 3
        }]
    },
    
    options: {
      title: {
        display: false,
        text: 'Número de óbitos na última semana epidemológica'
      },
      
      legend: {
        display: false
      }   
    } 
  };
  
  let chart4 = new Chart(document.getElementById('canvas4'), configuracao4);
});
