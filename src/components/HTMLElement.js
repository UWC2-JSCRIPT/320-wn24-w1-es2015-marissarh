// Define class here
class HTMLElement{
    constructor(tag, content){
        this.tag= tag;
        this.content = content;

    }
    render = function(){
        return HTMLElement
    }
}
const someWords = new HTMLElement('p', 'These are words made out of letters');
console.log(someWords.render());

// Export class here
export default {HTMLElement};
