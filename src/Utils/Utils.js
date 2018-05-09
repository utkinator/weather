class Utils {
    weatherProviderApiKey = '0d972221aeb61df4e9d43180abb60bf4';

    getEncodedURIComponent = params => {
        const escape = encodeURIComponent;

        return Object.keys(params)
            .map(param => escape(param) + '=' + escape(params[param]))
            .join('&');
    };
}

export default new Utils();
