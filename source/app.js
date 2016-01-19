
class HelloWorld {
  constructor(name, purpose) {
    this.attrs = {
      name: name,
      purpose: purpose
    };
  }
  toString() {
    return 'Hello, world!';
  }
}
var sample = new HelloWorld("James", "party party party");
console.log(sample.toString());
console.log(sample.attrs);
