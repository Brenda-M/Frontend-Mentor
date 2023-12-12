async function fetchData() {
  try {
    const response = await fetch('./data.json');
    const jsonData = await response.json();
    
    createChartBars(jsonData);
    calculateBarHeights(jsonData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function createChartBars(jsonData) {
  const chartContainer = document.querySelector('.chart-container');

  jsonData.forEach(data => {
    const dayContainer = createDayContainer(data);
    chartContainer.appendChild(dayContainer);
  });

  const xAxisLabel = document.createElement('div');
  xAxisLabel.classList.add('chart-label', 'x-axis-label');
  chartContainer.appendChild(xAxisLabel);
}

function createDayContainer(data) {
  const dayContainer = document.createElement('div');
  dayContainer.classList.add('day-container');

  const chartBar = createChartBar(data);
  dayContainer.appendChild(chartBar);

  const dayLabel = document.createElement('div');
  dayLabel.classList.add('chart-label');
  dayLabel.textContent = data.day;
  dayContainer.appendChild(dayLabel);

  return dayContainer;
}

function createChartBar(data) {
  const chartBar = document.createElement('div');
  chartBar.classList.add('chart-bar');
  chartBar.setAttribute('data-amount', data.amount);

  const amountText = document.createElement('div');
  amountText.classList.add('amount');
  amountText.textContent = data.amount.toFixed(2);

  chartBar.appendChild(amountText);

  return chartBar;
}

function updateChartBarText() {
  const chartBars = document.querySelectorAll('.chart-bar');

  chartBars.forEach(function (chartBar) {
    const amount = chartBar.dataset.amount;
    const amountElement = chartBar.querySelector('.amount');
    amountElement.textContent = amount;
  });
}

function calculateBarHeights(jsonData) {
  const chartBars = document.querySelectorAll('.chart-bar');

  chartBars.forEach(function (chartBar, index) {
    const amount = jsonData[index].amount;
    const height = calculateHeight(amount);
    chartBar.style.height = height + 'px';
  });
}


function calculateHeight(amount) {
  const scaleFactor = 3.2;

  return amount * scaleFactor;
}

document.addEventListener('DOMContentLoaded', fetchData);
  