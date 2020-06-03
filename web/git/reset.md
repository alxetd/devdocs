# Reset

## Commands

### git reset
```bash
git reset --hard HEAD	
git reset --hard HEAD~1	# erases your last commit
git reset --soft HEAD~1	# This will undo the most recent commit.
git reset --soft HEAD~2	# reset back more than one commit by changing the number after ~
git reset HEAD^	# Since we dont specify "--hard", files stay in working directory
git reset --hard origin/master
```
