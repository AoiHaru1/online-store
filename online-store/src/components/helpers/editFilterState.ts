export const editFilterState = <T>(filter: T[], newFilterValue: T): T[] => {
  if (filter.includes(newFilterValue)) {
    return filter.filter((x) => x !== newFilterValue);
  }
  return [...filter, newFilterValue];
};
