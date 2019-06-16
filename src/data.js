import generateUuid from 'uuid/v4';

const memos = [
  {
    id: generateUuid(),
    title: "Title 1",
    contents: "This is memo 1. https://www.google.com",
    hashtags: ["react", "blog", "library"]
  },
  {
    id: generateUuid(),
    title: "No title",
    contents: "https://www.apple.com",
    hashtags: ["redux", "blog"]
  },
  {
    id: generateUuid(),
    title: "Title 2",
    contents: "https://www.generateurl-generate2.com",
    hashtags: ["react", "blog", "library"]
  },
  {
    id: generateUuid(),
    title: "Title 3",
    contents:
      "link 1 : http://www.example.com/apparel/account link 2 : https://www.generateurl-generate2.com",
    hashtags: ["react", "blog", "library"]
  },
  {
    id: generateUuid(),
    title: "Title 4",
    contents: "http://example.com/?argument=beds&angle=action",
    hashtags: ["react", "blog", "library"]
  },
  {
    id: generateUuid(),
    title: "Title 5",
    contents: "https://www.example.com/anger/afterthought",
    hashtags: ["react", "blog", "library"]
  },
  {
    id: generateUuid(),
    title: "google keep",
    contents: "https://keep.google.com",
    hashtags: []
  },
  {
    id: generateUuid(),
    title: "evernote",
    contents: "https://www.evernote.com",
    hashtags: []
  }
];

const groups = [
  {
    id: generateUuid(),
    name: "react hooks",
    hashtags: [ 'react', 'hooks' ],
    memos : [ memos[0].id, memos[1].id, memos[6].id, memos[7].id ] // which memos are included in this group.
  },
  {
    id: generateUuid(),
    name: "rxjs with react",
    hashtags: [ 'react', 'rxjs', 'redux-observable' ],
    memos : [ memos[4].id, memos[5].id ] // which memos are included in this group.
  },
];

export default {
  memos,
  groups, 
};