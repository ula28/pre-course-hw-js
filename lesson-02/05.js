let passport = {
	name: "Petr",
};
let clone = {...passport};
clone.name = "Ivan";
console.log(passport);
console.log(clone);