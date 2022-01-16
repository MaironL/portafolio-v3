import { useState } from 'react';
import { jobsInterface, jobs } from 'infrastructure/assets/data';

//* Implementation logic
interface useFilterInterface {
  items: jobsInterface[];
  categories: string[];
  filterItems: (company: string) => void;
}

const useFilter = (): useFilterInterface => {
  const [items, setItems] = useState<jobsInterface[]>(jobs);

  const categories = [
    ...new Set(jobs.map((item: jobsInterface): string => item.company)),
  ];

  const filterItems = (company: string): void => {
    const newItems = jobs.filter(
      (item: jobsInterface): boolean => item.company === company
    );

    setItems(newItems);
  };

  return { items, categories, filterItems };
};

export default useFilter;
