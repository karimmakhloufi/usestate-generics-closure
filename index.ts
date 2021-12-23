const useState = <T>(initialValue: T): [() => T, (arg: T) => void] => {
  let state = initialValue;
  const getState = () => state;
  const setState = (newValue: T) => {
    state = newValue;
  };
  return [getState, setState];
};

const [count, setCount] = useState(0);

console.log(count());
setCount(3);
console.log(count());
