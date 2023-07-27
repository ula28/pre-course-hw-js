let passport = {
	name: "Petr",
};
let clone = {...passport};
clone.name = "Ivan";
console.log(passport.name);
console.log(clone.name);