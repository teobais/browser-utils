module.exports = {

    isBrowser:  function() {
        return typeof window !== 'undefined';
    },

    getWindow: function() {
        if (!this.isBrowser()) {
            throw 'No browser detected! Cannot get a reference to window.';
        }
        return window;
    }

};
