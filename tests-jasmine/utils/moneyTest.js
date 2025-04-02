import {formatCurrency} from "../../scripts/utils/money.js";

//create a testsuite using describe()
describe('test suite: formatCurrency', () => {
  //create a test using it()
  it('converts cents to dollars', () => {
    //this lets us compare a value to another value. the expect() gives us an obj.
    //This obj has many methods that can be used to make comparisons
    expect(formatCurrency(2095)).toEqual('20.95');
  });
  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});
