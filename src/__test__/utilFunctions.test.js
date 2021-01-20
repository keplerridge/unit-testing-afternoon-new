import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';

test('Make sure shortenText does not change strings longer than 100', () => {
    expect(shortenText(shortText)).toHaveLength(29)
});

test('shortenText should cut off extra characters after 100 and add three periods', () => {
  const shortened = shortenText(longText);
  expect(shortened).not.toHaveLength(longText.length);
  expect(shortened.slice(-3)).toBe('...');
});

test('wordCount should return the number of words in a sentece', () => {
    expect(wordCount(posts)).toBe(233);
});

test('attatchUserName should attach a username to every post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
});

test('attachUserName should remove posts with no matching user', () => {
    const newPosts = attachUserName(users, posts),
          deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
});