/**
 * @jest-environment jsdom
 */

describe('Login Page - Herbal Heaven', () => {
    beforeEach(() => {
        document.body.innerHTML = `
      <form id="login-form">
        <div class="input-field">
          <input type="email" id="email" name="email" required>
          <label for="email">Email</label>
        </div>
        <div class="input-field">
          <input type="password" id="password" name="password" required>
          <label for="password">Password</label>
        </div>
        <div class="row">
          <div class="col s12 center-align">
            <button class="btn" type="submit" id="login-button">Login</button>
          </div>
        </div>
      </form>
    `;
    });

    test('Login form should contain email and password fields', () => {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        expect(emailInput).not.toBeNull();
        expect(passwordInput).not.toBeNull();
        expect(emailInput.type).toBe('email');
        expect(passwordInput.type).toBe('password');
    });

    test('Login button should exist and have type submit', () => {
        const loginButton = document.getElementById('login-button');

        expect(loginButton).not.toBeNull();
        expect(loginButton.type).toBe('submit');
        expect(loginButton.textContent.toLowerCase()).toContain('login');
    });
});
