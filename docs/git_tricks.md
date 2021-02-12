# Git Tips and Tricks

Some of these y'all already know, some of these y'all may never need. These are just some git tricks that have helped me out in the past.

## Basics

### Creating a branch
```
git checkout -b your-branch-name
```

### Add all the changed files
```
git add .
```

### Check on what you're doing
```
git status
```

### Commit message
```
git commit -m "clear commit message"
```
You can make as many commits as you want before pushing

### Pushing commits
```
git push origin HEAD
```

If git yells at you and you're convinced you still need to push:
```
git push -f origin HEAD
```

## Undoing Unwanted Changes
For getting rid of edits you made to a file but don't want to commit.

### Restore
```
git restore file_name_here
```
You'll never be able to get these edits back.

### Stash
```
git stash
```
This will take all your uncommitted edits and save them *somewhere*. I've never actually wanted to get them back but it is possible. Many people use `git stash` as a trash can basically.


## Rebasing
This is a good way to make sure the changes you're making are based on how the main branch currently looks. It's entirely possible someone else has merged changes to `main` since you checked out your branch. Rebasing ensures GitHub understands you're not trying to rewrite someone else's commits.

### Fetching the latest from GitHub
```
git fetch origin main
```

### Rebasing your changes on top of main
```
git rebase origin/main
```

I learned while making this that the above 2 commands can be combined into:
```
git pull --rebase origin main
```
Never actually used this though

## Interactive rebase
```
git rebase -i origin/main
```
This is the version I always use. It shows you a list of the commits you are rebasing on top of main. This is helpful to make sure you're rebasing the right stuff, and also if you made a commit you've since decided is bad and want to roll back (like changing server address to localhost or something)

`git rebase -i` gives you a vim-style editor to play with your commits:

![](https://i.imgur.com/XHsKyes.png)

As an example, I'm going to drop the bad commit I don't actually want to keep, then squash the third commit into the first:

![](https://i.imgur.com/7gEXhZS.png)

You can abort the rebase by deleting all the lines that contain commits.

Quitting out of the window is the same as quitting out of a vim window, so `:wq` or `:x`.

## Fixing Merge Conflicts
VScode will usually try to alert you if a file has merge conflicts. To see all the files with merge conflicts:
```
git status
```

Once you've fixed and saved the files with conflicts:
```
git add .
git rebase --continue
```