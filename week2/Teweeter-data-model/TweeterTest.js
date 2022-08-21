const tweeter = TweeterLogic();

tweeter.addPost("This is my own post!");
tweeter.addPost("2");
tweeter.addPost("3");
tweeter.addPost("4");
tweeter.addPost("5");
console.log(tweeter.getPosts());

tweeter.removePost("p2");
tweeter.removePost("p3");
console.log(tweeter.getPosts());

tweeter.addComment("p1", "aiiiii");
tweeter.addComment("p1", "biiiii");
tweeter.addComment("p4", "diiiii");
tweeter.addComment("p5", "eiiiii");
console.log(tweeter.getPosts());

tweeter.removeComment("p1", "c2");
tweeter.removeComment("p4", "c3");
console.log(tweeter.getPosts());
