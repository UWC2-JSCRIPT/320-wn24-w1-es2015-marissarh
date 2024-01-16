// Import HTMLElement here
import HTMLElement from './HTMLElement';

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div');
    this.content = content;
  }
}

const wordsAdded = new DivElement('These letters spell words');
console.log(wordsAdded.render());

// Export class here
export default DivElement;
