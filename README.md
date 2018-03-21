# Drag Drop User Management For InterNations

> A User Management application written in React and Redux

### Installation

```
npm install
```

### Run the project

```
npm start
```

### Run tests
After installation dev dependencies.

```
npm run test
```

## Features

- [x] Create a user
- [x] Delete a user
- [x] Create a group
- [x] Delete a group
- [x] Add users to groups (via drag-n-drop)
- [x] Remove users from group
- [x] Search users
- [x] Search groups
- [x] View user profile
- [x] List groups members

## Usage

Everything in this app is controlled with the buttons you see on the interface (the `X` button will remove a user, a group, or a user from a group,
and the `View` button will show the user or group profile). The only exception to this is that you add users to a group by dragging and dropping the user
into the target group. If the member is not already a part of that group, he or she will be added to the group.
## Tools

Here are a few of the highlighted technologies used in this project, as well as a few anticipated technologies
that will work their way into this project in the future:

- [x] React
- [x] Redux
- [x] redux-thunk
- [x] redux-logger
- [x] reselect
- [x] Drag and Drop features (via react-dnd)
- [ ] Jest
- [ ] Redux Saga (or redux-loop)

## The Future

I spent some time designing a more interesting Interface, as well as some interesting features like a
console messaging system (which could be implemented with some Redux middleware), and I eventually want
to make the entire interface support drag and drop behaviors.

![](media/screenshot-future.jpg)

## License

MIT
