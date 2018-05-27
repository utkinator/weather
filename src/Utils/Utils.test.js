import Utils from './Utils';

it('weather data provider API url exist', () => {
    expect(Utils.weatherProviderApiUrl).toBeTruthy();
});

it('weather data provider API key exist', () => {
    expect(Utils.weatherProviderApiKey).toBeTruthy();
});
