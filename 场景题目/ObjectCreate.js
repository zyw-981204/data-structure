function Create(obj) {
    function Cons() {

    }
    Cons.prototype = obj;
    return new Cons()
}
