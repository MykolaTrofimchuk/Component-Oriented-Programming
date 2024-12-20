# Recipe Book (Книга рецептів)
## Ідея застосунку
    Користувач може:
    - Додати новий рецепт.
    - Переглянути список рецептів.
    - Переглянути деталі рецепту.
    - Видалити рецепт.
    - Відфільтрувати рецепти за категоріями.

## Обрані практики (6 практик)
### 1. Розбиття на дрібні компоненти
Основні компоненти:
- `RecipeList` (відображає список рецептів).
- `RecipeItem` (один рецепт у списку). 
- `RecipeForm` (додавання нового рецепту). 
- `RecipeDetails` (детальний опис рецепту). 
   
### 2. Контекст (React Context API) для спільного стану
Використовується `RecipeContext` для зберігання списку рецептів.

### 3. Мемоїзація (React.memo, useMemo, useCallback)
+ Компоненти `RecipeItem` мемоїзуються для покращення продуктивності.
+ Логіка фільтрації рецептів мемоїзується через `useMemo`.

### 4. Кастомні хуки для логіки
Хук `useRecipeManager` для керування рецептами (додавання/видалення/оновлення).

### 5. Проп-тайпи для валідації
Використання бібліотеки `prop-types` для типізації пропсів компонентів.

### 6. Організація коду за типами (components, context, hooks)
Чітке розділення файлів за функціоналом.