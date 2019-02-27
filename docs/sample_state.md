```js
{
  entities: {
    notes: {
      1: {
        id: 1,
        title: "Engineering 101"
        body: "Engineering is hard",
        createdAt: "29 Jan 2019"
        notebookId: 2,
        tagIds: [1, 2]
      },
      2: {
        id: 2,
        title: "English 101"
        body: "English is also hard",
        createdAt: "2 Jan 2019"
        noteBookId: 5,
        tagIds: []
      },
      3: {
        id: 3,
        title: "Religious Studies 503"
        body: "Why did I take this class",
        createdAt: "28 Jan 2019"
        notebookId: 2,
        tagIds: [2]
      }
    },
    notebooks: {
      2: {
        id: 2,
        title: "Some Work",
        noteIds: [1, 3],
      }
      5: {
        id: 5,
        title: "Class Stuff",
        noteIds: [2],
      }
      6: {
        id: 6,
        title: "Empty notebook?",
        noteIds: [],
      }
    }
    tags: {
      1: {
        id: 1,
        name: "Important"
        noteIds: [1]
      }
      2: {
        id: 2,
        name: "Classes",
        noteIds:[1, 3]
      }
    }
    shortcuts: {
      1: {
        id: 1
        shortcutId: 1
        shortcutType: 'notes'
      }
      2: {
        id: 2,
        shortcutId: 1
        shortcutType: 'tags'
      }
      3: {
        id: 3,
        shortcutId: 2,
        shortcutType: 'notebooks'
      }
    }
    users: {
      11: {
        id: 11,
        email: "green_elephant@aa.io"
      },
      25: {
        id: 25,
        email: "green_hippo@aa.io"
      }
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    session: ["Incorrect email/password combination"],
    noteForm: ["Note title cannot be blank"],
    notebookForm: ["Notebook title cannot be blank"],
    tagForm: ["Tag name cannot be blank"],
  },
  session: { currentUserId: 25 }
}
```