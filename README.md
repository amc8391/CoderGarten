#Environment Setup

1. On **Windows**, run "python -m venv venv". On **Linux**, run "pyvenv venv"
2. On **Windows**, run "venv\Scripts\activate". On **Linux** run "source venv/bin/activate"
3. Run "pip install -r requirements.txt"
4. Run "python run.py"

If you add ANY dependencies, make sure to run "pip freeze > requirements.txt" and then push the new requirements file!


#SCSS/Sass Setup - Refer to [this](https://www.youtube.com/watch?v=sCbXTrsl7NU&list=PL6gx4Cwl9DGBxQO2r_kmxn-0UqL_Rkj0t&index=1)
1. Use JetBrains IDE (e.g. WebStorm or PyCharm; students get them for free) for writing and compiling SCSS, otherwise our files will lose sync on GitHub
2. Make sure RubyGems is installed
3. Installing SCSS/Sass: on **Windows**, run "gem install sass". On **Linux**, run "sudo gem install sass"
4. Tricky part (adding SCSS file watcher so it watches and compiles SCSS files to ".css": 
  - open the IDE 
  - go to Settings 
  - search for File Watchers
  - click the "+" sign on the right and choose "SCSS" 
  - down in Watcher Settings --> Program
  - navigate to "scss.bat" file (e.g. "C:\Ruby22-x64\bin\scss.bat")
  - click Ok
5. Now you should only **work on your SCSS files**, **but** in the \<head> tags of your HTML files, only **refer to the .css files**
