class Utils {
    weatherProviderApiUrl = 'https://api.openweathermap.org/data/2.5';
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

    message = ({ type = 'error', text = 'Unknown error happend', delay = 5000 }) => {
        const messageText = document.createTextNode(text);
        const messageElement = document.createElement('div');
        const closeMessageButton = document.createElement('button');

        closeMessageButton.className = 'close';
        closeMessageButton.innerText = 'close';
        closeMessageButton.addEventListener('click', () => {
            document.body.removeChild(messageElement);
        });

        messageElement.className = `message ${type}`;
        messageElement.appendChild(messageText);
        messageElement.appendChild(closeMessageButton);

        document.body.appendChild(messageElement);

        setTimeout(() => {
            document.body.removeChild(messageElement);
        }, delay);
    };
}

export default new Utils();
