// Define class hereclear
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    const someWords = new HTMLElement('p', 'These are words made out of letters');
    console.log(someWords.render());
    return (new HTMLElement);
  }
}
// Export class here
export default HTMLElement;
