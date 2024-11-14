document.addEventListener("DOMContentLoaded", () => {
    const updateTimeElement = document.querySelector(".update-time");

    function updateTime() {
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit' };
        updateTimeElement.textContent = `Last updated on ${now.toLocaleDateString()} | ${now.toLocaleTimeString([], options)} IST`;
    }

    updateTime();
    setInterval(updateTime, 60000);  // Update every minute

    // Set up the stock chart
    const ctx = document.getElementById('stockChart').getContext('2d');
    const stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],  // Sample time labels
            datasets: [{
                label: 'Stock Price (₹)',
                data: [870, 865, 860, 855, 860, 864],  // Sample data points
                borderColor: '#FF6384',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                tension: 0.2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allows the chart to expand vertically
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Price (₹)'
                    },
                    beginAtZero: false
                }
            },
            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'xy',
                    },
                    zoom: {
                        enabled: true,
                        mode: 'xy',
                        rangeMin: {
                            x: 0,
                            y: 0
                        },
                        rangeMax: {
                            x: 10, // Adjust based on your data
                            y: 1000 // Adjust based on your data
                        },
                        speed: 0.1,
                    }
                }
            }
        }
    });
});
// Get modal element
const modal = document.getElementById("investmentModal");
// Get open modal button
const investButtons = document.querySelectorAll(".btn-invest");
// Get close button
const closeButton = document.querySelector(".close-button");

// Open modal on button click
investButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        modal.style.display = "block"; // Show the modal
    });
});

// Close modal when close button is clicked
closeButton.addEventListener("click", function() {
    modal.style.display = "none"; // Hide the modal
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
    }
});

// Handle form submission (optional)
document.getElementById("investmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Investment details submitted!");
    modal.style.display = "none"; // Hide the modal after submission
});
const chart= {
    
}

