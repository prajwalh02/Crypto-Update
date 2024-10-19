# Crypto Update

**Crypto Update** is a React-based web application that provides up-to-date information about various cryptocurrencies. The app consists of two main pages: 
1. **Crypto Home** – Displays an overview of cryptocurrency prices and market data.
2. **Coin Detail** – Displays detailed information about a specific cryptocurrency, including price trends over time, using Chart.js for visualizations.

The app is styled using **Tailwind CSS** and fetches real-time data from the **CoinGecko API**.

## Features
- **Real-time Cryptocurrency Data**: Fetches the latest cryptocurrency market data from CoinGecko.
- **Coin Detail Page**: Displays in-depth information about each cryptocurrency, including historical data visualized with **Chart.js**.
- **Responsive Design**: Styled with **Tailwind CSS** for a sleek, responsive user interface.

## Technology Stack
- **React**: Frontend framework used for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **Vite**: Fast build tool and development server used for React.
- **CoinGecko API**: Provides real-time data on cryptocurrencies. (API documentation: [CoinGecko API](https://api.coingecko.com/api/v3))
- **Chart.js**: Used for displaying historical price trends in the form of charts.

## Pages Overview
1. **Crypto Home**
   - Displays a list of cryptocurrencies with key market data such as price, volume, and market cap.
   - Allows users to click on a specific cryptocurrency to view detailed information.

2. **Coin Detail**
   - Provides detailed data about a specific cryptocurrency, including historical price charts (rendered with Chart.js).
   - Presents price fluctuations over time with interactive charts.

## Setup Instructions

### Prerequisites
- **Node.js** and **npm** installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-update.git

2. Navigate to the project directory:
   ```bash
   cd crypto-update
   
3. Install the dependencies:
   ```bash
   npm install
   
