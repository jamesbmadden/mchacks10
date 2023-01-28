import os

dir = os.getcwd()

os.chdir('web')
os.system('npm run build')
os.chdir('../backend')
os.system('python3 app.py')