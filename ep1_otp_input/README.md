# **OTP INPUT (Frontend Machine Coding)**

## **Description**

Create an OTP (One-Time Password) input component using React. The OTP should be entered one digit per input box. The focus should auto-move as the user types or deletes, and the component should support pasting a full OTP. It should also reject any non-numeric characters.

---

## **Constraints & Edge Cases**

- **Only numeric input is allowed.**
- If a box is empty and the backspace key is pressed, move the focus to the **previous box**.

---

## **Requirements**

- Create a component that renders `n` **input boxes**, each accepting **only one numeric digit**.
- **Automatically move focus to the next input** when a digit is entered.
- **Automatically move the focus to the previous input** when the **Backspace key** is pressed on an empty field.
- **Disallow any non-numeric input**.
