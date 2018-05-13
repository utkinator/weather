class Utils {
    weatherProviderApiKey = '0d972221aeb61df4e9d43180abb60bf4';

    getEncodedURIComponent = params => {
        const escape = encodeURIComponent;

        return Object.keys(params)
            .map(param => escape(param) + '=' + escape(params[param]))
            .join('&');
    };

    debounce = (func, delay = 1000) => {
        let timeout;

        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, arguments);
            }, delay);
        };
    };
}

export default new Utils();
