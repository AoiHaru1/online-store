interface Data {
  name: string;
  manufacturer: manufacturerFilter;
  color: colorFilter;
  release: string;
  stock: number;
  image: string;
  size: sizeFilter;
  popular: boolean;
}

interface valueFilterStorage {
  name: string;
  manufacturer: manufacturerFilter[];
  color: colorFilter[];
  size: sizeFilter[];
  favorite: favoriteFilter;
  sort: string;
  stockRange: string[];
  releaseRange: string[];
  basketItems: string[];
}

type colorFilter = 'White' | 'Brown' | 'Black' | 'Silver' | '';
type sizeFilter = 'Small' | 'Medium' | 'Large' | '';
type manufacturerFilter = 'Centek' | 'Brayer' | 'First' | 'Kelli' | '';
type favoriteFilter = boolean;
type nameFilter = string;
type sortFilter = string;
type stockRangeFilter = string[];
type releaseRangeFilter = string[];
type basketItemsCount = string;
