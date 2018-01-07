# daybook
Keep track of what's important to you.


Tools:
- Next for server side rendering
- GraphQL for querying
- Postgres for database
- React + React Native for clientside
- Login with Twitter/Google/FB/GitHub
- styled components
- apollo, apollo react

Goal:
- write journal entries with attached data
  - to do items
  - external api data

Need to be able to:
- create, edit, delete journal entries
- create, edit, delete, complete to do items
- view daybook at url (user profiles?)
- search journal entries by content
- search users by username
- autocomplete repetitive todos
- view days where certain todos occurred
- organize journals by month, year
- view aggregated todo data for a time period
- view streaks

Models:
- user
  - id: string
  - username: string
  - email: string
  - providerIds: string
  - lastActive: date
- journalEntry
  - id: string
  - date: date
  - createdAt: date
  - modifiedAt: date
  - deletedAt: date
  - userId: string
  - content: string
  - applications
    - todo
      - ids: Array<string>
- todo
  - id: string
  - userId: string
  - createdAt: date
  - modifiedAt: date
  - deletedAt: date
  - content: string
  - completed: boolean