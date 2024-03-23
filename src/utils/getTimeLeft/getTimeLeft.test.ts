import { getRemainingTime } from '.';

it('returns 0 minutes and 0 seconds for edge-cases and invalid values', () => {
  expect(getRemainingTime(-1, 10)).toEqual({ minutes: '00', seconds: '00' });
  expect(getRemainingTime(60, 60)).toEqual({ minutes: '00', seconds: '00' });
  expect(getRemainingTime(60, 61)).toEqual({ minutes: '00', seconds: '00' });
});

it('calculates and formats time left correctly', () => {
  expect(getRemainingTime(300, 10)).toEqual({ minutes: '04', seconds: '50' });
  expect(getRemainingTime(420, 10)).toEqual({ minutes: '06', seconds: '50' });
  expect(getRemainingTime(600, 10)).toEqual({ minutes: '09', seconds: '50' });
  expect(getRemainingTime(900, 10)).toEqual({ minutes: '14', seconds: '50' });
  expect(getRemainingTime(675, 10)).toEqual({ minutes: '11', seconds: '05' });
  expect(getRemainingTime(730, 10)).toEqual({ minutes: '12', seconds: '00' });
});
