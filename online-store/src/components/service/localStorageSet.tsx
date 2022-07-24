const localStorageSet = () => {
  if (!localStorage.getItem('filterSettings')) {
    localStorage.setItem(
      'filterSettings',
      JSON.stringify({ name: [], manufacturer: [], color: [], size: [], favorite: [] })
    );
  }
};

export default localStorageSet;
