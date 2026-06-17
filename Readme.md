# MERN Notes App - Git Practice Project

## Objective

Build a simple Notes App using the MERN stack while practicing real-world Git workflows.

This project is primarily for learning:

* Git Branching
* Git Merge
* Git Rebase
* Pull Requests
* Merge Conflict Resolution
* Cherry Pick
* Revert
* Stash
* Tags & Releases

---

# Tech Stack

## Frontend

* React
* Axios
* React Router (optional)

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

# Project Structure

```text
notes-app/
│
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── styles.css
│   │   └── components/
│   │       ├── NotesList.jsx
│   │       ├── NoteCard.jsx
│   │       ├── NoteForm.jsx
│   │       └── EditNoteModal.jsx
│   └── public/
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── config/
│
├── .gitignore
├── README.md
└── package.json
```

---

## Client Setup

From the `Notes-App` folder:

```bash
cd client
npm install
npm run dev
```

The frontend expects the backend API at `http://localhost:5000/api/notes`.
Create a `client/.env` file to override the API base URL:

```ini
VITE_API_BASE=http://localhost:5000/api/notes
```

---

# Features

### Core Features

1. Create Note
2. View Notes
3. Update Note
4. Delete Note

### Bonus Features

5. Search Notes
6. Note Categories
7. Timestamps

---

# Team Roles

## Developer A

### Backend Owner

Tasks:

* Setup Express Server
* Connect MongoDB
* Create Note API
* Update Note API
* Delete Note API

Branches:

```bash
feature/server-setup
feature/create-note-api
feature/update-note-api
feature/delete-note-api
```

---

## Developer B

### Frontend Owner

Tasks:

* Setup React
* Notes List UI
* Create Note Form
* Edit Note Form
* Delete Button

Branches:

```bash
feature/client-setup
feature/note-list-ui
feature/create-note-form
feature/edit-note-ui
```

---

# Git Workflow

## Main Branches

```text
main
develop
```

Rules:

* Never commit directly to main
* Work only on feature branches
* Merge feature branches into develop
* Merge develop into main when stable

---

# Initial Setup

Developer A:

```bash
git init
git checkout -b develop
```

Push repository.

Developer B:

```bash
git clone <repo-url>
git checkout develop
```

---

# Daily Workflow

Update local branch:

```bash
git checkout develop
git pull origin develop
```

Create feature branch:

```bash
git checkout -b feature/task-name
```

Work on feature.

Commit:

```bash
git add .
git commit -m "Add create note API"
```

Push:

```bash
git push origin feature/task-name
```

Create Pull Request:

```text
feature/task-name → develop
```

---

# Git Practice Schedule

## Day 1

Practice:

```bash
git clone
git branch
git checkout
git add
git commit
git push
git pull
```

Goal:

Complete project setup.

---

## Day 2

Practice Feature Branches

Developer A:

```bash
feature/create-note-api
```

Developer B:

```bash
feature/create-note-form
```

Merge both through Pull Requests.

---

## Day 3

Practice Merge Conflict

Both developers edit:

```text
README.md
```

Add different content to the same section.

Merge branches.

Resolve conflict manually.

Commands:

```bash
git merge
```

---

## Day 4

Practice Rebase

Developer A:

```bash
git checkout feature/update-note-api
git rebase develop
```

Resolve conflicts if any.

Commands:

```bash
git rebase
git rebase --continue
```

---

## Day 5

Practice Stash

Start work.

Before committing:

```bash
git stash
```

Switch branch.

Return:

```bash
git stash pop
```

Commands:

```bash
git stash
git stash list
git stash pop
```

---

## Day 6

Practice Revert

Create an intentional bug.

Commit it.

Then:

```bash
git revert <commit-id>
```

Observe new revert commit.

---

## Day 7

Practice Cherry Pick

Create useful commit on one branch.

Move it to another branch.

```bash
git cherry-pick <commit-id>
```

---

## Day 8

Practice Release

Merge develop into main.

Create release tag.

```bash
git checkout main
git merge develop

git tag v1.0.0
git push origin v1.0.0
```

---

# API Endpoints

## Create Note

```http
POST /api/notes
```

Body:

```json
{
  "title": "Git Notes",
  "content": "Learning git merge"
}
```

---

## Get Notes

```http
GET /api/notes
```

---

## Update Note

```http
PUT /api/notes/:id
```

---

## Delete Note

```http
DELETE /api/notes/:id
```

---

# Success Criteria

By the end of this project both developers should comfortably use:

```bash
git clone
git branch
git checkout
git switch
git add
git commit
git push
git pull
git merge
git rebase
git stash
git cherry-pick
git revert
git tag
git reflog
```

and be able to resolve merge conflicts without assistance.
