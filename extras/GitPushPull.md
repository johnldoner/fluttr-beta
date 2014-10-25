
##Initial steps (before anything else)
1. CD into directory to get working Directory
2. initialize git like so `git init`. Do it only once. Ex.g.,
```
cd /Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/site-packages/fluttr

Git init
git remote add origin https://github.com/johnldoner/fluttr.git

```

##How to push
1. Choose appropriate files
2. Committ files to the 'head' 
3. Push that shit

```
git add *
git commit -m "moved to crowdfluttr.firebase"
git push -f origin master
 ```


##How to pull, i.e. sync your local repo with github:
(right way to do it)
```
git fetch
git merge FETCH_HEAD
```

***IN THE CASE OF A VIM ERROR***
- press enter
- press i
- enter commit message (OPTIONAL)

- press `esc`

- type `:wq` and press enter


***IN THE CASE OF error: 'merge' is not possible because you have unmerged files.***






(force that shit)
```
git fetch --all 
git reset --hard origin/master
git pull
```

##When local files would be over written
1) use git stash save
2) follow instructions on how to pull
#error: Your local changes to the following files would be overwritten by merge:

git stash save --keep-index #http://stackoverflow.com/questions/14318234/ignoring-your-local-changes-to-the-following-files-would-be-overwritten-by-merg




##Resources:
How to Configure: http://lifehacker.com/5983680/how-the-heck-do-i-use-github
Very Basic Gits: http://rogerdudler.github.io/git-guide/