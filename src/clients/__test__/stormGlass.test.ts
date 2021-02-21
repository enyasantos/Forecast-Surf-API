import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassNormalized3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios')

describe('StormGlass client', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  it('should return the normalized from the StormGlass sevices', async () => {
    const lat = -33.792726;
    const lng = 151.289824;

    mockedAxios.get.mockResolvedValue({ data: stormGlassWather3HoursFixture });

    const stormGlass = new StormGlass(mockedAxios);
    const respose = await stormGlass.fetchPoints(lat, lng);
    expect(respose).toEqual(stormGlassNormalized3HoursFixture);
  });
})