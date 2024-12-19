# ATM Application

This project is a command-line ATM application built using **TypeScript**, **Node.js**, **Inquirer**, and **Chalk**. The application allows users to simulate ATM transactions such as checking balances and withdrawing funds.

---

## Features

- Secure user authentication using User ID and PIN.
- Supports two types of accounts: Current Account and Saving Account.
- Provides two transaction types:
  - **Fast Cash**: Predefined amounts for quick withdrawal.
  - **Withdraw**: Allows the user to enter a custom amount.
- Displays real-time balance updates.
- User-friendly and styled terminal outputs using `chalk`.

---

## Installation

Follow these steps to install and run the project:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Initialize a Node.js Project**:
   ```bash
   npm init -y
   ```

3. **Install Dependencies**:
   ```bash
   npm install inquirer chalk
   ```

4. **Install TypeScript**:
   ```bash
   npm install typescript --save-dev
   ```

5. **Install Type Definitions**:
   ```bash
   npm install @types/inquirer @types/chalk --save-dev
   ```

6. **Initialize TypeScript Configuration**:
   ```bash
   npx tsc --init
   ```

---

## Usage

1. **Compile the TypeScript Code**:
   ```bash
   npx tsc app.ts
   ```

2. **Run the Application**:
   ```bash
   node app.js
   ```

---

## File Structure

```plaintext
project-folder/
├── app.ts          # Main TypeScript file with ATM logic
├── app.js          # Compiled JavaScript file
├── tsconfig.json   # TypeScript configuration file
└── README.md       # Project documentation
```

---

## Example Output

```plaintext
Welcome to the ATM
Kindly enter your ID: user123
Kindly enter your PIN: ****
Select your account type: Saving Account
Select your transaction type: Withdraw
Enter your amount: 5000
Your current balance is: 72000
Transaction successful! Your remaining balance is: 67000
Thank you for using the ATM!
```

---

## Dependencies

- [**Inquirer**](https://www.npmjs.com/package/inquirer): For interactive user input.
- [**Chalk**](https://www.npmjs.com/package/chalk): For styled and colorful terminal output.
- [**TypeScript**](https://www.typescriptlang.org/): For static type checking and compiling.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contribution

Feel free to fork the repository and submit pull requests for improvements or bug fixes. For major changes, please open an issue first to discuss what you would like to change.

---

## Acknowledgments

Special thanks to the maintainers of the Node.js ecosystem and the authors of Inquirer and Chalk for their amazing tools.

