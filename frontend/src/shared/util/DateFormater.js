export const dateFormater = (date) => {
	let splited = date.split(/[- :T]/);
	let formatedDate = splited[1] + "-" + splited[2] + "-" + splited[0];

	return formatedDate;
};
