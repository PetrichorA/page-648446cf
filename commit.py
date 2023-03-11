import os
import subprocess
from uuid import uuid4

os.chdir(os.path.dirname(os.path.abspath(__file__)))

subprocess.run(args=('git', 'add', '--all'))
subprocess.run(args=('git', 'commit', '-m', str(uuid4())))
subprocess.run(args=('git', 'push'))
subprocess.run(args=('git', 'gc'))
