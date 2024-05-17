// Import necessary functions and types
import { cn } from  "./utils";
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';


// Mock the clsx and tailwind-merge functions
jest.mock('clsx', () => ({
  clsx: jest.fn((...args) => args.join(' ')),
}));

jest.mock('tailwind-merge', () => ({
  twMerge: jest.fn((...args) => args.join(' ')),
}));

// Describe block for testing the 'cn' function
describe('cn function', () => {
  // Test case for verifying that 'cn' function calls 'clsx' and 'twMerge' correctly
  it('calls clsx and twMerge with correct arguments', () => {
    // Define test input
    const inputClasses: ClassValue[] = ['class1', 'class2'];

    // Call the 'cn' function with test input
    cn(...inputClasses);

    // Expectations: 'clsx' and 'twMerge' should be called with correct arguments
    expect(require('clsx').clsx).toHaveBeenCalledWith(...inputClasses);
    expect(require('tailwind-merge').twMerge).toHaveBeenCalledWith(...inputClasses);
  });
});