interface Wilder {
  name: String;
  age: number;
}

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

const [wilders, setWilders] = useState<Wilder[]>([]);

setWilders([{ age: 32, name: "Karim" }]);
console.log(wilders());
setWilders([...wilders(), { name: "Jessy", age: 34 }]);
console.log(wilders());
