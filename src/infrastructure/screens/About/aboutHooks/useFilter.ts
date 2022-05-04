import { useState } from 'react';
import { jobsList } from 'infrastructure/assets/data';

const useFilter = () => {
  const [jobsFiltered, setJobs] = useState(jobsList);

  const categories = [...new Set(jobsList.map((item) => item.company))];

  const jobsFilter = (company: string) => {
    const newItems = jobsList.filter((item) => item.company === company);
    setJobs(newItems);
  };

  return { jobsFiltered, categories, jobsFilter };
};

export default useFilter;
