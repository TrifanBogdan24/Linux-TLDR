# Signing git commits/tags with GPG

Useful links (and source of information ofc):
- [Generating a new GPG key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
- [Adding a GPG key to your GitHub account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)
- [Telling Git about your signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)

<iframe width="500" height="300" src="https://www.youtube.com/embed/2ISu2KTPzuQ" title="Source Control Tip 19: Signing a commit via GPG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


```sh
gpg --full-generate-key
```

```sh
$ gpg --list-secret-keys --keyid-format=long
/Users/hubot/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          Hubot <hubot@example.com>
ssb   4096R/4BB6D45482678BE3 2016-03-10
```

> In this example, `3AA5C34371567BD2` respresents the **long key ID**.

```sh
gpg --armor --export 3AA5C34371567BD2
# Prints the GPG key ID, in ASCII armor format
```

The above command will print your **public GPG key**
- beginning with `-----BEGIN PGP PUBLIC KEY BLOCK-----` and
- ending with `-----END PGP PUBLIC KEY BLOCK-----`.

Copy its output and:


1. In the upper-right corner of any page on GitHub, click your profile photo, then click **⚙️ Settings**.
2. In the "Access" section of the sidebar, click **🔑 SSH and GPG keys**.
3. Next to the "GPG keys" header, click **New GPG key**.
4. In the "Title" field, type a name for your GPG key.
5. In the "Key" field, paste the GPG key you copied when you generated your GPG key.
6. Click **Add GPG key**.
7. If prompted, authenticate to your GitHub account to confirm the action.

> On **GitHub**, in the **🔑 SSH and GPG keys** section,<br>you can check the `Flag unsigned commits as unverified` box (at the bottom of the page).


Configuring `git` to use the GPG key for **signing** **all** commits and tags:

```sh
git config --global user.signingkey 3AA5C34371567BD2
```

```sh
git config --global commit.gpgsign true
git config --global tag.gpgSign true
```

