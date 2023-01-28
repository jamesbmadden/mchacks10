import os

dir = os.getcwd()

os.chdir('web')
os.system('npm run build')
os.chdir(dir)
os.system('python3 main.py')