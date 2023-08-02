class Route {
    constructor() {
        this.routes = {};
        this.currentRoute = '';
    }

    route(path, callback) {
        this.routes[path] = callback || function () { }
    }


    init() {
        window.addEventListener('hashchange', this.updateView.bind(this))

        window.addEventListener('DOMContentLoaded', this.updateView.bind(this))
    }

    updateView() {
        this.currentRoute = location.hash.slice(1) || '/';
        this.routes[this.currentRoute]()
    }
}