import React from 'react';
import {render} from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import {MemoryRouter} from 'react-router-dom';
import {shortenText} from '../utils/functions';
import {posts} from './__data__/testData';

const longPost = posts[0];
const post = posts[1];

it('Make sure PostWidget renders the post that is passed to it', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...post} />
        </MemoryRouter>
    )
    expect(container.textContent).toContain(post.text);
});

it('Shorten display text by default', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...longPost} />
        </MemoryRouter>
    )
    expect(container.textContent).toContain(shortenText(longPost.text));
});

it('Display all text when expanded', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget expanded={true} {...longPost} />
        </MemoryRouter>
    )
    expect(container.textContent).toContain(longPost.text);
});