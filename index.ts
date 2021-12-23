const useState = <T>(initialValue: T): [() => T, (arg: T) => void] => {
  let state = initialValue;
  const getState = () => state;
  const setState = (newValue: T) => {
    state = newValue;
  };
  return [getState, setState];
};

const [getState, setState] = useState(0);

console.log(getState());
setState(3);
console.log(getState());
setState("lala");
