const currentYear = new Date().getFullYear();

export const date = {
	year: parseInt(currentYear),
	month: null,
	day: null,
};

export const calculateDate = (givenYear) => {
	let a, b, c, d, e, f, g, h, i, k, l, m, p, month;

	a = parseInt(givenYear) % 19;
	b = Math.floor(parseInt(givenYear) / 100);
	c = parseInt(givenYear) % 100;
	d = Math.floor(b / 4);
	e = b % 4;
	f = Math.floor((b + 8) / 25);
	g = Math.floor((b - f + 1) / 3);
	h = (19 * a + b - d - g + 15) % 30;
	i = Math.floor(c / 4);
	k = c % 4;
	l = (32 + 2 * e + 2 * i - h - k) % 7;
	m = Math.floor((a + 11 * h + 22 * l) / 451);
	p = (h + l - 7 * m + 114) % 31;
	month = Math.floor((h + l - 7 * m + 114) / 31);

	return (
		date.year = givenYear,
		date.month = month,
		date.day = p + 1
	)
};

calculateDate(currentYear);