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

### Commit message
```
git commit -m "clear commit message"
```
You can make as many commits as you want before pushing

### Pushing commits
```
git push origin HEAD
```


## Rebasing
This is a good way to make sure the changes you're making are based on how the main branch currently looks. It's entirely possible someone else has merged changes to `main` since you checked out your branch.

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

### Interactive rebase
```
git rebase -i origin/main
```
This is the version I always use.

