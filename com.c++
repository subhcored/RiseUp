#include <iostream>
#include <iomanip>
#include <chrono>
#include <thread>
#include <vector>
#include <cmath>  // for random data generation
#include <ctime>  // for time handling

// Mock function to update time every minute
void updateTime() {
    auto now = std::chrono::system_clock::to_time_t(std::chrono::system_clock::now());
    std::cout << "Last updated on: " << std::put_time(std::localtime(&now), "%Y-%m-%d %H:%M:%S") << " IST" << std::endl;
}

// Mock function to simulate stock price data update
std::vector<double> getStockPrices() {
    // Generate sample stock prices
    return {870.0, 865.5, 860.2, 855.7, 860.1, 864.3};
}

// Function to display stock data (this would be where a chart would go in a GUI)
void displayStockPrices(const std::vector<double>& prices) {
    std::cout << "\nStock Prices (₹): ";
    for (const auto& price : prices) {
        std::cout << price << " ";
    }
    std::cout << std::endl;
}

// Mock investment modal function
void openInvestmentModal() {
    std::cout << "Investment Modal Opened" << std::endl;
    std::string input;
    std::cout << "Enter investment amount: ";
    std::cin >> input;
    std::cout << "Investment details submitted!" << std::endl;
}

int main() {
    // Start time update loop (in separate thread if part of a larger GUI program)
    std::thread timeUpdater([]() {
        while (true) {
            updateTime();
            std::this_thread::sleep_for(std::chrono::minutes(1));  // Update every minute
        }
    });

    // Display initial stock prices (normally would be a chart in a GUI app)
    std::vector<double> stockPrices = getStockPrices();
    displayStockPrices(stockPrices);

    // Simulate opening an investment modal
    openInvestmentModal();

    // Stop the timeUpdater thread
    timeUpdater.detach();
    
    return 0;
}
