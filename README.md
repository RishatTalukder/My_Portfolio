# My_Portfolio

This is my first Attemp to make a portfolio website. I've never Done something like this and I'm Hoping to make a good design using `Tailwind` or `BootStrap`. For _BackEnd_ I'll use <code><bold>Djnago</bold></code>.

**so lets go!!!**

# Backend Installation

We can divid this into two parts:

1. Bootstrap/Tailwind(FrontEnd)
2. Django(BackEnd)

We will not start from design but from the BackEnd. So lets start with Django. Because as i've learned that

> When you know what you are working with you will know how to design that.

SO, Django Backend is the feature of the project and we will start with that.

## Django Installation

So, to work with django and python we need to install python first. So, lets install python first:

- [Python](https://www.python.org/downloads/) (go to this link and download the latest version of python)

- I'm using `python 3.11.5`

After installing python we need to make a `virtual environment` for our project, so lets do that.

> A `virtual environment` is a tool that helps to keep dependencies required by different projects separate by creating isolated python virtual environments for them. This is one of the most important tools that most of the Python developers use.

So, open Your terminal and type:

- <code>python -m venv <bold>environment_name</bold></code>(replace `environment_name` with your environment name)

- I named my environment `py_env`.

Now, You'll see a folder was created automatically with the name you gave your environment. There are THousands of files inside that folder. You Don't need to worry about that. 

Now, we need to `Activate` our environment. So, type:

- `environment_name\Scripts\activate` (replace `environment_name` with your environment name)

For exapmle: `py_env\Scripts\activate`

Now everything you install with `pip` will be installed in this environment and not in your global environment.

Now, we need to install `Django` in our environment. So, type:

- `pip install django`

Django will be installed in your environment. Im using `Django 4.2.5`.

You can check your django version by typing, `python -m django --version`.

Now, our environment is setup and we can start our project.


# Djnago Project Setup

Step 1: Make a directory for your project. I named my directory `My_Portfolio` and cut the `enviroment` folder and paste it in `My_Portfolio` directory.

Step 2: Open the directory in your terminal and type:

- `django-admin startproject <project_name> .` (replace `project_name` with your project name)

for example: `django-admin startproject portfolio .`

> `django-admin` is Django’s command-line utility for administrative tasks.

> Note: The `.` at the end of the command is important. It tells the startproject command to install Django in your current directory.

After the command is executed you will see a folder named after the project name you gave. In my case it is `portfolio`.

