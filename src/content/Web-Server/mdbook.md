# `mdbook`


## Installing dependencies
---


- Install pre-requisite for Rust:

```sh
sudo apt install -y build-essential
```

- Install Rust:

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```


- Install `mdbook`:

```sh
cargo install mdbook mdbook-toc
```



## `mdbook` **TL;DR**
---


Create online books by writing Markdown files.

More information: <https://rust-lang.github.io/mdBook/>.

```sh
# Create an mdbook project in the current directory:
mdbook init

# Create an mdbook project in a specific directory:
mdbook init path/to/directory

# Clean the directory with the generated book:
mdbook clean

# Serve a book at http://localhost:3000, auto build when file changes:
mdbook serve

# Watch a set of Markdown files and automatically build when a file is changed:
mdbook watch
```


## `mdbook init`
---

```sh
mdbook init [OPTIONS] [dir]
```

Run the following command to see the options description:
```sh
mdbook init -h
```


## `mdbook serve`
---

```sh
mdbook serve [OPTIONS] [dir]
```

Run the following command to see the options description:
```sh
mdbook serve -h
```

Common used options:

| Option | Description |
| :--- | :--- |
| `-p <port>`<br>`--port <port>`| Port to use for HTTP connections |
| `-n <hostname>`<br>`--hostname <hostname>`| Hostname to listen on for HTTP connections |
| `-o`<br>`--open` | Opens the compiled book in a web browser |


> - **Default port** is `3000`
> - **Defatult hostname** is `localhost`


### Making the website accessible in the LAN
---

By default, `mdbook` accepts HTTP connections only from the local computer (`localhost` - 127.0.0.1),
meaning it is unaccessible from any other devices.


However, `mdbook` can **serve** the website to all the hosts in the LAN (Local Area Network)
if the **wildcard address** (`0.0.0.0`) is specified:

```sh
mdbook serve --hostname 0.0.0.0
```

or 

```sh
mdbook serve -n 0.0.0.0
```

## `mdbook clean`
---


- It will detelete the code for the mdbook website, generated either by `mdbook build` or by `mdbook serve`
- It will basically delete the `mdbook/` folder


Run the following command to see the options description:
```sh
mdbook clean -h
```
