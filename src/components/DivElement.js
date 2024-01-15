// Import HTMLElement here
import HTMLElement from './HTMLElement.js';

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
  }

  render() {
    const wordsAdded = new DivElement('These letters spell words');
    console.log(wordsAdded.render());
  }
}
// Export class here
export default DivElement;
