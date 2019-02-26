```js
{
  entities: {
    notes: {
      1: {
        id: 1,
        title: "Engineering 101"
        body: "Engineering is hard",
        authorId: 11,
        notebookId: 2,
        tagIds: [1, 2]
      },
      2: {
        id: 2,
        title: "English 101"
        body: "English is also hard",
        authorId: 25,
        noteBookId: 5,
        tagIds: []
      },
      3: {
        id: 3,
        title: "Religious Studies 503"
        body: "Why did I take this class",
        authorId: 11,
        notebookId: 2,
        likerIds: [2]
      }
    },
    notebooks: {
      2: {
        id: 2,
        title: "Some Work",
        ownerId: 11,
        noteIds: [1, 3],
        tagIds: [2]
      }
      5: {
        id: 5,
        title: "Class Stuff",
        ownerId: 11,
        noteIds: [2],
        tagIds: []
      }
      6: {
        id: 6,
        title: "Empty notebook?",
        ownerId: 25,
        noteIds: [],
        tagIds: []
      }
    }
    tags: {
      1: {
        id: 1,
        name: "Important"
      }
      2: {
        id: 2,
        name: "Classes",
      }
    }
    taggedNotes: {
      1: {
        id: 1,
        tagId: 1,
        noteIds: [1]
      }
      2: {
        id: 2,
        tagId: 2,
        noteIds: [1, 3]
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
        username: "green_elephant",
        authoredNoteIds: [1, 3],
        ownedNotebookIds: [1, 5],
        
      },
      25: {
        id: 25,
        username: "green_hippo",
        authoredNoteIds: [2],
        ownedNotebookIds: [6],
      }
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    noteForm: ["Note title cannot be blank"],
    notebookForm: ["Notebook title cannot be blank"],
    tagForm: ["Tag name cannot be blank"],
  },
  session: { currentUserId: 25 }
}
```