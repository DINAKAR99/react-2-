const [sample, setSample] = useState(false);

const handler = (p) => {
  setSample(!p);
};

export { sample, handler };
