# Formik Form with TypeScript, TailwindCSS, and Yup Validation

This project demonstrates how to create a reusable, type-safe form using Formik, Yup, and TypeScript, styled with TailwindCSS. The form includes reusable components for text input, select dropdowns, and radio buttons, showcasing the power of modular design.

---

## Features

- **Formik** for form handling
- **Yup** for schema-based validation
- **TypeScript** for type safety
- **TailwindCSS** for styling
- Reusable components (`Text`, `Radio`, `Button`) for better code organization

---

---

## Technologies Used

- **React**: Component-based front-end library
- **Formik**: Form state management
- **Yup**: Validation schema
- **TailwindCSS**: Utility-first CSS framework
- **TypeScript**: Static typing for safer and more maintainable code

---

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
   Usage
   Form Fields
   Text Input
   A standard text input with validation for required fields and a minimum of 3 characters.

Select Dropdown
A dropdown menu to select an option. Validation ensures an option is selected.

Radio Buttons
A group of radio buttons for selection. Validation ensures one option is selected.

Validation
Validation is handled using Yup and includes:

Text Input: Required and must be at least 3 characters.
Dropdown: Requires a selection.
Radio Buttons: Requires a selection.
Reusable Components
Text Component
Handles a text input field and its validation.

Radio Component
Displays radio button options dynamically.

Button Component
Handles submission and reset actions.
