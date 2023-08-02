/*

Assignment Description
You are tasked with building a social media app using Object-Oriented Programming (OOP) concepts in JavaScript. 
Your app should allow users to create profiles, connect with friends, share content, and interact with other users. 
You should use the following OOP concepts in your implementation: inheritance, encapsulation, polymorphism, and abstraction.

1 user -> n posts -> (who)
1 post -> n comments (who)
1 comment -> n replies (who)

*/

class User {
    constructor(name, email, password, dateOfBirth, location, profilePicture) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.location = location;
        this.profilePicture = profilePicture;
        this.posts = [];
        this.groups = [];
    }

    addToPost(post) {
        this.posts.push(post)
    }
    createPost(title, content) {
        console.log(this)
        const post = new Post(title, content, this);
        this.posts.push(post);
    }

    likePost(post) {
        post.likes.push(this);
    }

    commentPost(post, content) {
        const comment = new Comment(this, content);
        post.comments.push(comment);
    }

    joinGroup(group) {
        group.members.push(this);
        this.groups.push(group);
    }

    leaveGroup(group) {
        const index = group.members.indexOf(this);

        if (index !== -1) {
            group.members.splice(index, 1);
        }

        const userIndex = this.groups.indexOf(group);
        if (userIndex !== -1) {
            this.groups.splice(userIndex, 1);
        }
    }
}

class Post {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.likes = 0;
        this.comments = [];
    }
    addToComments(comment) {
        this.comments.push(comment)
    }
    addLikeToPost() {
        this.likes++;
    }

}

class Comment {
    constructor(author, content) {
        this.author = author;
        this.content = content;
        this.replies = [];
        this.likes = 0;
    }

    replyToComment(replyAuthor, replyContent) {
        const reply = new Reply(replyAuthor, replyContent);
        this.replies.push(reply);
    }

}

class Reply {
    constructor(author, content) {
        this.author = author;
        this.content = content;
    }
}

// Create a new User object and assign it to a variable
const LAKSHMIKANT = new User('LAKSHMIKANT', 'fullstacktrainer@gmail.com', 'password', '12/10/1998', 'Bengaluru', 'lucky.jpg');
const bipul = new User('bipul', 'fullstacktrainer@gmail.com', 'password', '12/10/1998', 'Bengaluru', 'lucky.jpg');
const ram = new User('ram', 'fullstacktrainer@gmail.com', 'password', '12/10/1998', 'Bengaluru', 'lucky.jpg');
const ravan = new User('ravan', 'fullstacktrainer@gmail.com', 'password', '12/10/1998', 'Bengaluru', 'lucky.jpg');

bipul.createPost("advance js ", "i want to learn it ")
ram.createPost("advance js ", "i want to learn it ")
// console.log(bipul)


// 1 . // Assuming you have a post object
const post = new Post('My First Post', 'This is the content of my post.', LAKSHMIKANT);

LAKSHMIKANT.addToPost(post)
// Add a like to the post
post.addLikeToPost();
console.log(post)


//2. Assuming you have a comment object
const comment = new Comment(bipul, 'This is a great post!');
post.addToComments(comment)
// Reply to the comment
comment.replyToComment(ram, 'Thanks for sharing your thoughts!');
console.log(comment)

console.log(bipul)

  // User {
  //   name: 'LAKSHMIKANT',
  //   email: 'fullstacktrainer@gmail.com',
  //   password: 'password',
  //   dateOfBirth: '12/10/1998',
  //   location: 'Bengaluru',
  //   profilePicture: 'lucky.jpg',
  //   posts: [],
  //   groups: []
  // }