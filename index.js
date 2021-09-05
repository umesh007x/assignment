const ctx1 = document.getElementById('barChart').getContext('2d');
const ctx2 = document.getElementById('lineChart1').getContext('2d');
const ctx3 = document.getElementById('lineChart2').getContext('2d');
const ctx4 = document.getElementById('doughnut1').getContext('2d');
const ctx5 = document.getElementById('doughnut2').getContext('2d');

// barchart
const barChart = new Chart(ctx1, {
	type: 'bar',

	data: {
		labels: [ '9pm', '1pm', '5pm', '9pm', '1am', '5pm' ],
		datasets: [
			{
				data: [ 27, 27, 58, 50, 70, 27 ],
				label: 'Avg current',
				backgroundColor: [ '#538cc6' ]
			},
			{
				data: [ 49, 49, 85, 50, 96, 40 ],
				label: 'Tempreture',
				backgroundColor: [ 'red' ]
			}
		]
	},

	options: {
		responsive: true,

		animation: {
			duration: 3000
		}
	}
});

// line chart 1
const lineChart1 = new Chart(ctx2, {
	type: 'line',

	data: {
		labels: [ '9pm', '1pm', '5pm', '9pm', '1am', '5pm' ],
		datasets: [
			{
				label: '',
				data: [ 28, 26, 55, 45, 68, 26 ],
				fill: false,
				borderColor: '#538cc6',
				tension: 0.5
			}
		]
	},
	options: {
		responsive: true,
		scales: {
			y: {
				ticks: {
					callback: function(value, index) {
						return value + ' ' + 'A';
					}
				}
			}
		},
		elements: {
			point: {
				radius: 0
			}
		},
		plugins: {
			legend: {
				display: false
			}
		},
		animation: {
			duration: 3000
		}
	}
});

// line chart 2
const lineChart2 = new Chart(ctx3, {
	type: 'line',

	data: {
		labels: [ '9pm', '1pm', '5pm', '9pm', '1am', '5pm' ],
		datasets: [
			{
				label: '',
				data: [ 49, 46, 82, 56, 92, 40 ],
				fill: false,
				borderColor: '#538cc6',
				tension: 0.5
			}
		]
	},
	options: {
		responsive: true,
		scales: {
			y: {
				ticks: {
					callback: function(value, index) {
						return value + ' ' + 'C';
					}
				}
			}
		},
		elements: {
			point: {
				radius: 0
			}
		},
		plugins: {
			legend: {
				display: false
			}
		},
		animation: {
			duration: 3000
		}
	}
});

// doughnut chart 1

const doughnut1 = new Chart(ctx4, {
	type: 'doughnut',

	data: {
		datasets: [
			{
				label: '',
				data: [ 40, 20, 70 ],
				backgroundColor: [ 'rgba(0,0,0,.15)', 'white', 'red' ]
			}
		]
	},

	options: {
		rotation: 40,
		responsive: true,

		animation: {
			duration: 3000
		}
	}
});

// doughnut chart 2

const doughnut2 = new Chart(ctx5, {
	type: 'doughnut',

	data: {
		datasets: [
			{
				label: '',
				data: [ 35, 20, 60 ],
				backgroundColor: [ 'rgba(0,0,0,.15)', 'white', '#00ffff' ]
			}
		]
	},

	options: {
		rotation: 40,

		hoverOffset: 1,
		borderWidth: 1,
		responsive: true,

		animation: {
			duration: 3000
		}
	}
});
