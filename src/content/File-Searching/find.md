# `find`

## **TL;DR**
---

Find files or directories under a directory tree, recursively.

More information: <https://manned.org/find>.


```sh
# Find files by extension:
find root_path -name '*.ext'

# Find files matching multiple path/name patterns:
find root_path -path '**/path/**/*.ext' -or -name '*pattern*'

- Find directories matching a given name, in case-insensitive mode:
find root_path -type d -iname '*lib*'

# Find files matching a given pattern, excluding specific paths:
find root_path -name '*.py' -not -path '*/site-packages/*'

# Find files matching a given size range, limiting the recursive depth to "1":
find root_path -maxdepth 1 -size +500k -size -10M

# Run a command for each file (use {} within the command to access the filename):
find root_path -name '*.ext' -exec wc -l {} \;

# Find all files modified today and pass the results to a single command as arguments:
find root_path -daystart -mtime -1 -exec tar -cvf archive.tar {} \+

# Find empty files (0 byte) or directories and delete them verbosely:
find root_path -type f|d -empty -delete -print
```



## Find all C/CPP related files
---


Find all files (**recursively**) in the current directory  using a **single extension**:

```sh
find . -name '*.c*'
```

Find files based of **multiple extensions**:


```sh
find . -name '*.c*' -or -name '*.cpp' -or -name '*.h'
# or
find . \( -name '*.c*' -o -name '*.cpp' -o -name '*.h' \) 
```


> NOTE: `-o` flag is equivalent to `-or`.


Because of the spaces, the following command won't work:


```sh
# Does NOT work
find . \(-name '*.c*' -o -name '*.cpp' -o -name '*.h'\) 
```


## Find text in all C files
---



```sh
find . -name '*.c*' -exec grep 'text' {} +
```


For a more detalied output, that will include:
- `-H` the path of the file
- `-n` line number
- `-color` colors matched REGEXs

```sh
find . -name '*.c*' -exec grep -H -n --color 'text' {} +
```



## Find-Replace text in all C files
---


```sh
find . -name '*.c*' -exec sed -i 's/old text/new text/g' {} +
```


