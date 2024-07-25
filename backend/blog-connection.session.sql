
-- @block
CREATE TABLE articles (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  paragraph TEXT NOT NULL,
  img TEXT NOT NULL,
  creatorId INTEGER NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT (CURRENT_DATE())
);

-- @block
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  pass TEXT NOT NULL
)

-- @block
SELECT * FROM users



-- @block
SELECT * FROM articles
-- @block
INSERT into articles (title, paragraph, img, creatorId)
VALUES ('For me giving up is way harder than trying.','The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!The state of Florida is bigger than England!' , 'https://i.redd.it/v8gpc8ihb3871.jpg', 1),("The Ramses brand condom is named after the great pharoh Ramses II who fathered over 160 children.","I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.I'm on the pursuit of awesomeness, excellence is the bare minimum.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnV9FyJZUUr6-IAqwukZ79t9_kPxE74coAj6TAz0u8N6DOIhN8xycE-E8TOpLvKrmzZEo&usqp=CAU", 1),("The crack of a whip is actually a tiny sonic boom, since the tip breaks the sound barrier.", "Fur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep onFur pillows are hard to actually sleep on", 'https://i.pinimg.com/736x/64/68/73/64687345eb9610626441773db2a6fac8.jpg', 1), ("Approximately every seven minutes of every day, someone in an aerobics class pulls their hamstring.", "There are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likenessThere are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likeness", "https://preview.redd.it/6amqfn34w0dc1.png?auto=webp&s=42b3f6bb3cd7d9a5ca8a231c9903e3b983b171c2", 1);

-- @block
delete from articles where title='DOOM'