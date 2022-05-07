export default class LocalStorage {
  static set = (data) => {
    localStorage.setItem('TODO-LIST', JSON.stringify(data));
  };

  static get = () => JSON.parse(localStorage.getItem('TODO-LIST')) || [];
}