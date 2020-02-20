(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{221:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),a("h2",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts","aria-hidden":"true"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),a("ul",[a("li",[t._v("ssh")])]),t._v(" "),a("h2",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),a("h3",{attrs:{id:"git-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-config","aria-hidden":"true"}},[t._v("#")]),t._v(" git config")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global color.ui auto\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alxetd@gmail.com"')]),t._v("\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Eduard Trandafir"')]),t._v("\t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"git-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-reset","aria-hidden":"true"}},[t._v("#")]),t._v(" git reset")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD~1\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# erases your last commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft HEAD~1\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This will undo the most recent commit.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft HEAD~2\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# reset back more than one commit by changing the number after ~")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD^\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Since we dont specify "--hard", files stay in working directory')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard origin/master\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout - "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\tCheckout to previous branch\tgit;linux")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m TEXT --no-verify\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("repo_url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth DEPTH --single-branch --branch BRANCH REPO_URL\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d BRANCH\tThe -d option is an "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" --delete, "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" only deletes the branch "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" it has already been fully merged "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" its upstream branch. \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D BRANCH\tIs an "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" --delete --force, "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" deletes the branch irrespective of its merged status.\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete BRANCH\tDeletes a remote branch\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin git://new.url.here\t\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clean -n\tShow what will be deleted\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clean -f\tRemove untracked files\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clean -f -d\tRemove directories\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clean -f -X\tRemove ignored files\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clean -f -x\tremove ignored and non-ignored files\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --get remote.origin.url\tIf referential integrity has been broken\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show origin\tIf referential integrity is intact\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin git@bitbucket.org:alxetd_dev/alxetd.git\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init --bare fooproject.git\tcreates a new directory called fooproject.git that contains all of the "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" objects.\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --tags\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" origin drupal\t \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin path/to/your/central/git/repo\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream path/to/your/central/git/repo\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\tShows origin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch --prune\tdeleting the refs to the branches that dont exist on the remote\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i HEAD~3\tInteractive mode. Commit to replay onto. Pops up an editor with the rebase script.\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --continue\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\t\n\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline --all --decorate\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase master\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout branch\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge branch\tThis will result "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a fast farword merge.\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\tCreates a new branch and moves to it.\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\tresets all uncommitted code\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\tStashing is like saving a temporary "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" commit to your branch. It is not possible to push a stash to a remote repository, so a stash is just "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" your own personal use.\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list\tList stashes\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply\tReapply the stashed content\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\tYou can also apply a specific stash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("if you have stashed "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" than once"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" by running\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v("\tremove all stashes\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" drop stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\tYou can remove stashes individually\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\tshow the commit itself\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" bisect start\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" bisect good "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" bisect bad\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" bisect reset\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --patch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \t// Better yet, review changes and stage your hunks.\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --cached \t// Shows what is about to be committed. Review it carefully"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline --reverse --first-parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("insert last tag version here"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cut")]),t._v(" -c "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("-\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin HEAD\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin HEAD -f\tPush "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" changes to origin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" blame\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br")])]),a("h2",{attrs:{id:"about-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-git","aria-hidden":"true"}},[t._v("#")]),t._v(" About git")]),t._v(" "),a("ul",[a("li",[t._v("A merge preserves the branch history")]),t._v(" "),a("li",[t._v("A rebase does not preserve the branch history")]),t._v(" "),a("li",[t._v("A merge is useful for combining branches that are already public.")]),t._v(" "),a("li",[t._v("A rebase is for combining private branches, never public.")]),t._v(" "),a("li",[t._v("Merging and rebasing are about integrating new work, new commits that are on separate branches.")]),t._v(" "),a("li",[t._v("Merging is called a three-way merge.")]),t._v(" "),a("li",[t._v("Rebase is pretending that the work on the feature branch was directly done on the base branch. It takes all the commits from a particular feature branch and places them on to the base branch.")]),t._v(" "),a("li"),t._v(" "),a("li",[t._v("git stash, which makes a temporary, local save of your code")]),t._v(" "),a("li",[t._v("git reset, which lets you tidy up your code before doing a commit")]),t._v(" "),a("li",[t._v("git bisect, a function that allows you to hunt out bad commits")]),t._v(" "),a("li",[t._v("git squash, which allows you to combine your commits")]),t._v(" "),a("li",[t._v("git rebase, which allows for applying changes from one branch onto another")])]),t._v(" "),a("p",[t._v("code must be staged to be stashed")])])}),[],!1,null,null,null);s.default=e.exports}}]);