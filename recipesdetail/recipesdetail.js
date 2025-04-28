



function nameUserLogin() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin") || sessionStorage.getItem("userLogin"));
    let nameUserLogin = document.getElementById("nameUserLogin")
    let currentUser = userList.find(user => user.email === userLogin.email);
    nameUserLogin.innerText = `Hello, ${currentUser.name} !`
    nameUserLogin.style.fontSize = "20px"
  }
  nameUserLogin()




  function createDoughnutChart(chartId, value, color) {
    new Chart(document.getElementById(chartId), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [1],
                backgroundColor: value === 0 ? '#f0f0f0' : color,
                borderWidth: 0
            }]
        },
        options: {
            cutout: '80%',
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false }
            }
        }
    });
}
createDoughnutChart('fatChart', 0, '#E57373');
createDoughnutChart('carbChart', 11, '#FFB74D');
createDoughnutChart('proteinChart', 0, '#4DB6AC');
createDoughnutChart('fiberChart', 1, '#90A4AE');



const ctx = document.getElementById('myChart').getContext('2d');
    const data = {
        labels: ['Fat', 'Carbohydrate', 'Protein'],
        datasets: [{
            data: [38.3, 48.9, 12.8],
            backgroundColor: [
                '#e74c3c',
                '#f5b041',
                '#1abc9c'
            ],
            borderWidth: 1
        }]
    };

    const myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });