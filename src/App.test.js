import { initializeTimes, updateTimes } from './App';

describe('Time management functions', () => {
  describe('initializeTimes()', () => {
    it('returns the correct array of available times', () => {
      const expectedTimes = [
        "17:00", "17:30", "18:00", "18:30", 
        "19:00", "20:00", "20:30"
      ];
      
      const result = initializeTimes();
      
      expect(result).toEqual(expectedTimes);
      expect(result).toHaveLength(7);
    });
  });

  describe('updateTimes()', () => {
    it('always returns the initialized times (ignores state and action)', () => {
      const expectedTimes = initializeTimes();
      
      // Test with empty state
      expect(updateTimes([], {})).toEqual(expectedTimes);
      
      // Test with different state
      expect(updateTimes(["18:00"], {})).toEqual(expectedTimes);
      
      // Test with action
      expect(updateTimes([], { type: 'UPDATE' })).toEqual(expectedTimes);
      
      // Test with garbage input
      expect(updateTimes(null, 123)).toEqual(expectedTimes);
    });
  });
});