# Git

## Commands

### git clone
```bash
git clone --branch <tag_name> <repo_url>
git clone --depth DEPTH --single-branch --branch BRANCH REPO_URL
```

### general
```bash
git checkout @{-1}
git checkout - #	Checkout to previous branch	git;linux
git commit -m TEXT --no-verify
git branch -d BRANCH	The -d option is an alias for --delete, which only deletes the branch if it has already been fully merged in its upstream branch. 
git branch -D BRANCH	Is an alias for --delete --force, which deletes the branch irrespective of its merged status.
git push origin --delete BRANCH	Deletes a remote branch
git remote set-url origin git://new.url.here		
git clean -n	Show what will be deleted
git clean -f	Remove untracked files
git clean -f -d	Remove directories
git clean -f -X	Remove ignored files
git clean -f -x	remove ignored and non-ignored files
git pull	
git config --get remote.origin.url	If referential integrity has been broken
git init --bare fooproject.git	creates a new directory called fooproject.git that contains all of the git objects.
git tag	
git tag -a <version>	
git push origin <tag_name>	
git push --tags	
git fetch --prune	deleting the refs to the branches that dont exist on the remote
git log --oneline	
git rebase -i HEAD~3	Interactive mode. Commit to replay onto. Pops up an editor with the rebase script.
git rebase --continue	
git commit --amend	
git log --oneline --all --decorate	
git rebase master	
git checkout branch
git rebase master
git checkout master
git merge branch	This will result in a fast farword merge.
git checkout -b <branch>	Creates a new branch and moves to it.
git checkout .	resets all uncommitted code
git stash	Stashing is like saving a temporary local commit to your branch. It is not possible to push a stash to a remote repository, so a stash is just for your own personal use.
git stash list	List stashes
git stash apply	Reapply the stashed content
git stash apply stash@{1}	You can also apply a specific stash (if you have stashed more than once) by running
git stash clear	remove all stashes
git drop stash@{1}	You can remove stashes individually
git stash pop	
git show <commit>	show the commit itself
git bisect start	
git bisect good <commit>
git bisect bad	
git bisect reset	
git add --patch [file] 	// Better yet, review changes and stage your hunks.
git diff --cached 	// Shows what is about to be committed. Review it carefully!
git log --oneline --reverse --first-parent <insert last tag version here>.. | cut -c 9-	
git push origin HEAD	
git push origin HEAD -f	Push local changes to origin
git reflog
git blame
```

## About git
- A merge preserves the branch history
- A rebase does not preserve the branch history
- A merge is useful for combining branches that are already public.
- A rebase is for combining private branches, never public.
- Merging and rebasing are about integrating new work, new commits that are on separate branches.
- Merging is called a three-way merge.
- Rebase is pretending that the work on the feature branch was directly done on the base branch. It takes all the commits from a particular feature branch and places them on to the base branch.
- 
- git stash, which makes a temporary, local save of your code
- git reset, which lets you tidy up your code before doing a commit
- git bisect, a function that allows you to hunt out bad commits
- git squash, which allows you to combine your commits
- git rebase, which allows for applying changes from one branch onto another

code must be staged to be stashed
