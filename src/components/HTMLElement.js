// Define class hereclear
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}
const someWords = new HTMLElement('p', 'These words are made out of letters');
console.log(someWords.render());
// Export class here
export default HTMLElement;
