export const required = value => 
	value ? undefined : 'Required';
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const email = value =>
    /^\S+@\S+$/.test(value) ? undefined : 'Must be a valid email address';
export const isValidZip = value => 
	/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value) ? undefined : 'Must be a valid US zip';
export const confirmEmail = (value, allValues) =>
	(value === allValues.email) ? undefined : "Emails must match";
export const maxGtMin = (value, allValues) =>
	(!value || (!(allValues['price-min']) || (parseInt(value, 10) >= parseInt(allValues['price-min'], 10) ))) ? undefined : "Max price must be bigger than min";
export const minLtMax = (value, allValues) =>
	(!value || (!(allValues['price-max']) || (parseInt(value, 10) <= parseInt(allValues['price-max'], 10) ))) ? undefined : "Min price must be smaller than max";
export const reqIfZip = (value, allValues) =>
	(!(allValues['zip']) || (allValues['zip'] && value)) ? undefined : 'Please select a radius';
export const ifZipValidZip = value =>
	(!value || /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)) ? undefined : 'Must be a valid US zip';