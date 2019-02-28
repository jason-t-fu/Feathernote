# Database Schema

## `users`

| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `email`           | string    | not null, indexed, unique |
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | date      | not null                  |
| `modified_at`     | date      | not null                  |

* index on `email, unique: true`
* index on `session_token, unique: true`

## `notes`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| `id`          | integer   | not null, primary key          |
| `title`       | string    | not null, indexed              |
| `body`        | text      |                                |
| `notebook_id` | integer   | not null, indexed, foreign key |
| `created_at`  | date      | not null                       |
| `modified_at` | date      | not null                       |

* index on `title`
* `notebook_id` references `notebooks`
* index on `notebooks`


## `notebooks`

| column name   | data type | details                                |
|---------------|-----------|----------------------------------------|
| `id`          | integer   | not null, primary key                  |
| `title`       | string    | not null, indexed                      |
| `owner_id`    | integer   | not null, indexed, foreign key         |
| `note_id`     | integer   | not null, indexed, unique, foreign key |
| `created_at`  | date      | not null                               |
| `modified_at` | date      | not null                               |

* index on `[owner_id, title], unique: true`
* `owner_id` references `users`
* index on `title`
* `note_id` references `notes`
* index on `note_id`


## `tags`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| `id`          | integer   | not null, primary key          |
| `name`        | string    | not null, indexed              |
| `owner_id`    | integer   | not null, indexed, foreign key |
| `created_at`  | date      | not null                       |
| `modified_at` | date      | not null                       |

* index on `[owner_id, name], unique: true`
* index on `name`

## `tagged_notes`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| `id`          | integer   | not null, primary key          |
| `tag_id`      | integer   | not null, indexed, foreign key |
| `note_id`     | integer   | not null, indexed, foreign key |
| `owner_id`    | integer   | not null, indexed, foreign key |
| `created_at`  | date      | not null                       |
| `modified_at` | date      | not null                       |

* Joins table for the many-to-many relationship between notes and tags
* `tag_id` references `tags`
* `note_id` references `notes`
* index on `[owner_id, tag_id], unique: true`
* index on `[tag_id, note_id], unique: true`
* index on `note_id`

## `shortcuts`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| `id`          | integer   | not null, primary key          |
| `shortcut`    | reference | not null, polymorphic, indexed |
| `user_id`     | integer   | not null, indexed              |
| `created_at`  | date      | not null                       |
| `modified_at` | date      | not null                       |

* `shortcut` polymorphically references `notes`, `notebooks`, and `tags`
* Joins table between `users` and `notes/notebooks/tags`
* `user_id` references `users`
* index on `[user_id, shortcut_id, shortcut_type], unique: true`
* index on `[shortcut_id, shortcut_type], unique: true`
