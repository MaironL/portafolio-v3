import { useState } from 'react';
import { menuItemsInterface, menuItems } from 'infrastructure/assets/data';

//* Implementation logic
interface useFilterInterface {
  items: menuItemsInterface[];
  categories: string[];
  filterItems: (category: string) => void;
}

const useFilter = (): useFilterInterface => {
  const [items, setItems] = useState<menuItemsInterface[]>(menuItems);

  const categories = [
    'TODOS',
    ...new Set(menuItems.map((item: menuItemsInterface): string => item.category)),
  ];

  const filterItems = (category: string): void => {
    if (category === 'TODOS') {
      setItems(menuItems);
    } else {
      const newItems = menuItems.filter(
        (item: menuItemsInterface): boolean => item.category === category
      );
      setItems(newItems);
    }
  };

  return { items, categories, filterItems };
};

export default useFilter;
