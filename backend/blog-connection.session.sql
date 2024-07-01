-- @block
INSERT INTO articles (title, paragraph, img, creatorId)
VALUES 
('Tailwindss', 'Should I learn Tailwindcss while learning Typescript?',
'https://www.drupal.org/files/project-images/screenshot_361.png', 1),
('Personal Site', 'Would it be a good idea to build  a personal site after the blog or build the second project before it?',
'https://tsavoneal.com/wp-content/uploads/2020/06/ed-latimore-personal-website.jpg',1);

-- @block
SELECT * from articles
-- @block
CREATE TABLE articles (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  paragraph TEXT NOT NULL,
  img TEXT NOT NULL,
  creatorId INTEGER NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT (CURRENT_DATE())
);

