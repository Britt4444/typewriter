//animate string to appear 1 character at a time
const sentence = "hello there from lighthouse labs";

const animate = (string) => {
  const array = string.split('');
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      if (i < array.length - 1) {
        process.stdout.write(array[i]);
      } else {
        process.stdout.write(array[i] + '\n');
      }
    }, i * '50');
  }
};

animate(sentence);
