import os
import subprocess
from uuid import uuid4

os.chdir(os.path.dirname(os.path.abspath(__file__)))

git = 'C:/ArkData/misc/git.exe'

subprocess.run(args=(git, 'add', '--all'))
subprocess.run(args=(git, 'commit', '-m', str(uuid4())))
subprocess.run(args=(git, 'push'))
subprocess.run(args=(git, 'gc'))

commit_hash = subprocess.check_output(
    args=(git, 'rev-parse', 'HEAD')).decode().strip()
input('https://cdn.jsdelivr.net/gh/PetrichorA/page-648446cf@{}/'.format(commit_hash))
