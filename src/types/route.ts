export type Route<T> = {
  name: keyof T;
  component: any;
  presentation?: 'card' | 'modal' | 'transparentModal';
};
