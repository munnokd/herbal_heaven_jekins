/**
 * @jest-environment jsdom
 */

describe('Herbal Heaven Products Page', () => {
    beforeEach(() => {
        document.body.innerHTML = `
      <div class="input-field col s12 m6">
        <i class="material-icons prefix">search</i>
        <input type="text" id="search" class="validate">
        <label for="search">Search Products</label>
      </div>
      <div class="input-field col s12 m3">
        <select id="category-filter">
          <option value="">All Categories</option>
          <option value="herbs">Herbs</option>
          <option value="supplements">Supplements</option>
          <option value="teas">Teas</option>
          <option value="essential-oils">Essential Oils</option>
        </select>
        <label>Category</label>
      </div>
    `;
    });

    test('Search input field should exist and be empty initially', () => {
        const searchInput = document.getElementById('search');
        expect(searchInput).not.toBeNull();
        expect(searchInput.value).toBe('');
    });

    test('Category dropdown should contain expected options', () => {
        const dropdown = document.getElementById('category-filter');
        const options = Array.from(dropdown.options).map(opt => opt.text);
        expect(options).toEqual([
            'All Categories',
            'Herbs',
            'Supplements',
            'Teas',
            'Essential Oils'
        ]);
    });
});
