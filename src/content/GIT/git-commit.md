# `git commit`


```sh
git commit -m "Coomit Name"
```

## Modify (add/delete files from) Last Commit
---

```sh
git commit --amend --no-edit
```



In case you forgot to add files in the last commit,
you can stage them using `git commit --amend`:

```sh
$ git add file1 file2 file3
$ git commit --amend --no-edit
```

The last commit will have a new hash.

> `--no-edit` doesn't **reword** the last commit message



## Rename (reword) Last Commit
---

```sh
git commit --amend -m "Renamed Commit"
```

