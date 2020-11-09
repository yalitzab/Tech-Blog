const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Welcome to my Blog',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 1,
    post_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
