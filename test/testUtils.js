import checkPropTypes from 'check-prop-types';

/**
* Return ShallowWrapper containing node(s) with the given data-test value
* @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper to search within
* @param {string} val - Value of data-test attribute for search
* @returns {ShallowWrapper}
*/

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProp = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.PropTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();

}
