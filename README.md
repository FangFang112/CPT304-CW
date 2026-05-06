# Budget-App-JavaScript

Welcome to the Budget App! This project is the result of following a comprehensive YouTube tutorial that guides you through building a budget management application from scratch. With this app, you can efficiently track your income, expenses, and overall budget, gaining better control of your financial situation.

## Demo
You can check out the live demo of the Budget App here.
**Online Demo of Project :**

<a href="https://jinchou01.github.io/CPT304-CW/" title="Budget-App">Link to Budget App</a>

## Features

- Income and Expense Tracking: The Budget App allows you to enter your sources of income and expenses, categorizing them for better organization.

- Budget Calculation: Based on the provided income and expenses, the app calculates your budget by subtracting expenses from income, giving you a clear overview of your financial status.

- Monthly Reports: Get a comprehensive monthly report that summarizes your income, expenses, and the resulting budget. This helps you understand your spending patterns over time.

- Simple and Intuitive Interface: The app boasts a user-friendly interface, making it easy for anyone to navigate and use, even if you have little to no prior experience with budgeting applications.

## Usage
1. Clone the repository or download the ZIP file.

1. Open the project in your preferred code editor.

1. Launch the index.html file in your browser to run the Budget App locally.

1. Start by adding your income and expenses to track your budget. The app will automatically calculate your available budget.

1. Monitor your budget regularly and adjust your spending to achieve your financial goals.

## Technologies Used
The Budget App was built using the following technologies and tools:

- HTML5
- CSS3
- JavaScript

## Defect Fixes
1. Fixed Height and Scroll for Income/Expense Lists: The Income and Expense list containers now have a fixed height with vertical scrolling enabled. This resolves the display issue when too many items are added, allowing users to scroll through the entire list without breaking the layout.

1. Input Text Escaping for Security: All user inputs are now properly escaped to prevent cross-site scripting (XSS) attacks. This ensures that any potentially malicious script entered in input fields is treated as plain text and not executed, enhancing the app's security.

1. Keyboard Navigation for Edit/Delete Buttons: The Edit and Delete buttons in the income and expense lists are now accessible via keyboard tab navigation. Users without a mouse or trackpad can use the Tab key to select and interact with these buttons, improving accessibility.

1. Accessibility Labels for Input Fields: Added proper ARIA labels and semantic HTML tags to input fields and buttons. This improves screen reader compatibility, making the app more accessible to visually impaired users. Screen readers will now accurately announce the purpose of each interactive element.

## Content Extensions
1. Privacy Cookie Notice: Added a cookie consent banner that includes a link to the privacy policy page. The banner uses local storage to remember the user's acceptance, so it only appears on the first visit and won't show again once accepted.

1. Language Toggle Feature: Added a language toggle button in the upper right corner that allows users to switch between English and Chinese interfaces. This makes the app more accessible to a wider, multilingual audience.

## Credits
The Budget App tutorial was created by [aaramiss](https://samiraatech.github.io/Budget-app/).

## License
The Budget App is released under the MIT License. You are free to use, modify, and distribute this project for personal and commercial purposes.

## Feedback and Support
If you have any questions, suggestions, or issues with the Budget App, feel free to reach out by creating an issue in the [GitHub repository]([url](https://github.com/aaramiss/Budget-app/issues)). We welcome any feedback to improve the app and make it even more useful for managing personal finances.

Happy budgeting!
