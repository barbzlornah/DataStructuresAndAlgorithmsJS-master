// Take a set of bowls for example.One inserted inside another according to sizes.
// When you open a bowl, you find another bowl inside, and when you open that one,
// there's another one inside. The act of doing this is called recursion. Let's write code for that.
const openBowl = bowl => {
    if(bowl.isEmpty()){
        return bowl;
    }
    openBowl(bowl.open());
}